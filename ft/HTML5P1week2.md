# HTML5多媒体

## Lesson1 视频介绍

## Lesson2 流化多媒体内容

### 2.1 video元素

#### 2.1.1 简介

#### 2.1.2 HTML5之前，我们怎样在网页中嵌入视频呢？

答案是使用object和param元素。

这确实是两年前在网页中嵌入视频的唯一办法。此外，嵌入flash播放器使得在移动端（尤其是苹果设备）观看视频成为不可能。

#### 2.1.3 自从有了HTML5

新方法是:

	<video width="320" height="240" controls="controls">
		 <source src="movie.mp4" type="video/mp4" />
		 <source src="movie.ogg" type="video/ogg" />
			Your browser does not support the <video> element.
	</video>

注意：

- controls属性表明其会呈现带有播放/停止/音量/进度条部件的控制面板
- 浏览器通常会采用它认识的第一种格式（此处，浏览器先检测它是否支持mp4,如果不支持，则再检测其是否支持ogg).一些浏览器可能会采用其他的探索方法，并选择一种它喜欢的格式。
- video元素是一个DOM成员，所以可以应用CSS样式和DOM API
		
#### 2.1.4 现在浏览器对video元素的支持度
基本被所有浏览器支持。

受欢迎的流式网站如YouTube和Dailymotion也支持这个元素，都自动从flash播放器转换成HTML5版本。

#### 2.1.5 限制：你不能通过video元素嵌入YouTube或者Dailymotion video

 < video src="my youtube video URL">< /video>是无效的。

 注意：你不能直接嵌入大部分受欢迎的网站(例如YouTube)的视频。出于商业考虑，况且广告会自动添加到视频中，这些网站不允许在网页中常规嵌入它们的视频。

虽然这些大网站使用HTML5来渲染它们的视频，它们使用很复杂的技术来阻止你通过video元素来使用它们的视频。


通常地，在接近视频的地方会有一个叫做“embed"的按钮，它会通过一些HTML代码提示你来复制粘贴它们。


##### 使用YouTube的一个例子：

	<iframe width="560" height="315" src="https://www.youtube.com/embed/ZH1XOsv8Oyo" frameborder="0" allowfullscreen></iframe>

视频通过iframe而非video元素嵌入网页。


#### 2.1.6 编解码支持
近些年厂家们不得不着手解决的问题之一是：由于商业原因，浏览器之间的编解码支持是不同的。

为了检测编解码支持，最好的办法是访问  Video Format Support from Microsoft IE<https://web.archive.org/web/20150208033359/http://ie.microsoft.com/testdrive/graphics/videoformatsupport/default.html>***(打不开）***


### 2.2 audio元素

#### 2.2.1 简介
HTML5audio由几个层次构成：

- audio元素：用于在网页中嵌入音频。专用于流媒体音频。和video元素很类似。
- web Audio API：用于音乐播放器和给游戏添加音效。这个纯JavaScript API支持对声音样本、音乐合成和声波产生的支持。也提供一系列预定义的声音处理模块。

audio元素的这些属性、事件设置、JS API只是video元素的退化版本。我们只讲其区别和独特性。

#### 2.2.2 audio 元素的基础用法


	 <audio controls="controls">
			<source src="https://dl.dropboxusercontent.com/u/1631516/horse.ogg"
              type="audio/ogg" />
      		<source src="https://dl.dropboxusercontent.com/u/1631516/horse.mp3"
              type="audio/mp3" />
			Your browser does not support the audio element.

			Download the audio/video in
     	<a href=”https://dl.dropboxusercontent.com/u/1631516/horse.ogg”>OGG</a>
    	 or <a href=”https://dl.dropboxusercontent.com/u/1631516/horse.mp3”>MP3</a>
     format.
    </audio>
同video一样，有controls属性，然后文本用于在浏览器不支持audio元素时显示。几个source指向同一文件，浏览器将使用它支持的第一个文件。

### 2.3 video和audio元素的属性

属性名|描述
-----|-----
src|video的source
width/hieght|video的尺寸。如果没有指明，则会使用视频的默认长宽。如果你只指定了一个维度，浏览器会调整另一个维度来维持视频高宽比
controls|如果存在这个属性，则浏览器会呈现它自己的视频回放/音量控件
poster|这个属性让你可以指定一个图片，这个图片在视频正在下载的时候呈现，或者直到用户开始播放视频。如果没有指定这个属性，则视频的第一针图像将代替它。
autoplay|这个属性告诉浏览器一旦页面加载好，就开始自动播放视频
preload|当不使用autoplay属性的时候可以使用preload。它告诉浏览器在用户播放视频之前应该做什么。autoplay和preload是互斥的，如果同时存在，浏览器将忽略preload。其可能的属性值有:a.none——什么也不干，这样保护了带宽，在用户播放视频前不会加载视频；b.metadata——下载元数据，例如视频长度，或其格式；c. auto——浏览器自己决定，这将取决于工具和网络环境:wifi,3G，数据漫游
loop|布尔属性，指明是否循环播放

