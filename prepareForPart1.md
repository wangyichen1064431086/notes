# 目录导航
* [一、面经搜集]("#1")
* [二、专题总结](#2)
* [三、面经题目详解](#3)
* 

<h2 id="1">一. 好贴搜集</h2>
腾讯电话面试（web前端）<http://my.oschina.net/june6502/blog/392914>

2015腾讯WEB前端开发面试题
<http://www.xzhichang.com/Strategy/Article_107017.html>

史上最全前端面试题（含答案）
<http://www.jobui.com/mianshiti/it/web/5066/>

腾讯的三轮面试（web前端）
<http://www.cnblogs.com/hustskyking/archive/2013/04/27/mianshi.html>

2015腾讯暑期实习生Web前端开发面试经历
<http://www.360doc.com/content/15/0414/22/7864192_463251422.shtml>

腾讯面试经历一
<http://www.cnblogs.com/bullub/archive/2013/03/13/2956897.html>

腾讯面试经历二 √
<http://www.cnblogs.com/bullub/archive/2013/03/14/2960458.html>

腾讯2013实习生面经
<http://www.cnblogs.com/tonylp/archive/2013/04/27/3048084.html>

#<h2 id="2"> 二、 专题总结</h2>
## 1.关于HTTP协议


## 2.关于数据库表的设计查询


## 3、关于自己做的网站的介绍


## 4.响应式布局设计
http://www.educity.cn/jianzhan/403677.html

***在自己的网站上实现一下***

## 5.算法


***晚上把《程序员面试宝典》拿过来***


## 6.div拖动 √
看《JavaScript高级程序设计》Chapter16

<http://www.cnblogs.com/dolphinX/p/3290520.html>

## 7.Ajax自动补全
<http://blog.csdn.net/tounaobun/article/details/8062781>

## 8.自定义js右键菜单√(见三）
<http://www.cnblogs.com/snandy/archive/2011/03/09/1977789.html>

## 9.字符串、数组方法记住！

## 10.面向对象编程原理
***看《JavaScript高级程序设计》Chapter6***

## 11.复习事件相关知识 √
***看《JavaScript高级程序设计》Chapter13***

## 12.框架集、复习BOM


## 13.websocker（前端好贴整理里面有涉及）

## 14.看一下nodejs原理部分,看一下Ajax

## 15.解决自己的网站的浏览器兼容问题，并总结方法
使用EventUtil对象的方法。

## 16.解决自己的网站的性能问题，并总结提高性能的方法

### 1.将一些函数及该函数相关代码放进立即执行的匿名函数，形成私有作用域，避免感染全局作用域。
参见《JavaScript高级程序设计》P378

### 2.事件相关的内存和性能
参见《JavaScript高级程序设计》P402
#### （1）对鼠标和键盘事件采用事件委托
#### （2）移除事件处理程序
对onload事件处理程序添加的东西，最后都通过onunload删除

## 17.按照一些原则进一步优化网站
### 1.参见《JavaScript高级程序设计》P379

## 18.页面解析顺序问题***看已总结过的好贴***

## 19.提高首屏时间的方法，提高资源加载速度的方法



# <h2 id="3">三、面经题目总结</h2>
## <h3 id="3.1">腾讯面试经历二</h3>
<http://www.cnblogs.com/bullub/archive/2013/03/14/2960458.html>
## 1. 
两个非常大的整数相加，整数大到计算机的整型数据已经无法保存了，要求写一个函数来进行计算。

	  var a="123456789";
        var b="22334455";
        var len=Math.max(a.length,b.length);
        var relAdvance=0;
        var result=[];
        
        
        for (var i=0;i<len;i++) {
            if (i==0) {
                aData=Number(a.slice(-1));
                bData=Number(b.slice(-1));
            }
            else{
                if(a.slice(-1-i,-i)){
                    aData=Number(a.slice(-1-i,-i));
                }
                else{
                    aData=0
                }
                
                if(b.slice(-1-i,-i)){
                    bData=Number(b.slice(-1-i,-i));
                }
                else{
                    bData=0;
                }
                
            }
                
            
          
            console.log(aData);
            console.log(bData);
            var rel=aData+bData+Number(relAdvance);
            console.log(rel);
            var relCurrent=String(rel).slice(-1);
            console.log(relCurrent);
            if (relCurrent.length>1) {
                var relAdvance=String(rel).slice(0,1);
            }
            else{
                var relAdvance=0;
            }
            console.log(relAdvance);
            result.unshift(relCurrent);
        }
        console.log(result);
        var resultStr=result[0];
        for (var i=1,l=result.length;i<l;i++) {
            var resultStr=resultStr.concat(result[i]);
        }
        
        console.log(resultStr);

## 2.
div 拖动
**答案：**
代码如下，详情见《JavaScript高级程序设计》P481，《HTML5权威指南》P788

	<!DOCTYPE html>
	
	<html>
	<head>
	    <title>Page Title</title>
	    <style type="text/css">
	        #src>*{
	            float: left;
	        }
	        #target, #src>img{
	            border: thin solid black;
	            height: 81px;
	            width: 81px;
	            padding: 2px;
	            margin: 4px;
	        }
	        #target{
	            
	            text-align: center;
	            display: table;
	        }
	        #target>p{
	            display: table-cell;
	            vertical-align: middle;
	        }
	        #target>img{
	            
	            height: 81px;
	            width: 81px;
	            padding: 2px;
	            margin: 1px;
	        }
	       img.dragged{
	          background-color: gray;
	       }
	    </style>
	</head>
	
	<body>
	    <div id="src">
	        <img draggable="true" id="banana" src="img/banana.png"/>
	        <img draggable="true" id="apple" src="img/apple.png"/>
	        <div id="target">
	            <p id="msg">Drop Here</p>
	        </div>
	    </div>
	    
	    
	    <script>
	        var src=document.getElementById("src");
	        var target=document.getElementById("target");
	        var msg=document.getElementById("msg");
	        
	        
	        var draggedID;
	        
	        target.ondragenter=handleDrag;
	        target.ondragover=handleDrag;
	        function handleDrag(e) {
	            if (e.dataTransfer.getData("Text")=="banana") {
	                 if (e.preventDefault) {
	                    e.preventDefault();
	                }
	                else{
	                    e.returnValue=false;
	                }   
	            }
	           
	        }
	        
	        
	        
	        target.ondrop=function(e){
	            var droppedID=e.dataTransfer.getData("Text");
	            var newElem=document.getElementById(draggedID).cloneNode(false);
	            target.innerHTML="";
	            target.appendChild(newElem);
	            if (e.preventDefault) {
	                e.preventDefault();
	            }
	            else{
	                e.returnValue=false;
	            }
	        }
	        
	        
	        
	        src.ondragstart=function(e){
	            e.dataTransfer.setData("Text",e.target.id);
	            draggedID=e.target.id;
	            e.target.classList.add("dragged");
	        }
	        src.ondragend=function(e){
	            var elems=document.querySelectorAll(".dragged");
	           for (var i=0;i<elems.length;i++) {
	            elems[i].classList.remove("dragged");
	           }
	        }
	
	    </script>
	</body>
	</html>

