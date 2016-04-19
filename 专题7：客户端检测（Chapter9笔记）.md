## 客户端检测
不到万不得已，不要使用客户端检测。应优先采用更通用的方法。

三种方法。优先考虑能力检测，第二考虑怪癖检测。用户代理检测最后考虑，因为这种方法对用户代理字符串具有很强的依赖性。

### 1.能力检测
#### 能力检测概念：
在编写代码前先检测特定浏览器的能力。

#### 比较可靠的能力检测方法

	function isHostMethod(object,property) {
	    var t=typeof object[property];
	    return t=="function" ||(!!(t=="object"&&object[property]))||t=="unknown";
	}
	
	var xhr=new XMLHttpRequest();
	console.log(isHostMethod(xhr,"open"));//true
	console.log(isHostMethod(xhr,"foo"));//false

### 2.怪癖检测
#### 怪癖检测概念：
怪癖就是浏览器中存在的bug。确定浏览器是否存在某个怪癖。与能力检测相比效率更低。
### 3.用户代理检测

完整的用户代理字符串检测脚本：

	/******************初始化client******************/
	var client=function(){
	    var engine={
	        opera:0,
	        webkit:0,
	        khtml:0,
	        gecko:0,
	        ie:0,
	        
	        ver:null
	    };
	    var browser={
	        ie:0,
	        firefox:0,
	        safari:0,
	        konq:0,
	        opera:0,
	        chrome:0,
	        
	        ver:null
	    };
	    var system={
	        win:false,
	        mac:false,
	        xll:false,
	        
	        //移动设备
	        iphone:false,
	        ipod:false,
	        ipad:false,
	        ios:false,
	        android:false,
	        nokiaN:false,
	        winMobile:false,
	        
	        //游戏系统
	        wii:false,
	        ps:false
	    };
	    
	  
	/**************用以下方法为待返回三个对象engine、browser、system写入相应属性
	/**********************识别呈现引擎和浏览器*************************/
	var ua=navigator.userAgent;//navigation.userAgent用户代理字符串
	
	if (window.opera) {//识别0pera引擎
	    engine.ver=browser.ver=window.opera.version();
	    engine.opera=browser.opera=parseFloat(engine.ver);
	}
	else if (/AppleWebKit\/(\S+)/.test(ua)) {//识别webkit引擎
	    engine.ver=RegExp["$1"];
	    engine.webkit=parseFloat(engine.ver);
	    
	    //确定是Chrome还是Safari
	    if (/Chrome\/(\S+)/.test(ua)) {
	        browser.ver=RegExp["$1"];
	        browser.chrome=parseFloat(browser.ver);
	    }
	    else if (/Version\/(\S+)/.test(ua)) {
	        browser.ver=RegExp["$1"];
	        browser.safari=parseFloat(browser.ver);
	    }
	    else{
	        var safariVersion=1;
	        if (engine.webkit<100) {
	            safariVersion=1;
	        }
	        else if (engine.webkit<312) {
	            safariVersion=1.2;
	        }
	        else if (engine.webkit<412) {
	            safariVersion=1.3;
	        }
	        else{
	            safariVersion=2;
	        }
	        browser.safari=browser.ver=safariVersion;
	    }
	}
	else if (/KHTML\/(\S+)/.test(ua)||/Konqueror\/([^;]+)/.test(ua)){//识别KHTML引擎
	    engine.ver = browser.ver= RegExp["$1"];
	    engine.khtml=browser.konq=parseFloat(engine.ver);
	}
	else if ( /rv:([^\)]+)\)Gecko\/\d{8}/.test(ua)) {//识别Gecko引擎
	    engine.ver = RegExp["$1"];
	    engine.gecko=parseFloat(engine.ver);
	    
	    //确定是不是Firefox
	    if (/Firefox\/(\S+)/.test(ua)) {
	        browser.ver=RegExp["$1"];
	        browser.firefox=parseFloat(browser.ver);
	    }
	}
	else if (/MSIE([^;]+)/.test(ua)) {//识别ie引擎
	    engine.ver=browser.ver=RegExp["$1"];
	    engine.ie=browser.ie=parseFloat(engine.ver);
	}
	
	
	/***************************识别平台*****************************/
	var p=navigator.platform;
	system.win=p.indexOf("Win")==0;//检测字符串开始的位置
	system.mac=p.indexOf("Mac")==0;
	system.xll=(p.indexOf("Xll")==0 || (p.indexOf("Linux")==0));
	
	/*****************************识别windows操作系统*************************************/
	if (system.win) {
	    if (/Win(?:dows)?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
	        if (RegExp["$1"]=="NT") {
	            switch (RegExp["$2"]) {
	                case "5.0":
	                    system.win="2000";
	                    break;
	                case "5.1":
	                    system.win="XP";
	                    break;
	                case "6.0":
	                    system.win="Vista";
	                    break;
	                case "6.1":
	                    system.win="7";
	                    break;
	                default:
	                    system.win="NT";
	                    break;
	            }
	            
	        }
	        else if (RegExp["$1"]=="9x") {
	            system.win="ME";
	        }
	        else{
	            system.win=RegExp["$1"];
	        }
	    }
	}
	/***********************识别移动设备******************************************/
	system.iphone=ua.indexOf("iphone")>-1;
	system.ipod=ua.indexOf("iPod")>-1;
	system.ipad=ua.indexOf("iPad")>-1;
	system.nokiaN=ua.indexOf("NokiaN")>-1;
	
	//windows mobile
	if (system.win=="CE"){
	    system.winMobile=system.win;
	}
	else if (system.win=="Ph") {
	    if (/Windows Phone OS(\d+.\d+)/.test(ua)) {
	        system.win="Phone";
	        system.winMobile=parseFloat(RegExp["$1"]);
	    }
	}
	
	//检测ios版本
	if (system.mac&&ua.indexOf("Mobile")>-1) {
	    if (/CPU(?:iPhone)?OS(\d+_\d+)/.test(ua)) {
	        system.ios=parseFloat(RegExp.$1.replace("_","."));//将system.ios设置为表示版本号的浮点值
	    }
	    else{
	        system.ios=2;//不能真正检测出来，靠猜测
	    }
	}
	
	
	//检测Android版本
	if (/Android(\d+\.\d+)/.test(ua)) {
	    system.android=parseFloat(RegExp.$1);
	}
	
	//识别游戏设备
	system.wii=ua.indexOf("Wii")>-1;
	system.ps=/playstation/i.test(ua);
	
	
	 //返回结果 
	return {
	    engine:engine,
	    browser:browser,
	    system:system
	};
	
	}();
	
	console.log(client);

知识点：

- 增强的模块模式
- **正则表达式**！！！！

