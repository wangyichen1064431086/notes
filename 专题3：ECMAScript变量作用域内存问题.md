
## 《JavaScript高级程序设计》Chapter4笔记
#### 1. 关于引用类型值的访问
两种数据类型的值：基本类型值和引用类型值。

引用类型的值是保存在内存中的对象，JavaScript不允许直接访问内存中的位置，即**不能直接操作对象的内存空间**。在操作对象时，实际上是**操作对象的引用而非实际的对象**。故引用类型的值是按**引用**访问的。

#### 2. 复制基本类型值和引用类型值的不同机制

- 复制基本类型值：重新生成一个新值，将原值复制到位新变量分配的位置上。两个变量完全独立，新变量只是原值的一个副本，它们参与任何操作互相不影响。

- 复制引用类型值：值的副本实际是一个**指针**，这个指针指向存储在堆中的一个对象。复制结束后，两个变量将引用同一个对象。改变其中一个变量，就会改变另一个。

		var obj1=new Object();
		var obj2=obj1;
		
		obj1.name="Nicholas";
		console.log(obj2.name);//"Nicholas"

#### 3. 函数参数的按值传递
访问变量有按值和按引用两种方式，函数参数只能按值传递。

- 传递基本类型值：被传递的值会复制给一个局部变量；
- 传递引用类型值：该值在内存中的地址（指针）会复制给一个局部变量。***难***

	以下例子说明即使引用类型的值是按值传递给参数的（传递的是地址），该参数也会按引用访问同一个对象。

		function setName(obj) {
		    obj.name="Nicholas";
		}
		
		var person=new Object();
		setName(person);
		console.log(person.name);//"Nicholas"

	以下例子说明引用类型的值确实是按值传递的。因为如果person按引用传递，那么其就会自动被修改为指向name属性为“Greg”的新对象。但person.name不变，可见即使在函数内部修改了参数的值，原始的引用扔未改变。

	其实，函数内部重写obj时，这个变量引用的就是一个局部变量对象了，它会在函数执行完后自行销毁。
	
		function setName(obj) {
		    obj.name="Nicholas";
		    obj=new Object();
		    obj.name="Greg";
		}
		
		var person=new Object();
		setName(person);
		console.log(person.name);//"Nicholas"

#### 4. typeof和instanceof检测类型比较
- typeof： 检测变量是哪种基本数据类型
- instanceof: 检测变量是不是某一种对象。引用类型的值检测Object都是true。基本类型的值检测Object为false,因为基本类型不是对象。
       
		//使用typeof
		var s="Nicholas";
		var b=true;
		var i=22;
		var u;
		var n=null;
		var o=new Object();
		var reg=new RegExp();
		
		console.log(typeof s);//string
		console.log(typeof b);//boolean
		console.log(typeof i);//number
		console.log(typeof u);//undefined
		console.log(typeof n);//object
		console.log(typeof o);//object
		console.log(typeof reg);//object，低版本Chrome和Safari返回function
	   
		//使用instanceof
		var o=new Object();
	
		var arr=new Array();
		var reg=new RegExp();
		var i=22;
		
		console.log(o instanceof Object);//true
		
		console.log(arr instanceof Object);//true
		console.log(arr instanceof Array);//true
		
		console.log(reg instanceof Object);//true
		console.log(reg instanceof RegExp);//true
		
		console.log(i instanceof Object);//false


#### 5.有关执行环境和作用域的几个概念
##### （1）变量对象
-  每个执行环境都有一个对应的变量对象，该环境中定义的所有变量和函数都保存在这个对象中。
-  全局执行环境对应window对象，故所有全局变量和函数都是window对象的属性和方法。
-  某执行环境中的所有代码执行完后，该环境被销毁，保存在其中的所有变量和函数定义也随之销毁。全局执行环境直到关闭网页或浏览器才会被销毁。

##### （2）环境栈机制
当执行流进入一个函数时，函数的环境就会被推入一个环境栈中。函数执行完后，栈将其弹出，控制权又交还给之前的执行环境。

