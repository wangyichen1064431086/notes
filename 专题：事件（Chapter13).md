## 1.事件处理程序
### 1.HTML事件处理程序  
#### 1）用法举例
方法1：

 	<input type="button" value="click me" onclick="alert('Clicked')"/>

方法2：

	<input type="button" value="click me" onclick="alert(&quot;Clicked&quot;)"/>

方法3：

 	<input type="button" value="click me" onclick="showMessage()"/>
 	<script type="text/javascript">
        function showMessage() {
            alert("Clicked");
        }
    </script>

#### 2）独到之处
##### (1)event和this
这样指定事件处理程序会创建一个封装着元素属性值的函数。该该函数中有局部变量event对象和this(等于事件目标元素）值。

 	<input type="button" value="click me" onclick="alert(event.type)"/> //弹出"click"

	 <input type="button" value="click me" onclick="alert(this.value)"/>//弹出"click me"

##### (2）扩展作用域
先略

#### 3）缺点
- 1.时差问题：用户可能会在HTML元素一出现就在页面触发相应事件，但事件处理程序可能还不具备执行条件。如下改进：

		<input type="button" value="click me" onclick="try{showMessage();}catch(ex){}"/>

- 2.作用域扩展事件处理程序的作用域链在不同浏览器中会导致不同结果。
- 3.HTML与JavaScript代码紧密耦合。

### 2.DOM0级事件处理程序
- 优势：（1）简单；（2）跨浏览器
- this:引用当前元素；即其是在当前元素的作用域运行。
- 缺点：一个元素只能这样添加一个事件处理程序。

		var btn=document.getElementById("myBtn");
		btn.onclick=function(){//添加事件处理程序
		    alert(this.id);
		}
	
	
		btn.onclick=null;//取消事件处理程序

### 3.DOM2级事件处理程序
#### （1）添加事件处理程序：(Element).addEventListener(,,)

- 优势：可以添加多个事件处理程序,按顺序触发。

		var btn=document.getElementById("myBtn");
		btn.addEventListener("click",function(){
		    alert(this.id)    
		},false);
		btn.addEventListener("click",function(){
		    alert("Hello world");
		},false);

#### （2）移除事件处理程序：（Element).removeEventListener(,,)

直接传入相同的函数代码没用，其实那是个完全不同的函数：

	var btn=document.getElementById("myBtn");
	btn.addEventListener("click",function(){
	    alert(this.id)    
	},false);
	btn.removeEventListener("click",function(){
	    alert("this.id");
	},false);//没用

得像这样：

	var btn=document.getElementById("myBtn");
	var handler=function(){
	    alert(this.id);
	}
	btn.addEventListener("click",handler,false);
	btn.removeEventListener("click",handler,false);//有效

**一般第三个参数都为false(添加到冒泡阶段）,这样可以最大限度地兼容浏览器。**


### 4.IE事件处理程序：attachEvent()、detachEvent()
	var btn=document.getElementById("myBtn");
	var handler=function(){
	    alert("Clicked");
	};
	btn.attachEvent("onclick",handler);
	btn.detachEvent("onclick",handler);
注意：

 - 1.其第一个参数带on,DOM2级不带on
 - 2.只有两个参数，因为**IE8及更早版本不支持捕获，只支持冒泡**
 - 3.事件处理程序的作用域是**全局作用域**，this为window；而DOM0、DOM2事件处理程序作用域是其元素的作用域。

		var btn=document.getElementById("myBtn");
		var handler=function(){
		    alert(this===window);//true
		};
		btn.attachEvent("onclick",handler);

- 4.attachEvent()也可以为一个元素添加多个事件处理程序。与DOM2不同，这些事件处理程序是以相反的顺序触发。
- 5.用detachEvent()时与DOM2方法一样，第二个参数不能是匿名函数，只能采用相同函数的引用。

### 5.跨浏览器的事件处理程序

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
	    }    
	}

应用：

	var btn=document.getElementById("myBtn");
	var handler=function(){
	    alert("Hello world");
	}
	EventUtil.addHandler(btn,"click",handler);

