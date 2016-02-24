# JavaScript知识点研究整理（待拆为若干篇博客）
<br>

## 1.函数参数的按值传递
《JavaScript高级程序设计》P71


## 2.执行环境及作用域链
《JavaScript高级程序设计》P73

情况1：

	```
	var color="blue";
	
	function changeColor() {
	    if (color==="blue") {
	        var color="red";
	    }
	    else{
	        var color="blue";
	    }
	}
	changeColor();
	
	document.write(color);//blue
	```
情况2：

	```
	var color="blue";
	
	function changeColor() {
	    if (color==="blue") {
	        color="red";
	    }
	    else{
	        color="blue";
	    }
	}
	changeColor();
	
	document.write(color);//red
	```