## 3.
自定义右键菜单

方法一：使用oncontextmenu事件
：所有浏览器都支持 oncontextmenu 事件， contextmenu 元素只有 Firefox 浏览器支持。

	<!DOCTYPE html>

	<html>
	<head>
	    <title>Page Title</title>
	    <style type="text/css">
	        #rWindow{
	            position: absolute;
	            width: 150px;
	            height: 150px;
	            background-color: lightgray;
	            display: none;
	            border:thin solid blue;
	        }
	        ul{
	            position: absolute;
	            margin: 0px;
	            padding: 0px;
	            width: 100%;
	            height: 100%;
	            border: thin solid red;
	            list-style-type: none;/*去掉li前的点*/
	        }
	        li{
	            position: absolute;
	            margin: 0px;
	            padding: 0px;
	            left: 0px;
	            height: 50px;
	            width: 100%;
	            text-align: center;
	            vertical-align: middle;
	            border: thin solid black;
	        }
	        ul :nth-child(1){
	            top: 0px;
	        }
	        ul :nth-child(2){
	            top:50px;
	        }
	        ul :nth-child(3){
	            top: 100px;
	        }
	        
	        
	        
	        
	    </style>
	</head>
	
	<body>
	    <div id="myDiv">test here</div>
	    
	    <div id="rWindow">
	        <ul>
	            <li><p>love</p></li>
	            <li><p>like</p></li>
	            <li><p>else</p></li>
	        </ul>
	      
	    </div>
	    <script src="prepare.js"></script>
	</body>
	</html>

