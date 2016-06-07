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
