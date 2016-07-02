# ES6有什么新东西？
资源<http://web.jobbole.com/86441/#article-comment>
## 1. 变量

### （1）let

let和var的差别在于作用域。var声明的变量作用域为包围它的函数，let声明的变量作用域仅在它的块中。

eg:	

	if(true) {
	   let x = 1;
	}
	console.log(x); // undefined

***浏览器报错：Uncaught SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode***

### （2）const

还有另一个用于声明块作用域变量的方法。使用 const，你可以声明一个值的只读引用。必须直接给一个变量赋值。如果尝试修改变量或者没有立即给变量赋值，都将报错：

	const MY_CONSTANT = 1;
	MY_CONSTANT = 2 // Error
	const SOME_CONST; // Error

***亲测，都没有报错。。。。。。***

### （3）箭头函数
略。没懂

## 2.字符串

### （1)几个简便的新方法
简化indexOf()方法的新方法：

	'my string'.startsWith('my'); //true
	'my string'.endsWith('my'); // false
	'my string'.includes('str'); // true

创建重复字符串的方法：

	'my '.repeat(3); // 'my my my '

### （2）模板字符串
模板字符串

模板字符串提供一个简洁的方式来实现字符串插值。你可能已经对这种语法很熟悉了；它基于美元符号和花括号 ${..}。模板字符串置于引号之中。以下是快速示例：

	var name = 'John',
	   apples = 5,
	   pears = 7,
	   bananas = function() { return 3; }
	
	console.log('This is ${name}.');
	
	console.log('He carries ${apples} apples, ${pears} pears, and ${bananas()} bananas.');
	
	// ES5 equivalent:
	console.log('He carries ' + apples + ' apples, ' + pears + ' pears, and ' + bananas() +' bananas.');

***亲测，Chrome不支持模板字符串***

## 3.数组
### （1）Array.from(类数组)
可将类数组变成真正的数组，作用类似于Array.prototype.slice.call(类数组)。

类数组对象示例包括：

- 函数中的 arguments；
- 由 document.getElementByTagName() 返回的 nodeList；
- 新增加的 Map 和 Set 数据结构。

		<ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <script>
            var itemElements = document.querySelectorAll('.items');
            var items = Array.from(itemElements);
            console.log(items instanceof Array);
            // A workaround often used in ES5:
            var items = Array.prototype.slice.call(itemElements);
            console.log(items instanceof Array);
        </script>

### （2）Array.of()

该方法的表现很像 Array 构造函数。它适合**只传递一个参数的情况**。因此 Array.of 是 new Array() 的更优选择。

	     	var x=new Array();
            x=[3];
            var y=Array.of(8);
            
            console.log(x);
            console.log(y);

### （3）Array原型上的新方法
- find 返回回调返回 true 的第一个元素。
- findIndex 返回回调函数返回 true的第一个元素的下标。
- fill 用所给参数“覆盖”数组的元素。

	[5, 1, 10, 8].find(n => n === 10) // 10
	
	[5, 1, 10, 8].findIndex(n => n === 10) // 2
	
	[0, 0, 0].fill(7) // [7, 7, 7]
	[0, 0, 0, 0, 0].fill(7, 1, 3) // [0, 7, 7, 7, 0]


## 4.Math

Math 对象新增了几个方法。

- Math.sign 返回数字的符号，结果为 1、-1 或 0。
- Math.trunc 返回无小数位的数字。
- Math.cbrt 返回数字的立方根。

eg:

	Math.sign(5); // 1
	Math.sign(-9); // -1
	 
	Math.trunc(5.9); // 5
	Math.trunc(5.123); // 5
	 
	Math.cbrt(64); // 4

## 5.扩展操作符
扩展操作符（...）这个语法用于特定地方扩展元素非常方便。其在传参数调用函数时也非常有用。

	  		var values=[1,2,4];
            var some=[...values,8];
            var more=[...values,8,...values];
            
            console.log(some);//[1, 2, 4, 8]
            console.log(more);//[1, 2, 4, 8, 1, 2, 4]

			doSomething(...values);//7
            
            function doSomething(x,y,z) {
                console.log(x+y+z);
            }
## 6.解构


## ES6的胖箭头符号

ES6中新增的箭头操作符=> 简化了函数的书写。操作符左边为输入的参数，而右边则是进行的操作以及返回的值。

		 var reflect = value => value;
       // 等同于：
       var reflect = function(value) {
           return value;
       };