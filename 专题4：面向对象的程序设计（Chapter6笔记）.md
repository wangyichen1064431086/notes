### Chapter6笔记：面向对象的程序设计
#### 1.ECMAScript内部值属性：数据属性和访问器属性
##### 1）数据属性
数据属性的4个特性：

- configurable:表示能否通过delete删除该属性，能否修改属性的特性，或者能否把属性修改为访问器属性。默认值true;
- enumerable:表示能否通过for-in循环返回属性。默认值true;
- writable:表示能否修改属性值。默认值true;
- value:包含这个属性的数据值。读取属性值时，从这个位置读，写入属性值时，把新值保存在这个位置。默认值为undefined。

可通过**Obejct.defineProperty（）**方法修改属性默认的特性。**调用该方法时，如果不指定**，configurabel、enumerable、writable默认值都为false。

	var person={};
	
	Object.defineProperty(person,"name",{
	    configurable:true,
	    enumerable:true,
	    writable:false,//表示该属性值不能修改
	    value:"Nicholas"   
	})
	
	console.log(person.name);//"Nicholas"
	person.name="Greg";
	console.log(person.name);//"Nicholas"

##### 2）访问器属性
服务器属性的4个特性：

- configurable:表示能否通过delete删除该属性，能否修改属性的特性，或者能否把属性修改为访问器属性。默认值true;
- enumerable:表示能否通过for-in循环返回属性。默认值true;
- get:读取属性时调用的函数。默认为undefined。
- set:写入属性时调用的函数。默认为undefined。

读取服务器属性时，调用get函数，该函数负责返回有效值；写入服务器属性时，调用set函数并访问新值。

	var book={
	    _year:2004,
	    edition:1
	};
	
	Object.defineProperty(book,"year",{
	    get:function(){
	        return this._year;
	    },
	    set:function(newValue){
	        if(newValue>2004){
	            this._year=newValue;
	            this.edition+=newValue-2004;
	        }
	    }    
	})
	
	book.year=2006;
	console.log(book.edition);//3

##### 3)为对象同时定义多个属性：Object.defineProperties()

	var book={};
	
	Object.defineProperties(book,{
	    _year:{
	        writable:true,
	        value:2004
	    },
	    edition:{
	        writable:true,
	        value:1
	    },
	    year:{
	        get:function(){
	            return this._year;
	        },
	   
	        set:function (newValue) {
	            if (newValue>2004) {
	                this_year=newValue;
	                this.edition+=newValue-2004;
	            }
	        }
	    } 
	});
book对象上定义了两个数据属性（_year和edition)和一个访问器属性(year)。

##### 4）读取属性的特性：Object.getOwnPropertyDescriptor()
接上代码：
	
	var descriptor=Object.getOwnPropertyDescriptor(book,"_year");
	console.log(descriptor.value);//2004
	console.log(descriptor.writable);//true
	console.log(descriptor.configurable);//false 没设定的话默认为false

	var descriptor2=Object.getOwnPropertyDescriptor(book,"year");
	console.log(descriptor2.value);//undefined //访问器属性无value特性
	console.log(descriptor2.configurable);//false 没定义所以默认为false
	console.log(descriptor2.get);//函数体
	console.log(typeof descriptor2.get);//funcion

#### 2.创建多个对象的模式

##### 1）工厂模式
###### 模式作用：
为了创建具有**相同属性名和方法名**的对象。如下，每次调用createPerson()都会创建具有三个属性一个方法的对象。

	    function createPerson(n,a,j) {
	        var o=new Object();
	        o.name=n;
	        o.age=a;
	        o.job=j;
	        o.sayName=function(){
	            console.log(this.name);
	        }
	        return o;
	    }
	    
	    var person1=createPerson("Nicholas",29,"Software Engineer");
	    var person2=createPerson("Greg",27,"Doctor");
	    
	    person1.sayName();//"Nicholas"
	    person2.sayName();//"Greg"

###### 工厂模式缺点：
虽然解决了创建多个相似对象的问题，却不能解决对象识别问题（这样创建的对象都仅仅是Object类型，没有一个具体类型名称）。

