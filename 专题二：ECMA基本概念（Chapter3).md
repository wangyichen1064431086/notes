# Charpert3笔记
### 1.使用Number()和parseInt() parseFloat()转换区别。
详见《JavaScript高级程序设计》P30


	Number()可以针对任何类型。
	parseInt（）和parseFloat（）都只针对字符串

##### 1.转换空字符串
	Number("");//0
	parseInt("");//NaN
	
##### 2.转换包含数字的字符串

	console.log(parseInt("1234Blue"));//1234
	console.log(parseInt("Blue1234"));//NaN

	console.log(Number("1234Blue"));//NaN
	console.log(Number("Blue1234"));//NaN

parseInt（）从第一个非空格字符开始解析，直到遇到第一个非字符数字；
parseFloat()从第一个非空格字符开始解析，直到遇到第一个无效的浮点数字字符。（遇到第二个小数点就无效了）

##### 3.parseInt()可指定转换基数，即将字符串按照十进制数值转换成指定进制的数。


	console.log(parseInt("10",2));
	console.log(parseInt("10",8));
	console.log(parseInt("10",10));
	console.log(parseInt("0xA"));//10
	console.log(parseInt("0xA"，16));//10
	console.log(parseInt("0xA"，10));//0

**为避免错误的解析，任何时候都要明确指定基数**

##### 4.parseFloat()不能解析十六进制等其他进制，只能解析十进制

	console.log(parseFloat("0xA"));//0
	console.log(parseInt("0xA"));//10

### 2.两种涉及转换数据进制的方法 toString()、parseInt()

	var n=10;
	console.log(n.toString(2));//1010
	console.log(parseInt(n,2));//2

- n.toString(2)是返回把**数值**转换为相应进制（2）的**字符串**
- parseInt(n,2)是把**字符串**按照指定进制（2）来解析为**十进制数据**	

### 3.toString()方法和String()方法的区别

	//console.log(null.toString());报错
	//console.log(undefined.toString());报错
	
	console.log(String(null));//"null"
	console.log(String(undefined));//"undefined"

- null和undefined没有toString()方法，使用会报错。数值、布尔值、对象、字符串有这个方法。
- String()能将任何类型的值转换为字符串，包括null和undefined

### 4.自增自减操作符用在其他非数值值。

	var s1="2";
	var s2="z";
	var b=false;
	var f=1.1;
	var o={
	    valueOf: function(){
	                 return -1;
	            }
	};
	
	s1++;
	s2++;
	b++;
	f--;
	o--;
	
	console.log(s1);//3
	console.log(s2);//NaN
	console.log(b);//1，若b之前为true则++后为2
	console.log(f);//0.10000000000000009
	console.log(o);//-2

### 5.一元+操作符和-操作符

	var s1="01";
	var s2="1.1";
	var s3="z";
	var b=false;
	var f=1.1;
	var o={
	    valueOf: function(){
	                 return -1;
	            }
	};
	
	s1=+s1;
	s2=+s2;
	s3=+s3;
	b=+b;
	f=+f;
	o=+o;
	
	console.log(s1);//1
	console.log(s2);//1.1
	console.log(s3);//NaN
	console.log(b);//0
	console.log(f);//1.1
	console.log(o);//-1

一元+操作符作用类似于Number()转型函数


	var s1="01";
	var s2="1.1";
	var s3="z";
	var b=false;
	var f=1.1;
	var o={
	    valueOf: function(){
	                 return -1;
	            }
	};
	
	s1=-s1;
	s2=-s2;
	s3=-s3;
	b=-b;
	f=-f;
	o=-o;
	
	console.log(s1);//-1
	console.log(s2);//-1.1
	console.log(s3);//NaN
	console.log(b);//-0
	console.log(f);//-1.1
	console.log(o);//1

一元键操作符应用于数值时会变成负数。应用于非数值时，和+转换规则类似。

### 6.两个逻辑非（！）可得到Boolean()方法一样的结果

	console.log(!!"blue");//true
	console.log(Boolean("blue"));//true
	
	console.log(!!0);//false
	console.log(Boolean(0));//false
	
	console.log(!!NaN);//false
	console.log(Boolean(NaN));//false
	
	console.log(!!"");//false
	console.log(Boolean(""));//false
	
	console.log(!!12345);//true
	console.log(Boolean(12345));//true

### 7.逻辑与（&&）、逻辑或（||）都是短路操作

##### &&:
短路操作。如果第一个操作数是false，则不会再对第二个操作数求值。
在有一个操作数不是布尔值的情况下，逻辑与操作不一定返回布尔值。规则如下：

- 若第一个操作数是对象，返回第二个操作数
- 若第二个操作数是对象，则只有在第一个操作数的求值结果为true才返回第二个操作数
- 若两个操作数都是对象，则返回第二个操作数
- 若有一个操作数是null,NaN,undefined,则返回null,NaN,undefined


		var found=true;
		var result=(found && someUndefinedValue);//报错,不能在逻辑与中使用未定义的值
		console.log(result);//不会执行
		
		var found=false;
		var result=(found && someUndefinedValue);
		console.log(result);//false

##### ||：
短路操作。如果第一个操作数是ture,则不会再对第二个操作数求值。
在有一个操作数不是布尔值的情况下，逻辑或操作不一定返回布尔值。规则如下：

- 若第一个操作数是对象，返回第一个操作数
- 若第一个操作数的求值结果为false,则返回第二个操作数
- 若两个操作数都是对象，则返回第一个操作数
- 若两个个操作数都是null,NaN,undefined,则返回null,NaN,undefined

		var found=true;
		var result=(found || someUndefinedValue);
		console.log(result);//true
		
		var found=false;
		var result=(found || someUndefinedValue);//报错
		console.log(result);//不会执行

