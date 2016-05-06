<h1 style="text-align:center"> 数据新闻工作室网站技术说明文档</h1>

网站网址：<http://www.wetryer.com/>

作者：王祎琛
<h2 style="text-align:center">目  录</h2>
- [一、总体需求概述](#1)
- [二、总体设计风格](#2)
- [三、网站框架图](#3)
	- [1. 框架1](#3-1)
	- [2. 框架2](#3-2)
	- [3. 框架1](#3-3)
- [四、独立页面功能介绍](#4)
	- [1. “首页”](#4-1)
	- [2. “精品文章”](#4-2)
	- [3. “注册新账号”](#4-3)
	- [4. “我的工作室”](#4-4)
	- [5. “关于我们”（*未完成）](#4-5)
- [五、重点模块功能介绍及实现方法](#5)
	- [1. 跨浏览器的事件处理对象](#5-1)
	- [2. 导航栏](#5-2)
	- [3. 旋转木马](#5-3)
	- [4. 文章排列区](#5-4)
	- [5. 选项菜单+内容板块](#5-4)
	- [6. 登录弹窗](#4-6)
	
<br>
<br>
<br>


<h2 id="1"> 一、总体需求概述</h2>
- 能够集中分享数据新闻领域的好文章，包括数据新闻资讯、作品赏析、使用技能介绍等。
- 能够成为数据新闻爱好者的积累、成长平台，每位用户可以建立自己的账号，写文章，向网站投稿等等。
- 能够展示、宣传数据新闻工作室这个团队。

<h2 id="2"> 二、总体设计风格</h2>
清新活泼，色彩以浅绿为主。

用以传达数据新闻是一个新生的、充满活力和前景的新闻报道方式。

<h2 id="3"> 三、 网站框架图</h2>
<h3 id="3-1">1. 框架1</h3>
##### 框架图:
<img src="frame1.jpg" alt="页面框架结构1">

##### 应用页面:
用于首页。

##### 包含板块:
- 导航栏
- 旋转木马
- 我要投稿按钮
- 文章排列区（三块）
- 登录弹窗

<h3 id="3-2">2. 框架2</h3>
##### 框架图:
<img src="frame2.jpg" alt="页面框架结构2">

##### 应用页面
用于页面“精品文章”、“我的工作室”。
##### 包含板块
- 导航栏
- 页面标题+分割线
- 选项菜单
- 内容板块
- 登录弹窗

<h3 id="3-3">3. 框架3</h3>
##### 框架图
<img src="frame3.jpg" alt="页面框架结构2">
##### 应用页面
用于页面“关于我们”、“注册新账号”。
##### 包含板块
- 导航栏
- 页面标题+分割线
- 内容板块

<h2 id="4"> 四、独立页面功能介绍</h2>
独立页面包括五页，分别为“首页”，“精品文章”，“关于我们”，“我的工作室”，“注册新账号”。

<h3 id="4-1">1. “首页”</h3>
“首页”采用1.中框架1

#### 其功能需求包括：

- 通过“导航栏”模块可任意跳转至其他独立页面。
- 旋转“木马模块”可以添加重要文章链接，通过该模块可以轮流呈现或跳转至相关文章。
- 通过“我要投稿按钮”可以弹出登录/注册窗口，或直接跳转至“我的工作室”→"写文章”界面。
- 在“文章排列区”，通过点击各板块文章名称，可以自由跳转至响应文章内容页面；通过点击各板块的“查看更多”连接，可以跳转至“精品文章”页面，并呈现出相应板块的文章列表。

#### 页面截图如下：
<img src="web1new.png" alt="首页截图">

 <h3 id="4-2">2. “精品文章”</h3>
“精品文章”采用1.中框架2。

#### 其功能需求包括：

- 通过“导航栏”模块可任意跳转至其他独立页面。
- 点击左侧“选项菜单”可以激活相应菜单按钮，并同时使右侧“内容板块”呈现出相应类型的文章摘要列表。
- 点击“内容板块”中的文章摘要列表中文章标题，可使该“内容板块”内容变为相应文章内容。

#### 页面截图如下：
<img src="web2.png" alt="首页截图">
<h3 id="4-3">3. “注册新账号”</h3>
“注册新账号”采用框架3。

#### 其功能需求包括：
- 通过“导航栏”模块可任意跳转至其他独立页面。
- 当点击每个独立页面右上角“登录/注册”按钮时，页面“登录弹窗”。点击“登录弹窗”右下角的“注册新账号”链接，即可跳转至该“注册新账号”页面。
- 该页面“内容板块”拥有用户注册信息表单，未注册用户可以通过填写该该表单，并点击“我要注册”按钮完成注册。注册成功后，该板块内容变更为
“注册成功”。
#### 页面截图如下：
<img src="web3.png" alt="首页截图">

<h3 id="4-4">4. “我的工作室”（*未完成）</h3>
“我的工作室”采用1.框架2。

#### 其功能需求包括：
- 通过“导航栏”模块可任意跳转至其他独立页面。
- 点击左侧“选项菜单”可以激活相应菜单按钮。
- 当点击“选项菜单”中的“写文章”，右侧“内容板块”呈现文章编辑表单，在此可输入文章标题、文章内容，并提交文章至服务器。（*未完成）
- 当点击“选项菜单”中的“我的文章”，右侧“内容板块”呈现用户写作的文章列表。（*未完成）
- 当点击“选项菜单”中的“我的基本信息”，右侧“内容板块”呈现用户基本信息表单，用户可查看、编辑、保存其基本信息。（*未完成）
#### 页面截图如下：
<img src="web4.png" alt="首页截图">

<h3 id="4-5">5. “关于我们”（*未完成）</h3>
“关于我们”采用框架3。
#### 其功能需求包括：
- 通过“导航栏”模块可任意跳转至其他独立页面。
- “导航栏”中的“关于我们”选项拥有“认识我们”和“加入我们”两个子菜单选项。点击相应子菜单选项，页面的“内容板块”便会呈现出相应文章。（*未完成）

<h2 id="5">五、重点模块功能介绍及实现方法</h2>
<h3 id="5-1">1. 跨浏览器的事件处理对象</h3>
#### （1）功能概述
- 该部分为其他模块的设计基础，其他模块的事件处理相关程序都会用到该EventUtil对象的方法。
- 其包含的方法可以基本满足不同浏览器的需要，主要是为兼容IE8及以下版本和其他浏览器的兼容性。

#### （2）实现方法
纯JavaScript实现，EventUtil对象中包含：

- addHandler方法：实现跨浏览器的事件绑定。
- removeHandler方法：实现跨浏览器的事件绑定解除。
- getEvent方法：实现跨浏览器的event对象获取。
- preventDefault方法：实现跨浏览器的事件默认行为阻止。
- getTarget方法：实现跨浏览器的实际目标元素获取。
- addClass方法：实现跨浏览器的样式添加。
- removeClass方法：实现跨浏览器的样式添加移除。

#### （3）代码展示
##### JS
		var EventUtil={
		    addHandler:function(element,type,handler){
		        if (element.addEventListener) {
		            element.addEventListener(type,handler,false);
		        }
		        else if (element.attachEvent) {
		            element.attachEvent("on"+type,handler);
		        }
		        else{
		            element["on"+type]=handler;
		        }
		    },
		    removeHandler:function(element,type,handler){
		        if (element.removeEventListener) {
		            element.removeEventListener(type,handler,false);
		        }
		        else if (element.detachEvent) {
		            element.detachEvent("on"+type,handler);
		        }
		        else{
		            element["on"+type]=null;
		        }
		    },
		    getEvent:function(event){
		        return event?event:window.event;
		    },
		    preventDefault:function(event){
		        if (event.preventDefault) {
		            event.preventDefault();
		        }
		        else{
		            event.returnValue=false;
		        }
		    },
		    getTarget:function(event){
		        return event.target?event.target:event.srcElement;
		    },
		    stopPropagation:function(event){
		        if (event.stopPropagation) {
		            event.stopPropagation();
		        }
		        else{
		            event.cancelBubble=true;
		        }
		    },
		    addClass:function(element,oneclass){//为元素添加样式表
		        if (element.classList) {//仅FireFox3.6+、Chrome支持
		            element.classList.add(oneclass);
		        }
		        else{
		            var classNames=element.className.split(/\s+/);
		            classNames.push(oneclass);
		            element.className=classNames.join(" ");
		        }
		    },
		    removeClass:function(element,oneclass){
		        if (element.classList) {
		            element.classList.remove(oneclass);
		        }
		        else{
		            var classNames=element.className.split(/\s+/);
		            for (var i=0,len=classNames.length;i<len;i++) {
		                if (classNames[i]==oneclass) {
		                    classNames.splice(i,1);
		                    break;
		                }
		            }
		            element.className=classNames.join(" ");
		        }
		    }
		};

<h3 id="5-2"> 2. 导航栏</h3>
#### （1）模块截图
<img src="modules1.png" alt="导航栏模块">
#### （2）功能概述
- 该部分包含一个数据新闻工作室logo——“DataNews Studio”；三个可以跳转至相应页面的选项——“首页”，“精品文章”，“我的工作室”；一个包含两个子菜单选项的选项——“关于我们”；一个可弹出弹窗的选项——“登录/注册”。
- 当光标移至各可点击选项部分时，相应部分颜色改变。
- 当光标移至“关于我们”选项时，其子菜单出现；当光标移至其子菜单各选项部分时，相应部分颜色改变；当光标离开子菜单时，子菜单消失。
- 若已登录，则右侧“登录/注册”选项呈现内容为“你好，XX"。
- 该部分应用在各独立页面首部。

#### （3）实现方法
纯html+css+JavaScript手工编写实现：

- 主体部分外层容器使用ul,内层项目使用li。为li设置display为inline-block实现li排列成一行。
- 光标移入/移出时相应选项变色、相应子菜单出现/消失通过为相应元素绑定onmouseenter、onmouseleave事件处理程序实现。
- 各选项文字上下左右居中。通过为容器元素设置text-align: center实现左右居中；通过设置其文字的行高line-height与容器高度height相等实现上下居中。
- 是否呈现“你好，XX”，通过为window绑定onload事件处理程序、检测其此时localStorage的welcome值得到。

#### （4）代码展示
##### html

	    <nav>
	      <ul class="navrow">
	        <li class="logofont">DataNews Studio</li>
	        <li class="navoption"><a href="#">首页</a></li>
	        <li class="navoption" id="goodArticle"><a target="_blank" href="../articles/index/articles.html">精品文章</a></li>
	
	        <li class="navoption" id="hasSub"><a>关于我们</a></li>
	       
	        <li class="navoption"><a target="_blank" href="../myStudio/index/index.html">我的工作室</a></li>
	        
	        <li class="regi" id="regi"><a id="beforeRegi">登录/注册</a></li>
	
	      </ul>
	      <ul class="dropdown">
	         <li><a target="_blank" href="#knowus">认识我们</a></li>
	         <li><a target="_blank" href="#joinus">加入我们</a></li>
	      </ul>
	    </nav>

##### css

	 .navrow{
	      position: absolute;
	      top: 0px;
	      height: 50px;
	      width: 100%;/*设备上浏览器最大宽度,继承于body*/
	      background-color: #9CCD64;
	      margin: 0px;
	      padding: 0px;
	      
	      border:thin solid red;
	    }
	   nav>ul>li{/*****此处不能使用.navrow>li****/
	        display: inline-block;/*li默认的display为block,设置为inline后，可将li排列在一行；但设为inline后，无法使用width属性，就设为inline-block*/
	        width: 100px;
	        height: 100%;
	        text-align: center;/*块内左右居中*/
	        margin: 0px;
	        padding: 0px;
	        background-color: #9CCD64;
	        position: relative;/*为什么一定要向上相对生成位置平移1px才能和父元素对其呢？*/
	        top: -1px;
	        
	        border:thin solid red;
	       
	    } 
	  .logofont{
	        display: inline-block;
	        width:300px;
	        height: 50px;
	        text-align: center;/*块内左右居中*/
	        margin-top: 0px;
	        margin-bottom: 0px;
	        margin-left: 150px;
	        margin-right: 20px;
	        padding: 0px;
	        position: relative;/*为什么一定要向上相对生成位置平移1px才能和父元素对其呢？*/
	        top: -1px;
	        
	     
	        font: 32px  "Monotype Corsiva", sans-serif;
	        line-height: 50px;/*记住一定得写在font-size之后才有用*/
	        color: white;
	         cursor: default;/*改光标形状为默认形状：一个箭头*/
	        border:thin solid red;
	   }
	   .regi{
	        text-align: center;/*块内左右居中*/
	        margin-left: 120px;
	        margin-right: 20px;
	        padding: 0px;
	        display: inline-block;
	        width:100px;
	        height: 50px;
	        line-height: 50px;
	        /*color: white;
	        font: 14px "微软雅黑",sans-serif;*/
	
	        border:thin solid red;
	    }
	 
	   .navrow a{
	        text-decoration: none;
	        font: 16px "微软雅黑",sans-serif;
	        color: white;
	        line-height: 50px;
	    }
	   .regi a{
	        text-decoration: none;
	        font: 14px "微软雅黑",sans-serif;
	        color: white;
	        line-height: 50px;
	    }
	  .dropdown{
	        display: none;
	        width: 150px;
	        height: 80px;
	        background-color: #9CCD64;
	        opacity: 0.7;
	    
	        position: absolute;
	        left: 690px;
	        top: 50px;
	        margin: 0px;
	        padding: 0px;
	        z-index: 10;
	        
	        border:thin solid red;
	  }
	  .dropdown>li{
	        width: 150px;
	        height: 30px;
	        text-align: left;
	        margin-top: 5px;
	        margin-bottom: 5px;
	    }
	 .dropdown a{
	        text-decoration: none;
	        font: 14px "微软雅黑",sans-serif;
	        color: white;
	        line-height: 30px;
	        margin-left: 25px;
	        
	    }
	li a,.navoption{
	        cursor: pointer;/*控制鼠标形状为手型*/
	    }
	

##### js

	(function(){
	    var navoptions=document.getElementsByClassName("navoption");
	    var dropdown=document.getElementsByClassName("dropdown")[0];
	    for(var i=0;i<navoptions.length;i++){
	        if (i==2) {
	            navoptions[i].onmouseenter=chColorShowSub;
	            //navoptions[i].onmouseleave=reColorHideSub;
	        }
	        else{
	            navoptions[i].onmouseenter=changeColor;//注意这里不能用onmouseover和onmouseout
	            navoptions[i].onmouseleave=recoverColor;
	        }
	    }
	    
	    function chColorShowSub(event) {
	        event=EventUtil.getEvent(event);
	        var target=EventUtil.getTarget(event);
	        target.style.background='#228B22';
	        dropdown.style.setProperty("display","block");
	      
	    }
	    
	    function changeColor(event){
	        event=EventUtil.getEvent(event);
	        var target=EventUtil.getTarget(event);
	        target.style.background='#228B22';
	        navoptions[2].style.setProperty("background-color","#9CCD64");
	        dropdown.style.setProperty("display","none");
	    }
	    
	    function recoverColor(event) {
	        event=EventUtil.getEvent(event);
	        var target=EventUtil.getTarget(event);
	        target.style.removeProperty('background');
	       
	    }
	    
	    if (dropdown.style.display!='none') {
	        dropdown.onmouseleave=reColorHideSub;//从子菜单移走时，该子菜单消失，母标题恢复非触发颜色
	        var dropoptions=document.querySelectorAll(".dropdown>li");
	        for(var j=0,len=dropoptions.length;j<len;j++){
	            dropoptions[j].onmouseenter=changeSubColor;
	            dropoptions[j].onmouseleave=recoverSubColor;
	        }
	    }
	    
	    function reColorHideSub(event) {
	        event=EventUtil.getEvent(event);
	        var target=EventUtil.getTarget(event);
	        navoptions[2].style.removeProperty('background');
	        target.style.setProperty("display","none");
	    }
	    
	    function changeSubColor(event) {
	        event=EventUtil.getEvent(event);
	        var target=EventUtil.getTarget(event);
	        target.style.setProperty("background-color","#228B22");
	    }
	    
	    function recoverSubColor(event) {
	        event=EventUtil.getEvent(event);
	        var target=EventUtil.getTarget(event);
	        target.style.setProperty("background-color","#9CCD64");
	    }
	})();
	
	/************检测localStorage的welcome*************/
	EventUtil.addHandler(window,"load",function(){
	    if (localStorage.getItem("welcome")) {//已在其他页面登陆，则每个页面都显示用户昵称
	        document.getElementById("regi").innerHTML=localStorage.getItem("welcome");
	    }
	});
	
	EventUtil.addHandler(window,"unload",function(){
	    if (localStorage.getItem("welcome")) {
	        localStorage.removeItem("welcome");
	    }
	});

#### (5)存在问题与评价
- 此处是为了锻炼手写纯html+css+JavaScript能力，其实bootstrap的nav模块可以直接拿来用。
- 此处通过把ul列表的li设置display为inline-block实现li排列成一行，要求li的position只能保证其存在于文档流，这样导致无法精确控制其和父元素高度完全重合。虽然采用的解决办法是通过把position设置为relative，进而通过top:-1px来调节位置，但这样还是不够精确。
- 此处为不同选项按钮分别添加各种事件处理程序，事件处理程序过多，会在一定程度上影响性能。曾尝试使用事件委托直接在公共父元素ul上绑定一个事件处理程序，又因为其后代元素太多太杂，实现效果并不理想。
- 此处为各元素添加的标识稍显混乱，class、id一大堆，有待优化。

<h3 id="5-3">3. 旋转木马</h3>
#### （1）模块截图
<img src="modules2.png" alt="导航栏模块">
#### （2）功能概述
- 若干张图片在图片区域轮流展示。
- 图片区域下部有一排按钮，每个按钮对应一张图片，图片展示的时候对应按钮变成激活颜色，图片过去后对应按钮恢复正常颜色。
- 手动点击按钮，图片区域可以切换到所点击按钮对应图片。
- 手动点击切换图片后，过一段时间，图片又自动开始轮流展示。
- 点击图片可以跳转到图片链接的内容页面。

#### （3）实现方法
- 该模块内部元素一般都是针对最外层元素进行绝对定位，即position为absolute。横向的定位一般用px,纵向定位一般用%。这样，该模块高度固定，但宽度可以基本适应不同宽度的电脑屏幕。
- 此处自动播放使用setTimeout超时调用函数模仿setInterval间歇调用，这样可以更好地保证时间间隔。
- 该模块中的按钮点击事件采用事件委托，即只为按钮的公共父元素绑定一个事件处理程序。通过检测事件的target来获取具体是哪一个按钮。
- 点击按钮后实现图片停止切换时，注意两个取消：取消该超时调用本身，还要取消该超时调用的递归条件。这里用clearTimeout实现取消该超时调用本身，用一个标记变量flag的值来决定是否继续进行递归。

#### （4）代码展示
##### html
	<div id="myCarousel">
	      <div id="myCarContent">
	        
	      </div>
	      <div id="myCarButtons">
	        <button id="myCarBu0" class="aniBu"></button> <!--class="aniBu0"-->
	        <button id="myCarBu1" class="aniBu"></button>
	        <button id="myCarBu2" class="aniBu"></button>
	      </div>
	    </div>
##### css

		 #myCarousel{
		        position: absolute;
		        top: 50px;
		        width: 100%;/*1366继承于body*/
		        height: 300px;
		        margin: 0;
		        padding: 0;
		        
		        border:thin solid red;
		     
		    }
		    #myCarContent{
		      position: absolute;/*针对static定位以外的第一个父元素*/
		      width: 100%;
		      height: 100%;/*该子元素边框一定包含在父元素边框之内，因而会下降且右移一个边框宽度*/
		      
		      border:thin solid red;
		    }
		    #myCarButtons{
		      position: absolute;/*针对父元素定位*/
		      top: 90%;
		      left: 40%;
		      width: 20%;
		      height: 30px;
		      border-radius: 15px;
		      
		      background-color: gray;
		      opacity: 0.7;
		      
		      border:thin solid red;
		    }
		    
		    #myCarBu0{
		      position: absolute;
		      top: 5px;
		      left: 25%;
		      margin-left: -10px;
		    
		      width: 20px;
		      height: 20px;
		      border-radius: 50%;
		    
		      border: thin solid #9CCD64;
		    }
		    #myCarBu1{
		      position: absolute;
		      top: 5px;
		      left: 50%;
		      margin-left: -10px;
		    
		      width: 20px;
		      height: 20px;
		      border-radius: 50%;
		    
		      border: thin solid #9CCD64;
		    }
		    #myCarBu2{
		      position: absolute;
		      top: 5px;
		      left: 75%;
		      margin-left: -10px;
		    
		      width: 20px;
		      height: 20px;
		      border-radius: 50%;
		    
		      border: thin solid #9CCD64;
		    }
		  
		    #myCarContent img{
		        width: 100%;
		        height: 100%;
		        
		        border:thin solid red;
		    }
		 
		    button{
		        outline: none;
		    }
		        
		   #showCount{
		        position: absolute;
		        top: 350px;
		        width: 100%;
		        text-align: center;
		        /*z-index: 10000;*/
		        display: none;/*平常显示为none，需要调试查看的时候再显示出来*/
		    }

##### js

	(function(){
	    var calButtons=document.querySelectorAll("#myCarButtons button");
	    var carBtn=document.getElementById("myCarButtons");//选取按钮的上级div作为事件委托的不具体元素
	    var myCalContent=document.getElementById("myCarContent");
	    var calContents=new Array();//设置myCalContent的内容数组
	    var numBu=calButtons.length;//3个按钮，numBu为3
	        
	    var count=0;//初始化间隔计时器计时值
	    var showCount=document.getElementById("showCount");//在网页上显示计时数字
	    var flag=0;//标志是否按下按钮，1为按下，0为未按下
	    var start=null;//标记有无已经开启自动播放，若已开启自动播放，则不要再开启第二次
	    
	    calContents[0]="<a target='_blank' href='../articles/treasureHunt/2/IntroduceofGephi.html'><img src='pic/calContents1.png' alt='calContents0'/></a>";
	    calContents[1]="<a target='_blank' href='../articles/treasureHunt/1/Introduce of treasure hunt.html'><img src='pic/calContents2.png' alt='calContents1'/></a>";
	    calContents[2]="<img src='pic/calContents3.png' alt='calContents2'/>";
	    myCalContent.innerHTML=calContents[0];//初始化旋转木马版块myCalContent的内容
	    calButtons[0].style.setProperty("background-color","#9CCD64");//初始化第一个旋转木马按钮为浅绿
	    
	    /**********自动播放，每隔3000ms按钮变色，同时切换到相应图片****************/
	    function changeNowBu() {
	        showCount.innerHTML=count;///在网页上显示计时数字
	
	        if (count==0) {
	            calButtons[0].style.setProperty("background-color","#9CCD64");
	            calButtons[1].style.setProperty("background-color","white");
	            calButtons[2].style.setProperty("background-color","white");
	            myCalContent.innerHTML=calContents[0];
	        }
	        else if (count==1) {
	            calButtons[0].style.setProperty("background-color","white");
	            calButtons[1].style.setProperty("background-color","#9CCD64");
	            calButtons[2].style.setProperty("background-color","white");
	            myCalContent.innerHTML=calContents[1];
	        }
	        else if (count==2) {
	            calButtons[0].style.setProperty("background-color","white");
	            calButtons[1].style.setProperty("background-color","white");
	            calButtons[2].style.setProperty("background-color","#9CCD64");
	            myCalContent.innerHTML=calContents[2];
	        }
	        count++;
	        if (count==3) {
	            count=0;
	        }
	        if (flag==0) {
	            setTimeout(changeNowBu,3000);
	        }
	    }
	    start=setTimeout(changeNowBu,3000);//开启按钮间隔变更函数changeNowBu，changeNowBu中检测flag值决定要不要继续进行下去
	                                //此处采用超时调用代替间隔调用
	    /****按按钮时出现对应图片********/
	
	    EventUtil.addHandler(carBtn,"click",function(event){//使用事件委托
	        event=EventUtil.getEvent(event);
	        var target=EventUtil.getTarget(event);
	       // var pressedBu=e.target;
	        if (target.className=="aniBu") {//只有点到按钮上才有效
	            clearTimeout(start);
	            flag=1;
	            for (var i=0;i<numBu;i++) {//先将所有按钮都处理成白色，浅绿边
	                calButtons[i].style.setProperty("background-color","white");
	                calButtons[i].style.setProperty("border","thin solid #9CCD64");
	            }
	            
	            var n=target.id.slice(-1);//通过按下的按钮的id得知其是第几个按钮，再对按下的按钮进行相应操作
	            myCalContent.innerHTML=calContents[n];
	            count=n;
	            showCount.innerHTML=count;
	            target.style.setProperty("background-color","#9CCD64");
	            
	            start=setTimeout(function(){
	                flag=0;
	                changeNowBu();
	            },3000);////按下按钮等待3000ms后无其他操作，则将flag重设为0,并再次恢复执行按钮间隔变更函数changeNowBu    
	        }
	    });
	    
	})();

#### （5）问题与评价
- 该模块也是为了锻炼手写纯html+css+JavaScript能力，其实bootstrap的Carousel模块可以直接拿来用。
- 该处采用了事件委托、超时调用代替间歇调用等技巧，在一定程度上优化了代码性能。
- 该模块通用性有待提升，目前代码只适用于三个图片切换。其实可以通过优化JS代码，使得其可以适用于更多图片的切换。

<h3 id="5-4">4. 文章排列区</h3>
#### （1）模块截图
<img src="modules3.png" alt="导航栏模块">
#### （2）功能概述
- 将页面横向均分为三块，用以展示三个类型的文章。
- 每个类型文章的模块具有一个图标，一个若干文章的链接列表，和一个“阅读更多”链接。
- 移动光标至每个图标上，图标图片会形成一圈波动散开的光晕效果。
- 点击文章链接列表，会跳转至相应文章页面。
- 点击每个“阅读更多”链接，都会跳转到“精品文章”页面，不同的是其会激活“精品文章”页面左侧菜单的不同选项，并在右侧得到不同的内容。例如点击“数据新闻资讯”板块的“阅读更多”，跳转至“精品文章”页面后，处于激活状态的就是“数据新闻资讯”按钮，右侧得到的内容也是数据新闻资讯修改文章摘要列表。

点击“数据新闻资讯”版块“阅读更多”跳转到的“精品文章”页面：
<img src="modules3-1.png" alt="点击数据新闻资讯部分的阅读更多">

点击“经典作品赏析”版块“阅读更多”跳转到的“精品文章”页面：
<img src="modules3-2.png" alt="点击经典作品赏析部分的阅读更多">


点击“实用技能寻宝”版块“阅读更多”跳转到的“精品文章”页面：
<img src="modules3-3.png" alt="点击实用技能寻宝部分的阅读更多">

#### （3）实现方法
- 图标的光晕效果采用CSS3动画和JS事件处理程序配合实现。具体实现过程如下:
	- 为图标图片设置一个同样大小的兄弟元素，该元素的背景颜色设置为图标图片背景相同的颜色。
	- 制作一个.logoWave的动画样式。动作持续时间0.5s，动作播放1次。动作开始时刻元素放大倍数为1，透明度为1；动作结束时刻元素放大倍数为1.3，透明度为0.
	- 在JS中，通过EventUtil对象的addClass和removeClass方法，当鼠标移动至图标内部时，为上述图标的同背景色兄弟元素添加.logoWave动画；当鼠标离开图标内部时，去掉该元素.logoWave动画。
- “阅读更多”链接的不同跳转效果通过JS设置localStorage实现。具体实现过程如下：
	- 当点击第一个“阅读更多”时，设置localStorage数据“readGoto”为“option0”；点击第二个时“readGoto”为“option1”……
	- 这里要补充一下，在点击导航栏“精品文章”选项时，"readGoto"要设置为第一个值“option0"，以保证从此处进入“精品文章”页面激活的是第一个按钮。
	- 当“精品文章”页面打开时，会在window的onload事件发生时立即获取"readGoto"的值，从而激活不同的按钮得到不同的文章摘要列表。

#### （4）代码展示
##### html

	<div id="articleSection">
	      <div id="section0">
	        <div class="sectionLogo">
	          <img src="pic/news.png" alt="logoNews"/>
	          <div class="back0"></div>
	        </div>
	        <p class="sectionTitle">
	          数据新闻资讯
	        </p>
	        <div class="sectionList">
	          <p><a target="_blank" href="../articles/newsOverview/1/DJA2016.html">2016GEN数据新闻奖投稿已经截止</a></p>
	          <p><a target="_blank" href="../articles/newsOverview/2/DJA2015.html">2015GEN数据新闻奖获奖名单揭晓</a></p>
	        </div>
	        <div class="sectionReadMore">
	          <a target="_blank" href="../articles/index/articles.html">阅读更多>></a>
	        </div>
	      </div>
	      <div id="section1">
	        <div class="sectionLogo">
	          <img src="pic/notebookAndPen.png" alt="logoNews"/>
	          <div class="back1"></div>
	        </div>
	        <p class="sectionTitle">
	          经典作品赏析
	        </p>
	        <div class="sectionList">
	          <p><a target="_blank" href="../articles/workAppreciation/1/Donoharm.html">拉斯维加斯太阳报：拒绝伤害</a></p>
	          <p><a target="_blank" href="../articles/workAppreciation/2/Iraqi War Logs.html">thispic伊拉克战争日志</a></p>
	          <p><a target="_blank" href="../articles/workAppreciation/3/messagemachine.html">Message Machine</a></p>
	        </div>
	        <div class="sectionReadMore">
	          <a target="_blank" href="../articles/index/articles.html">阅读更多>></a>
	        </div>
	      </div>
	      <div id="section2">
	        <div class="sectionLogo">
	           <img src="pic/treasureBox.png" alt="logoNews"/>
	           <div class="back2"></div>
	        </div>
	        <p class="sectionTitle">
	          实用技能寻宝
	        </p>
	        <div class="sectionList">
	          <p><a target="_blank" href="../articles/treasureHunt/1/Introduce of treasure hunt.html">数据新闻寻宝开篇</a></p>
	          <p><a target="_blank" href="../articles/treasureHunt/2/IntroduceofGephi.html">玩转Gephi1</a></p>
	          <p><a target="_blank" href="../articles/treasureHunt/2/IntroduceofGephi.html">玩转Gephi2</a></p>
	        </div>
	        <div class="sectionReadMore">
	          <a target="_blank" href="../articles/index/articles.html">阅读更多>></a>
	        </div>
	      </div>
	    </div>

##### css

    #articleSection{
        position: absolute;
        top: 420px;
        width: 100%;
        height: 250px;
        
        
        border:thin solid red;
    }
    
    #section0{
        position: absolute;
        left: 12.5%;
        top: 0%;
        width: 20%;
        height: 100%;
        
        border:thin solid red;
    }
    
    #section1{
        position: absolute;
        left: 37.5%;
        top: 0%;
        width: 20%;
        height: 100%;
        
        border:thin solid red;
    }
    #section2{
        position: absolute;
        left: 62.5%;
        top: 0%;
        width: 20%;
        height: 100%;
        
        border:thin solid red;
    }
    
    .sectionLogo{
        position: absolute;
        left: 0%;
        top: 0%;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        /*background-color: blue;
        
        border: thin solid blue;*/
        
    }
    .sectionLogo img{
        position:absolute;
        width:104%;/*父元素position是absolute,如果子元素是position是absolute,若子元素不设置top,left,则默认以父元素为基准，top、left都为0*/
        height:104%;
        top: -2%;
        left: -2%;
        z-index: 10;
    }
    .back0{
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #87CEEB;
    }
    .back1{
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #EE82EE;
    }
    .back2{
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #FFD700;
    }
    .sectionTitle{
        position:absolute;
        top:0%;
        left:110px;
        width:150px;
        height:100px;
        margin:0px;/*作用于p的话，会自动生成margin*/
        padding:0px;
        
        font: 18px "微软雅黑",serif;
        color:gray;
        text-align: left;
        line-height:100px;
        
        border: thin solid blue;
        
    }
    .sectionList{
        position:absolute;
        top:90px;
        left:90px;
        width:170px;
        height:130px;
        
        border: thin solid blue;
    }
    .sectionList a{
        /*text-decoration:none;*/
        font: 14px "微软雅黑",serif;
        color:#404040;
    }
    .sectionReadMore{
        position:absolute;
        top:230px;
        left:90px;
        height:20px;
        width:100px;
        text-align:left;
       
        border: thin solid blue;
    }
    .sectionReadMore a{
        text-decoration: none;
        font: 14px "微软雅黑",serif;
        color:#404040;
        line-height:20px;
        
         border: thin solid red;
    }
    
    /**********************触发后应用于sectionLogo************/
	//这里@keyframes规则ie不支持没办法
    .logoWave{
        animation: scaleToBigger 0.5s ease-in-out 1;/*Internet Explorer 10、Firefox 以及 Opera 支持 animation 属性。*/
        -webkit-animation: scaleToBigger 0.5s ease-in-out 1;
    }
    @-webkit-keyframes scaleToBigger{
        0%{
           -webkit-transform: scale(1.0);/*Safari 和 Chrome 支持替代的 -webkit-transform 属性（3D 和 2D 转换）。*/
           opacity: 1;
        }
        100%{
           -webkit-transform: scale(1.3);
           opacity: 0;
        }
    }
    @-moz-keyframes scaleToBigger{
        0%{
           transform: scale(1.0);/*Internet Explorer 10、Firefox、Opera 支持 transform 属性。*/
           opacity: 1;
        }
        100%{
           transform: scale(1.3);
           opacity: 0;
        }
    }
##### js

	/***********鼠标放上去，会形成一波光晕********************/
	(function () {
	    
	    var sectionLogos=document.querySelectorAll(".sectionLogo");
	   //被z-index遮住的元素鼠标放上去不能感应到该元素？？
	    
	    //这里不能用事件委托，因为mouseenter,mouseleave不冒泡（其他鼠标事件都冒泡） 
	    for(var i=0;i<sectionLogos.length;i++){
	        sectionLogos[i].onmouseenter=addWave;//不能用onmouseover,这里虽然父元素和子元素区域重合
	        sectionLogos[i].onmouseleave=deleteWave;
	    }
	
	    function addWave(event) {
	        event=EventUtil.getEvent(event);
	        var target=EventUtil.getTarget(event);
	        if (target==sectionLogos[0]) {
	            EventUtil.addClass(document.querySelector(".back0"),"logoWave");
	           //document.querySelector(".back0").classList.add("logoWave");
	        }
	        else if (target==sectionLogos[1]) {
	            EventUtil.addClass(document.querySelector(".back1"),"logoWave");
	           //document.querySelector(".back1").classList.add("logoWave");
	        }
	        else if (target==sectionLogos[2]) {
	            EventUtil.addClass(document.querySelector(".back2"),"logoWave");
	           //document.querySelector(".back2").classList.add("logoWave");
	        }
	        
	    }
	    
	    function deleteWave(event){
	        event=EventUtil.getEvent(event);
	        var target=EventUtil.getTarget(event);
	        if (target==sectionLogos[0]) {
	            EventUtil.removeClass(document.querySelector(".back0"),"logoWave");
	            //document.querySelector(".back0").classList.remove("logoWave");
	        }
	        else if (target==sectionLogos[1]) {
	            EventUtil.removeClass(document.querySelector(".back1"),"logoWave");
	            //document.querySelector(".back1").classList.remove("logoWave");
	        }
	        else if (target==sectionLogos[2]) {
	            EventUtil.removeClass(document.querySelector(".back2"),"logoWave");
	            //document.querySelector(".back2").classList.remove("logoWave");
	        }
	    }
	
	})();
	   
	
	/***********************点击“阅读更多”跳转到article页面激活相应按钮******************/
	(function(){
	    var readmoreBtns=document.getElementsByClassName("sectionReadMore");
	
	    for (var i=0,len=readmoreBtns.length;i<len;i++) {
	        (function(a){
	            EventUtil.addHandler(readmoreBtns[a],"click",function(){
	                localStorage.setItem("readGoto","option"+a);
	            })
	        })(i);
	    }
	})();
	
	/******************点击导航栏的”精品文章“设置localStorage的readGoto为option0，即从此处进入article页面激活的是新闻资讯*/
	(function(){
	    var goodArticle=document.getElementById("goodArticle");
	    
	    EventUtil.addHandler(goodArticle,"click",function(){
	        localStorage.setItem("readGoto","option0");
	    });
	})();

#### （5）问题与评价
- 该部分的html结构基本也是采用position为absolute来定位，页面固定横向排列三块，故无法适应其他窄屏设备。后面可以尝试改进为弹性盒布局，实现当设备屏幕狭窄时，三块内容可以自动调整为纵向排列。
- 该部分的图标光晕动画无法满足所有浏览器。对于@-keyframes规则，Firefox 支持替代的 @-moz-keyframes 规则，Opera 支持替代的 @-o-keyframes 规则，Safari 和 Chrome 支持替代的 @-webkit-keyframes 规则——而IE，根本就不支持 @keyframes规则，所以无论如何都该效果都无法兼容IE。

<h3 id="5-5">5. 选项菜单+内容板块</h3>
#### （1）模块截图
参见以上三个图。
#### （2）功能概述
- 页面加载时“选项菜单”可以根据localStorage数据激活其中对应选项按钮，恢复其它按钮为非激活状态，同时“内容板块”可以载入相应内容。
- 可手动点击“选项菜单”中不同选项按钮，被点击按钮成为激活状态，同时恢复其它按钮非激活状态，同时“内容板块”可以载入相应内容。
- "内容板块”可根据载入内容的高度自动调整高度。
#### （3）实现方法
- “选项菜单”使用ul列表创建。选项按钮li采用position为absolute定位。li中嵌入a元素来控制选项名称在按钮上的位置。
- “内容板块”使用iframe创建。
- 根据localStorage数据激活不同按钮的功能与上述“文章排列区”模块密切结合，实现方法详见4.中功能概述。
- 点击按钮切换不同状态的功能，通过for循环+DOM污染法为各按钮绑定click事件处理程序实现。DOM污染法为不同按钮设置不同的index属性。事件处理程序通过target元素的index来决定其是否处于激活状态，同时决定“内容板块”载入什么内容。
- “内容板块”高度自适应通过为该iframe元素绑定“load”事件处理程序实现。在iframe内容载入后，通过iframeElement.contentDocument.body.scrollHeight获取内容页面高度，并将该内容页面高度赋值给该iframe元素，从而实现iframe高度自适应。

#### （4）代码展示
##### html
	
	   <div id="articleCate">
	        <ul class="articleMenu">
	            <li class="articleOption0"><a>数据新闻资讯</a></li>
	            <li class="articleOption1"><a>经典作品赏析</a></li>
	            <li class="articleOption2"><a>实用技能寻宝</a></li>
	        </ul>
	    </div>
	    
	    <iframe src="../newsOverview/index/index.html" name="myArticle" id="articleContent" scrolling="no">
	        
	    </iframe>
##### css

	/********************文章类型列表****************/
	#articleCate{
	    position:absolute;
	    margin:0;
	    top:150px;
	    left:13%;
	    
	    width:200px;
	    height:150px;
	    
	    border:thin solid red;
	    
	}
	.articleMenu{
	    position:absolute;
	    margin:0px;
	    padding: 0px;/*margin padding一定要设清楚*/
	    width: 100%;
	    height: 100%;
	    border:thin solid blue;
	}
	.articleOption0{
	      position: absolute;
	      margin: 0px;
	      padding: 0px;
	      
	      top: 0px;
	      left: 0px;
	      width: 185px;
	      height: 40px;
	      list-style-type: none;/*去掉li前面的点*/
	      background-color: #9CCD64;
	}
	.articleOption1{
	      position: absolute;
	      margin: 0px;
	      padding: 0px;
	      
	      top: 50px;
	      left: 0px;
	      width: 185px;
	      height: 40px;
	      list-style-type: none;/*去掉li前面的点*/
	      background-color: lightgray;
	
	}
	.articleOption2{
	      position: absolute;
	      margin: 0px;
	      padding: 0px;
	      
	      top: 100px;
	      left: 0px;
	      width: 185px;
	      height: 40px;
	      list-style-type: none;/*去掉li前面的点*/
	      background-color: lightgray;
	}
	.articleMenu li{
	     cursor: pointer;
	}
	.articleMenu a{
	      position: absolute;
	      margin: 0px;
	      padding: 10px 0px;
	      padding-left: 15px;
	      
	      height: 20px;/*其实已经超出了父元素*/
	      width: 100%;
	      line-height: 40px;
	      
	      font: 16px 微软雅黑,serif;
	      color: white;
	      text-decoration: none;
	}
	/******************文章内容版块***************/
	#articleContent{
	    position:absolute;
	    margin:0;
	    top:150px;
	    left:30%;
	    
	    width:780px;
	    height:700px;
	    
	    border: thin solid red;
	}

##### js

	(function(){
	    var articleOptions=document.querySelectorAll(".articleMenu li");
	    
	    //Dom污染法
	    
	    for(var i=0,len=articleOptions.length;i<len;i++){
	        articleOptions[i].index=i;
	        EventUtil.addHandler(articleOptions[i],"click",function(){
	            this.style.setProperty("background-color","#9CCD64");
	            for(var i=0;i<len;i++){
	                if (i!=this.index) {
	                    articleOptions[i].style.setProperty("background-color","lightgray");
	                }
	            }
	            var articleContent=document.getElementById("articleContent");
	            switch (this.index) {
	                case 0:
	                    articleContent.src="../newsOverview/index/index.html";
	                    break;
	                case 1:
	                    articleContent.src="../workAppreciation/index/index.html";
	                    break;
	                case 2:
	                    articleContent.src="../treasureHunt/index/index.html";
	                    break;
	                default:
	                    articleContent.src="../newsOverview/index/index.html";
	            }
	             /*****iframe自适应高度设置*******/
	            EventUtil.addHandler(articleContent,"load",function(){
	                var realHeight=articleContent.contentDocument.body.scrollHeight;
	                console.log("iframe's realHeight:"+realHeight);
	                
	                articleContent.style.height=realHeight+"px";
	            
	                console.log(articleContent.style.height);    
	            });
	          //先加载完iframe内容，再动态调整iframe的高。因为iframe的加载是非阻塞的，故要这么写。
	        });
	    }
	})();

#### （4）问题与评价
- “选项菜单”的按钮功能完全通过JS的“click"事件处理程序实现，没有必要在li元素内部应用a元素。此处使用a元素纯粹是为了给li添加一个内层元素，以方便按钮名称文字的布局，其实使用普通的p元素就可以实现。
- 这里为每个按钮都绑定了事件处理程序，事件处理程序有点多。后续可以考虑改用事件委托的形式绑定事件处理程序。
- iframe高度自适应并没有完全实现“自适应”。此处的效果是当iframe内容页面高度变大时，其高度可以随之变大；但若iframe内容页面高度变小，其高度不能随之变小只能保持上次的状态。具体原因和解决办法还没有找到。

<h3 id="5-6">6. 登录弹窗</h3>
#### （1）模块截图
<img src="modules4new.png" alt="登录/注册模块">
#### （2）功能概述
- 单击每个页面导航栏的“登录/注册”选项可以在页面中部弹出登录窗口。
- 打开登录弹窗，已注册用户输入用户名和密码后，点击“登录”按钮可以成功登录。登录成功的效果为导航栏“登录/注册”处变更为“你好，XX"。
- 打开登录弹窗后可通过点击右上角叉叉关闭弹窗。
- 未注册用户可以点击登录弹窗右下角“注册新账号”跳转到“注册新账号”页面进行注册。注册成功后后台会创建属于该用户的数据库。
- 忘记密码用户可以点击“忘了密码？”跳转到找回密码页面找回密码。（*未完成）

#### （3）实现方法
- 该模块通过一个单页html来创建弹窗内容。每个页面中部创建一个iframe来载入弹窗内容。该iframe默认状态diaplay为none。点击导航栏”登录/注册”按钮后display变更为block，从而实现“弹出效果”。
- 该弹窗显示后可以覆盖页面中处于重合位置的其他内容，通过为其设置css的z-index属性实现。
- 右上的关闭按钮的交互效果通过JS绑定mouseenter、mouseleave、click事件处理程序实现。mouseenter/mouseleave事件控制光标移动进入/离开关闭按钮时按钮的颜色变化。click事件控制该弹窗的关闭。
- 用户信息在后台用mysql数据库保存。“登录”即查找数据库中用户信息表数据；“注册新用户”即向数据库中的用户信息表插入数据。
- 登录过程（提交表单、数据库插入数据、将"你好，XX”写入相应位置）浏览器端通过Ajax实现，服务器端通过node.js实现。

#### （4）代码展示
##### html（登录弹窗内容页面）
	<body><!-- 566*300 -->
	    <div id="slogan">
	        <p>安全登录 谨防盗号</p>
	        <img src="safe.png" alt="安全登录"/>
	        <div id="midhr"><!-- 模仿竖着的分割线 -->
	        </div>
	    </div>
	
	    <div id="idpw">
	        <p id="idpwtitle">
	            帐号登录
	        </p>
	        <form name="idpwform" id="idpwform" method="post" action="http://www.wetryer.com:3000/login">
	            <label for="identity">
	               帐号：
	                <input  placeholder="用户名/邮箱/手机号" autofocus id="identity" name="identity"/>
	            </label>
	            <label for="password">
	                密码：
	                <input type="password" placeholder="登录密码" id="password" name="password"/>
	            </label>
	            <button type="submit" id="mylogin">登&nbsp录</button>
	        </form>
	        <div id="otheroption">
	            <a href="">忘了密码？</a>
	            <span></span>
	            <a href="regiPage/regiPage.html" target="_top">注册新帐号</a>
	        </div>
	    </div>
	    
	
	    <button id="close">×</button>
	</body>
##### css

		body{
		    position: absolute;
		    width: 564px;
		    height: 298px;
		    margin: 0px;
		    padding: 0px;
		    background-color: white;
		    
		    border: thin solid lightgray;
		}
		
		/******左半部分***********/
		#slogan{
		    position: absolute;
		    margin: 0px;
		    padding: 0px;
		    top: 0px;
		    left: 0px;
		    
		    width: 40%;
		    height: 100%;
		    
		   /* border-right:  thin solid gray;*/
		}
		
		#midhr{
		    position: absolute;
		    margin: 0px;
		    padding: 0px;
		    top: 20%;
		    left: 95%;
		    
		    width: 5%;
		    height: 60%;
		    z-index: 200;
		    border-right: thin solid lightgray;
		}
		
		#slogan p{
		    position: absolute;
		    margin: 0px;/*如果不设置margin:0px,则会自动生成*/
		    padding: 0px;
		    top: 30px;
		    left: 0px;
		    width: 100%;
		    height: 50px;
		    font: 19px 华文行楷, sans-serif;
		    line-height:50px;
		    text-align: center;
		    
		    /*border: thin solid red;*/
		}
		#slogan img{
		    position: absolute;
		    margin: 0px;/*img不会自动生成margin,但还是设置一下比较严密*/
		    padding: 0px;
		    top: 80px;
		    left: 0px;
		    width: 100%;
		    height: 190px;
		    
		   /* border: thin solid red;*/
		}
		
		
		
		/************右半部分************/
		#idpw{
		    position: absolute;
		    margin: 0px;
		    padding: 0px;
		    top: 0px;
		    left: 40%;
		    
		    width: 60%;
		    height: 100%;
		    
		    /*border: thin solid yellow;*/
		}
		
		#idpwtitle{
		    position: absolute;
		    margin: 0px;
		    padding: 0px;
		    top: 30px;
		    left: 10%;
		    width: 80%;
		    height: 50px;
		    font: 16px 黑体, sans-serif;
		    line-height: 50px;/*line-height要放在font的后面*/
		    
		    /*border: thin solid red;*/
		}
		
		#idpwform{
		    position: absolute;
		    margin: 0px;
		    padding: 0px;
		    top: 80px;
		    left: 10%;
		    width: 80%;
		    height: 150px;
		    
		    /*border: thin solid red;*/
		}
		#idpwform> :nth-child(1){/*索引从1开始*/
		    position: absolute;
		    margin: 0px;
		    padding: 0px;
		    top: 0px;
		    left: 0%;
		    width: 100%;
		    height: 40px;
		    font: 18px 黑体,serif;
		    line-height: 40px;
		    
		    /*border: thin solid blue;*/
		}
		#idpwform> :nth-child(2){
		    position: absolute;
		    margin: 0px;
		    padding: 0px;
		    top: 50px;
		    left: 0%;
		    width: 100%;
		    height: 40px;
		    font: 18px 黑体,serif;
		    line-height: 40px;
		    
		    /*border: thin solid blue;*/
		}
		#idpwform input{
		    position: absolute;
		    margin: 0px;
		    padding: 0px;
		    top: 0px;
		    left: 20%;
		    height: 90%;/*设为100%会超出父元素*/
		    width: 78%;/*设为80%会超出父元素*/
		    font: 16px 宋体,serif;
		    
		    border: thin solid lightgray;/*带设计圆角、阴影边框*/
		}
		#idpwform> :nth-child(3){/*就是button啦*/
		    position: absolute;
		    margin: 0px;
		    padding: 0px;
		    top: 110px;
		    left: 0%;
		    width: 100%;
		    height: 40px;
		    font: 18px 黑体,serif;
		    line-height: 40px;
		    text-align: center;
		    
		    color: white;
		    background-color: #9CCD64;
		    border-radius:5px;
		    
		  /*  border: thin solid blue;*/
		}
		
		#otheroption{
		    position: absolute;
		    margin: 0px;
		    padding: 0px;
		    top: 260px;
		    left: 40%;
		    width: 55%;
		    height:38px;
		    
		}
		#otheroption> :nth-child(1){
		    position: absolute;
		    margin: 0px;
		    padding: 0px;
		    top:0px;
		    left: 0%;
		}
		#otheroption> :nth-child(2){
		    position: absolute;
		    margin: 0px;
		    padding: 0px;
		    top: 20%;
		    left: 45%;
		    
		    height: 60%;
		    width: 5%;
		    border-right: thin solid lightgray;
		}
		
		#otheroption> :nth-child(3){
		    position: absolute;
		    margin: 0px;
		    padding: 0px;
		    top:0px;
		    left: 50%;
		  
		}
		#otheroption>a{
		    text-decoration:none;
		    width: 50%;
		    height: 38px;
		    font: 14px 宋体,serif;
		    line-height: 38px;
		    text-align: center;
		    color: gray;
		   
		    
		   /* border: thin solid red;*/
		}
		
		/*********右上角叉叉*********/
		#close{
		    position: absolute;
		    margin: 0;
		    padding: 0;
		    left: 92%;
		    top: 0%;
		    width: 7.8%;
		    height: 20px;
		    border: none;
		    border-left: thin solid lightgray;
		    background-color: white;
		    
		    font: 18px 黑体,serif;
		    line-height: 20px;
		    text-align: center;
		    outline: none;
		}