#### 如果你的目标是移动应用程序或者你在一个页面中有多个视频，那么请注意：

如果你的网站使用移动设备打开，那么不要使用autoplay属性，因为它会耗费你的待看即使用户不想看该视频。使用移动设备时，我们推荐使用preload=none，因为其默认值是auto。

#### 关于poster属性
当不设置poster时，默认行为是以视频的第一针非空白页面作为没有播放时候的画面。

这是期望的行为，但IE并不这样，它会忽略poster属性直接展示第一帧图像。

##### autoplay属性的一般用途
不要滥用autoplay属性。我们之前说在移动设备上不要用它，但是即使在台式机上使用它也不是什么好主意。

### 2.4 autio元素的属性
autio元素可用的属性是video元素的子集。除了poster属性仅适用于video外，其他都可以用于autio。


### 2.5 使用CSS3为媒体播放器设置样式
包括transitions,animations和transforms在内的CSS3属性都可以应用于video和audio。

#### 2.5.1 一个应用了样式的音频播放器

	<!DOCTYPE html>
	<html>
	<head>
	    <title>html5Study</title>
	    <meta charset="utf8">
	    <style type="text/css">
	        #figaudio1{
	           width:  420px;
	           text-align: center;
	           padding: 6px;
	           background: white;
	           margin: 0 11px 0 0;
	           border: solid 1px #888888;
	           border-radius: 8px;
	        }
	        #figcptionaudio1{
	            font-size: .8em;
	            padding: 6px 8px;
	            background: #dddddd;
	            display: block;
	            text-align: center;
	            font-family: georgia,serif;
	            font-style: italic;
	            border-radius: 7px;
	        }
	        #figaudio1>img{
	            background: #eeeeee;
	            padding: 5px;
	            border: solid 1px #444444;
	        }
	        
	        audio,#figaudio1>img{
	            transition: all 0.5s;
	        }
	        #figaudio1>img:hover{
	            box-shadow: 15px 15px 20px rgba(0,0,0,0.4);
	            transform:scale(1.05);
	        }
	        audio:hover,audio:focus,audio:active{
	            box-shadow: 15px 15px 20px rgba(0,0,0,0.4);
	            transform:scale(1.05);
	        }
	    </style>
	</head>
	<body>
	    <figure id="figaudio1">
	        <img id="imghorse" width="200" src="http://upload.wikimedia.org/wikipedia/commons/d/d4/Nokota_Horses.jpg" alt="a horse"/>
	        <figcaption id="figcptionaudio1">
	            Press Play to hear the horse!
	            <audio controls="controls">
	                <source src="https://dl.dropboxusercontent.com/u/1631516/horse.ogg"
	                        type="audio/ogg" />
	                <source src="https://dl.dropboxusercontent.com/u/1631516/horse.mp3"
	                        type="audio/mp3" />
	                Your browser does not support the audio element.
	                Download the audio/video in
	               <a href=”https://dl.dropboxusercontent.com/u/1631516/horse.ogg”>OGG</a>
	               or <a href=”https://dl.dropboxusercontent.com/u/1631516/horse.mp3”>MP3</a>
	               format.
	           </audio>
	        </figcaption>
	        
	   </figure>
	</body>
	</html>	

##### 补充知识点:box-shadow

box-shadow: h-shadow v-shadow blur spread color inset;

即:水平阴影位置（必须）| 垂直阴影位置（必须）| 模糊距离（可选）|阴影尺寸（可选）|颜色（可选）|将外部阴影outset改为内部阴影inset(可选）

#### 2.5.2 使用CSS3样式凌空改变video的尺寸

##### (1) 当鼠标放在video上时改变其尺寸并旋转它
eg:
	
	<!DOCTYPE html>
	<html>
	<head>
	    <title>html5Study</title>
	    <meta charset="utf8">
	    <style type="text/css">
	       #w3devCampusVideo {
	            width: 300px;
	            transition: all 0.5s ease-in-out;
	        }
	         
	        #w3devCampusVideo:hover {
	            width:400px;
	            transform:rotate(-5deg);
	        }
	    </style>
	</head>
	<body>
	    <video id="w3devCampusVideo" autoplay controls>
	        <source src=http://html5doctor.com/demos/video-canvas-magic/video.webm
	                type=video/webm>
	        <source src=http://html5doctor.com/demos/video-canvas-magic/video.ogg
	                type=video/ogg>
	        <source src=http://html5doctor.com/demos/video-canvas-magic/video.mp4
	                type=video/mp4>
	   </video>
	</body>
	</html>

##### (2)全屏模式的视频改变或保持了其高宽比。使用简单的JS来修改CSS属性。
这是展示视频的趋势方法。

