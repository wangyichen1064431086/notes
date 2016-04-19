### 1.匿名函数的作用
#### （1）动态定义函数

		var sayHi;
		var a=1;
		if (a>0) {
		    sayHi=function(){
		        console.log("Hi");
		    }
		}
		else{
		    sayHi=function(){
		        console.log("Yo");
		    }
		}
		
		sayHi();

#### （2）把函数当成其他函数的返回值来使用
	
	function createComparisonFunction(propertyName) {
	    return function(object1,object2){
	        var value1=object1[propertyName];
	        var value2=object2[propertyName];
	        if (value1<value2) {
	            return -1;
	        }
	        else if (value1>value2) {
	            return 1;
	        }
	        else{
	            return 0;
	        }
	    }
	}
	
	var data=[{name:"Zachary",age:28},{name:"Nicholas",age:29}];
	data.sort(createComparisonFunction("name"));
	console.log(data[0].name);//"Nicholas"
	data.sort(createComparisonFunction("age"));
	console.log(data[0].name);//"Zachary"


#### 2.递归
##### （1）通过函数声明实现

	function factorial(num) {
	    if (num<=1) {
	        return 1;
	    }
	    else{
	        return num*arguments.callee(num-1);
	    }
	}
	
	console.log(factorial(5));

**arguments.callee是一个指向正在执行的函数的指针**

使用arguments.callee而非原函数名factorial可以解决如下报错问题：

	var anotherFactorial=factorial;
	factorial=null;
	anotherFactorial(5);

问题：不能在严格模式下访问arguments.callee

#### （2）通过命名函数表达式实现
	
	var factorial=(function f(num){
	    if(num<=1){
	        return 1;
	    }
	    else{
	        return num*f(num-1);
	    }
	    
	})
	
	console.log(factorial(5));

### 3.闭包
##### （1）简介闭包
**闭包**指有权访问另一个函数作用域中变量的函数。

**闭包的常见形式**是在一个函数内部创建另一个函数。

##### （2）闭包的作用域链
##### 一般的作用域链的情况
- 后台每个执行环境都有一个表示变量的对象——变量对象。**全局环境的变量对象始终存在，函数这样的局部环境的变量对象只在函数执行的过程中存在。**
- **作用域链**本质上是一个指向**变量对象**的指针列表，它只引用但不实际包含变量对象。
- 一般来讲，当某函数执行完毕后，其局部活动对象就会被销毁，内存中仅保存全局作用域的变量对象。

##### 闭包的情况不一样
- 在另一个函数内部定义的函数会将外部函数的活动对象添加到它的作用域中。
- 在外部函数执行完毕后，其活动对象也不会被销毁，因为其内部函数的作用域仍然在引用这个活动对象。例如上述createComparisonFunction（）函数被返回后，其执行环境的作用域链会被销毁，但它的活动对象仍然停留在内存中，因为其返回的匿名函数仍在引用它的活动对象；直到内部匿名函数被销毁，createComparisonFunction（）的活动对象才会被销毁。

#### 闭包的内存占用问题
因为闭包会携带包含它的函数的作用域，因此会比其他函数占用更多的内存。过度使用闭包可能导致内存占用过多，故建议只在绝对需要闭包的时候再考虑用闭包。

#### （3）闭包只能访问包含函数中的任何变量的最后一个值

#### （4）作为闭包（函数内部的函数）的匿名函数的this对象
对比以下代码1和代码2：

代码1：

	var name="The window";
	
	var object={
	    name:"My Object",
	    getNameFunc:function(){
	        return function(){
	            return this.name;
	        }
	    }
	}
	
	console.log(object.getNameFunc()());//"The window"

代码2：

	var name="The window";
	
	var object={
	    name:"My Object",
	    getNameFunc:function(){
	        return this.name;
	    }
	}
	
	console.log(object.getNameFunc());//"My Object"

原因：

匿名函数的执行环境具有全局性。为什么匿名函数没有取得其包含作用域的this对象呢？因为作用域链的原理，内部匿名函数在搜索this和arguments两个特殊变量是都是从自身的活动对象开始，在搜索外部函数的活动对象，因此不可能直接访问外不函数的这两个变量；而其自身的this是指向全局环境的。

下面那个不是匿名函数，是函数getNameFunc()。***可以姑且这么理解吧？？***

可以把外部作用域的this用其他变量来保存，这样内部闭包可以通过访问这个变量来访问外部作用域的this:

	var name="The window";
	
	var object={
	    name:"My Object",
	    getNameFunc:function(){
	        var that=this;
	        return function(){
	            return that.name;
	        };
	    }
	}
	
	console.log(object.getNameFunc()());//"My Object"

#### (5)闭包可能引起的内存泄漏
P183,***待整理***

### 4.匿名函数模仿块级作用域
#### (1)JS无块级作用域

	function outputNumbers(count) {
	    for (var i=0;i<count;i++) {
	        console.log(i);
	    }
	    
	    var i;
	    console.log(i);
	}
	
	outputNumbers(10);//0 1 2 3 4 5 6 8 8 9 10

即使多次声明一个变量，JS会忽略后续的声明（不过，它会执行后续声明中的变量初始化）。