### 8.除法与C不同
C是整数除法得到整数，而它是：

	console.log(5/3);//1.6666666666666667

js两个整数相除是可以得到小数的。和C除完就是整数不同。

### 9.加法操作符和减法操作符的区别
如果两个操作数有一个是字符串：

- 加法是将另一个操作数转换为字符串，然后再将两个操作数拼接起来。
- 减法是将在后台调用Number()将这个字符串转换为数值，再执行减法计算。

		console.log("sum is "+1+1); //sum is 11
		console.log("sum is "+(1+1)); //sum is 2
		console.log("1"+1);//11
		console.log("1"+"1");//11

		console.log(5-true);//4
		console.log(NaN-1);//NaN
		console.log("5"-3);//2
		console.log("5"-"3");//2
		console.log(5-"3");//2
		console.log(5-"");//5
		console.log("5"-"abc");//NaN

### 10.相等全等比较规则
##### 关于相等：
- 如果有一个操作数是布尔值，则在比较之前true转换为1，false转换为0；
- 如果操作数一为字符串，一为数值，则比较前把字符串转换为数值；
- 如果操作数一为对象，一不为对象，则调用对象的valueOf()方法，得到基本类型值再按前面的规则进行比较。
- null和undefined相等；
- 比较前，null和undefined不会转换成其他任何值；
- 有一个操作数是NaN，则相等操作符返回false,不相等操作符返回true。即使两个都是NaN也是不相等；
- 如果两个操作数都是对象，则如果它们指向同一个对象相等操作符返回true，否则返回false。

		console.log(null==undefined);//true
		console.log("NaN"==NaN);//false
		console.log(NaN==5);//flse
		console.log(NaN!=NaN);//true
		console.log(false==0);//true
		console.log(true==1);//true
		console.log(true==2);//false
		console.log(undefined==0);//false
		console.log(null==0);//false
		console.log("12"==12);//true

##### 关于全等：

		console.log("55"===55);//false
		console.log(null===undefined);//false

### 11.使用复合赋值操作符不会带来任何性能的提升
如num+=10与num=num+10性能一样。

### 12.label与循环联合使用

	var num=0;
	
	outermost:
	for (var i=0;i<10;i++) {
	    for (var j=0;j<10;j++) {
	        if (i==5&&j==5) {
	            break outermost;
	        }
	        num++;
	    }
	}
	
	console.log(num);//55
添加标签导致break不仅会退出内部循环，还会退出外部循环。

	var num=0;
	
	outermost:
	for (var i=0;i<10;i++) {
	    for (var j=0;j<10;j++) {
	        if (i==5&&j==5) {
	            continue outermost;
	        }
	        num++;
	    }
	}
	
	console.log(num);//95
continue会在i==5&&j==5之后退出内部循环，继续执行外部循环。

### 13.switch语句的不常用方法(***可先略***）

	switch ("hello world") {
	    case "hello "+"world":
	        console.log("Greeting was found.");
	        break;
	    case "goodbye":
	        console.log("Closing was found.");
	        break;
	    default:
	        console.log("Unexpected message.");
	}//"Greetint was found."
switch的case值可以是字符串拼接表达式，它与switch的字符串进行比较得到结果。

	var num=25;
	
	switch (true) {
	    case num<0:
	        console.log("Less than 0.");
	        break;
	    case num>=0&&num<10:
	        console.log("Between 0 and 10.");
	        break;
	    default:
	        console.log("More than 10");
	}//More than 20
给switch传递true,因为每个case都可以返回一个布尔值。这样每个case按照顺序被求值，直到找到匹配的值或遇到default。

### 14.函数的return
- 函数中return之后的语句**永远也不会**执行
- 一个函数可以包含多个return
- return可以不带任何返回值。这时，函数执行后将返回undefined。

### 15.关于函数的arguments
##### (1)arguments与数组类似，但并不是Array实例。

##### (2）命名参数只提供便利，但不是必须的。
	
	function doAdd() {
	    if (arguments.length==1) {
	        console.log(arguments[0]);
	    }
	    else if (arguments.length==2) {
	        console.log(arguments[0]+arguments[1]);
	    }
	    else{
	        console.log("lalala");
	    }
	}
	
	doAdd(10);//10
	doAdd(10,20);//30

##### (3)arguments可以和命名参数一起使用。

	function doAdd(num1,num2) {
	    if (arguments.length==1) {
	        console.log(arguments[0]);
	    }
	    else if (arguments.length==2) {
	        console.log(arguments[0]+num2);
	    }
	    else{
	        console.log("lalala");
	    }
	}
	
	doAdd(10);//10
	doAdd(10,20);//30

##### （4）arguments值永远与对应的命名参数的值保存同步。

	function doAdd(num1,num2) {
	   arguments[1]=10;
	   console.log(arguments[1]);
	   console.log(num2);
	}
	
	doAdd(10,10);//10
	             //10   
	doAdd(5,20);//10
	            //10
每次执行函数都会重写第二个参数。修改了arguments[1]，也就修改了num2。
但arguments[1]和num2并不是相同的内存空间，它们的内存空间时独立的，但值会同步。

##### （5）没有传递值的命名参数将自动被赋予undefined值。

#### 18.JS函数没有重载
其他语言中两个函数同名，但签名（接受的参数类型和数量）不同即可成为两个函数。

JS定义了两个相同名字的函数，那该名字就只属于后定义的函数。