javascript:
	
	```//EventUtil对象
	var div=document.getElementById("myDiv");

	EventUtil.addHandler(div,"contextmenu",function(event){
	    event=EventUtil.getEvent(event);
	    EventUtil.preventDefault(event);
	    
	    var rWindowLeft=event.clientX+"px";
	    var rWindowTop=event.clientY+"px";
	    var rWindow=document.getElementById("rWindow");
	 
	    rWindow.style.setProperty("left",rWindowLeft);
	    rWindow.style.setProperty("top",rWindowTop);
	    rWindow.style.setProperty("display","block");
	        
	    
	});
	EventUtil.addHandler(document,"click",function(event){
	    event=EventUtil.getEvent(event);
	     var rWindow=document.getElementById("rWindow");
	        rWindow.style.setProperty("display","none");
	 
	})



方法二：检测mouseenter的event.button==2

不能屏蔽掉oncontextmenu事件带来的默认菜单，故该方法并不可取

	var div=document.getElementById("myDiv");
	
	EventUtil.addHandler(div,"mousedown",function(event){
	    event=EventUtil.getEvent(event);
	    var buttonNum=EventUtil.getButton(event);
	    if (buttonNum==2) {
	        EventUtil.preventDefault(event);//这样好像屏蔽不掉原右键菜单，只能求助oncontextmenu事件
	        var rWindowLeft=event.clientX+"px";
	        var rWindowTop=event.clientY+"px";
	        var rWindow=document.getElementById("rWindow");
	     
	        rWindow.style.setProperty("left",rWindowLeft);
	        rWindow.style.setProperty("top",rWindowTop);
	        rWindow.style.setProperty("display","block");
	        
	    }
	});
	EventUtil.addHandler(document,"click",function(event){
	    event=EventUtil.getEvent(event);
	     var rWindow=document.getElementById("rWindow");
	        rWindow.style.setProperty("display","none");
	 
	})

## 3.
Ajax自动补全功能

## 4.
ul里面加100个li，然后过一秒让所有li反转，要求不能用innerHTML.

## 二）腾讯三轮面试

## 1.首字母变成大写

text-transform：none； 默认。定义带有小写字母和大写字母的标准的文本。
text-transform：capitalize	；文本中的每个单词以大写字母开头。
text-transform：uppercase	；定义仅有大写字母。
text-transform：lowercase；	定义无大写字母，仅有小写字母。
text-transform：inherit	；规定应该从父元素继承 text-transform 属性的值。

而你需要就是这句：text-transform：uppercase	；


## <h3 id="3.3">三）腾讯电话面试（web前端）</h3>
<http://my.oschina.net/june6502/blog/392914>

### 1.从地址栏输入域名，说说接下来会发生的事。
详情参见<http://www.360doc.com/content/16/0226/14/30980813_537536164.shtml>
#### 1）在浏览器里输入网址
例如我的数据新闻网站wetryer.com

#### 2）浏览器根据DNS系统查找域名对应的主机IP地址
具体来讲，查找过程如下：
##### （1）浏览器缓存
浏览器会缓存DNS记录一段时间。
##### （2）系统缓存
在浏览器缓存没有找到需要的记录，浏览器就会做一个系统调用（windows里是gethostbyname),获得系统缓存中的记录。
##### （5）路由器缓存
接着查询请求发向路由器，路由器一般也有自己的DNS缓存
##### （6）ISP的DNS缓存
接下来，是查找互联网移动提供商的DNS服务器。一般都能找到相应的缓存记录。
#####  (7)递归搜索
ISP的DNS服务器从.com顶级域名服务器到具体的域名服务器。

DNS这里令人担忧的是，facebook.com这样的域名看上去只对应一个单独的IP地址，所以效率问题是个瓶颈。解决办法是：
- **DNS循环服用**DNS负载均衡是通过循环复用实现的
- **地理DNS**根据用户所在的地理位置，通过把域名映射到多个不同的IP地址以提高可扩展性。
- **Anycast**是一个IP地址映射到多个物理主机的路由技术。大多数DNS服务器使用Anycast来获得高效低延迟的DNS查找。

#### 3）浏览器给web服务器发送一个HTTP请求。
因为很多页面都是动态页面（比如facebook、QQ空间），就算浏览器缓存中有，打开浏览器缓存也是过期了，所有不能从中读取，所以浏览器要把请求发送到facebook所在的服务器。

请求例如下面这个：
	
	 GET http://facebook.com/ HTTP/1.1
	 Accept: application/x-ms-application, image/jpeg, application/xaml+xml, [...]
	 User-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; [...]
	 Accept-Encoding: gzip, deflate
	 Connection: Keep-Alive
	 Host: facebook.com
	 Cookie: datr=1265876274-[...]; locale=en_US; lsd=WW[...]; c_user=2101[...]

GET 这个请求定义了要读取的URL： “http://facebook.com/”。 浏览器自身定义 (User-Agent 头)， 和它希望接受什么类型的响应 (Accept and Accept-Encoding 头). Connection头要求服务器为了后边的请求不要关闭TCP连接。请求中也包含浏览器存储的该域名的cookies。

像**fiddler、FireBug**这样的工具都可以用来查看原始HTTP请求。Chrome也可以查看当前网页的HTTP头<http://blog.sina.com.cn/s/blog_809ff62a01018jzq.html>

#### 4)facebook网站服务器的永久重定向
facebook服务器发回给浏览器的响应如下：

	HTTP/1.1 301 Moved Permanently
	 Cache-Control: private, no-store, no-cache, must-revalidate, post-check=0,
	 pre-check=0
	 Expires: Sat, 01 Jan 2000 00:00:00 GMT
	 Location: http://www.facebook.com/
	 P3P: CP="DSP LAW"
	 Pragma: no-cache
	 Set-Cookie: made_write_conn=deleted; expires=Thu, 12-Feb-2009 05:09:50 GMT;
	 path=/; domain=.facebook.com; httponly
	 Content-Type: text/html; charset=utf-8
	 X-Cnection: close
	 Date: Fri, 12 Feb 2010 05:09:51 GMT
	 Content-Length: 0

响应的是一个301的永久重定向，就是把网址补全了，访问http://www.facebook.com/而非http://facebook.com/

为什么服务器一定要重定向呢？

	答案有：

	1跟搜索引擎排名有关，如果一个页面有两个地址，就像http://www.igoro.com/ 和http://igoro.com/，搜索引擎会认为它们是两个网站，结果造成每一个的搜索链接都减少从而降低排名。
	而搜索引擎知道301永久重定向是 什么意思，这样就会把访问带www的和不带www的地址归到同一个网站排名下。

	2不同的网址会造成缓存友好性变差，一个页面有好几个名字的话，它可能在缓存里出现好几次。

#### 5)浏览器跟踪重定向地址
现在，浏览器知道了“http://www.facebook.com/”才是要访问的正确地址，所以它会发送另一个获取请求：

	 GET http://www.facebook.com/ HTTP/1.1
	 Accept: application/x-ms-application, image/jpeg, application/xaml+xml, [...]
	 Accept-Language: en-US
	 User-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; [...]
	 Accept-Encoding: gzip, deflate
	 Connection: Keep-Alive
	 Cookie: lsd=XW[...]; c_user=21[...]; x-referer=[...]
	 Host: www.facebook.com

#### 6)服务器处理请求
服务器接收到请求，开始处理。


a.比如映射网站地址结构的文件层次存储。。像http://example.com/folder1/page1.aspx这个地 址会映射/httpdocs/folder1/page1.aspx这个文件。web服务器软件可以设置成为地址人工的对应请求处理，这样 page1.aspx的发布地址就可以是http://example.com/folder1/page1。

b.请求处理阅读请求及它的参数和cookies。它会读取也可能更新一些数据，并将数据存储在服务器上。然后，需求处理会生成一个HTML响应。

#### 7）服务器发回一个HTML响应。

	HTTP/1.1 200 OK
	 Cache-Control: private, no-store, no-cache, must-revalidate, post-check=0,
	 pre-check=0
	 Expires: Sat, 01 Jan 2000 00:00:00 GMT
	 P3P: CP="DSP LAW"
	 Pragma: no-cache
	 Content-Encoding: gzip
	 Content-Type: text/html; charset=utf-8
	 X-Cnection: close
	 Transfer-Encoding: chunked
	 Date: Fri, 12 Feb 2010 09:05:55 GMT
	 
	 2b3Tn@[...]

报头中把Content-type设置为“text/html”。报头让浏览器将该响应内容以HTML形式呈现，而不是以文件形式下载它。

#### 8）浏览器开始显示HTML
在浏览器没有完整接受全部HTML文档时，它就已经开始显示这个页面了：

#### 9)浏览器请求获取HTML中的对象
比如img中的图片的地址等，以类似的过程查找域名、发送请求、重定向等等。

但不像动态页面那样，静态文件会允许浏览器对其进行缓存。有的文件可能会不需要与服务器通讯，而从缓存中直接读取。服务器的响应中包含了静态文件保存的期限 信息，所以浏览器知道要把它们缓存多长时间。

静态内容也能通过CDN（内容分发网络）轻松的复制。通常网站会使用第三方的CDN。例如，Facebook的静态文件由最大的CDN提供商Akamai来托管。

#### 10）浏览器发送异步AJAX请求。


**知识点补充：**

**DNS**（Domain Name System，域名系统），因特网上作为域名和IP地址相互映射的一个分布式数据库，能够使用户更方便的访问互联网，而不用去记住能够被机器直接读取的IP数串。通过主机名，最终得到该主机名对应的IP地址的过程叫做域名解析（或主机名解析）。

**ISP**(Internet Service Provider），互联网移动提供商，即向广大用户综合提供互联网接入业务、信息业务、和增值业务的电信运营商。例如三大基础运营商：电信，移动，联通。

**小区局域网宽带接入方式**，是国内大中城市目前最普及的一种宽带接入方式，互联网服务提供商（ISP）采用光纤接入到楼（FTTB），再通过建立小区局域网用网线接入用户家，为整幢楼或小区提供共享带宽（通常是10-100兆/秒）。



### 2.点击页面上一个按钮，显示一个居中图层。
***很简单，稍后做一下就好***

### 3.捕获和冒泡 √
***已复习，详见《JavaScript高级程序设计》P346

### 4.Ajax原理和过程
#### Ajax原理简介
Ajax是异步JavaScript和XML的缩写。该名称诞生于XML还是数据传输首选格式的时期，现在这种情况已经不复存在。

Ajax技术的核心是XMLHttpRequest对象（简称XHR)。XHR为向服务器发送请求和解析服务器响应提供了流畅的接口。能够以异步方式从服务器取得更多信息，意味着用户单击后，不用刷新页面也能获得新数据。即可以使用XHR对象取得新数据，然后通过DOM将新数据插入到页面中。

Ajax好处：
(1)可以异步生成请求，用户可以在表单被处理时继续与文档交互。而传统提交表单发送到服务器，用户必须等待服务器处理数据并生成响应。
(2)响应信息可以仅更新页面的一部分。而传统提交表单到服务器后，整个页面被刷新，所有上下文信息都丢失了。

#### Ajax过程
##### GET实例
		
	<!DOCTYPE HTML>
    <html>
        <head>
            <title>Ajax</title>
        </head>
        <body>
            <div>
                <button id="btn">Apples</button>
    
            </div>
            <div id="target">
                
            </div>
            <script>
                    var button=document.getElementById("btn");
                    button.onclick=handleButtonPress;
                    
                    function handleButtonPress(e) {
                        var xhr=new XMLHttpRequest();//创建XMLHttpRequest对象
                        
                        xhr.onreadystatechange=function(){
                            if (xhr.readyState==4) {//xhr.readyState:该属性表示请求/响应过程的当前活动阶段，4为完成，其值每变化一次都会触发一次readystatechange事件
                                if ((xhr.status>=200&&xhr.status<300)||xhr.status==304) {//xhr.status：响应的状态
                                    document.getElementById("target").innerHTML=xhr.responseText;//xhr.responseText：作为响应主体被返回的文本
                                }
                                else{
                                    document.getElementById("target").innerHTML="Request was unsuccessful: "+xhr.status;
                                }
                            }
                        }
                        
                        xhr.open("GET","example.html",true);//要发送的类型、请求的URL和是否异步发送
                        
                        xhr.send(null);//发送作为请求主体要发送的数据 
                    
                    }
            </script>
        </body>
    </html>
                  

点击按钮后，具体写法可总结为：<br>

		-  (1)var xhr=new XMLHttpRequest() 创建XMLHttpRequest对象
		-  (2）指定xhr.onreadystatechange事件函数，在函数中先检测readyState属性为4，再检测相应状态(xhr.status>=200&&xhr.status<300)||xhr.status==304) ，再在页面指定地方接受xhr.responseText(响应返回的文本）
		-  (3)xhr.open("GET"，URL,是否异步）
		-  (4)xhr.send()

##### POST实例(by json方法）

	<!DOCTYPE html>
    <html>
        <head>
            <title>Ajax2</title>
        </head>
        <body>
            <form id="fruitform" method="post" action="http://www.wetryer.com:3000/form"><!--点击按钮后跳转向页面http://127.0.0.1:8080/form-->
                <p>Bsnanas:</p>
                <p><input name="bananas" value="2"/></p>
                <p>Apples:</p>
                <p><input name="apples" value="5"/></p>
                <p>Cherries:</p>
                <p><input name="cherries" value="20"/></p>
                
                <p>Total:</p>
                <div id="results">0 items</div>
                <button id="submit" type="submit">Submit Form</button>
            </form>
        </body>
        <script>
            document.getElementById("submit").onclick=handleButtonPress;
            var xhr;
            function handleButtonPress(e) {
                e.preventDefault();//取消按钮提交表单的默认行为
                var form=document.getElementById("fruitform");
            
                var formData=new Object();
                var inputElements=document.getElementsByTagName("input");
                for (var i=0;i<inputElements.length;i++) {
                    formData[inputElements[i].name]=inputElements[i].value;
                }//将表单提交的数据转换为object类型
                
                
                xhr=new XMLHttpRequest();//创建XMLHttpRequest()对象
                xhr.onreadystatechange=handleResponse;//为xhr.onreadystatechange设置事件监听函数，readystatechange改变的时候触发
                xhr.open("post",form.action,true);//xhr.open()设置post方法，发送到的URL，是否异步
                xhr.setRequestHeader("Content-Type","application/json");//设置请求的首部字段Content-Type为application/json,告诉服务器在发送json数据
                xhr.send(JSON.stringify(formData));//浏览器向服务器发送数据前，要把数据从Object转换为JSON字符串
            }
            
            function handleResponse() {
                if (xhr.readyState==4) {
                    if (xhr.status>=200&&xhr.status<300||xhr.status==304) {
                        var data=JSON.parse(xhr.responseText);//把JSON数据解析为对象
                        document.getElementById("results").innerHTML="You ordered "+data.total+" items";
                    }   
                }
               
            }
        </script>
    </html>

点击按钮后，具体写法可总结为：

		（1）e.preventDefault()取消按钮提交表单的默认行为
		（2）获取表单数据，并将其转换为Object类型
		 (3)xhr=new XMLHttpRequest() 创建XMLHttpRequest对象
		 (4)指定xhr.onreadystatechange事件函数，在函数中先检测readyState属性为4，再检测相应状态(xhr.status>=200&&xhr.status<300)||xhr.status==304) ，再在页面指定地方接受xhr.responseText(响应返回的文本）,接收的文本要想读取方便也要用JSON.parse方法将其从JSON字符串解析为Object类型。
		 (5)xhr.open("POST"，URL,是否异步）
		 (6)xhr.setRequestHeader("Content-Type","application/json")设置请求的首部字段Content-Type为application/json,告诉服务器在发送json数据
		 (7) xhr.send(JSON.stringify(formData))浏览器向服务器发送数据前，要把数据从Object转换为JSON字符串

##### POST实例（by 表单默认编码方式）
html部分同上例，此处仅列出javascript部分。


 		<script>
            document.getElementById("submit").onclick=handleButtonPress;
            var xhr;
            function handleButtonPress(e) {
                e.preventDefault();//取消按钮提交表单的默认行为
                var form=document.getElementById("fruitform");
            
                var formData="";
                var inputElements=document.getElementsByTagName("input");
                for (var i=0;i<inputElements.length;i++) {
                    formData+=inputElements[i].name+"="+inputElements[i].value+"&";
                }//将表单提交的数据转换为编码表单数据的默认方式（application/x-www-form-urlencoded编码）。
                
                
                xhr=new XMLHttpRequest();//创建XMLHttpRequest()对象
                xhr.onreadystatechange=handleResponse;//为xhr.onreadystatechange设置事件监听函数，readystatechange改变的时候触发
                xhr.open("post",form.action,true);//xhr.open()设置post方法，发送到的URL，是否异步
                xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//设置请求的首部字段Content-Type为application/json,告诉服务器在发送json数据
                xhr.send(JSON.stringify(formData));//浏览器向服务器发送数据前，要把数据从Object转换为JSON字符串
            }
            
            function handleResponse() {
                if (xhr.readyState==4) {
                    if (xhr.status>=200&&xhr.status<300||xhr.status==304) {
                        document.getElementById("results").innerHTML=xhr.responseText;
                    }   
                }
               
            }
        </script>


### 5.http协议了解
<http://www.cnblogs.com/li0803/archive/2008/11/03/1324746.html>
***复习《图解HTTP》***

#### （1）HTTP协议相关网络基础
HTTP（HyperText Transfer Protocol，超文本传输协议）是基于请求与响应模式的、无状态的、位于七层网络协议中应用层的协议，常基于TCP的连接方式。HTTP1.1版本中给出了一种持续连接的方式。

HTTP于1990年问世，1997年公布的HTTP/1.1是目前最流行的版本。

##### TCP/IP协议族
网络是在TCP/IP协议族的。HTTP是其内部的一个子集。

网络传输七层协议是：应表会传网数物。

应用层：<br>
TCP/IP协议族的HTTP、FTP(文件传输协议）、DNS(域名系统）处于应用层。

传输层：<br>
TCP/IP协议族的TCP（传输控制协议）、UDP(用户数据报协议）处于该层。

网络层:<br>
规定了脱欧怎样的路径到达对方计算机，并把数据包传给对方。
TCP/IP协议族的IP（网际协议）在该层。

数据链路层：<br>
处理网络连接的硬件部分。包括操作系统、硬件设备驱动、网卡等。

##### 负责传输IP协议：与HTTP密切相关的协议之一
IP协议的作用是把数据包传送给对方。需要IP地址（节点被分配到的地址）和Mac地址（网卡所属的固定地址）。通信中转时利用Mac地址。传输路线通过路由机制。

##### 确保可靠的TCP协议：与HTTP密切相关的协议之二
TCP提供可靠的字节流服务，把大数据分割成报文段为单位的数据包，并能够确认数据最终是否送达了对方。

###### TCP三次握手策略
- 第一次：发送端发送带SYN(synchronize)标志的数据包给对方。
- 第二次：接收端收到后，传回一个带有SYN/ACK标志的数据包。
- 第三次：发送端再回传一个带ACK标志的数据包，代表“握手”结束。

##### DNS服务
位于应用层，负责域名解析。提供通过域名查找IP地址，或逆向从IP地址反查域名的服务。

##### HTTP通信过程各协议作用
	a.（客户端）客户端输入页面地址
	b.DNS：将域名解析为ip地址
	c.HTTP协议：生成针对目标Web服务器的HTTP请求报文。
	d.TCP协议：为了通信方便，将HTTP请求报文分为多个报文段，并通过三次握手将每个报文段可靠地传给对方。
	e.IP协议:搜索对方的地址，一边中转一边传送出去。
	f.（服务器端）TCP协议：通过三次握手从对方那里接收到报文段，并按序号以用来的顺序重组请求报文。
	g.HTTP协议：对被请求的服务器上的内容进行处理。
	h.请求的处理结果也同样利用TCP/IP回传给客户端

##### URL和URI
URI:统一资源标识符。<br>
URL:统一资源定位符。<br>
URI除了包含URL还包含URN(统一资源名称，命名资源，但不知如何定位）。所以，每个URL都是URI，URI不一定是URL。

#### （2）HTTP协议概述
##### HTTP是无状态协议
HTTP协议自身不对请求和响应之间的通信状态进行保存，即不保存之前的一切请求或响应报文的信息。

目的：为了更快地大量处理事务，所以要这么简单。

为了解决保持状态的技术：cookie技术。

##### HTTP方法
###### GET:获取资源
请求被URI识别的资源，并返回响应内容。
###### POST:传输数据
在已标识的资源后附加新数据，并接受数据的处理结果。
###### PUT:传输文件
传输文件到URI指定的位置
###### HEAD:获得报文首部
同GET，但不返回报文主体，只返回响应报文首部。
###### DELETE:删除文件
与PUT相反的方法。因其不带验证机制故一般不能使用。当遵守REST标准或配合Web验证机制时可能会开放。
###### OPTIONS:询问支持的方法
查询针对请求的URI指定资源支持的方法。返回结果可能是GET，POST,HEAD,OPTIONS。
###### TRACE:追踪路径
让服务器送回收到的请求信息给客户端。可查询发送出的请求是怎样被加工或篡改的，主要用于测试或诊断。
###### CONNECT:要求用隧道协议连接代理
要求在与代理服务器通信时建立隧道，实现用隧道协议进行TCP通信。

##### 持久连接节省通信量
###### 旧模式
HTTP早期版本是每进行一次HTTP通信都要先建立TCP连接，然后再断开。模式是：建立TCP连接→HTTP请求/响应→断开TCP连接→建立TCP连接→HTTP请求/响应→断开TCP连接……
###### 新模式
HTTP1.1和部分HTTP1.0有了**持久连接**的方法：只要任意一端没有明确提出断开连接，则保持TCP连接状态。模式是：建立TCP连接→HTTP请求/响应→→HTTP请求/响应→```→断开TCP连接
###### 管线化
持久连接使多数请求以管线化方式发送成为可能。以前是发送请求后等待并接受到响应才能发送下一个请求，现在是不用等待响应也能发送下一个请求。