#### （2）立即执行的匿名函数
用**作块级作用域**（又叫**私有作用域**）的匿名函数语法如下：

（IIFE,(Immediately-Invoked Function Expression),立即执行的函数表达式)

	function outputNumbers(count) {
	    (function(){
	        for (var i=0;i<count;i++) {
	            console.log(i);
	        }
	    })();
	    
	    console.log(i);//(1)
	}
	
	outputNumbers(10);//0 1 2 3 4 5 6 7 8 9 报错（语句（1）错误）

- 这样在内部匿名函数中定义的任何变量，在执行结束时都会被销毁。故（1）不能访问i。
- 该匿名函数是闭包，故可以访问外部函数的count。
- 这种技术继承在全局作用域中被用在函数外部，从而限制向全局作用域添加过多的变量和函数。我们都一个尽量少向全局作用域添加变量和函数。因为在有多个开发人员参与的应用程序中，过多全局变量和函数容易导致命名冲突。而通过创建**私有作用域**，每个开发人员可以使用自己的变量，又不用担心搞乱全局作用域）


### 5.私有变量
#### 1)私有变量概念
任何在函数中定义的变量，都可以认为是**私有变量**。因为不能在函数外访问。

私有变量包括**函数的参数**、**局部变量**、**函数内部定义的其他函数**

#### 2）特权方法概念
有权访问**私有变量**和**私有函数**的方法叫做**特权方法**。

创建这样的公有方法的思想是：在函数内部创建一个闭包，利用闭包可以通过自己的作用域链访问这些变量。

#### 3）特权方法创建方式
##### （1）构造函数模式
在**构造函数**中定义特权方法。
例一：

	function MyObject() {
	    var privateVariable=20;//私有变量
	    function privateFunction() {//私有函数
	        return false;
	    }
	    
	    this.publicMethod=function(){//特权方法
	        privateVariable++;
	        return privateFunction();
	    };
	}
	
	var object=new MyObject()
	console.log(object.publicMethod());//false

例二：

	function Person(name) {//参数为私有变量
	    this.getName=function(){//特权方法
	        return name;
	    }
	    this.setName=function(newName){//特权方法
	        name=newName;
	    }
	}
	
	var aperson=new Person("Tom");
	
	console.log(aperson.getName());//Tom
	aperson.setName("Ben");
	console.log(aperson.getName());//Ben

##### （2)原型模式
通过在**私有作用域**中定义私有变量和函数，也可以创建特权方法。

	(function () {
	    var privateVariable=20;//私有变量
	    function privateFunction() {//私有函数
	        return false;
	    }
	    
	    MyObject=function(){//构造函数，没有var声明就是全局变量
	    };
	    
	    MyObject.prototype.publicMethod=function(){//公有/特权方法
	         privateVariable++;
	        return privateFunction();
	    }
	})();
	
	
	var object=new MyObject();
	console.log(object.publicMethod());//false

- 该模式在定义构造函数时没有使用函数声明，因为**函数声明只能创建局部函数，而不带var的函数表达式可以创建全局函数**。
- 该模式私有变量和函数是由实例**共享**的，由于原型方法是在原型上定义的，故所有实例都引用同一个函数（如下例）。而特权方法作为一个闭包保存着对包含作用域的引用。
	
		(function(){
		    var name="";
		    
		    Person=function(value){
		        name=value;
		    };
		    
		    Person.prototype.getName=function(){
		        return name;
		    };
		    
		     Person.prototype.setName=function(value){
		        name=value;
		     };
		})();
		
		var person1=new Person("Nicholas");
		console.log(person1.getName());//"Nicholas"
		person1.setName("Greg");
		console.log(person1.getName());//"Greg"
		
		var person2=new Person("Michael");
		console.log(person1.getName());//"Michael"
		console.log(person2.getName());//"Michael"

#####（3）模块模式
作用：是为单例创建私有变量和特权方法。

单例：只有一个实例的对象。

方式：在匿名函数内部，首先定义私有变量和函数，然后将一个对象字面量作为匿名函数的返回值。返回的对象字面量里面只包括可以公开的属性和方法。该对象是在匿名函数内部定义的，故它的公有方法有权访问私有变量和函数。
	
	var singleton=function(){
	    var privateVariable=10;//私有变量
	    function privateFunction() {//私有函数
	        return false;
	    }
	    
	    return {
	        publicProperty:true,//特权/公有属性
	        publicMethod:function(){//特权/公有方法
	            privateVariable++;
	            return privateFunction();
	        }
	    }；
	}（）；

适用：如果必须创建一个对象并以一些数据对其进行初始化，同时还要公开一些能够访问这些私有数据的方法，就可以使用模块模式。

##### （4）增强的模块模式
对模块模式的改进，即在返回对象之前加入对其增强的代码。

适用于：单例必须是某种类型的实例，同时还必须添加某些属性和方法对其增强的情况。

	var singleton=function(){
	    var privateVariable=10;//私有变量
	    function privateFunction() {//私有函数
	        return false;
	    }
	    
	    var object=new CustomType();//创建对象
	    
	    object.publicProperty=true;
	    
	    object.publicMethod=function(){
	        privateVariable++;
	        return privateFunction();
	    }
	    
	    return object;
	}();