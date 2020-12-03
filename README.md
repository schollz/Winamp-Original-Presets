<blockquote>
<h1>Winamp-Original-Presets</h1>
Winamp's original equalizer presets.<br/>
Downloadable and importable multiple '.EQF'-files - each has a single preset, <br/>
Original 'Winamp.q1', <br/>
the actual raw Hz information (organized in a JSON text-format) as parsed by npm's 'winamp-eqf' <sup>(<a href="https://www.npmjs.com/package/winamp-eqf">1</a> <a href="https://developer.aliyun.com/mirror/npm/package/winamp-eqf">2</a>)</sup>, <br/>
(I've took the functionality from the lib and made into a 'cli' (client-program) that can handle drag&amp;drop of multiple '.EQF' files for parsing and writing thir '.JSON'-file representation:<br/>
<a href="https://github.com/eladkarako/Winamp-Original-Presets/tree/master/resources/eqf_parser/">https://github.com/eladkarako/Winamp-Original-Presets/tree/master/resources/eqf_parser/</a>).<br/>
and a screenshot of the equalizer with each preset.<br/>
I have no idea what is the license of exported '.EQF'-files or Winamp.q1, <br/>
so use your own judgment regarding redistribution.<br/>
</blockquote>
<hr/>
Download the whole archive with:<br/>
<a href="https://github.com/eladkarako/Winamp-Original-Presets/archive/master.zip">https://github.com/eladkarako/Winamp-Original-Presets/archive/master.zip</a>.<br/>
Ordered as coded in the original <code>Winamp.q1</code> binary file (and not necessarily in A-Z order).<br/>
<hr/>
<h2>Original <code>Winamp.q1</code></h2>
Download: <a href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/Winamp.q1">https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/Winamp.q1</a>.<br/>
<hr/>
<h2>Note regarding Hz values names.</h2>
The binary files only mention the order of the Hz-values from left (first) to right (last), <br/>
I've just noticed (in the middle of working on this repository...) that on some computers or versions (newer skins) of Winamp, Winamp will show you those equalizer values on the program-skin:<br/>
<pre>
60
170
310
600
1K
6K
12K
14K
16K
</pre>
but and in older versions (original skin) Winamp will show you:<br/>
<pre>
70
180
320
600
1K
3K
6K
12K
14K
16K
</pre>
As I was saying, the values are kept in the binary file in the order from left to right, <br/>
I will use the values with names from the newer skins, <br/>
but I'm using the classic skin for screenshots which might confuse a bit, <br/>
Anyway, I'm visually will be using the <code>hz70,hz180,hz320</code> in the JSON representations, <br/>
since it is only for visualization, you can still understand the values using the information above, if your computer display it differently, so it is not really a big deal.. isn't?<br/>
<hr/>
<h2>All Presets In <code>Winamp.q1</code> (<code>Winamp.q1.json</code>)</h2>
Download: <a href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/Winamp.q1.json">https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/Winamp.q1.json</a>.<br/>
Presets are ordered in the JSON-text in the same ordered as coded in the original <code>Winamp.q1</code> binary file (and not necessarily in A-Z order).<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Classical"
     ,"hz70"    : 33
     ,"hz180"   : 33
     ,"hz320"   : 33
     ,"hz600"   : 33
     ,"hz1000"  : 33
     ,"hz3000"  : 33
     ,"hz6000"  : 20
     ,"hz12000" : 20
     ,"hz14000" : 20
     ,"hz16000" : 16
     ,"preamp"  : 33
    }
   ,{
      "name"    : "Club"
     ,"hz70"    : 33
     ,"hz180"   : 33
     ,"hz320"   : 38
     ,"hz600"   : 42
     ,"hz1000"  : 42
     ,"hz3000"  : 42
     ,"hz6000"  : 38
     ,"hz12000" : 33
     ,"hz14000" : 33
     ,"hz16000" : 33
     ,"preamp"  : 33
    }
   ,{
      "name"    : "Dance"
     ,"hz70"    : 48
     ,"hz180"   : 44
     ,"hz320"   : 36
     ,"hz600"   : 32
     ,"hz1000"  : 32
     ,"hz3000"  : 22
     ,"hz6000"  : 20
     ,"hz12000" : 20
     ,"hz14000" : 32
     ,"hz16000" : 32
     ,"preamp"  : 33
    }
   ,{
      "name"    : "Flat"
     ,"hz70"    : 33
     ,"hz180"   : 33
     ,"hz320"   : 33
     ,"hz600"   : 33
     ,"hz1000"  : 33
     ,"hz3000"  : 33
     ,"hz6000"  : 33
     ,"hz12000" : 33
     ,"hz14000" : 33
     ,"hz16000" : 33
     ,"preamp"  : 33
    }
   ,{
      "name"    : "Laptop speakers/headphones"
     ,"hz70"    : 40
     ,"hz180"   : 50
     ,"hz320"   : 41
     ,"hz600"   : 26
     ,"hz1000"  : 28
     ,"hz3000"  : 35
     ,"hz6000"  : 40
     ,"hz12000" : 48
     ,"hz14000" : 53
     ,"hz16000" : 56
     ,"preamp"  : 33
    }
   ,{
      "name"    : "Large hall"
     ,"hz70"    : 49
     ,"hz180"   : 49
     ,"hz320"   : 42
     ,"hz600"   : 42
     ,"hz1000"  : 33
     ,"hz3000"  : 24
     ,"hz6000"  : 24
     ,"hz12000" : 24
     ,"hz14000" : 33
     ,"hz16000" : 33
     ,"preamp"  : 33
    }
   ,{
      "name"    : "Party"
     ,"hz70"    : 44
     ,"hz180"   : 44
     ,"hz320"   : 33
     ,"hz600"   : 33
     ,"hz1000"  : 33
     ,"hz3000"  : 33
     ,"hz6000"  : 33
     ,"hz12000" : 33
     ,"hz14000" : 44
     ,"hz16000" : 44
     ,"preamp"  : 33
    }
   ,{
      "name"    : "Pop"
     ,"hz70"    : 29
     ,"hz180"   : 40
     ,"hz320"   : 44
     ,"hz600"   : 45
     ,"hz1000"  : 41
     ,"hz3000"  : 30
     ,"hz6000"  : 28
     ,"hz12000" : 28
     ,"hz14000" : 29
     ,"hz16000" : 29
     ,"preamp"  : 33
    }
   ,{
      "name"    : "Reggae"
     ,"hz70"    : 33
     ,"hz180"   : 33
     ,"hz320"   : 31
     ,"hz600"   : 22
     ,"hz1000"  : 33
     ,"hz3000"  : 43
     ,"hz6000"  : 43
     ,"hz12000" : 33
     ,"hz14000" : 33
     ,"hz16000" : 33
     ,"preamp"  : 33
    }
   ,{
      "name"    : "Rock"
     ,"hz70"    : 45
     ,"hz180"   : 40
     ,"hz320"   : 23
     ,"hz600"   : 19
     ,"hz1000"  : 26
     ,"hz3000"  : 39
     ,"hz6000"  : 47
     ,"hz12000" : 50
     ,"hz14000" : 50
     ,"hz16000" : 50
     ,"preamp"  : 33
    }
   ,{
      "name"    : "Soft"
     ,"hz70"    : 40
     ,"hz180"   : 35
     ,"hz320"   : 30
     ,"hz600"   : 28
     ,"hz1000"  : 30
     ,"hz3000"  : 39
     ,"hz6000"  : 46
     ,"hz12000" : 48
     ,"hz14000" : 50
     ,"hz16000" : 52
     ,"preamp"  : 33
    }
   ,{
      "name"    : "Ska"
     ,"hz70"    : 28
     ,"hz180"   : 24
     ,"hz320"   : 25
     ,"hz600"   : 31
     ,"hz1000"  : 39
     ,"hz3000"  : 42
     ,"hz6000"  : 47
     ,"hz12000" : 48
     ,"hz14000" : 50
     ,"hz16000" : 48
     ,"preamp"  : 33
    }
   ,{
      "name"    : "Full Bass"
     ,"hz70"    : 48
     ,"hz180"   : 48
     ,"hz320"   : 48
     ,"hz600"   : 42
     ,"hz1000"  : 35
     ,"hz3000"  : 25
     ,"hz6000"  : 18
     ,"hz12000" : 15
     ,"hz14000" : 14
     ,"hz16000" : 14
     ,"preamp"  : 33
    }
   ,{
      "name"    : "Soft Rock"
     ,"hz70"    : 39
     ,"hz180"   : 39
     ,"hz320"   : 36
     ,"hz600"   : 31
     ,"hz1000"  : 25
     ,"hz3000"  : 23
     ,"hz6000"  : 26
     ,"hz12000" : 31
     ,"hz14000" : 37
     ,"hz16000" : 47
     ,"preamp"  : 33
    }
   ,{
      "name"    : "Full Treble"
     ,"hz70"    : 16
     ,"hz180"   : 16
     ,"hz320"   : 16
     ,"hz600"   : 25
     ,"hz1000"  : 37
     ,"hz3000"  : 50
     ,"hz6000"  : 58
     ,"hz12000" : 58
     ,"hz14000" : 58
     ,"hz16000" : 60
     ,"preamp"  : 33
    }
   ,{
      "name"    : "Full Bass & Treble"
     ,"hz70"    : 44
     ,"hz180"   : 42
     ,"hz320"   : 33
     ,"hz600"   : 20
     ,"hz1000"  : 24
     ,"hz3000"  : 35
     ,"hz6000"  : 46
     ,"hz12000" : 50
     ,"hz14000" : 52
     ,"hz16000" : 52
     ,"preamp"  : 33
    }
   ,{
      "name"    : "Live"
     ,"hz70"    : 24
     ,"hz180"   : 33
     ,"hz320"   : 39
     ,"hz600"   : 41
     ,"hz1000"  : 42
     ,"hz3000"  : 42
     ,"hz6000"  : 39
     ,"hz12000" : 37
     ,"hz14000" : 37
     ,"hz16000" : 36
     ,"preamp"  : 33
    }
   ,{
      "name"    : "Techno"
     ,"hz70"    : 45
     ,"hz180"   : 42
     ,"hz320"   : 33
     ,"hz600"   : 23
     ,"hz1000"  : 24
     ,"hz3000"  : 33
     ,"hz6000"  : 45
     ,"hz12000" : 48
     ,"hz14000" : 48
     ,"hz16000" : 47
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>
<h2>eqf_parser</h2>
convert back and forth from '.Q1' or '.EQF' to/from '.JSON'.<br/>
While parsing 'Winamp.q1' will get you all the presets with their name, <br/>
when you export a single preset from Winamp, it uses the name "Entry1" for some reason, instead of the real name.<br/>
I've used <a href="https://github.com/eladkarako/Winamp-Original-Presets/tree/master/resources/eqf_parser/">https://github.com/eladkarako/Winamp-Original-Presets/tree/master/resources/eqf_parser/</a>) to first parsed each '.EQF' to '.JSON', then fixed the name and compiled it back to '.EQF'.<br/>
<code>eqf_parser</code> is really convenient, all I do is drag&amp;drop either '.EQF' or '.Q1' to parse them to '.JSON', <br/>
and '.JSON' to compile them to '.EQF' (you can rename the file to 'Winamp.q1' if you wish to override all of Winamp's default presets with your own), <br/>
Windows users can use the <code>index.cmd</code>, <br/>
all users can use <code>node index.js "file1" "file2" "file3" ...</code>, <br/>
you can mix types as you wish, the output file will be added a suffix of the extension over the existing extension, <br/>
it helps you to track your actions and prevents overwriting files, <br/>
you can later rename your files, leaving just the end suffix - if you wish so.<br/>
<hr/>
<h2>Preset, .EQF, Hz, Screenshot</h2>
Ordered as coded in the original <code>Winamp.q1</code> binary file (and not necessarily in A-Z order).<br/>
<blockquote>
<del>Note: .EQF always has a name of "Entry1", that is the way Winamp exports it.<br/>If you import it, manually change the name to make sense to you, <br/>you can also use 'winamp-eqf' to parse a .EQF, fix the JSON-object entry name, and then re-compile it and write it back to a new .EQF-file again.<br/>But it is not really that of an issue..</del><br/>
<strong>edit: I've fixed it manually, all single '.EQF' presets have their correct name.</strong>
</blockquote>

<h3>001 - Classical</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/001_classical.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/001_classical.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/001_classical.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/001_classical.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/001_classical.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Classical"
     ,"hz70"    : 33
     ,"hz180"   : 33
     ,"hz320"   : 33
     ,"hz600"   : 33
     ,"hz1000"  : 33
     ,"hz3000"  : 33
     ,"hz6000"  : 20
     ,"hz12000" : 20
     ,"hz14000" : 20
     ,"hz16000" : 16
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h3>002 - Club</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/002_club.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/002_club.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/002_club.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/002_club.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/002_club.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Club"
     ,"hz70"    : 33
     ,"hz180"   : 33
     ,"hz320"   : 38
     ,"hz600"   : 42
     ,"hz1000"  : 42
     ,"hz3000"  : 42
     ,"hz6000"  : 38
     ,"hz12000" : 33
     ,"hz14000" : 33
     ,"hz16000" : 33
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h3>003 - Dance</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/003_dance.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/003_dance.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/003_dance.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/003_dance.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/003_dance.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Dance"
     ,"hz70"    : 48
     ,"hz180"   : 44
     ,"hz320"   : 36
     ,"hz600"   : 32
     ,"hz1000"  : 32
     ,"hz3000"  : 22
     ,"hz6000"  : 20
     ,"hz12000" : 20
     ,"hz14000" : 32
     ,"hz16000" : 32
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h3>004 - Flat</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/004_flat.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/004_flat.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/004_flat.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/004_flat.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/004_flat.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Flat"
     ,"hz70"    : 33
     ,"hz180"   : 33
     ,"hz320"   : 33
     ,"hz600"   : 33
     ,"hz1000"  : 33
     ,"hz3000"  : 33
     ,"hz6000"  : 33
     ,"hz12000" : 33
     ,"hz14000" : 33
     ,"hz16000" : 33
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h3>005 - Flat</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/005_laptop_speakers_or_headphones.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/005_laptop_speakers_or_headphones.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/005_laptop_speakers_or_headphones.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/005_laptop_speakers_or_headphones.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/005_laptop_speakers_or_headphones.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Laptop speakers/headphones"
     ,"hz70"    : 40
     ,"hz180"   : 50
     ,"hz320"   : 41
     ,"hz600"   : 26
     ,"hz1000"  : 28
     ,"hz3000"  : 35
     ,"hz6000"  : 40
     ,"hz12000" : 48
     ,"hz14000" : 53
     ,"hz16000" : 56
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h3>006 - Large hall</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/006_large_hall.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/006_large_hall.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/006_large_hall.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/006_large_hall.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/006_large_hall.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Large hall"
     ,"hz70"    : 49
     ,"hz180"   : 49
     ,"hz320"   : 42
     ,"hz600"   : 42
     ,"hz1000"  : 33
     ,"hz3000"  : 24
     ,"hz6000"  : 24
     ,"hz12000" : 24
     ,"hz14000" : 33
     ,"hz16000" : 33
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h3>007 - Party</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/007_party.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/007_party.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/007_party.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/007_party.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/007_party.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Party"
     ,"hz70"    : 44
     ,"hz180"   : 44
     ,"hz320"   : 33
     ,"hz600"   : 33
     ,"hz1000"  : 33
     ,"hz3000"  : 33
     ,"hz6000"  : 33
     ,"hz12000" : 33
     ,"hz14000" : 44
     ,"hz16000" : 44
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h3>008 - Pop</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/008_pop.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/008_pop.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/008_pop.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/008_pop.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/008_pop.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Pop"
     ,"hz70"    : 29
     ,"hz180"   : 40
     ,"hz320"   : 44
     ,"hz600"   : 45
     ,"hz1000"  : 41
     ,"hz3000"  : 30
     ,"hz6000"  : 28
     ,"hz12000" : 28
     ,"hz14000" : 29
     ,"hz16000" : 29
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h3>009 - Reggae</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/009_reggae.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/009_reggae.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/009_reggae.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/009_reggae.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/009_reggae.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Reggae"
     ,"hz70"    : 33
     ,"hz180"   : 33
     ,"hz320"   : 31
     ,"hz600"   : 22
     ,"hz1000"  : 33
     ,"hz3000"  : 43
     ,"hz6000"  : 43
     ,"hz12000" : 33
     ,"hz14000" : 33
     ,"hz16000" : 33
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h3>010 - Rock</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/010_rock.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/010_rock.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/010_rock.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/010_rock.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/010_rock.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Rock"
     ,"hz70"    : 45
     ,"hz180"   : 40
     ,"hz320"   : 23
     ,"hz600"   : 19
     ,"hz1000"  : 26
     ,"hz3000"  : 39
     ,"hz6000"  : 47
     ,"hz12000" : 50
     ,"hz14000" : 50
     ,"hz16000" : 50
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h3>011 - Soft</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/011_soft.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/011_soft.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/011_soft.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/011_soft.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/011_soft.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Soft"
     ,"hz70"    : 40
     ,"hz180"   : 35
     ,"hz320"   : 30
     ,"hz600"   : 28
     ,"hz1000"  : 30
     ,"hz3000"  : 39
     ,"hz6000"  : 46
     ,"hz12000" : 48
     ,"hz14000" : 50
     ,"hz16000" : 52
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h3>012 - Ska</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/012_ska.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/012_ska.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/012_ska.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/012_ska.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/012_ska.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Ska"
     ,"hz70"    : 28
     ,"hz180"   : 24
     ,"hz320"   : 25
     ,"hz600"   : 31
     ,"hz1000"  : 39
     ,"hz3000"  : 42
     ,"hz6000"  : 47
     ,"hz12000" : 48
     ,"hz14000" : 50
     ,"hz16000" : 48
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h3>013 - Full Bass</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/013_full_bass.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/013_full_bass.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/013_full_bass.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/013_full_bass.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/013_full_bass.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Full Bass"
     ,"hz70"    : 48
     ,"hz180"   : 48
     ,"hz320"   : 48
     ,"hz600"   : 42
     ,"hz1000"  : 35
     ,"hz3000"  : 25
     ,"hz6000"  : 18
     ,"hz12000" : 15
     ,"hz14000" : 14
     ,"hz16000" : 14
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h3>014 - Soft Rock</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/014_soft_rock.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/014_soft_rock.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/014_soft_rock.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/014_soft_rock.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/014_soft_rock.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Soft Rock"
     ,"hz70"    : 39
     ,"hz180"   : 39
     ,"hz320"   : 36
     ,"hz600"   : 31
     ,"hz1000"  : 25
     ,"hz3000"  : 23
     ,"hz6000"  : 26
     ,"hz12000" : 31
     ,"hz14000" : 37
     ,"hz16000" : 47
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h3>015 - Full Treble</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/015_full_treble.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/015_full_treble.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/015_full_treble.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/015_full_treble.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/015_full_treble.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Full Treble"
     ,"hz70"    : 16
     ,"hz180"   : 16
     ,"hz320"   : 16
     ,"hz600"   : 25
     ,"hz1000"  : 37
     ,"hz3000"  : 50
     ,"hz6000"  : 58
     ,"hz12000" : 58
     ,"hz14000" : 58
     ,"hz16000" : 60
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h3>016 - Full Bass &amp; Treble</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/016_full_bass_and_treble.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/016_full_bass_and_treble.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/016_full_bass_and_treble.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/016_full_bass_and_treble.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/016_full_bass_and_treble.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Full Bass & Treble"
     ,"hz70"    : 44
     ,"hz180"   : 42
     ,"hz320"   : 33
     ,"hz600"   : 20
     ,"hz1000"  : 24
     ,"hz3000"  : 35
     ,"hz6000"  : 46
     ,"hz12000" : 50
     ,"hz14000" : 52
     ,"hz16000" : 52
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h3>017 - Live</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/017_live.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/017_live.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/017_live.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/017_live.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/017_live.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Live"
     ,"hz70"    : 24
     ,"hz180"   : 33
     ,"hz320"   : 39
     ,"hz600"   : 41
     ,"hz1000"  : 42
     ,"hz3000"  : 42
     ,"hz6000"  : 39
     ,"hz12000" : 37
     ,"hz14000" : 37
     ,"hz16000" : 36
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h3>018 - Techno</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/018_techno.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/018_techno.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/018_techno.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/018_techno.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/018_techno.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Techno"
     ,"hz70"    : 45
     ,"hz180"   : 42
     ,"hz320"   : 33
     ,"hz600"   : 23
     ,"hz1000"  : 24
     ,"hz3000"  : 33
     ,"hz6000"  : 45
     ,"hz12000" : 48
     ,"hz14000" : 48
     ,"hz16000" : 47
     ,"preamp"  : 33
    }
  ]
}
```

<hr/>

<h2>Just two "extra"-presets, for the sake of preamp value-explaining<br/> <sup>(it also rounds up the total-number to a nice round 20...)</sup><br/>Using "Flat"-preset here - but naturally you may combined it into any preset...</h2>

<h3>019 - Preamp +12dB (Flat)</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/019_preamp_plus_12db.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/019_preamp_plus_12db.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/019_preamp_plus_12db.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/019_preamp_plus_12db.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/019_preamp_plus_12db.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Preamp +12dB (Flat)"
     ,"hz70"    : 33
     ,"hz180"   : 33
     ,"hz320"   : 33
     ,"hz600"   : 33
     ,"hz1000"  : 33
     ,"hz3000"  : 33
     ,"hz6000"  : 33
     ,"hz12000" : 33
     ,"hz14000" : 33
     ,"hz16000" : 33
     ,"preamp"  : 64
    }
  ]
}
```