##### 2）构造函数模式
###### 与工厂模式的不同
- 没有显式地创建对象(工厂模式显式创建了o)；
- 直接将属性和方法复制给了this对象；
- 没有return语句。
- 创建新实例必须使用new操作符。

		function Person(n,a,j) {
		    this.name=n;
		    this.age=a;
		    this.job=j;
		    this.sayName=function(){
		        console.log(this.name);
		    };
		}
		
		var person1=new Person("Nicholas",29,"Software Engineer");
		var person2=new Person("Greg",27,"Doctor");
		    
		person1.sayName();//"Nicholas"
		person2.sayName();//"Greg"
		
		//实例person1、person2都包含一个constructor属性指向构造函数
		console.log(person1.constructor);//整个Person函数体
		console.log(person1.constructor==Person);//true
		console.log(person2.constructor);
		console.log(person2.constructor==Person);
		
		//使用instanceof检测具体对象类型
		console.log(person1 instanceof Object);//true
		console.log(person1 instanceof Person);//true
		console.log(person2 instanceof Object);//true
		console.log(person2 instanceof Person);//true

###### 关于构造函数模式的说明：
- 构造函数习惯以大写字母开头，非构造函数以小写字母开头。这仅仅是为了区别而已。构造函数也是函数。
- 构造函数创建的实例包含一个**constructor属性**指向构造函数，该属性可以标识对象类型。
- 构造函数创建的实例既是Object实例，也是相应构造函数名称表示的类型实例（上例是Person实例）,可用instanceof检测。

###### 构造函数当作普通函数使用：
构造函数与其他函数的**唯一区别：调用它们的方式不同。**

任何函数，通过new操作符调用，就可作为构造函数；如果不通过new操作符调用，那跟普通函数没什么区别。

	function Person(n,a,j) {
	    this.name=n;
	    this.age=a;
	    this.job=j;
	    this.sayName=function(){
	        console.log(this.name);
	    };
	}
	//当作构造函数使用
	var person=new Person("Nicholas",29,"Software Engineer");
	person.sayName();//"Nicholas"
	
	//当作普通函数使用
	Person("Greg",27,"Doctor");//属性和方法都添加给了window对象
	window.sayName();//"Greg"
	
	//在另一个对象的作用域中调用
	var o=new Object();
	Person.call(o,"Kristen",25,"Nurse");
	o.sayName();//"Kristen"

构造函数当作普通函数调用时，**this对象指向全局window对象，故属性和方法都添加剂给了window对象。**

###### 构造函数模式缺点：
不同实例的同名函数是不相等的。

	console.log(person1.sayName==person2.sayName);//false

而创建两个完成同样任务的Function实例是没有必要的；且有this对象在，也没有必要在执行代码前就把函数绑定到特定对象上。可以如下把函数定义转移到构造函数外部：

	function Person(n,a,j) {
	    this.name=n;
	    this.age=a;
	    this.job=j;
	    this.sayName=sayname;
	}
	
	function sayname() {
	    console.log(this.name);
	}
	var person1=new Person("Nicholas",29,"Software Engineer");
	var person2=new Person("Greg",27,"Doctor");
		
	console.log(person1.sayName==person2.sayName);//true

这时，两个实例共享了sayName方法。但这样让函数的封装性变差了。

##### 3）原型模式
###### 与构造函数模式的不同
新对象的属性和方法是由所有实例共享的。

	function Person() {
	}
	
	Person.prototype.name="Nicholas";
	Person.prototype.age=29;
	Person.prototype.job="Software Engineer";
	Person.prototype.sayName=function(){
	    console.log(this.name);
	};
	
	var person1=new Person();
	person1.sayName();//"Nicholas"
	
	var person2=new Person();
	person2.sayName();
	
	console.log(person1.sayName==person2.sayName);//true


###### 理解原型对象
***牢记《JavaScript高级程序设计》P148的图***