缺陷：没有考虑所有的浏览器问题，如IE作用域的问题。

## 2.事件对象
### 1.DOM中的事件对象

方法/属性名称|类别|作用
---|---|---
preventDefault() |Function |取消事件的默认行为。在cancelable是true的时候可以用这个方法。
stopImmediatePropagation() |Function | 取消事件冒泡同时阻止当前节点上的事件处理程序被调用。
stopPropagation() |Function |取消事件的进一步捕获或冒泡，对当前节点无影响。在bubbles是true的时候可以用这个方法。
target|Element|事件真正的具体的目标
currentTarget|Element|被事件处理程序注册的元素
bubbles|Boolean|事件是否可以冒泡
cancelable|Boolean|是否可以取消事件默认行为
type|String|被触发的事件的类型
eventPhase|Integer|调用事件处理的阶段：1、2、3（捕获、目标、冒泡）

#### （1）this/currentTarget/target：区别
- this始终等于currentTarget为绑定了事件处理程序的元素，target为实际的目标元素
- 如果直接将事件处理程序绑定给了实际的目标元素，则this/currentTarget/target三者相同。

为目标元素绑定事件处理程序：

	var btn=document.getElementById("myBtn");
	
	btn.onclick=function(event){
	    console.log(this===event.target);//true
	    console.log(this===event.currentTarget);//true
	    console.log(this===btn);//true
	}

为非目标元素绑定事件处理程序：

	var btn=document.getElementById("myBtn");
	document.body.onclick=function(event){
	    console.log(this===event.target);//false
	    console.log(this===document.body);//true
	    console.log(event.target===btn);//true
	}


####（2）event.type属性：在一个函数要处理多个事件时使用

	var btn=document.getElementById("myBtn");
	
	var handler=function(event){
	    switch (event.type) {
	        case "click":
	            alert("Clicked");
	            break;
	        case "mouseover":
	            event.target.style.setProperty("background-color","red");
	            break;
	        case "mouseout":
	            event.target.style.removeProperty("background-color");
	            break;
	    }
	};
	btn.onclick=handler;
	btn.onmouseover=handler;
	btn.onmouseout=handler;

####（3）preventDefault()方法
例如：a元素默认行为是点击时导航到指定URL，这样可以阻止

	link.onclick=function(event){
	    event.preventDefault();
	}

#### （4）stopPropagation()方法
立即停止事件在DOM层次的传播。如下可以避免触发document.body上的事件处理程序。

	var btn=document.getElementById("myBtn");
	
	btn.onclick=function(event){
	    alert("clicked");
	    event.stopPropagation();
	}
	document.body.onclick=function(event){
	    alert("Body clicked");
	}

#### （5）eventPhase属性

	var btn=document.getElementById("myBtn");
	
	btn.onclick=function(event){
	    alert(event.eventPhase);
	}//2
	document.body.addEventListener("click",function(event){
	    alert(event.eventPhase);
	},true);//1
	document.body.addEventListener("click",function(event){
	    alert(event.eventPhase);
	},false);//3

### 2.IE中的事件对象

方法/属性名称|类别|作用
---|---|---
cancelBubble |Boolean | 默认为false,设置为true可以取消事件冒泡（与DOM的stopPropagation()方法作业相同）
returnValue |Boolean |默认为true,设置为false可以取消事件的默认行为（与DOM的preventDefault()方法作用相同）
srcElement|Element|事件的真正的具体的目标（与DOM的target属性作用相同）

### 3.跨浏览器的事件处理对象

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
	    }
	};
	

EventUtil对象使用例子：

	var link=document.getElementById("mylink");
	
	EventUtil.addHandler(link,"click",function(event){
	    event=EventUtil.getEvent(event);
	    EventUtil.preventDefault(event);
	    target=EventUtil.getTarget(event);
	    alert(target.tagName);
	});


## 3.事件类型
### 1.UI事件
不一定与用户操作有关的事件。
#### 1）load事件

##### 简介：
当页面完全加载后（包括所有图像、JavaScript文件、CSS文件等外部资源），就会触发window上面的load事件。