##### js（登录弹窗内容页面）

	/********关闭按钮的交互效果********/

	(function(){
	    var closeButton=document.querySelector("#close");
	    EventUtil.addHandler(closeButton,"mouseenter",function() {
	        closeButton.style.setProperty("background-color","#9CCD64");
	    });
	    EventUtil.addHandler(closeButton,"mouseleave",function() {
	        closeButton.style.setProperty("background-color","white");
	    });
	    
	    
	    EventUtil.addHandler(closeButton,"click",function(){
	        window.parent.document.getElementById("changeDiv").style.display="none";
	    })
	
	})();
	
	
	/***********登陆Ajax*********/
	
	(function(){
	    document.getElementById("mylogin").onclick=handleLogin;
	    var myLog=document.getElementById("mylogin");
	    EventUtil.addHandler(myLog,"click",handleLogin);
	    var htr1;
	    var inputElements1;
	    function handleLogin(event) {
	        event=EventUtil.getEvent(event);
	        EventUtil.preventDefault(event);
	       
	        var form1=document.forms["idpwform"];
	        
	        var formData1="";
	        inputElements1=document.getElementsByTagName("input");
	        for (var i=0,len=inputElements1.length;i<len;i++) {
	            if (inputElements1[i].type!="radio") {
	                formData1+=inputElements1[i].name+"="+inputElements1[i].value+"&";
	            }
	            else{
	                if (inputElements1[i].checked) {
	                    formData1+=inputElements1[i].name+"="+inputElements1[i].value+"&";
	                }
	            }
	            
	        }
	        
	        htr1=new XMLHttpRequest();
	    
	        htr1.onreadystatechange=myResponse;
	        htr1.open("POST",form1.action,false);
	        htr1.setRequestHeader('Content-Type','application/x-www-form-urlencoded');//设置请求标头，告诉服务器准备接受哪一种数据格式。
	        htr1.send(formData1);
	        //alert(htr1);
	    }
	    
	    function myResponse() {
	        if (htr1.readyState==4) {
	            if ((htr1.status>=200&&htr1.status<300)||htr1.status==304) {
	                window.parent.document.getElementById("regi").innerHTML=htr1.responseText;
	                window.parent.document.getElementById("changeDiv").style.setProperty("display","none");
	                
	                var welcomeValue=htr1.responseText;
	                localStorage.setItem("welcome",welcomeValue);
	                localStorage.setItem("identity",inputElements1[0].value);
	                console.log(localStorage.getItem("identity"));
	            }
	            else{
	                alert("unsuccessful");  
	            }
	            
	        }
	    }
	})();