- 只要创建了一个新函数（包括构造函数），就会有一个prototype属性，这个属性指向函数的原型对象。
- 原型对象会自动获得一个constructor属性，其包含一个指向构造函数的指针。原型对象的其他方法都是继承自Object。
- 使用构造函数创建的新实例，也包含一个指针（[[prototype]]）指向原型对象。其没有标准方式访问，FF、Safari和Chrome上可以通过新实例的属性__proto__来访问。这个连接存在于**实例**和**原型对象**之间。
- 实例无法访问到[[prototype]] (__prototype__属性除外），可通过 
isPrototypeOf()方法确定原型对象是否是实例的[[prototype]]
- Object.getPrototypeOf()方法可以返回实例[[prptotype]]的值。
- 实测结果，Object.getPrototypeOf(person1)、Person.prototype、person1.__proto__三者内容是一样的。但用==测试，Object.getPrototypeOf(person1)和Person.prototype之间==为true；person1.__proto__与前两个值不等。

		console.log(Person.prototype.isPrototypeOf(person1));//true
		console.log(Person.prototype.isPrototypeOf(person2));//true
		
		console.log(Object.getPrototypeOf(person1)==Person.prototype);//true
		console.log(Object.getPrototypeOf(person1).name);//"Nicholas"
		console.log(person1.__proto__==Person.protyotype);//false
		console.log(person1.__proto__);//Person {name: "Nicholas", age: 29, job: "Software Engineer"}
		console.log(Object.getPrototypeOf(person1));//Person {name: "Nicholas", age: 29, job: "Software Engineer"}
		console.log(Person.prototype);//Person {name: "Nicholas", age: 29, job: "Software Engineer"}

- 当代码读取某个对象属性时，都会执行一次搜索。搜索先从**对象实例本身**开始。如果在实例中找到了给定属性，则返回该属性值；没找到，则继续搜索指针指向的原型对象，在原型对象中查找该属性。
- 通过对象实例可以访问原型中的值，但**不能**通过对象重写原型中的值。在实例中添加一个和原型属性同名的属性，会在实例中创建该属性，其会屏蔽掉原型中那个属性。

		var person1=new Person();
		var person2=new Person();
		
		person1.name="Greg";
		console.log(person1.name);//"Greg"
		console.log(person2.name);//"Nicholas"

###### 删除实例属性：delete操作符
delete操作符可删除实例属性，重新连接原型属性。（而将该实例属性设为null,仍然不能连接原型属性）

		var person1=new Person();
		var person2=new Person();
		
		person1.name="Greg";
		console.log(person1.name);//"Greg"
		console.log(person2.name);//"Nicholas"
		
		person1.name=null;
		console.log(person1.name);//null
		
		delete person1.name;
		console.log(person1.name);//"Nicholas"

###### 检测属性是否在实例中：hasOwnProperty()
	
	var person1=new Person();
	var person2=new Person();
	
	person1.name="Greg";
	
	
	console.log(person1.hasOwnProperty("name"));//true
	console.log(person2.hasOwnProperty("name"));//false

###### 检测对象是否具有某属性（不管属性在原型还是实例中）:in

	var person1=new Person();
	var person2=new Person();
	
	person1.name="Greg";
	console.log(person1.name);//"Greg"
	console.log(person2.name);//"Nicholas"
	
	console.log("name" in person1);//true
	console.log("name" in person2);//true

######　枚举对象所有可枚举实属性名称（包括在原型中和在实例中的，仅可枚举的）:for -in 循环
	
	var person1=new Person();
	var person2=new Person();
	
	person1.name="Greg";
	console.log(person1.name);//"Greg"
	console.log(person2.name);//"Nicholas"
	
	for (var prop in person1) {
	    console.log(prop);//"name" "age" "job" "sayName"
	    console.log(person1[prop]);//"Greg" 29 "Software" sayName函数体
	}
	
	for (var prop in person2) {
	    console.log(prop);//"name" "age" "job" "sayName"
	    console.log(person2[prop]);//"Nicholas" 29 "Software" sayName函数体
	}
	
- for-in返回的是可枚举的，即enumerable标记**不为false**的。而ECMAScript5将constructor和prototype属性的enumerable都设置为了false，故不会返回它们。

###### 	取得对象可枚举实例属性名称（只是实例中的，仅可枚举的）: Object.keys()
	
	var keys=Object.keys(Person.prototype);
	console.log(keys);//["name", "age", "job", "sayName"]
	
	var person1=new Person();
	person1.name="Greg";
	person1.age=31;
	var person1Keys=Object.keys(person1);
	console.log(person1Keys);//["name", "age"]

得到原型属性也不是不可以，传入参数为Person.prototype即可。

###### 取得对象所有实例属性名称（只是实例中的，不管可不可枚举）：Object.getOwnPropertyNames()

	var keys=Object.getOwnPropertyNames(Person.prototype);
	console.log(keys);//["constructor", "name", "age", "job", "sayName"]

###### 更简单的原型语法:以对象字面量形式重写Person.prototype
这里重写后的Person.prototype的constructor属性是不再指向原构造函数Person,而是指向Object。虽然instanceof还能返回正确结果。

	function Person() {
	    
	}
	
	Person.prototype={
	    name:"Nicholas",
	    age:29,
	    job:"Software Engineer",
	    sayName:function(){
	        console.log(this.name);
	    }
	};
	
	var friend=new Person();
	console.log(friend instanceof Person);//true
	console.log(friend.constructor==Object);//true
	console.log(friend.constructor==Person);//false


想要指向Person，有两个办法：1是在字面量中添加constructor:Person,然而这样会导致constructor的enumerable为true(而原生的constructor的enumerable为false,不可枚举）；2.使用Object.defineProperty()设置constructor。

	function Person() {
	    
	}
	
	Person.prototype={
	    name:"Nicholas",
	    age:29,
	    job:"Software Engineer",
	    sayName:function(){
	        console.log(this.name);
	    }
	};
	
	Object.defineProperty(Person.prototype,"constructor",{
	    enumerable:false,
	    value:Person
	})

###### 原型的动态性
对原型对象所做的任何修改都能够立即从实例上反映出来——即使先创造实例，再修改原型。

	function Person() {
	}
	
	Person.prototype.name="Nicholas";
	Person.prototype.age=29;
	Person.prototype.job="Software Engineer";
	Person.prototype.sayName=function(){
	    console.log(this.name);
	};
	
	var friend=new Person();
	
	Person.prototype.sayHi=function(){
	    console.log("hi");
	}

原因：实例与原型的**松散连接关系**，通过一个**指针**，而非**副本**连接。记住：实例中的指针**仅指向原型**，**不指向构造函数**。

注意：**重写整个原型对象会切断**构造函数与最初原型对象的联系。故也切断了**现有原型**和任何**之前已存在的实例**直接的联系，这些实例中的[[prototype]]指针还是指向**最初的原型**。**重写后创建的实例**指向的是**现有原型**。

	function Person() {
	}
	var friend1=new Person();
	
	Person.prototype={
	    name:"Nicholas",
	    age:29,
	    job:"Software Engineer",
	    sayName:function(){
	        console.log(this.name);
	    }
	};
	
	friend1.sayName();//报错
	
	var friend2=new Person();
	friend2.sayName();//"Nicholas"

###### 原生对象的原型
**原生引用类型**（Object、Array、String等）也是通过**原型模式**创建的，其很多方法都是在原型上定义的。（这些引用类型名称其实就是构造函数名。）
	
	console.log(typeof Array.prototype.sort);//"function"
	console.log(typeof String.prototype.substring);//"function"

修改原生对象的原型：如下所示，为String添加原型方法startswith()。

	String.prototype.startswith=function(text){
	    return this.indexOf(text)==0;
	}
	
	var msg="Hello world!";//后台调用String基本包装函数创建这个字符串，故其拥有了startwith()方法
	console.log(msg.startswith("Hello"));//true

###### 原型模式的问题
所有实例的所有属性和方法都是共享的。

- 对于函数： 这种共享比较合适。
- 对于基本类型值属性：可以通过重写隐藏原型中对应属性
- 对于引用类型值属性的重写：可以隐藏原型中对应属性
- 对于引用类型值属性的修改（**问题所在**）：如Array，修改一个实例引用的数组，其实是在修改原型中的数组，则其他实例也都会被修改。（只有直接修改而非重写才会出现这个问题哦）
	
		function Person() {
		}
		
		Person.prototype={
		    constructor:Person,
		    name:"Nicholas",
		    age:29,
		    job:"Software Engineer",
		    sayName:function(){
		        console.log(this.name);
		    },
		    friends:["Shelby","Court"]
		};
		
		var person1=new Person();
		var person2=new Person();
		
		
		person1.friends.push("Van");
		console.log(person1.friends);//["Shelby", "Court", "Van"]
		console.log(person2.friends);//["Shelby", "Court", "Van"]
		
		console.log(person1.friends==person2.friends);//true
		
		person1.friends=["Kate","Tom"];
		console.log(person1.friends);//["Kate", "Tom"]
		console.log(person2.friends);//["Shelby", "Court", "Van"]
		console.log(person1.friends===person2.friends);//false

##### 4）组合使用构造函数模式和原型模式
此为创建自定义类型的**最常见、认同度最高的方式**。-

- 构造模式：用于定义实例属性；
- 原型模式：用于定义方法和共享的属性。

###### 模式好处
结果每个实例都有自己一份实例属性的副本，踏实有共享着对方法的引用，最大限度节省的内存。

	function Person(n,a,j) {
	    this.name=n;
	    this.age=a;
	    this.job=j;
	    this.friends=["Shelby","Court"];
	}
	
	Person.prototype.sayName=function(){
	    console.log(this.name);
	}
	
	var person1=new Person("Nicholas",29,"Software Engineer");
	var person2=new Person("Greg",27,"Doctor");
	
	person1.friends.push("Van");
	console.log(person1.friends);//["Shelby", "Court", "Van"]
	console.log(person2.friends);//["Shelby", "Court"]
	console.log(person1.friends===person2.friends);//false
	console.log(person1.sayName===person2.sayName);//true

##### 5）动态原型模式
- 把所有信息都封装在了构造函数中，通过**在构造函数中初始化原型**，保持了同时使用构造函数和原型的优点。
- 通过检查某个应该存在的方法是否有效来决定是否需要初始化原型。
	
		function Person(n,a,j) {
		    this.name=n;
		    this.age=a;
		    this.job=j;
		    this.friends=["Shelby","Court"];
		    
		    if (typeof this.sayName!="function") {
		        Person.prototype.sayName=function(){
		            console.log(this.name);
		        }
		    }
		 }

说明：只在sayName不存在的情况下才将其添加到原型中。

### 3.继承
#### 1.原型链
- 许多OO语言支持接口继承（继承方法签名）和实现继承（继承实际的方法）。ECMA只支持**实现继承**，其通过**原型链**来实现。
- 原型链简单地讲，就是子类型的原型对象为超类型的实例，即把超类型的实例赋值给了子类型的原型。
- **所有函数的默认原型都是Object的实例，这个继承也是通过原型链实现的，故原型链不要漏了这一环**。
- **找不到属性或方法，搜索过程总是要一环一环地前行到原型链末端才会停下来。**


		function SuperType() {
		    this.property=true;
		}
		
		SuperType.prototype.getSuperValue=function(){
		    return this.property;
		};
		
		function SubType() {
		    this.subproperty=false;
		}
		
		SubType.prototype=new SuperType();//继承了SuperType
		SubType.prototype.getSubValue=function(){
		    return this.subproperty;
		}
		
		var instance=new SubType();
		console.log(instance.getSuperValue);//true

代码说明：

 - instance是subType的实例，SubType继承了SuperType,而SuperType继承了Object。
 - instance.getSuperValue经历三个搜索步骤：（1）搜索实例，实例中无此属性；（2）搜索SubType.prototype（即SuperType实例），无此属性；（3）搜索SuperType.prototype，找到该属性。**找不到属性或方法，搜索过程总是要一环一环地前行到原型链末端才会停下来。**

##### 1）确定原型和实例的关系：instanceof/isPrototypeOf
###### (1) instanceof

	console.log(instance instanceof SubType);//true
	console.log(instance instanceof SuperType);//true
	console.log(instance instanceof Object);//true
可以说，instance是SubTye、SupType、Object任何一个的实例。

###### （2）isPropotypeOf()

	console.log(Object.prototype.isPrototypeOf(instance));//true
	console.log(SuperType.prototype.isPrototypeOf(instance));//true
	console.log(SubType.prototype.isPrototypeOf(instance));//true

##### 2）谨慎定义方法
###### （1）重写方法语句，得在用超类型实例赋值给子类型原型之后

	function SuperType() {
	    this.property=true;
	}
	
	SuperType.prototype.getSuperValue=function(){
	    return this.property;
	};
	
	function SubType() {
	    this.subproperty=false;
	}
	
	SubType.prototype=new SuperType();//（1）继承了SuperType
	
	
	SubType.prototype.getSubValue=function(){
	    return this.subproperty;
	}
	
	SubType.prototype.getSuperValue=function(){//重写原型中的方法
	    return false;
	}
	
	var instance=new SubType();
	
	var superTypeInstance=new SuperType();
	
	console.log(instance.getSuperValue());//false
	console.log(superTypeInstance.getSuperValue());//true

重写原型中存在的getSuperValue（）方法，会屏蔽掉原来的那个方法。通过SubType的实例（instance）调用getSuperValue()，调用的是新方法；通过SuperType的实例调用getSuperTvalue()时，还是调用原来的方法。

**要重写方法，得在用超类型实例赋值给子类型原型之后**（即代码行（1）之后）

###### （2）通过原型链实现继承时，不能用面向字面量方法创建子类型原型对象
因为这样会重写原型链
	
	function SuperType() {
	    this.property=true;
	}
	
	SuperType.prototype.getSuperValue=function(){
	    return this.property;
	};
	
	function SubType() {
	    this.subproperty=false;
	}
	
	SubType.prototype=new SuperType();//继承了SuperType
	
	
	SubType.prototype={
	    getSubValue:function(){
	        return this.subproperty;
	    },
	    someOtherMethod:function(){
	        return false;
	    }
	}
	var instance=new SubType();
	console.log(instance.getSuperValue());//报错：instance.getSuperValue is not a function
	
##### 3）原型链的问题
###### （1）子类型所有实例都会共享超类型的引用类型值，所以修改一个子类型实例，其他子类型实例也会随之变化
**注意：** 重写子类型实例引用类型属性是不会影响其他实例的；只有修改会影响。**和原型模式的问题一样**

###### （2）创建子类型实例时，不能像超类型构造函数中传递参数

	function SuperType() {
	    this.colors=["red","blue","yellow"];
	}
	
	function SubType() {
	}
	
	SubType.prototype=new SuperType();
	
	var instance1=new SubType();
	var instance2=new SubType();
	
	instance1.colors.push("black");
	console.log(instance1.colors);//["red", "blue", "yellow", "black"]
	console.log(instance2.colors);//["red", "blue", "yellow", "black"]
	
	instance1.colors=["green","white"];
	console.log(instance1.colors);//["green", "white"]
	console.log(instance2.colors);//["red", "blue", "yellow", "black"]




#### 2.类继承/经典继承/伪造对象/借用构造函数
- 目的：为了解决上述4.（1）所说的问题

- 基本思想：**在子类型构造函数的内部调用超类型构造函数**。通过在子类型构造函数内部对超类型构造函数使用 超类型.apply(this)/超类型.call(this)，可以在将来新创建的子类型实例上执行超类型构造函数。

**故子类型每个实例都会拥有自己的超类型属性副本，即便这个超类型属性是引用类型的。**

借用构造函数实例：

	function SuperType() {
	    this.colors=["red","blue","green"];
	}
	
	function SubType() {
	    SuperType.call(this);//call表示在动SubType时已经立即执行了该函数，即已经为this绑定了color属性
	}
	
	var instance1=new SubType();
	var instance2=new SubType();
	
	instance1.colors.push("black");
	console.log(instance1.colors);//["red", "blue", "green", "black"]
	console.log(instance2.colors);//["red", "blue", "green"]

**借用构造函数可以向超类型传递参数。**

	function SuperType(name) {
	    this.name=name;
	}
	
	function SubType() {
	    SuperType.call(this,"Nicholas");
	    this.age=29;
	}
	
	var instance=new SubType();
	console.log(instance.name);//"Nicholas"
	console.log(instance.age);//29

#### 3.组合继承/伪经典继承 ***还比较生***
将原型链和借用构造函数技术结合。

- 使用**原型链**实现对**超类型原型属性和方法**的继承；
- 使用**借用构造函数**实现对**超类型实例属性**的继承；
- 超类型对象对应使用**组合构造函数模式和原型模式**创建；
	
		function SuperType(name) {
		    this.name=name;
		    this.colors=["red","blue","green"];
		}
		
		
		SuperType.prototype.sayName=function(){
		    console.log(this.name);
		};
		
		function SubType(name,age) {
		    SuperType.call(this,name);//借用构造函数方法实现对超类型实例属性的继承
		    this.age=age;
		}
		
		SubType.prototype=new SuperType();//原型链方法实现对超类型原型属性和方法的继承
		SubType.prototype.constructor=SubType;
		SubType.prototype.sayAge=function(){
		    console.log(this.age);
		}
		
		var instance1=new SubType("Nicholas",29);
		var instance2=new SubType("Greg",27);
		
		instance1.colors.push("black");
		console.log(instance1.colors);//["red", "blue", "green", "black"]
		instance1.sayName();//"Nicholas"
		instance1.sayAge();//29
		
		console.log(instance2.colors);//["red", "blue", "green"]
		instance2.sayName();//"Greg"
		instance2.sayAge();//27

这样，多个子类型实例就分别拥有自己的属性（包括引用类型属性），也共享了相同的方法。

#### 4.原型继承
- 借助已有的对象创建新的对象。

- 不必创建自定义对象，在一个函数内部先创建一个临时性构造函数，然后将传入的对象作为这个构造函数的原型，最后返回这个临时类型的新实例。也就是这个函数对传入其中的对象进行了一次浅复制。包含引用类型值的属性始终都会共享相应的值。

- 用处：在没有必要兴师动众地创建构造函数，而只想让一个对象与另一个对象保持一致的情况下，可以使用原型式继承。

		function object(o) {
		    function F() {
		    }
		    F.prototype=o;
		    
		    return new F();
		}
		
		var person={
		    name:"Nicholas",
		    friends:["Shelby","Court","van"]
		};
		
		var anotherPerson1=object(person);
		var anotherPerson2=object(person);
		
		anotherPerson1.name="Greg";
		anotherPerson1.friends.push("Rob");
		
		anotherPerson2.name="Linda";
		anotherPerson2.friends.push("Barbie");
		
		console.log(person.friends);//["Shelby", "Court", "van", "Rob", "Barbie"]
		console.log(anotherPerson1.friends);//["Shelby", "Court", "van", "Rob", "Barbie"]
		console.log(anotherPerson2.friends);//["Shelby", "Court", "van", "Rob", "Barbie"]
	
###### Object.create()方法 
	ECMA5通过新增的Object.create()方法规范了原型继承。即上例中的object（）函数可以使用Object.create()方法来代替。
	
	Object.create可有两个参数：一个用作新对象原型的对象 和 一个为新对象定义额外属性的对象。第二个参数与Object.defineProperties()方法的第二个参数格式相同。
	
	eg1:
	
		var person={
		    name:"Nicholas",
		    friends:["Shelby","Court","van"]
		};
		
		var anotherPerson1=Object.create(person);
		var anotherPerson2=Object.create(person);
		
		anotherPerson1.name="Greg";
		anotherPerson1.friends.push("Rob");
		
		anotherPerson2.name="Linda";
		anotherPerson2.friends.push("Barbie");
		
		console.log(person.friends);//["Shelby", "Court", "van", "Rob", "Barbie"]
		console.log(anotherPerson1.friends);//["Shelby", "Court", "van", "Rob", "Barbie"]
		console.log(anotherPerson2.friends);//["Shelby", "Court", "van", "Rob", "Barbie"]
	
	eg2:
	
		var person={
		    name:"Nicholas",
		    friends:["Shelby","Court","van"]
		};
		
		var anotherPerson3=Object.create(person,{
		    name:{
		        value:"Greg"    
		    }    
		})
		
		console.log(anotherPerson3.name);//"Greg"