此时为该事件处理程序传入的event对象不包含有关这个事件的任何附加信息。只有在兼容DOM的浏览器中，event.target属性被设置为document。

##### 绑定方法：

方法一：

	EventUtil.addHandler(window,"load",function(event){
	    alert("loaded"); 
	})

方法二：

	<body onload="alert('loaded')">//只能为body添加onload属性，不能如方法一那样为body绑定load事件
	···
	<\body>

##### 应用
###### （1）动态创建img后确认是否加载完毕

	EventUtil.addHandler(window,"load",function(){
	    var image=document.createElement("img");
	    EventUtil.addHandler(image,"load",function(event){
	        event=EventUtil.getEvent(event);
	        var target=EventUtil.getTarget(event);
	        alert(target.src);
	    });
	    document.body.appendChild(image);
	    image.src="news.png";
	})

注意：

- window要首先绑定onload事件处理程序。因为向DOM中添加新元素的话必须保证页面已经加载完毕。**如果在页面加载完毕前操作document.body会导致错误**。
- 新图像元素不一定从添加到文档后才开始下载，而是一旦设置src就会下载，故得**在指定src属性之前先指定事件**。

###### （2）动态创建script后确认是否加载完毕

	EventUtil.addHandler(window,"load",function(){//该处括号内写上event也没事
	    var script=document.createElement("script");
	    EventUtil.addHandler(script,"load",function(event){
	        alert("loaded");
	    });
	    script.src="test2.js";
	    document.body.appendChild(script);
	})
- 与图像不同，只有在设置了src元素并将其添加到文档之后才会开始下载JS文件，故指定src和事件处理程序的先后顺序随意。

###### （3）动态创建样式后确认是否加载完毕

	EventUtil.addHandler(window,"load",function(event){
	   var link=document.createElement("link");
	   link.type="text/css";
	   link.rel="stylesheet";
	   EventUtil.addHandler(link,"load",function(event){
	        alert("loaded");
	   });
	   link.href="test1.css";
	   document.getElementsByTagName("head")[0].appendChild(link);
	   
	});
- 与图像不同，与script类似，只有在设置了href属性并将其添加到文档之后才会开始下载样式表。故绑定事件处理程序和设置href的顺序随意。

#### 2）unload事件
##### 简介
在文档完全被卸载时触发

#### 3）resize事件
##### 简介
当浏览器窗口被调整到一个新的高度或宽度时触发。IE、Safari、Chrome、Opera会在窗口变化了1像素时就触发resize事件。Firefox在用户停止调整窗口大小时才触发resize。

	EventUtil.addHandler(window,"resize",function(event){
	   alert("resized");
	});

#### 4)scroll事件
##### 简介
在window对象上发送，实际表示页面中相应元素的变化。可用scrollLeft和scrollTop来监控这一变化。

	EventUtil.addHandler(window,"scroll",function(event){
	   if (document.compatMode=="CSS1Compat") {//标准模式用document.documentElement
	        alert(document.documentElement.scrollTop);
	   }
	   else{//"backMode"混杂模式用document.body
	        alert(document.body.scrollTop);
	   }
	});

### 2.焦点事件

#### 1）blur事件：
在元素失去焦点时触发。不冒泡。

#### 2）focus事件：
在元素获得焦点时触发。不冒泡。

#### 3）focusin事件：
在元素获得焦点时触发。与focus等价，但它冒泡。

#### 4) focusout事件：
在元素失去焦点时触发。是blur的通用版，但它冒泡。

注意：
focusin/focusout支持浏览器是IE5.5+、Safari5.1+、Opera11.5+和Chrome；另有相同作用的DOMFocusIn/DOMFocusOut,只有Opera支持。

