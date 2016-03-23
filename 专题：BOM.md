### 1.window对象
#### 1)delete全局变量
- 在全局作用域声明的所有变量、函数，都会变成window对象的属性和方法。
- 用var 定义的全局变量不能用delete删除，而直接在window对象上定义的属性可以用delete删除。因为用var添加的window属性的configurable特性为false。

	var age=29;
	console.log(window.age);
	
	window.color="red";
	console.log(window.color);
	
	delete window.age;//29 在ie<9时会抛出错误，在其他浏览器都返回false
	delete window.color;//"red" 在ie<9是会抛出错误，在其他浏览器都返回true
	
	console.log(window.age);//29 
	console.log(window.color);//undefined

#### 2）访问未声明的变量

	var newValue=oldValue;//抛出错误，因为oldValue未定义
	
	var newValue=window.oldValue;//不会抛出错误，因为这是一次属性查询
	console.log(newValue);//undefined

#### 3）框架
- top对象：最外围框架；
- parent对象：包含当前框架的框架；
- self对象：回指window

	<html>
	    <head>
	        <title>Frameset Example</title>
	    </head>
	    <frameset rows="160,*">
	        <frame src="" name="topFrame">
	        </frame>
	        <frameset cols="50%,50%">
	            <frame src="" name="leftFrame"></frame>
	            <frame src="" name="rightFrame"></frame>
	        </frameset>
	    </frameset>
	</html>


#### 4)跨浏览器获取窗口左上边位置。
	
	var leftPos=(typeof window.screenLeft=="number")?window.screenLeft:window.screenX;
	var topPos=(typeof window.screenTop=="number")?window.screenTop:window.Y;
	console.log(leftPos);

#### 5）跨浏览器获取页面视口大小。

	var pageWidth=window.innerWidth;//一般浏览器
	var pageHeight=window.innerHeight;
	
	if (typeof pageWidth!="number") {
	    if(document.compatMode=="CSS1Compat"){//IE6标准模式
	        pageWidth=document.documentElement.clientWidth;
	        pageHeight=document.documentElement.clientHeight;
	    }
	    else{                                    //IE6混杂模式
	        pageWidth=document.body.clientWidth;
	        pageHeight=document.body.clientHeight;
	    }
	    
	}
	
	console.log(pageWidth+" "+pageHeight);

#### 6）window.open()打开窗口

	var wroxWin=window.open("http://www.wrox.com/","wroxWindow",
	            "height=400,width=400,top=10,left=10,resizable=yes");
	
	wroxWin.moveTo(200,200);
	
	wroxWin.close();
	
	console.log(wroxWin.opener==window);//true

##### 跨浏览器检测弹出窗口是否被屏蔽

	var blocked=false;
	
	try {
	    var wrowWin=window.open("http://www.wrox.com","_blank");
	    if (wroxWin==null) {//浏览器内置程序屏蔽弹出窗口，window.open()直接为null
	        blocked=true;
	    }
	} catch(e) {  //浏览器扩展或其他程序屏蔽弹出窗口，会抛出错误
	    blocked=true;
	}
	
	console.log(blocked);

#### 7）超时调用和间歇调用
##### setTimeout(function,time):

第二个参数告诉JavaScript再过time时间再**把当前任务添加到队列**中，如果队列是空的，添加代码会立刻执行；否则要等前面的代码执行完再执行。

	var timeoutId=setTimeout(function(){
	    alert("Hello world");
	},3000);//告诉JavaScript再过3s再把当前任务添加到队列中，如果队列是空的，添加代码会立刻执行；否则要等前面的代码执行完再执行。
	
	clearTimeout(timeoutId);//指定事件尚未过去前调用clearTimeout,可以完全取消超时调用，结果跟啥都没发生一样

##### setInterval( , )

	var num=0;
	var max=10;
	var intervalId=null;
	
	function incrementNumber() {
	    num++;
	    
	    if (num==max) {
	        clearInterval(intervalId);
	        alert("Done");
	    }
	}
	
	intervalId=setInterval(incrementNumber,500);

超时调用模拟间歇调用（最佳）
	
	var num=0;
	var max=10;
	var intervalId=null;
	
	function incrementNumber() {
	    num++;
	    
	    if (num<max) {
	        setTimeout(incrementNumber,500);
	    }
	    else{
	        alert("Done");
	    }
	}
	
	setTimeout(incrementNumber,500);

#### 8）系统对话框：alert()、confirm()、prompt()（同步）
##### 确认对话框典型用法

	if (confirm("Are you sure?")) {
	    alert("I am so glad you are sure!");
	}
	else{
	    alert("I am sorry to hear you are not sure.");
	}

##### 提示对话框典型用法

	var result=prompt("what is your name?","Micheal");
	if (result!==null) {
	    alert("Welcome "+result);
	}

### 2.location对象
#### 1）解析查询字符串参数

	//var str=location.search;
	var str="?q=javascript&num=10";//测试用
	function getQueryStringArgs() {
	    var qs=(str.length>0?str.substring(1):""),
	    
	        args={},
	        
	        items=qs.length?qs.split("&"):[],
	        item=null,
	        name=null,
	        value=null,
	        
	        i=0,
	        len=items.length;
	    
	    for (i=0;i<len;i++) {
	        item=items[i].split("=");
	        name=decodeURIComponent(item[0]);
	        value=decodeURIComponent(item[1]);
	        
	        if (name.length) {
	            args[name]=value;
	        }
	        
	    }
	    return args;
	    
	}
	
	console.log(getQueryStringArgs());//Object {q: "javascript", num: "10"}
	console.log(getQueryStringArgs()["q"]);//"javascript"

#### 2）位置操作

	location.assign("http://www.wrox.com");

等价于：

	window.location="http://www.wrox.com";

等价于：

	location.href="http://www.wrox.com";

等价于：

	window.open("http://www.wrox.com");


修改URL:

	location.hash="#section1";
	location.search="?q=javascript";
	location.postname=" ";
	location.pathname=" ";
	location.port=8081;

禁用“后退”按钮：

	setTimeout(function(){
	    location.replace("http://www.wrox.com/");
	},1000);

重新加载当前页面：

	location.reload();//重新加载，若页面请求没变，则从浏览器缓存加载
	location.reload(true);//重新加载，从服务器加载

### 3.navigator对象
其属性通常用于检测显示网页的浏览器类型。

- navigator.userAgent:浏览器的用户代理字符串；
- navigator.plugins:浏览器中安装的插件信息的数组

**检测插件和注册处理程序代码先略***P211

### 4.screen对象

### 5.history对象
后退一页

	history.go(-1);

前进一页

	history.go(1);

前进两页

	history.go(2);

跳转至最近的某页面（可能前进可能后退）

	history.go("wrox.com");