#### （3）HTTP报文
##### 请求报文
包括：a.报文首部 (空行) b.报文主体<br>
a.报文首部包括：<br>
a.1请求行。<br>
包含用于请求的方法。请求行构成：方法+ URI+ 协议版本。<br>
a.2首部字段（请求首部字段，通用首部字段，实体首部字段）<br>
a.3其他，比如cookie。

##### 响应报文
包括：a.报文首部 b.空行 c.报文主体<br>
a.报文首部包括：<br>
a.1状态行。<br>
包含表明请求结果的状态码。状态行构成：协议版本+ 状态码+ 状态码的原因短语。<br>
a.2首部字段（响应首部字段，通用首部字段，实体首部字段）<br>
a.3其他，比如cookie。

##### 编码提升传输效率
###### 实体主体
通常，报文主体等于实体主体。当传输中进行编码操作时，实体主体内容发生了变化。

###### 内容编码
应用在实体主体上的编码格式，并保持实体主体信息原样压缩。内容编码后的实体由客户端接收并解码。

###### 分块传输编码
HTTP通信中，请求的编码实体资源未完全传输之前，浏览器无法显示请求页面。传输大容量数据时，通过把数据分割成多块，可以让浏览器逐步显示页面。

##### 可发送多多种数据的多部分对象集合
HTTP协议中采纳了多部分对象集合。发送的报文中可以含多类型实体。
需在首部字段添加多个Content-type和Content-Range