### 3.鼠标与滚轮事件
#### 1）常用鼠标事件
##### 简介
事件名称|简介
-------|---
click|单击鼠标左键或按下回车触发
dbclick|双击鼠标左键触发
mousedown|用户按下任意鼠标按钮时触发
mouseup|用户释放鼠标按钮时触发
mouseover|用户首次将鼠标从一个元素移入另一个元素边界之内时触发
mouseout|用户将鼠标从一个元素移入另一个元素时触发，另一个元素可能位于前一个元素的内部或外部、子元素
mouseenter|在鼠标光标从元素外部首次移动到元素范围之内（包括其子元素）时触发。不冒泡。
mouseleave|在位于元素上方的鼠标光标移动到元素范围之外时触发（移到后代元素上不触发）。不冒泡。

##### 注意：
- 除mouseenter,mouseleave不冒泡，其他都冒泡
- 几个相关事件的触发顺序：
	1. mousedown
	2. mouseup
	3. click
	4. mousedown
	5. mouseup
	6. click
	7. dbclick

#### 2)几种坐标位置
##### （1）光标视口位置：event.clientX/clientY
表示事件发生时,鼠标光标在**视口**中的水平和垂直坐标。注意：其不包括页面滚动距离。

	EventUtil.addHandler(document.body,"click",function(event){
	    event=EventUtil.getEvent(event);
	    alert("clientX:"+event.clientX+" clientY:"+event.clientY);
	})

##### （2）光标页面位置：event.pageX/pageY
表示事件发生时，鼠标光标在页面中的位置。注意：其实从页面本身计算坐标而非视口。

	EventUtil.addHandler(document.body,"click",function(event){
	    event=EventUtil.getEvent(event);
	    alert("pageX:"+event.pageX+" pageY:"+event.pageY);
	})

##### (3)屏幕坐标位置:event.screenX/screenY

	EventUtil.addHandler(document.body,"click",function(event){
	    event=EventUtil.getEvent(event);
	    alert("screenX:"+event.screenX+" screenY:"+event.screenY);
	})

#### 3)修改键属性:event.shiftKey/ctrlKey/altKey/metaKey
这些键常常被用来修改鼠标事件的行为，对应四个属性表示修改键的状态：shiftKey,ctrlKey,altKey,metaKey。键被按下，则值为true;否则为false。

	var btn=document.getElementById("myBtn");
	EventUtil.addHandler(btn,"click",function(event){
	    event=EventUtil.getEvent(event);
	    var keys=new Array();
	    
	    if (event.shiftKey) {
	        keys.push("shift");
	    }
	    if (event.ctrlKey) {
	        keys.push("ctrl");
	    }
	    if (event.altKey) {
	        keys.push("alt");
	    }
	    if (event.metaKey) {
	        keys.push("meta");
	    }
	    alert("Keys:"+keys.join(","));
	    
	})

#### 4)相关元素
- 对mouseover而言：事件主目标是获得光标的元素，相关元素是失去光标的元素。
- 对mouseout而言：事件主目标是失去光标的元素，修改元素是获得光标的元素。

相关元素为:event.relatedTarget属性（DOM),event.fromElement/toElement(IE)

兼容性代码：

	var EventUtil={
		···
		 getRelatedTarget: function(event){
	        if (event.relatedTarget) {
	            return event.relatedTarget;
	        }
	        else if(event.fromElement) {
	            return event.fromElement;
	        }
	        else if(evnet.toElement){
	            return event.toElement;
	        }
	        else{
	            return null;
	        }
	    }
	}

#### 5）鼠标按钮属性：event.button

对于mousedown和mouseup事件来说，其具有event.button属性。
DOM的event.button可为：
- 0：左键
- 1：中间滚轮
- 2：右键

IE较复杂

#### 6）鼠标滚轮事件：
##### （1）mousewheel事件（IE/Opera/Chrome/Safari)
可检测器event.wheelData属性，该属性是120的倍数（正数表向前滚，负数表向后滚,Opera中正负号颠倒）。

	EventUtil.addHandler(document,"mousewheel",function(event){
	    event=EventUtil.getEvent(event);
	    alert(event.wheelData);
	})

##### (2)DOMMouseScroll事件（FireFox)
与mousewheel事件类似，对应信息保存在detail属性中,为3的倍数（正数表向前滚，负数表向后滚）。
