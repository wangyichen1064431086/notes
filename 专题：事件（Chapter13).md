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
- 
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

**一般第三个参数都为false(添加到冒泡阶段）,这样可以最大限度地兼容浏览器。


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