##### 可获取部分内容
为避免下载过程中遇到网络中断重头开始的情况，需要一种可恢复机制，即从之前中断处恢复下载。

要实现该功能需要指定下载的实体范围。用首部字段Range来指定资源的byte范围,例如bytes=50001~5000

##### 内容协商返回最适合的内容
内容协商机制是客户端和服务器端就响应的资源内容进行交涉，然后提供给客户端最为合适的资源。

包含在请求报文中的一些首部字段（Accept,Accept-Charset,Accept-Encoding,Accept-Language,Content-language)就是内容协商判断的标准。


#### （4）HTTP状态码
表示客户端HTTP请求的返回结果、标记服务器端是否处理正常、通知出现的错误等工作。

##### 状态码类别：
- 1XX：（信息性状态码）接收的请求正在处理
- 2XX：（成功状态码）请求正常处理完毕
- 3XX:（重定向状态码）需要进行附加操作以完成请求
- 4XX：（客户端错误状态码）请求有语法错误等导致服务器无法处理请求
- 5XX：（服务器错误状态码）服务器处理请求出错

##### 2XX
- 200 OK //请求处理成功
- 204 No Content//服务器处理成功，但无内容返回
- 206 Partial Content//客户端进行了范围请求，服务器成功处理了这部分GET请求。

