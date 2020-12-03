"use strict";

const fs                = require("fs")
     ,path              = require("path")
     ,resolve           = function(s){
                            s = s.replace(/\"/g,"").replace(/\\+/g,"/");
                            s = path.resolve(s);
                            s = s.replace(/\\+/g,"/").replace(/\/\/+/g,"/");
                            return s;
                          }
     ,files_in          = process.argv
                                 .filter(function(s){return (true === /(\.eqf|\.q1|.json)$/i.test(s));})
                                 .map(function(s){return resolve(s);})
     ,files_out         = files_in.map(function(s){
                            var parts = path.parse(s);
                            return parts.dir + "/" + parts.name + parts.ext + (true === /(\.eqf|\.q1)$/i.test(parts.ext) ? ".json" : ".eqf");    //if input is .EQF or .Q1 then output will be .JSON, if input is .JSON then output will be .EQF (user can rename it to 'Winamp.q1' to override its own default-presets).
                          })
     ,parser            = {
                         //"preset_values": ["hz60","hz170","hz310","hz600","hz1000","hz3000","hz6000","hz12000","hz14000","hz16000","preamp"]    //some weird variation
                           "preset_values": ["hz70","hz180","hz320","hz600","hz1000","hz3000","hz6000","hz12000","hz14000","hz16000","preamp"]    //most skins (classic, modern, bento) show this.
                          ,"header"       : "Winamp EQ library file v1.1"
                          ,"parse"        : function(arrayBuffer){
                                              var data = {}
                                                 ,arr  = new Int8Array(arrayBuffer)
                                                 ,i    = 0
                                                 //,text_decoder = new (require("util").TextDecoder)("utf-8")
                                                 ;
                                              data.type = String.fromCharCode.apply(null, arr.slice(i, parser.header.length)); //Parse header
/*
                                              console.error(arr.length);
                                              console.error(arr);
                                              console.error(">"+text_decoder.decode(arr)+"<");
                                              data.type = text_decoder.decode(arr.slice(i, parser.header.length));
                                              console.error(">"+data.type+"<");
*/
                                              if (data.type !== parser.header){throw new Error("Invalid .eqf file.");}
                                              
                                              i += parser.header.length;
                                              
                                              i += 4; //Skip "<ctrl-z>!--"
                                              
                                              // Get the presets
                                              data.presets = [];
                                              while (i < arr.length) {
                                                var preset = {};
                                                // Get the name
                                                var nameStart = i;
                                                var nameEnd = nameStart + 257; // Str is fixed length
                                                // Str is null terminated
                                                while (arr[i] !== 0 && i <= nameEnd) {
                                                  i++;
                                                }
                                                preset.name = String.fromCharCode.apply(null, arr.slice(nameStart, i));
                                                i = nameEnd; // Skip over any unused bytes

                                                // Get the levels
                                                parser.preset_values.forEach(function(valueName) {
                                                  preset[valueName] = 64 - arr[i++]; // Adjust for inverse values
                                                });
                                                data.presets.push(preset);
                                              }
                                              return data;
                                            }
                          ,"compile"      : function(data) {
                                              var FILL_SIZE     = 4
                                                 ,PRESET_LENGTH = 257
                                                 ,buffer        = []
                                                 ;
                                              for (var i = 0; i < parser.header.length; i++) {
                                                buffer.push(parser.header.charCodeAt(i));
                                              }
                                              buffer.push(26); // <ctrl-z>
                                              var ending = "!--";
                                              for (var i = 0; i < ending.length; i++) {
                                                buffer.push(ending.charCodeAt(i));
                                              }
                                              if (!data.presets) {
                                                throw new Error("Eqf data is missing presets");
                                              }
                                              data.presets.forEach(function(preset) {
                                                var k = 0;
                                                for (; k < preset.name.length; k++) {
                                                  buffer.push(preset.name.charCodeAt(k));
                                                }
                                                for (; k < PRESET_LENGTH; k++) {
                                                  buffer.push(0);
                                                }

                                                parser.preset_values.forEach(function(valueName) {
                                                  buffer.push(64 - preset[valueName]); // Adjust for inverse values
                                                });
                                              });
                                              /*
                                              buffer = new Uint8Array(buffer).buffer; //a memory fix preventing corrupted data when preforming multiple file-reads, crop exactly the buffer. https://github.com/nodejs/node/issues/11132#issuecomment-277157700
                                              buffer = new Buffer(buffer);            //writing 'ArrayBuffer' (not 'Buffer') to file has old bug in NodeJS which writes an ASCII-text-file with the value of '.toString()' of the ArrayBuffer:  "[object ArrayBuffer]". you can also return a TypedArray (such as Uint8Array) which will work, but I prefer consistancy of Buffer writing.
                                              */
                                              return (new Uint8Array(buffer));          //writing binary files works better with TypedArray .
                                            }
                          }
     ;

files_in.forEach(function(s, index, array){
  var buffer, json_object, text;
  
  console.error("[INFO] input file [" + String(index+1) + "/" + String(array.length) + "]: " + s);
  
  if(true === /(\.eqf|\.q1)$/i.test(s)){
    console.error("[INFO] reading binary file...");
    buffer = fs.readFileSync(s, {"encoding":null,"flag":"r"});
    buffer = new Uint8Array(buffer).buffer; //a memory fix preventing corrupted data when preforming multiple file-reads, crop exactly the buffer. https://github.com/nodejs/node/issues/11132#issuecomment-277157700
    
    console.error("[INFO] parsing EQF/Q1 binary information into JSON-object...");
    json_object = parser.parse(buffer);
    
    console.error("[INFO] converting JSON-object into JSON-text...");
    text        = JSON.stringify(json_object, null, 2);
    text        = text.replace(/\r/gm, "")                                   //Linux EOL for sake of regex simplicity.
                      .replace(/,\n /g, "\n ,").replace(/ *(,( +))/g,"$2,")  //comma-first
                      .replace(/\n/gm, "\r\n") + "\r\n"                      //Windows EOL for sake of compatibility and readability in Windows.
                      ;

    console.error("[INFO] writing a UTF-8 JSON-text-file.");
    fs.writeFileSync(files_out[index], text, {flag:"w",encoding:"utf-8"}); //overwrite
  }
  else if(true === /\.json$/i.test(s)){
    console.error("[INFO] reading UTF-8 JSON-text-file...");
    text        = fs.readFileSync(s, {"encoding":"utf-8","flag":"r"}).replace(/^\uFEFF/gm, "").replace(/^\u00BB\u00BF/gm,"").replace(/[\r\n\t]/gm, "");  //remove UTF-8 byte-order (classic '\uFEFF' and rare '\uFEFF\u00BB\u00BF'), remove (clean-up) new-line-characters and tab-characters.
    console.log(text);
    
    console.error("[INFO] converting JSON-text into JSON-object...");
    json_object = JSON.parse(text);
    console.log(json_object);

    console.error("[INFO] compiling JSON-object into EQF/Q1 binary information...");
    buffer      = parser.compile(json_object);
    
    console.error("[INFO] writing binary-file...");
    fs.writeFileSync(files_out[index], buffer, {flag:"w",encoding:null}); //overwrite
  }

  console.error("[INFO] output file [" + String(index+1) + "/" + String(array.length) + "]: " + files_out[index]);
  console.error("=-=-=-=-=-=-=-=-=-=-=-=-=");
});
