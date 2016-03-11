## 一、试卷搜集
### 1.腾讯web前端开发工程师笔试题及答案
<http://wenku.baidu.com/link?url=BZHymcJp0IEOl_EDrDHXCZv7CNwBXAVjSUsZ19AbxqmmgImkRlGAsPPfjQEQVkXuzt7VIBiwh6zPCZVuCTJnw8dusl8Lp1o9UHoUge7NC-C>
已下载
### 2.2015腾讯web前端笔试题
<http://www.yjbys.com/qiuzhizhinan/show-466640.html>

### 3.腾讯web前端开发方向实习笔试需要准备什么？
<https://www.zhihu.com/question/20966351/answer/24401878>

### 4.腾讯2013笔试题
<http://www.cnblogs.com/wolm/p/3383474.html>

### 5.2012腾讯实习生web前端笔试题
<http://www.mianwww.com/html/2012/04/16214.html>

### 6.腾讯实习生网页重构组招聘公开试题（含答案）
<http://www.mianwww.com/html/2012/04/16216.html>

### 7.2015腾讯暑期实习生Web前端开发笔试面试经历
<http://www.360doc.com/content/15/0414/22/7864192_463251422.shtml>

## 二、题目解答研究
### 1.腾讯web前端开发工程师笔试题及答案
<http://wenku.baidu.com/link?url=BZHymcJp0IEOl_EDrDHXCZv7CNwBXAVjSUsZ19AbxqmmgImkRlGAsPPfjQEQVkXuzt7VIBiwh6zPCZVuCTJnw8dusl8Lp1o9UHoUge7NC-C>
已下载

#### 1.如何实现事件委托？并用事件委托修改下列代码。

	<!DOCTYPE HTML>
	<html>
	    <head>
		<meta charset="utf-8" />
		<title>js性能优化</title>
	    </head>
	    <body> 
		<ul id='list'>
	            <li>精通css</li>
	            <li>精通js</li>
	            <li>精通html</li>
		</ul>
		 
		<script type="text/javascript">
	            (function(){
	                var a=document.getElementById('list');
	                var b=a.getElementsByTagName('li');
	                for(var i=0;i<b.length;i++){
	                    b[i].addEventListener(
	                        'click',
	                        function(e){
	                            var c = e.target; 
	                            alert(c.innerHTML);
	                        },
	                        false
	                    );
	                }
	                
	            })();
		</script>
		
	   </body>
	</html>

**答案：** script部分改为

	  (function(){
            var a=document.getElementById('list');
            a.addEventListener(
                'click',
                function (e) {
                    alert(e.target.innerHTML);
                },
                false
            );
            
        })();

将每个具体元素对象上绑定的事件处理程序，绑定到其上层元素上，再通过e.target获取实际触发事件的目标元素即具体元素对象。这叫做事件委托。

**事件委托的好处**添加到页面上的事件处理程序的个数直接关系到页面的整体运行性能。因为（1）每个事件处理程序都是一个函数，函数都是对象，都会占用内存；内存中的对象越多，性能就越差。（2）必须事先指定所有事件处理程序会导致较多的DOM访问次数，会延迟整个页面的交互就绪时间。

#### 2.将10进制的数302转为二进制。
**答案：**

方法一：除2取余，倒序排列

	(function(){
	    var a=302,rel="";
	    while (1) {
	        var i=a%2;
	        rel=i+rel;
	        a=Math.floor(a/2);
	        if (a==0) {
	            break;
	        }
	        
	    }
	    console.log(rel);//"100101110"
	    
	})();

循环的另一种写法：

	(function(){
	    var a=302,rel="";
	    while (a>=1) {
	        var i=a%2;
	        rel=i+rel;
	        a=parseInt(a/2);
	    }
	    console.log(rel);
	    
	})();

***注意！！：***

与C不同，js两个整数相除会得到小数，要实现C一样的效果就需要把结果向下取整。向下取整方法有

	- Math.floor(a)
	- parseInt(a)

方法二:利用现成方法.toString(2)

	(function () {
	    var a=302;
	    var rel=a.toString(2);
	    console.log(a);//302
	    console.log(typeof a);//number
	    console.log(rel);//100101110
	    console.log(typeof rel);//string
	})();

#### 4.js运算符的优先级
参见<https://technet.microsoft.com/zh-cn/library/z3ks45k7>