##### 3XX
- 301 Moved Permanently//永久重定向。表请求的资源已被分配了新的URI,如指定资源路径最后没有加/
- 302 Found//临时重定向。
- 303 See Other//同302，但明确表示客户端应当采用GET方法获取资源。
- 304 Not Modified//未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。和重定向无关。

##### 4XX
- 400 Bad Request//客户端请求报文中有语法错误
- 401 Unauthorized//发送的请求需要通过HTTP认证
- 403 Forbidden//服务器理解此请求，但拒绝执行
- 404 Not Found//服务器无法根据客户端的请求找到资源

##### 5XX
- 500 Internal Server Error//服务器执行请求时内部发生了错误
- 503 Service Unavailable//服务器由于超载或系统维护，现在无法完成请求。

#### （7）确保Web安全的HTTPS
HTTP+加密+认证+完整性保护=HTTPS















# 四、自己的一些模糊点、遗忘点总结
## 1. window对象和document对象区别

#### Window对象:
表示浏览器中打开的窗口。<br>
如果文档包含框架（frame 或 iframe 标签），浏览器会为 HTML 文档创建一个 window 对象，并为每个框架创建一个额外的 window 对象。

####  Document对象：
每个载入浏览器的 HTML 文档都会成为 Document 对象。
Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问。