<hr/>

<h3>020 - Preamp -12dB (Flat)</h3>
<img src="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/020_preamp_minus_12db.png" /><br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/020_preamp_minus_12db.eqf"  >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/020_preamp_minus_12db.eqf</a>.<br/>
<a  href="https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/020_preamp_minus_12db.json" >https://raw.githubusercontent.com/eladkarako/Winamp-Original-Presets/master/resources/020_preamp_minus_12db.json</a>.<br/>

```json
{
  "type"        : "Winamp EQ library file v1.1"
 ,"presets"     : [
    {
      "name"    : "Preamp -12dB (Flat)"
     ,"hz70"    : 33
     ,"hz180"   : 33
     ,"hz320"   : 33
     ,"hz600"   : 33
     ,"hz1000"  : 33
     ,"hz3000"  : 33
     ,"hz6000"  : 33
     ,"hz12000" : 33
     ,"hz14000" : 33
     ,"hz16000" : 33
     ,"preamp"  : 1
    }
  ]
}

```

<hr/>

<h2>Note: regarding <strong>preamp</strong>.</h2>
preamp "zero-value" (non-modified) is <code>33</code>, <br/>
the maximum value of plus 12db (Decibel) is <code>64</code>, <br/>
the minimum value of minus 12db (Decibel) is <code>1</code>.<br/>