##### （3）作用域链
- 其用途是保证执行环境可以有序访问变量和函数。
- 作用域链的前端是当前执行环境的变量对象。下一个变量对象来自包含环境。再下一个变量对象来自下一个包含环境，一直延续到全局执行环境的变量对象。
- 内部环境可以通过作用域链访问所有的外部环境，外部环境不能访问内部环境的任何变量和函数。
- 函数参数也相对于函数局部变量，访问规则同其他局部变量。

eg1:

	var color1="blue";
	
	function changeColor1() {
	    var color2="red";
	    
	    function changeColor2() {
	        var color3=color2;
	        color2=color1;
	        color1=color3;
	        
	        console.log(color1+" "+color2+" "+color3);//red blue red
	        //这里可访问color1、color2、color3
	    }
	    changeColor2();
	    console.log(color1+" "+color2);//blue red
	    //这里可访问color2、color3
	}
	
	console.log(color1);//blue
	//这里只能访问color1
	
	changeColor1();
注意：一般不在函数声明内部再写函数声明。

eg2:

	var color="blue";
	
	function getColor() {
	    var color="red";
	    return color;
	}
	
	console.log(getColor());//red

#### 6. JavaScript没有块级作用域
注意和C++不同。


#### 7. 关于var声明
- var声明的变量会被添加到最接近的环境中
- 没有var则被添加到全局环境成为全局变量，不推荐不带var的声明。


#### 8.自动垃圾收集机制
垃圾收集机制原理：找出不再继续使用的变量，然后释放其所占用的内存。垃圾收集器会按照固定的时间间隔周期性执行这一操作。

局部变量只在函数执行的过程中存在，这个过程中会为局部变量在栈（或堆）内存上分配相应的空间，以便存储它们的值。直至函数执行结束，局部变量就没有存在的必要了可以释放它们的内存。垃圾收集器必须跟踪哪个变量有用哪个变量没用。

##### 方式一：标记清除
1. 垃圾收集器在运行的时候给存储在内存中的所有变量都加上标记；
2. 然后，去掉环境中的变量及被环境中的变量引用的标记；
3. 之后再被加上标记的变量就是准备删除的变量；
4. 最后，垃圾收集器完成内存清除工作，销毁那些带标记的值并收回它们所占的内存空间。

##### 方式二：引用计数
引用计数即跟踪每个值被引用的次数。
1. 声明了一个变量并将一个引用类型的值赋给该变量时，该值引用次数就是1；
2. 若该值又被赋给了另外一个值，则该值引用次数加1，为2；
3. 相反，如果包含对这个值引用的变量又取得了另一个值，则这个值引用次数减1；
4. 当值的引用次数变为0时，说明没有办法再访问这个值了，故可将其所占的内存空间收回来；
5. 当垃圾收集器再次运行时，它就会释放那些引用次数为0的值所占用的内存。

方式二的问题：**循环引用**

当两个对象互相引用的时候，它们的引用计数永远也不会为0，造成问题。

##### 浏览器采用方式
目前主流浏览器都是**标记清除**式的垃圾回收策略。只不过时间间隔不同。

IE有一部分对象不是原生JavaScript对象，其BOM和DOM中的对象就是C++编写的COM(组件对象模型），COM的垃圾回收机制是引用计数。**故只要在IE中涉及COM对象就存在循环引用问题。**  不过，**IE9把BOM和DOM都换成了真正的JavaScript对象，故避免了该问题。**

#### 9. 管理内存：提升性能的方式之一
现实：分配给Web浏览器的可用内存数量通常比分配给桌面应用程序的少。这是出于安全方面的考虑，方式运行JavaScript网页耗尽全部系统内存而导致系统崩溃。

故确保占用最少的内存可以让页面获得更好的性能。**优化内存占用**的最佳方式：为执行中的代码只保存必要的数据。

**优化方法：**

**解除引用：**  对全局变量在不需要使用它的时候将它手动设为null。

不过，解除引用并不意味着自动回收该值所占的内存。解除引用的作用是让值脱离执行环境，以便垃圾收集器下次运行时将其回收。