## 2. 浏览器兼容性总结
### 1.事件冒泡方式
所有现代浏览器都支持冒泡，IE5.5之前事件冒泡跳过html(从body直接u跳到document)。其他IE9、Firefox、Chrome和Safari则将事件一直冒泡到windows.

### 2.事件捕获支持度
老版本的浏览器不支持捕获，故最好都用冒泡。

### 3.三种事件处理程序
- IE事件处理程序attachEvent()和detachEvenr()只有两个参数，因为IE8及之前版本只支持冒泡。且attachEvent()和detachEvenr()的第一个参数带on("onclick"),DOM2级不带on("click").
- IE事件处理程序在全局作用域运行，不像DOM2级的和DOM0级的方法是在所属元素的作用域运行。其中的this===window.
- 在同一个事件上添加多个addEventListener(),或多个attachEvent()。addEventListener()顺序执行，IE事件处理程序attachEvent()是反过来的顺序执行的。
- DOM0级对每个事件只支持一个事件处理程序，DOM2和IE事件处理程序都支持多个。
- 支持IE事件处理程序的浏览器有IE和Opera。
- 支持DOM2级的有IE9、FF、Safari、Chrome、Opera。
- 支持DOM0的是**所有**浏览器。（所以IE浏览器只有IE9支持DOM2)