eg1:针对常规视频（way1)

	<!DOCTYPE html>
	<html>
	<head>
	    <title>html5Study</title>
	    <meta charset="utf8">
	    <style type="text/css">
	       body {
	            margin:0;
	            padding:0;
	            overflow:hidden;
	        }
	    </style>
	</head>
	<body onload="init();">
	    <video id="myVideo" autoplay>
	      <source
	          src=http://html5doctor.com/demos/video-canvas-magic/video.webm
	          type=video/webm>
	      <source
	          src=http://html5doctor.com/demos/video-canvas-magic/video.ogg
	          type=video/ogg>
	      <source
	          src=http://html5doctor.com/demos/video-canvas-magic/video.mp4
	          type=video/mp4>
	    </video>
	</body>
	<script>
	    var video;
	 
	    function init() {
	       // function called when the page is loaded
	       video = document.querySelector("#myVideo");
	       // For initial value
	       video.width = window.innerWidth;
	       video.height = window.innerHeight;
	       // For dealing with window resize
	       window.onresize = function() {
	           video.width = window.innerWidth;
	           video.height = window.innerHeight;
	       };
	    }
	</script>
	</html>

eg2:针对YouTub视频

略

##### （3）全屏模式视频，使用纯CSS方式
eg1:(way2)

在这个例子中，视频不会重新调节缩放，当浏览器窗口大小改变时，它仅仅是会被裁剪。CSS如下（html同上例，去掉上例JS）：

	body {
        margin:0;
        padding:0;
        overflow:hidden;
      }
       
      video {
        width:100%;
        height:auto;
      }



eg2:(way3)

这个例子中视频可以缩放，会大于浏览器窗口。当我们为浏览器重新调整大小的时候，视频的可见部分会调整它自身。

	 <style type="text/css">
	        html, body{
	            color:white;
	            height: 100%;
	        }
	        header{
	            height: 100%;
	            background-image: url('http://dupontcours.free.fr/IMG/dots.png'),                             url('#');
	            background-repeat: repeat, no-repeat;
	            background-size: auto, cover;
	            background-position: center center, top left;
	            font-family: sans-serif;
	            color: #051a00;
	        }
	         
	        header video {
	            position:fixed;
	            top:50%;
	            left:50%;
	            min-width:100%;
	            min-height:100%;
	            width:auto;
	            height:auto;
	            z-index:100;
	            transform:translateX(-50%) translateY(-50%);
	        }
	   </style>
	</head>
	    <body>
	        <header>
	            <video autoplay="" loop=""
	                poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg"
	                id="bgvid">
	               <source src="http://demosthenes.info/assets/videos/polina.webm"
	                       type="video/webm">
	               <source src="http://demosthenes.info/assets/videos/polina.mp4"
	                       type="video/mp4">
	            </video>
	        </header>
	        <section>
	            <h1>
	                http://demosthenes.info/blog/777/Create-Fullscreen-HTML5-Page-Background-Video
	            </h1>
	        </section>
	    </body>

这里的窍门是：

1. 视频在header中，header有一个点状的透明背景，在X和Y方向上重复。
2. video是position型的fixed

#### 讨论：为什么当我们仅仅使用CSS时，使用width=100%和height=100%不能得到完美的调整尺寸的方案？
1. way1使用JS
2. way2使用CSS的100%width和100%height属性。
3. way3使用了相对浏览器视口的大小来规定width和height.

way1和way3有相同的行为：视频的长和宽总是填满window，且我们总是看到整个视频。

结论：在不使用JS的情况下，我们可以使使用相对浏览器视口大小的方式来得到全屏的video

##### 知识点补充
###### overflow属性：
规定当内容溢出元素框时发生的事情。

可能值：

