
/*
  parsed = parsed.presets.shift(); //keep just the first (single) preset - best for parsing '.eqf'-file, but for '.q1' which contains multiple presets you better not use that.

  //a JSON-stringify alternative for simple one-layer JSON-object with comma-first and aligning of ':'  .
  text   = (function(){
             var max_length = Object.keys(parsed).reduce(function(carry, current, index){return Math.max(carry, current.length);},0)
                ,lines      = Object.keys(parsed)
                                    .map(function(key, index){
                                      var line = "\"" + key + "\"" + (new Array(max_length - key.length + 2)).join(" ") + ":" + " " + ("number" === typeof parsed[key] ? parsed[key] : "\""+parsed[key]+"\"");
                                      if(0 === index) line = " " + line;
                                      return line;
                                    })
                 ;
             return  "{" + "\r\n"
                   + lines.join("\r\n,") + "\r\n"
                   + "}" + "\r\n"
                   ;
           }());
*/