### 4.IE的事件对象与DOM中的event对象及其属性的不同***P358***
- IE在使用DOM0级方法添加事件处理程序时，要通过window.event获得event。IE使用其他方法则与DOM中的event相同。
- IE的event.srcElement和DOM的event.target属性相同
- IE取消默认事件方法:
		
		event.returnValue =false;

  	其他取消默认事件方法:

		event.preventDefault();	


- IE的cancelBubble属性和DOM的stopPropagation()作用类似。event.cancelBuble=true只能停止事件冒泡；而event.stopPropagation()则能停止冒泡和捕获。
- 
- 
***认真反复看EventUtil对象的写法！！***



## 3.removeEventListener()的第二个参数必须是addEventListener的同名函数的名字，不能是相同匿名函数

这样是有效的：

	 var btn=document.getElementById("myBtn");
        var handler=function(){
            alert(this.id);
        }
        btn.addEventListener("click",handler,false);
        btn.removeEventListener("click",handler,false);

这样是不行的：

	var btn=document.getElementById("myBtn");
      
        btn.addEventListener("click",function(){
            alert(this.id);
        },false);
        btn.removeEventListener("click",function(){
            alert(this.id);
        },false);


## 4.Event对象的target、currentTarget和事件处理程序中this三者的区别

- currentTarget和this：指被绑定事件监听器的元素
- target指事件的真正目标（比如currentTarget所指元素的具体子元素）

## 5.检测浏览器是否支持DOM3级的事件方法
检测浏览器是否支持焦点事件的方法：

	var isSupported=document.implementation.hasFeature("FocusEvent","3.0)
	var isSupported=document.implementation.hasFeature("FocusEvent","2.0)

检测浏览器是否支持鼠标事件的方法：

	var isSupported=document.implementation.hasFeature("MouseEvents","2.0");//不包括dbclick、mouseenter、mouseleave
	var isSupported=document.implementation.hasFeature("MouseEvent","3.0");

检测浏览器是否支持变动事件：

	var isSupported=document.implementation.hasFeature("MutationEvents","2.0");
	

## 6.不冒泡的事件

焦点事件：blur、focus
(其他焦点事件focusin、focusout、DOMFocusIn、DOMFocusOut都冒泡)

鼠标事件：mouseenter、mouseleave
(其他鼠标事件click、dbclick、mousedown、mouseup、mousemove、mouseout、mouseover都会冒泡)

## 7.鼠标事件的坐标属性
- 获取鼠标指针在视口的坐标:event.clientX、 event.clientY
- 获取鼠标指针在页面中的坐标：event.pageX、 event.pageY

		说明：IE8及之前IE 不支持event.pageX、event.pageY
		代替方法
		var div=document.getElementById("myDiv");
		EventUtil.addHandler(div,"click",function(){
		        var pageX=event.pageX;
		        var pageY=event.pageY;
		        if(pageX==undefined){
		            pageX=event.clientX+
		            (document.body.scrollLeft)||//混杂模式：document.compatMode=="BackCompat"
		            (document.documentElement.scrollLeft);//标准模式：document.compatMode=="CSS1Compat"
		        }
		        if(pageY==undefined){
		            pageY=event.clientY+
		            (document.body.scrollTop)||//混杂模式：document.compatMode=="BackCompat"
		            (document.documentElement.scrollTop);//标准模式：document.compatMode=="CSS1Compat"
		        }
		        alert(pageX+" "+pageY );
		});	

- 获取鼠标指针在屏幕的坐标:event.screenX、 event.screenY
- 获取鼠标指针相对于目标元素边界的坐标（仅ie支持）:event.offsetX、 offsetY

## 8.DOMContent事件与load事件
window.load事件: 页面中的一切都加载完毕时触发
document.DOMContentloaded:形成完整的DOM树后就触发，不管其中资源是否加载完。

## 9.检测浏览器是否支持某一事件
例如

 var isSupported=("onhashchange" in window);//

即一般方法为：

 	'onclick' in document.documentElement;
当然并不完全有效，要结合浏览器具体标准