##### html(引入弹窗的其他页面）

	   <div id="changeDiv">
	      <iframe  id="register" name="regiWindow" src="../../register/regiwindow.html" scrolling="no">
	        
	      </iframe>
	    </div>

##### css (引入弹窗的其他页面）

	   #changeDiv{
	        position: absolute;
	        top:150px;
	        left: 400px;
	        width: 566px;
	        height: 300px;
	        margin: 0px;
	        padding: 0px;
	        display: none;
	    }
	    #register{
	        position: absolute;
	        top:0px;
	        left: 0px;
	        width: 566px;
	        height: 300px;
	        margin: 0px;
	        padding: 0px;
	        /*display: none;/*使用display:none ，DOM树中就无此元素，其z-index就不会遮挡下面的页面内容*/
	        z-index: 100;
	        
	        border: thin solid red;
	    }
##### javascript (引入弹窗的其他页面）    
    (function(){
	    var regiBlock=document.getElementById("changeDiv");
	    var regiButton=document.getElementById("beforeRegi");
	    
	    EventUtil.addHandler(regiButton,"click",function(){
	        regiBlock.style.setProperty("display","block");
	    });
	    
	})();

###### node.js（包含处理“用户登录”和“用户注册”两部分的代码）

	var http=require('http');
	var mysql=require('mysql');
	var qs=require('querystring');
	
	var db=mysql.createConnection({
	    host:'127.0.0.1',
	    user:'root',
	    password:'12345',
	    database:'datanews'
	});
	
	var server=http.createServer(function(req,res){
	    var contentType=req.headers["content-type"];//读取请求头的Content-Type字段
	    switch (req.method) {
	        case 'POST':
	            switch (req.url) {
	                case '/':
	                    if (contentType) {
	                        if (contentType.indexOf("application/x-www-form-urlencoded")>-1) {
	                            addUser(db,req,res);
	                        }
	                        else{
	                            console.log('ContentType is not application/x-www-form-urlencoded')
	                        }
	        
	                    }
	                    else{
	                        console.log('no contentType');
	                    }
	                  
	                    break;
	                case '/login':
	                    if (contentType) {
	                       if (contentType.indexOf("application/x-www-form-urlencoded")>-1) {
	                           selectUser(db,req,res);
	                       }
	                       else{
	                           console.log('ContentType is not application/x-www-form-urlencoded')
	                        }
	        
	                    }
	                    else{
	                        console.log('no contentType');
	                    }
	                    break;
	                    
	            }
	            break;
	            
	    }
	});
	server.listen(3000,'www.wetryer.com');

	/************添加用户**********/
	function addUser(db,req,res) {
	    var fullBody='';
	    var dataObj=new Object();
	    req.setEncoding('utf8');
	    req.on(
	        'data',//数据每传一个出发一次'data'事件
	        function(chunk){
	            fullBody+=chunk.toString();
	            console.log(fullBody);
	        }
	    );
	    req.on(
	        'end',//数据传输完后出发'end'事件
	        function () {
	            var dBody=qs.parse(fullBody);//解析接收的数据字符串为对象类型
	            console.log(dBody);
	            dataObj.nickname=dBody["nickname"];
	            dataObj.identity=dBody["identity"];
	            dataObj.password=dBody["password"];
	            dataObj.gender=dBody["gender"];
	            dataObj.birthDay=dBody["birthDay"];
	            console.log(dataObj);
	            db.query(
	                "INSERT INTO userInfo(nickname,identity,password,gender,birthDay) "+
	                " VALUES(?,?,?,?,?)",
	                [dataObj.nickname,dataObj.identity,dataObj.password,dataObj.gender,dataObj.birthDay],
	                function (err) {
	                    if (err) {
	                        throw err;
	                    }
	                    else{
	                        console.log("seccussful");
	                        toBrowser(res);
	                        var userId;
	                        var tableName;
	                        db.query(
	                            "SELECT user_id FROM userInfo "+
	                            "WHERE identity=?",
	                            [dataObj.identity],
	                            function (err,rows) {
	                                if (err) {
	                                    throw err;
	                                }
	                                else{
	                                    userId=rows[0].user_id;
	                                    console.log(userId);
	                                    tableName='user_'+userId;
	                                    console.log(tableName);
	                                    //tableName=tableName.toString();
	                                    
	                                    db.query(//动态拼接只能用单引号
	                                        'CREATE TABLE IF NOT EXISTS '+tableName+
	                                        ' (arti_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, '+
	                                        'title VARCHAR(50) NOT NULL, '+
	                                        'maintext LONGTEXT, '+
	                                        'time TIMESTAMP)',
	                                        function (err) {
	                                            if (err) {
	                                                throw err;
	                                            }
	                                            else{
	                                                console.log("New user's article table has successfully created.")
	                                            }
	                                        }  
	                                    );
	                                }
	                            }
	                        );
	                    }
	                }
	            );
	            
	
	
	            
	           
	        }
	    )
	}
	
	function toBrowser(res) {//定义发送回浏览器数据的函数
	    res.writeHead(//写响应头
	        200,
	        "OK",
	        {
	            "Content-Type":"text/html",
	            "Access-Control-Allow-Origin":"http://www.wetryer.com"
	        }
	    );
	    res.write('<html><head><title>success</title></head><body><p>注册成功</p></body></html>');
	    res.end();
	}
	
	
	/****************查找用户************/
	function selectUser(db,req,res) {
	    var fullBody='';
	    var dataObj=new Object();
	    req.setEncoding('utf8');
	    req.on(
	        'data',//数据每传一个出发一次'data'事件
	        function(chunk){
	            fullBody+=chunk.toString();
	            console.log(fullBody);
	        }
	    );
	    req.on(
	        'end',//数据传输完后出发'end'事件
	        function () {
	            var dBody=qs.parse(fullBody);//解析接收的数据字符串为对象类型
	            console.log(dBody);
	            dataObj.identity=dBody["identity"];
	            dataObj.password=dBody["password"];
	            console.log(dataObj);
	            db.query(
	                "SELECT *FROM userInfo WHERE identity=? AND password=?",
	                [dataObj.identity,dataObj.password],
	                function (err,rows) {
	                    if (err) {
	                        throw err;
	                    }
	                    else{
	                        console.log("select seccussful");
	                        console.log(rows);
	                        console.info(rows);
	                        toBrowser1(res,rows);
	                    }
	                }
	            )
	        }
	    )
	}
	
	function toBrowser1(res,rows) {//定义发送回浏览器数据的函数
	    res.writeHead(//写响应头
	        200,
	        "OK",
	        {
	            "Content-Type":"text/html",
	            "Access-Control-Allow-Origin":"http://www.wetryer.com"
	        }
	    );
	    res.write('<a>您好，'+rows[0].nickname+'</a>');
	    res.end();
	}
#### （5）问题与评价
- 此处通过iframe引入另一个弹窗内容页面，又通过为“登录/注册”按钮绑定"click"事件来显示/隐藏该iframe，逻辑略累赘。其实不用使用iframe,直接将弹窗内容页面做成一个模块即可，然而这样该模块的独立性会变差。所以具体要怎么改进，有待进一步思考。
- 该模块对应的后端nodejs和前端Ajax程序有待进一步补充，例如目前未能给出登录失败后的具体处理方案，也未能在登录安全性方面做出措施。