- visible(默认，内容呈现在元素框外）
- hidden	内容会被修剪，并且其余内容是不可见的。
- scroll	内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
- auto	如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
- inherit	规定应该从父元素继承 overflow 属性的值。
###### background-repeat属性：
设置是否及如何重复背景图像。

可能值：

- repeat	默认。背景图像将在垂直方向和水平方向重复。
- repeat-x	背景图像将在水平方向重复。
- repeat-y	背景图像将在垂直方向重复。
- no-repeat	背景图像将仅显示一次。


### 2.6 通过JavaScript来控制audio和video元素
video元素拥有可以通过JS操控的方法、属性和事件。使用DOM API可以将video当作JS对象来操控，该JS对象拥有：

- 方法：用以控制行为，如play(),pause()等；
- 特性：duration,current position等；
- 事件

JS动态生成video元素：

	var video = document.createElement('video');
	video.src = 'video.mp4';
	video.controls = true;
	document.body.appendChild(video);

### 2.7 audio和video元素的JS API

#### 2.7.1 方法、属性和事件

参照<https://www.w3.org/2010/05/video/mediaevents.html>试一试效果

#### 2.7.2 最令人关注的方法、属性和事件概览

Methods|Properties|	Events
-------|----------|-------
play()|	currentSrc|	play
pause()|currentTime|pause
load()|startTime(readonly)|progress
canPlayType()|videoWidth|error
|videoHeight|timeupdate
|duration (readonly)|ended
|ended (readonly)|abort
|error|empty
|paused (readonly)|emptied
|muted|waiting
|seeking|loadedmetadata
|volume	||
|height	|
|width|
|seekable (readonly)|
|played (readonly)|

### 2.8 video元素的JS API应用例子
JS API用于执行播放列表，定制用户界面，等等。
#### 2.8.1 EXAMPL1 怎样使用扩展按钮来控制播放器的行为

这个例子展示了写一个定制的视频播放器的第一步。它展示了为video添加定制按钮来控制其的play/pause，以及通过currentTime属性来设置video回到播放起点。

 	<body>
        <video id="vid" controls>
            <source src=http://html5doctor.com/demos/video-canvas-magic/video.webm
                     type=video/webm>
        </video>
        <p>Example of custom controls:</p>
        <button onclick="playVideo();" style="cursor: pointer;">Play</button>
         
        <button onclick="pauseVideo();" style="cursor: pointer;">Pause</button>
         
        <button onclick="rewindVideo();" style="cursor: pointer;">
               Back to beginning</button>
        
        <script>
            vid = document.querySelector("#vid");
            function playVideo() {
               vid.play();
            }
            function pauseVideo() {
               vid.pause();
            }
            function rewindVideo() {
               vid.currentTime = 0;
            }
        </script>
    </body>

#### 2.8.2 EXAMPLE2:怎样检测一个video结束并开启另一个video

通过监听ended事件
	<script type='text/javascript'>
	  var vid = document.querySelector('#myVideo');
	  vid.addEventListener('ended', playNextVideo, false);
	  function playNextVideo(e) {
	     // Whatever you want to do after the event, change the src attribute of the video element, for example, in order to play another video
	  }
	</script>

#### 2.8.3 怎样管理播放列表
这个例子检测视频的末尾，并下载下一个视频，改变video元素的src属性并播放视频。

	<!doctype html>
	<html lang="en">
	<head>
	<title>Sequential Movies</title>
	
	</head>
	<body onload="init()">
	    <video id="myVideo" controls></video>
	    <script>
	        var myVideo;
	        var currentVideo = 0;
	        var sources = [
	            "http://html5doctor.com/demos/video-canvas-magic/video.mp4",
	            "http://www.archive.org/download/AnimatedMechanicalArtPiecesAtMit/P1120973_512kb.mp4"
	        ];
	    
	        function loadNextVideo() {
	           myVideo.src = sources[currentVideo % sources.length]
	           myVideo.load();
	           currentVideo++;
	        }
	       function loadAndplayNextVideo() {
	           console.log("playing " + sources[currentVideo % sources.length])
	           loadNextVideo();
	           myVideo.play();
	        }
	       function init(){
	           myVideo = document.querySelector("#myVideo");
	           myVideo.addEventListener('ended', loadAndplayNextVideo, false);
	           loadNextVideo();
	        }
	     </script>
	</body>
	</html>

#### 2.8.4 延伸实例

##### （1）使用CSS3的transform

<http://jsbin.com/fezome/5/edit?html,css,js,output>

##### （2）实时地使用CSS3的filter
	<style type="text/css">
	        .blur {
	            filter: blur(3px);
	        }
	        .brightness {
	            filter: brightness(5);
	        }
	        .contrast {
	            filter: contrast(8);
	        }
	        .hue-rotate {
	            filter: hue-rotate(90deg);
	        }
	        .hue-rotate2 {
	            filter: hue-rotate(180deg);
	        }
	        .hue-rotate3 {
	            filter: hue-rotate(270deg);
	        }
	        .saturate {
	            filter: saturate(10);
	        }
	        .grayscale {
	            filter: grayscale(1);
	        }
	        .sepia {
	            filter: sepia(1);
	        }
	        .invert {
	            filter: invert(1)
	        }
	    </style>
	</head>
	<body>
    <video id="output" controls autoplay>
        <source src=http://html5doctor.com/demos/video-canvas-magic/video.webm       
                type=video/webm>
        <source src=http://html5doctor.com/demos/video-canvas-magic/video.ogg
                type=video/ogg>
        <source src=http://html5doctor.com/demos/video-canvas-magic/video.mp4
                type=video/mp4>
     </video>
    <script>
        var output = document.getElementById('output');
        var idx = 0;
        var filters = [
          'grayscale',
          'sepia',
          'blur',
          'brightness',
          'contrast',
          'hue-rotate', 'hue-rotate2', 'hue-rotate3',
          'saturate',
          'invert'
        ];
      function changeFilter(e) {
          var el = e.target;
          var effect = filters[idx++ % filters.length];
          console.log(effect);
          el.classname = effect;
          e.stopPropagation();
          e.preventDefault();
         }
     output.addEventListener('click', changeFilter, false);
     </script>
***不知为何效果没有显示出来***

关于filter属性用法<http://www.w3cplus.com/css3/ten-effects-with-css3-filter>

其他实例待看

### words

- streaming multimedia 流式多媒体
- furthermore adv.而且，此外
- panel n.仪表板
- volume n.音量，体积
- widget n.小部件，小工具
- heuristic n.探索式，启发法
- manipulation n.操纵，操作，操控
- switch from ... to ...由...切换到...
- beware vi./vt.当心，注意
- prompt vt.提示，促进
- prompt sb with sth 通过某物提示某人
- codec n.编码解码器
- layer n.层次，图层
- be composed of 由...构成
- be dedicated for 专用于
- sound effects 音效
- synthesis n.合成，综合体
- predefined adj.预定义的
- peculiarity n.独特性
	- differences and peculiarities
- omit vt.省略
- buffer n.缓冲区，缓冲器
- explanatory adj.解释的，说明的
- self explanatory 不言而喻的
- preserve vt.保存，保护，维持
- aspect ratio 屏幕高宽比
- playback n. 重放
- mutually adv.互相地
- exclusive adj.独有的，排外的
- mutually exclusive 互斥的
- data roaming 数据漫游
- roam vt.漫游，漫步
- mobile application n.移动应用程序
- make sense to 有意义
- non-blank adj. 非空白
- general use 一般用途
- abuse of 滥用
- testimony n.证言，证词，证据
- subset n.子集
- a subset of ...是...的子集
- interpolate vt.vi.篡改，插入
- crop vt. 修剪
- rescale v.重缩放，重新调节
- zoom vi./vt.缩放
- geometric adj.几何的
- rewind vt./vi.倒带
- playlist n.播放列表
- custom adj.定制的
- SVG n.可伸缩向量图形
- in a real time 实时地
- subtitle n.字幕，副标题


## Lesson3 HTML5图像
### 3.1 给视频添加字幕和隐藏字幕
#### 3.1.1简介
本节介绍HTML5新元素track。用于给视频添加隐藏字幕，字幕，描述，和元数据。还有一个新的JS API。

一些定义：

- closed captions:指视频所有相关的音频（包括火，雨，鸟叫，枪声等）
- subtitle:仅指口头语言


#### 3.1.2 典型作用：为video元素添加subtitle/caption的track元素

##### 重要警告：

track元素不能被通过file://URL形式打开的文档使用。要使用http://和一个web服务器。你的服务器必须使用一种特殊的MIME格式.vtt文件：text/vtt;charset=utf-8；（大多数服务器都默认都是这个）

为Apache服务器设置的语句：

	<Files mysubtitle.vtt>
	ForceType text/vtt;charset=utf-8
	</Files>

绝大多数服务器对于WebVTT是生效的，即使没有设置MIME类型，但是IE浏览器会忽略WebVTT,除非正确地设置了它！

##### eg:

	<video height="272" width="640"
	       poster="http://content.bitsontherun.com/thumbs/q1fx20VZ-640.jpg"
	       crossorigin="anonymous"
	       controls>
	   <source src="http://demo.jwplayer.com/html5-report/sintel.mp4"
	           type="video/mp4">
	   <source src="http://demo.jwplayer.com/html5-report/sintel.webm"
	           type="video/webm">
	   <track src="http://demo.jwplayer.com/html5-report/sintel-captions.vtt"
	          kind="captions" label="Closed Captions" default>
	</video>

注意track元素具有一个属性叫做kind，用于指明track的类型。其可能值有:subtitle,captions,descriptions,chapters及metadata

track元素还有一个属性default，其指明了我们想要track以默认形式展现。

video元素中用了一个crossorigin的属性，在播放这个demo中它是必要的不懂。***？？***

#### 3.1.3 一个video元素可能包含多个track
支持不同的语言需要多个track，对于听力受损的人则需要captions等。

eg:

	<video src="brave.webm">
	   <track kind=subtitles src=brave.en.vtt
	          srclang=en
	          label="English">
	   <track kind=captions src=brave.en.hoh.vtt
	          srclang=en
	          label="English for the Hard of Hearing">
	   <track kind=subtitles src=brave.fr.vtt
	          srclang=fr
	          lang=fr 
	          label="Français">
	   <track kind=subtitles src=brave.de.vtt
	          srclang=de
	          lang=de
	          label="Deutsch">
	</video>

***播放有问题***
注意track元素使用的新属性：

- label:该属性值会显示在图形用户界面的控制面板上，该控制面板是HTML5视频播放器默认自带的。
- srclang:规定track文本数据的语言。如果track的kind值为subtitles，一定要指定这个属性。

### 3.2 WebVTT格式
WebVTT文件使用在track元素的src属性中。

第一个例子使用了文件sintel-captions.vtt，其内容摘要如下：

	WEBVTT

	00:00:01.000 --> 00:00:02.042
	(drumbeat)

	00:00:07.167 --> 00:00:12.025
	(plaintive violin solo playing)
	……

每个元素在该文件中都有一个开始和结束时间，加上应该文本值，然后又一个空白行紧接着。

文件中的每个元素都叫做一个“cue”，并拥有一个ID，其在使用track元素的JS API时会很有用。尤其是getCueById()方法。

### 3.3 实战例子：给video添加subtitle
#### 3.3.1 简介
首先，你需要一个视频，它的格式/编码解码引擎是你的浏览器支持的。推荐的一种编解码引擎是H264,但是其他的格式，如webm，如果你的浏览器支持的话会更有一些优势。例如，webm播放前的缓存时间更短。换句话说，你应该尝试着为视频提供多种编码方式。

为此，你可以利用各种开源的，免费的或商业的视频编码软件，如Handbrack(<https://handbrake.fr/>)或Super(<http://www.erightsoft.com/SUPER.html>)。也有很多在线的视频编码服务，你甚至可以上传你的视频到YouTube，让它给你的视频进行多种编码，在使用浏览器扩展如VideoDownloadHelper(FF的，<https://addons.mozilla.org/fr/firefox/addon/video-downloadhelper/>)

#### 3.3.2 给视频添加subtitles
	
	<video id="myVideo" width=500 controls>
	  <source  
	      src="videos/SameOldSongAndDanceRogerLathaudPart1MidRes.mp4"
	      type="video/mp4">
	  <source   
	      src="videos/SameOldSongAndDanceRogerLathaudPart1MidRes.webm"
	      type="video/webm">
	 
	  <track src="videos/subtitles.vtt"   
	         kind="subtitles" srclang="en" default>
	</video>

这里我们添加的track是English的subtitles，但视频中的吉他老师是讲法语的。我们怎样让英语翻译和吉他老师的法语同步呢？

许多工具——包括免费的和商业的——可以为视频添加subtitles.实用的免费的工具都在浏览器中，如<http://www.universalsubtitles.org>和<http://www.amara.org>

### 3.4 为字幕/隐形字幕定位和添加样式
#### 3.4.1 一个在线例子
这是一个新的WebVTT文件。注意持续时间后面添加的属性。

	WEBVTT
	00:00:01.000 --> 00:00:05.000
	These captions test some features of the WebVTT formats

	00:00:06.000 --> 00:00:10.000 line:5%
	This cue is positioned at the top of the video

	00:00:11.000 --> 00:00:15.000 position:5% align:start
	This cue is positioned at the left side of the video.

	00:00:16.000 --> 00:00:20.000 position:95% align:end
	And this one ate the right side.

	00:00:21.000 --> 00:00:25.000 size:33%
	This cue is only a third of the width of the video, hence the multiple line breaks.

	00:00:26.000 --> 00:00:30.000
	This cue contains <b>bold</b> text.

***具体先略，因为感觉这一块用处不大***

### 3.5 chapters:使用另一个track元素特性
如下例，在第五行，我们为track元素增添了kind="chapters"属性。

	<video poster="webvtt_talk.png" style="width:100%" preload="metadata">
	    <source src="webvtt_talk.webm">
	    <source src="webvtt_talk.mp4">
	    <source src="webvtt_talk.ogv">
	    <track id="nav" src="webvtt_talk_navigation.vtt" kind="chapters" srclang="en">
	    <track id="cc" src="webvtt_talk_captions.vtt" kind="captions"
	          label="captions" srclang="en" default>
	</video>

定义了chapters的WebVTT文件如下：

	WEBVTT FILE
	 
	Chapter 1
	00:00:00.000 --> 00:00:10.700
	Title Slide
	 
	Chapter 2
	00:00:10.700 --> 00:00:47.600
	Introduction by Naomi Black
	 
	Chapter 3
	00:00:47.600 --> 00:01:50.100
	Impact of Captions on the Web

2015年，video元素在标准浏览器中的渲染规则是忽略chapters，但HTML5高级播放器例如[SublimeVideo](http://www.sublimevideo.net/)和[jwplayer](http://www.jwplayer.com/)是将其考虑在内的。

### 3.6 用于制作字母文件WebVTT和重用已有字母的工具
- **将已有文件格式转换为WebVTT文件的工具** 详见[article](http://thenewcode.com/584/Creating-And-Validating-WebVTT-Subtitles)
- **将随便写的草稿转换为WebVTT文件的工具** [Universal Subtitles](http://amara.org/zh-cn/)
- **html5高级播放器** 它们的引擎使用video,source,track元素，除了WebVTT外也支持联机字幕格式。
- **一些能够联机转换出WebVTT格式的JS库**，如[JS_videosub](http://www.storiesinflight.com/js_videosub/)

### 3.7 track元素的JavaScript API
详见下一课

### word 
- hearing-impaired adj.听力受损的
- GUI abbr.Graphical User Interface 图形用户界面
- cue n.提示，暗示
- buffering time 缓冲时间
- buffer n./vt.缓冲
- synchronize vt.使...合拍；使...同步
- native application 原生应用程序
- hood n.引擎
- on the fly 联机
- other than 除了，不同于
- on top of 熟练掌握，在...之上

## Lesson4 Enhanced HTML5 media player and frameworks
### 4.1 HTML5高级视频播放器
#### 4.1.1 简介
有很多高级的视频播放器。它们提供了很多功能，列举如下。并不是所有功能都被每个播放器支持，这个列表只是解释了哪些东西可以添加到标准的video元素中。

我们叫它们"HTML5高级播放器",因为在video元素的基础上，它们通过JavaScript API实现了自定义特性、自定义界面外观、chapters等。

关于高级的video可以做什么，详见[这篇文章](http://www.streamingmedia.com/Articles/Editorial/Featured-Articles/How-to-Create-Interactive-HTML5-Video-97461.aspx)***待看***

#### 4.1.2 易接近的播放器
一些专门为残疾人设计的播放器的介绍，详见 [这篇文章](http://www.iheni.com/accessible-media-player-resources/)***待看***

#### 4.1.3 使用自定义播放器的好处与坏处
##### 使用高级视频播放器的好处
- flash或Active/Silverlight需要依靠旧版本的IE
- 支持各种各样的字母格式
- 自定义的界面外观（可以添加你自己的logo，自定义主题等等）
- 全屏模式，如今的video元素支持全屏模式且不受浏览器限制。
- 跨浏览器的一致的界面外观
- 1.5倍，2倍，3倍的回放速度
- 可以分享到Facebook,Twitter等的分享按钮
- 支持chapters
- ...

##### 使用纯video元素而非高级播放器的好处
- 完全的控制
- 不需要外部依赖
- 轻量级：不需要下载许多JS和CSS代码

#### 4.1.4  我该用哪个？video元素和我自己写的自定义功能，还是立即可用的高级播放器？

两种方案（基本播放器和高级播放器）都很好，都是HTML5允许的。

一些关于播放器的对比文章
- [Comparison matrix of most of the existing video players](http://praegnanz.de/html5video/)
- [十大现代播放器对比](http://toppersworld.com/10-html5-video-players-as-alternatives-to-flash-player/)

### 4.2 HTML5高级音频播放器
略

### word
- custom feature 自定义特性
- custom adj. 定做的，定制的，自定义
- come with 与...一起供给，伴随，拿出
- look'n'feel 界面外观
- customization n.定制，用户化
- consistent adj.相容的，一贯的
- playback n.重放
- social button n.分享按钮
- thumbnail n.缩略图
- external dependency 外部依赖
- out of the box 开包即用，立即可用的
- compliant adj.顺从的，应允的

## lesson5 Webcam,microphone:the getUserMedia API（摄像头设备，麦克风）

### 5.1 使用webcam视频流（网络摄像头视频流）
#### 5.1.1 getusermedia API简介
getUserMedia API对于控制一个网络摄像头视频流是很有用的。

虽然这个API是WebRTC规范的一个组件，其并不是HTML5规范的一部分，但我们还是将其归入多媒体相关的知识。getUserMedia API,总是和video元素一同使用。

##### 知识点补充：
- WebRTC，名称源自网页实时通信（Web Real-Time Communication）的缩写，是一个支持网页浏览器进行实时语音对话或视频对话的技术。

#### 5.1.2 getUsermedia API的典型应用
主要思想是将video元素的src属性设置为产生webcam的视频直播流对象。为了得到此视频直播流，你需要调用getUserMedia API的方法navigator.getUserMedia(params,onSuccess,onError)

如下例所示：

	<video id="myVideo" autoplay>Fallback msg here.</video>
	<script>
	   function onSuccess(stream) {
	     var output = document.getElementById('myVideo');
	     // use the default webcam if more than one are connected
	     output.src = window.URL.createObjectURL(stream.getTracks()[0]);
	   }
	   function onError() {
	     // getUserMedia API not supported, or another application is using the webcam!
	   }
	 
	   if (navigator.getUserMedia) {
	     navigator.getUserMedia({video:true}, onSuccess, onError);
	   }
	</script>

事实上,这个例子像这样还没有用。需要添加给API函数添加前缀,因为浏览器支持的局限性。

##### 强制使用https:
如果想要getUserMedia有效，必须通过***https://***访问包含JavaScript代码的页面,否则你将得到一个错误消息。注意所有在jsbin上的例子使用  https://jsbin.com/...

#### 5.1.3 浏览器支持性（2016.5）
需要为其加上前缀，如webkitGetUserMedia或mozGetUserMedia。

#### 5.1.4 简单的网络摄像头使用例子（在支持getUserMedia API的浏览器中）

	<html>
	<head>
	<meta charset="utf-8">
	<title>JS Bin</title>
	</head>
	<body >
	    <video width=200 height=200 id="video" controls autoplay></video>
	    <script>
	        navigator.getUserMedia = ( navigator.getUserMedia ||
	                                   navigator.webkitGetUserMedia ||
	                                   navigator.mozGetUserMedia ||
	                                   navigator.msGetUserMedia);
	     
	        if (navigator.getUserMedia) {
	            navigator.getUserMedia (
	                // constraints
	                {
	                    video: true,
	                    audio: false
	                },
	     
	                // successCallback
	                function(localMediaStream) {
	                    var video = document.querySelector('video');
	                    video.src = window.URL.createObjectURL(localMediaStream);
	                },
	     
	                // errorCallback
	                function(err) {
	                    console.log("The following error occured: " + err);
	                }
	            );
	        } else {
	            console.log("getUserMedia not supported");
	        }
	    </script>
	</body>
	</html>

在[JS Bin](https://jsbin.com/melicu/edit?html,css,js,output)上查看效果。

### 5.2 更多关于getUserMedia
来看看更多关于我们可以使用getUserMedia API干嘛的例子：打开/关闭网络摄像头，给来自摄像头的视频截个图，实时应用CSS效果。

#### 5.2.1怎样停止/发布网络摄像头
JS代码：

	<script>
	        navigator.getUserMedia = ( navigator.getUserMedia ||
	                                   navigator.webkitGetUserMedia ||
	                                   navigator.mozGetUserMedia ||
	                                   navigator.msGetUserMedia);
	        
	        var webcamStream;
	        function startWebcam() {
	            if (navigator.getUserMedia) {
	                navigator.getUserMedia (
	                    // constraints 这是该调用的第一个参数，为一个JS对象，此处的意思是只捕获视频流
	                    {
	                        video: true,
	                        audio: false
	                    },
	         
	                    // successCallback
	                    function(localMediaStream) {
	                        var video = document.querySelector('video');
	                        video.src = window.URL.createObjectURL(localMediaStream);
	                        webcamStream=localMediaStream.getTracks()[0];//储存第一个视频流
	                    },
	         
	                    // errorCallback
	                    function(err) {
	                        console.log("The following error occured: " + err);
	                    }
	                );
	            }
	            else {
	                console.log("getUserMedia not supported");
	            }   
	        }
	        function stopWebcam(args) {
	            webcamStream.stop();
	        }
	    </script>

#### 5.2.2 其他一些在之前章节中混入的例子，这次针对视频直播

##### a.应用CSS样式
[JSBin](https://jsbin.com/qiyuve/edit)

##### b.对视频直播抓拍快照
[JSBin](https://jsbin.com/gehitu/edit?html,css,js,console,output)

### 5.3 使用麦克风
getUserMedia API的 navigator.getUserMedia({video:true},onSuccess,onError),其第一个参数也可以为{audio:true}。在这种情况下，只有麦克风将会被捕获。如果你写一个视频会议系统，要同时捕获视频和音频（这是写WebRTC应用的典型场景），那么就要写成{video:true, audio:true} 。

webRTC是另一个W3C规范，还在发展中，用于P2P视频/音频/数据实时通讯。

除了电视会议，麦克风输入还用于网络音乐app，通过WebAudio API。这个API用于实时声音处理和音乐合成。在高级W3CX HTML5课程中会讲这个API。

试一试一些不错的WebRTC应用，如[e Appear.in audio and video conferencing tool](https://appear.in/),
[ WebAudio demonstrations](https://webaudiodemos.appspot.com/)

appear.in:是一个免费的WebRTC视频会议工具，对于视频和音频，它使用getUserMedia API。

### words
- webcam n.网络摄像头
- conjunction n.结合
- in conjunction with 连同，与...协力
- mandatory adj. 强制的，托管的，义务的
- prefixed adj.有前缀的
- parenthesis n.括弧
- snapshot n.快照
- video conference system 视频会议系统
- apart from 除...之外
- microphone input 麦克风输入，话筒输入
- synthesis n.合成，综合

## lesson6 exercise 
### 错题
#### T10. Buttons with style!
Does HTML5 enable us to change the style of default players' controls (the play/pause/stop buttons that appear when we add the controls attribute to an audio or video element)?

答案：

No， this is not possible

#### T20. Karaoke duo?
How can we distinguish different voices, to be displayed in different colors, in subtitles/captions (for example, a karaoke duo)?


答案：

Use <v nameOfVoice> followed by the text of the subtitle, like in: <v Michel> Hello dear students of the W3Cx HTML5 course! Use <code>&lt;v nameOfVoice&gt;</code> followed by the text of the subtitle, like in: <code>&lt;v Michel&gt;</code> Hello dear students of the W3Cx HTML5 course! - correct

EXPLANATION：

Using the < v > tag, you can distinguish different voices that should be displayed in different colors (depending on the HTML5 video player implementation).

### words
- nightmare n.噩梦
- inject vt.注入，注射
- inject advertising 注入广告
- twist vt.拧，扭
- instantaneously adv.即刻，突如其来地