<img src="img/jsYunsuanfuYouxianji.png" alt="运算符优先级"/>

大体是 一元运算符>算术运算符>关系运算符>逻辑运算符

圆括号用于改变由运算符优先级确定的计算顺序。这就是说，先计算完圆括号内的表达式，然后再将它的值用于表达式的其余部分。

#### 4.typeof(null)=_____
**答案：** object

说明：null是空对象指针

#### 5.	JS中给全部都是数字元素的数组排序的原生方法是___，其中使用的是___排序方法。

**答案：**sort  冒泡

**说明：**参见《javaScript高级程序设计》P92

sort（）对数组就地重排序。排序时，sort()会调用每个数组项的toString()转型方法，然后比较得到的**字符串**。默认Array.sort()按字符串升序排列。

	var arr1=[0,10,1,15,5];
	var arr2=arr1.sort();
	console.log(arr1);//[0,1,10,15,5]
	console.log(arr2);//[0,1,10,15,5]

其可接受一个比较函数作为参数。例如，从小到大排序如下：

	
	function compare(value1,value2) {
	    if (value1<value2) {
	        return -1;
	    }
	    else if (value1==value2) {
	        return 0;
	    }
	    else{
	        return 1;
	    }
	}
	var arr3=arr1.sort(compare);
	console.log(arr1);//[0,1,5,10,15]
	console.log(arr3);//[0,1,5,10,15]

对于数值类型或其valueOf()方法（返回Array对象的原始值，***待研究***）返回数值类型的对象类型，可以直接用相减的比较函数。

	function compare1(value1,value2) {
	    return value1-value2;
	}
	var arr4=arr1.sort(compare1);
	console.log(arr1);//[0,1,5,10,15]
	console.log(arr4);//[0,1,5,10,15]

#### 6.NaN*6=___
**答案：** NaN

	关于NaN
	1. 任何涉及NaN的操作都会返回NaN
	2. NaN与任何值都不相等，包括NaN本身
	3. typeof NaN结果为 number
	4. isNaN(x)函数可以确定x是否“不是数值”
	
			console.log(typeof(NaN));//number
			console.log(NaN==NaN);//false
			console.log(isNaN(NaN));//true
			console.log(isNaN(10));//false
			console.log(isNaN("10"));//false,"10"转换为10
			console.log(isNaN("abc"));//true,"abc"转换为NaN
			console.log(isNaN(true));//false,true转换为1
			console.log(isNaN(false));//false,false转换为0

#### 7.JS中调用某个函数之前，如何知道该函数最多可以传递多少个参数？该函数被调用时，如何知道传了多少个参数过来？
**答案：** 函数名.length就是它最多能接受的参数个数（***待研究求证***）

arguments.length就是已经传递过来的参数个数。

#### 8.软件HttpWatch的作用？
**答案：** 参见<http://baike.baidu.com/view/425789.htm>

HttpWatch是强大的网页数据分析工具.集成在Internet Explorer工具栏.包括网页摘要.Cookies管理.缓存管理.消息头发送/接受.字符查询.POST 数据和目录管理功能.报告输出.HttpWatch 是一款能够收集并显示深层信息的软件。它不用代理服务器或一些复杂的网络监控工具，就能够在显示网页同时显示网页请求和回应的日志信息。甚至可以显示浏览器缓存和IE之间的交换信息。集成在Internet Explorer工具栏。

HttpWatch也可以集成到火狐浏览器中。

#### 9.JS如何得到HTTP头信息？
**答案：** 利用Ajax的XMLHttpRequest对象的方法。
	
	- xhr.setRequestHeader() 可设置自定义请求头部信息
	- xhr.getResponseHeader(头部字段) 可取得相应相应头部的信息
	- xhr.getAllResponseHeader()可取得包含所有响应头部信息的长字符串
	

**答案补充：**

（***待研究***）
需要注意的是，通常，在IE下不能完整的获取header报头数据，只能取到如下header数据：

	X-Powered-By:
	X-UA-Compatible:
	Keep-Alive:
	Transfer-Encoding:
	Content-Type:
比如你要获取时间戳，在IE下必须做些特殊处理，需要在后端设置一下，关闭缓存：
  
	header( 'Cache-Control: no-store'); // 关闭缓存
