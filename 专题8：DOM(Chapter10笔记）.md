## 一、节点层次
### 1.Node类型
#### 1）(Node).nodeType属性
节点nodeType属性有12种。

检测nodeType：

	var someNode=document.body;
	console.log(someNode.nodeType);//1

#### 2）(Node).nodeSome属性和.nodeValue属性
这两个属性描述节点具体信息。值取决于节点类型。
对于元素节点，nodeSome是标签名，nodeValue是null。

	var someNode=document.body;
	if (someNode.nodeType==1) {
	    console.log(someNode.nodeName);//body
	    console.log(someNode.nodeValue);//null
	}

#### 3）节点关系
#####（１）(Node).childNodes属性
- 保存着NodeList对象，其不是Array实例。
- IE9及其他浏览器：包括TEXT节点，元素节点。
- IE<9:不包括TEXT节点。

###### 基本用法
- (Node).childNodes[n]
- (Node).childNodes.item(n)
- (Node).childNodes.length

		var someNode=document.body;
		
		console.log(someNode.childNodes[0]);
		console.log(someNode.childNodes.item(1));
		console.log(someNode.childNodes.length);

###### 将NodeList转换为数组
Array.prototype.slice.call(nodes,0)方法，或Array.prototype.slice.call(nodes)。

跨浏览器方法如下：

	function convertToArray(nodes) {
	    var array=null;
	    try {
	        array=Array.prototype.slice.call(nodes,0);//针对除IE8及更早版本浏览器
	    } catch(e) {
	        array=new Array();
	        for (var i=0,len=nodes.length;i<len;i++) {
	            array.push(nodes[i]);
	        }
	    }
	    
	    return array;
	}
	
	var myArray=convertToArray(document.body.childNodes);
	console.log(myArray);//[text, script]

##### （2）其他关系属性
- .parentNode
- .previousSibling:没有就为null
- .nextSibling：没有就为null
- .firstChild
- .lastChild
- .ownerDocument:节点所在的文档

#### 4)操作节点方法
##### （1）(Node).appendChild()

- 作用1：**移动节点**，若后面（）的是已存在的节点，则将其移动到基准节点的最后一个子节点，删除原节点、
- 作用2：**后插子节点**，为基准结点插入最后一个子节点。

- 返回：插入的节点

		var someNode=document.body;
		
		var returnedNode=someNode.appendChild(someNode.firstChild);
		console.log(returnedNode==someNode.firstChild);//false
		console.log(returnedNode==someNode.lastChild);//true

##### （2）（Node).insertBefore(,)
- 作用：前插节点
- 返回：插入的节点


		var someNode=document.body;
		var newNode=document.createElement("a");
		
		var returnedNode=someNode.insertBefore(newNode,null);//插入为最后一个子节点
		console.log(returnedNode==someNode.lastChild);//true 
		console.log(returnedNode==newNode);//true
		
		var returnedNode2=someNode.insertBefore(newNode,someNode.firstChild);//插入成为第一个子节点
		console.log(returnedNode2==newNode);//true
		console.log(returnedNode2==someNode.firstChild);//true
		//ps:第二次移动该newNode后第一次插入的地方就没有它了，这个文档只有一个这个newNode

##### （3）（Node).replaceChild()
- 作用：替换节点
- 返回：被替换的节点
- 被替换节点的所有关系指针都会赋值到新节点上。被替换的节点还在文档中，但其在文档中已经没有了位置。

		var returnedNode=someNode.replaceChild(newNode,someNode.firstChild)

##### （4）（Node).removeChild()
- 作用：移除节点
- 返回：被移除的节点
- 移除的节点仍然被文档所有，只不过在文档中已经没有了位置。

		var returnedNode=someNode.replaceChild(newNode,someNode.firstChild)

##### （5）（Node).cloneNode(true/false)
- 作用：创建调用方法的节点的副本。
- 参数：true——深复制；false——浅复制

		var myList=document.getElementsByTagName("ul")[0];
		
		var deepList=myList.cloneNode(true);
		console.log(deepList.childNodes.length);//7(IE<9是3)
		
		var shallowList=myList.cloneNode(false);
		console.log(shallowList.childNodes.length);//0

### 2.Document类型
document对象不是整个HTML页面，且是window对象的一个属性，可作为全局对象来访问。

nodeType为9。

#### 1）文档的子节点
##### （1） document.documentElement
访问html元素

	var html=document.documentElement;

##### (2) document.body
访问body元素

##### （3）document.doctype
访问!DOCTYPE标签。
浏览器对该属性支持度不一致。

#### 2）文档信息
##### （1）document.title
取得或设置文档标题

##### （2）document.URL/.domain/.referer
- document.URL:取得页面完整的URL
- document.domain:取得页面域名
- document.referer:取得来源页面的URL

只有document.domain是可设置的。且有限制：

- 若URL是p2p.wrox.com,只能设置domain为wrox.com
- 当页面中包含来自其他子域的框架或内嵌框架时，处于跨域安全限制，不同子域页面无法通过JavaScript通信。如果将每个子域页面设置为相同的值，这些页面就可以互相访问对方的JS对象了。
- 如果域名应该是设置为松散的（如wrox.com)，就不能再设置为紧绷的了（p2p.wrox.com)

#### 3)查找元素
##### (1)document.getElementById()
- 一般浏览器严格区分大小写
- IE8及之前版本不区分大小写
- IE7及之前版本还会将具有相同name元素的第一个返回

#####（2）document.getElementsByTagName()
返回一个HTMLCollection对象。

所含方法如下例：

	var images=document.getElementsByTagName("img");
	
	console.log(images.length);
	console.log(images[0].src);
	console.log(images.item(0).src);
	console.log(images.namedItem("myImage"));
	console.log(images["myImage"]);

取得整个页面所有元素可以用：

	var allElems=document.getElementsByTagName("*");
	console.log(allElems.length);

##### （3）document.getElementsByName()
返回带有给定name特性的**所有**元素。

#### 4）特殊集合
都是HTMLCollection对象。

- document.anchors：包含文档中所有带name特性的a元素
- document.forms：包含文档中所有的form元素
- document.images:包含文档中所有的img元素.
- document.links:包含文档中所有带href元素的a和area元素

#### 5）DOM一致性检测：document.implementation.hasFeature(,)
检测浏览器实现了哪些部分功能，如

	var hasXmlDom=document.impementation.hasFeature("XML","1.0");

#### 6)文档写入
将输出流写入页面。

##### （1）document.write()/writeln()
- 在页面加载的过程中，可向页面动态地加载内容。
- writeln()会在字符串末尾加上（\n)。

	   <script type="text/javascript">
	        document.write("<strong>"+(new Date()).toString()+"</strong>");
	    </script>

###### 可用该法动态地包含外部资源：（字符串内部的”和/记得转义）

    <script type="text/javascript">
        document.write("<script type=\"text/javascript\" src=\"test1.js\">"+"<\/script>");
    </script>
   
###### 可在文档加载结束后调用document.write()：
如此，其内容会重写整个页面

	    <script type="text/javascript">
	        window.onload=function(){
	            document.write("Hello World!");
	        }
	    </script>

##### （2）document.open()/document.close()
分别用于打开和关闭网页输出流。

	   
### 3.Element类型
- nodeType:1
- nodeName：元素标签名，也可通过tagName属性获取（HTML中始终以全部大写表示)
- nodeValue：null

		var div=document.getElementById("myDiv");
		console.log(div.tagName);//"DIV"
		console.log(div.nodeName==div.tagName);//true
		
		if (div.tagName.toLowerCase()=="div") {
		    console.log("true");//true
		}

#### 1)基本属性
- .id
- .title：鼠标移动到该元素上时显示出来
- .lang
- .dir:语言方向，包括"ltr"或"rtl"
- .className:为元素指定的CSS类

以上属性可以获取也可以设置。

#### 2）取得特性的方法：(HTMLElement).getAttribute()
- 传递的特性名与实际特性名相同。（如class传入的就是"class"非"className")。
- 特性名称不符大小写（传入"ID"和"id"效果一样）
- 可以取得自定义特性（前缀为data-)
- 只有公认的非自定义的特性才会以属性形式添加到DOM对象中。
- 有两类特殊特性，有对应属性名，通过属性名访问和通过getAttribute()访问结果不同（IE7及之前两种方式都是返回和通过属性访问相同的结果）
	- style:通过getAttribute()访问返回的是CSS文本，通过属性会访问一个对象
	- onclick:通过getAttribute()返回的是相应代码字符串，而通过属性访问返回一个JS函数。

#### 3）设置特性的方法：(HTMLElement).setAttribute(,)
- 参数：两个，要设置的特性名和值。
- 可操作HTML特性也可操作自定义特性。
- 对于自定义特性，若通过setAttribute()设置是可以通过getAttribute()访问到的；若通过.属性设置，则不能通过getAttribute()访问到。

		var div=document.getElementById("myDiv");
		div.setAttribute("id","otherId");
		div.align="left";
		console.log(div.getAttribute("id"));//"otherId"
		console.log(div.getAttribute("align"));//"left"
		
		div.mycolor="red";
		div.setAttribute("myNewcolor","blue");
		console.log(div.getAttribute("mycolor"));//null
		console.log(div.getAttribute("myNewcolor"));//"blue"


#### 4）删除特性的方法：(HTMLElement).removeAttribute()
不仅清楚特性的值，还完全把这个特性从元素中删除。
	
	var div=document.getElementById("myDiv");
	div.removeAttribute("id");
	console.log(div.id);//空字符串

#### 5）attributes属性
9种Node类型只有Element使用attribute属性。

attribute属性包含的是一个NamedNodeMap对象，与Nodelist类似，也是个动态的集合。NamedNodeMap对象有以下方法：

.attributes+

- .getNamedItem(name):返回特性名称等于name的特性节点,等于attributes[name]
- .removeNamedItem(name):从列表中移除名称为name的特性节点,返回被移除的节点
- .setNamedItem():向列表中添加特性节点
- .item(n):返回位于数字n处的特性节点，等于attributes[n]
- attributes[n].nodeName/nodeValue

	每个节点的nodeName为特性名称，nodeValue为特性值。也可设置nodeValue值。

		var div=document.getElementById("myDiv");
		
		var id=div.attributes.getNamedItem("id").nodeValue;
		console.log(id);//"myDiv"
		
		var id1=div.attributes["id"];
		console.log(id);//"myDiv"

##### removeNamedItem（）与removeAttribute()
效果相同。但返回不同。removeNamedItem()返回被移除的特性节点（类型为object)。

	var div=document.getElementById("myDiv");
	
	var oldAttr=div.attributes.removeNamedItem("id");
	console.log(oldAttr);//id="myDiv"
	console.log(typeof oldAttr);//"object"
	
	var oldAttr2=div.removeAttribute("ltr");
	console.log(oldAttr2);//undefined
	
##### attributes属性的用场：遍历特性值
一般不用attributes属性，而是用getAttribute()、setAtrribute()和removeAttribute()。

遍历元素特性时可以用attributes:

	var div=document.getElementById("myDiv");
	
	function outputAttributes(element) {
	    var pairs=new Array(),
	        attrName,
	        attrValue,
	        i,
	        len;
	    
	    for (i=0,len=element.attributes.length;i<len;i++) {
	        attrName=element.attributes[i].nodeName;
	        attrValue=element.attributes[i].nodeValue;
	        if (element.attributes[i].specified) {
	            //为了兼容IE7及更早版本，这些版本会返回所有attributes,其每个特性节点有个specified属性，为true才是设置过了的特性
	             pairs.push(attrName+"=\""+attrValue+"\"");
	        }
	       
	        
	    }
	    
	    return pairs.join(" ");
	}
	
	console.log(outputAttributes(div));//"id="myDiv" class="bd" title="text" lang="en" dir="ltr""

#### 6)创建元素
##### document.createElement()

	var div=document.createElement("div");
	div.id="newDiv";
	document.body.appendChild(div);

##### IE7及更早期版本用法
	
	if(client.brower.ie&&client.brower.ie<=7){//来自Chapter9客户端检测创建的对象client
		var div=document.createElement("<div id=\"myNewDiv\"></div>");
		document.body.appendChild(div);
	}

该法要求浏览器检测。其他浏览器都不支持。只有在需要避开IE早期版本的问题的情况下使用。

#### 7）元素的子元素
##### （1）element.childNodes
一定要检测子元素类型。因为有的浏览器包含文本节点，有的不包含。

HTML为：

	 <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
    </ul>


JS为：

	var element=document.getElementsByTagName("ul")[0];
	
	for (var i=0,len=element.childNodes.length;i<len;i++) {
	    if (element.childNodes[i].nodeType==1) {//检测子节点是否为元素
	        console.log(element.childNodes[i].tagName);
	    }
	}

##### （2）document.getElementsByTagName（）
可通过某个特定标签名取得子节点或后代节点

	var element=document.getElementsByTagName("ul")[0];
	var items=element.getElementsByTagName("li");
	
	console.log(items);//[li, li, li]

如果ul包含更多次的后代元素，**每个层次中的li都会返回**。

### 4.Text类型
#### 1)基本属性
- nodeType:3
- nodeName:"#text"
- nodeValue:获取或设置节点包含的文本
- parentNode:一个ELement
- 没有子节点
- data: 和nodeValue一样可以获取或设置Text节点所包含的文本。
- nodeValue.length/data.length

		var div=document.getElementById("myDiv");
		var textNode=div.firstChild;
		console.log(textNode.nodeValue);//"abcd"
		
		textNode.nodeValue="Other Message.";
		console.log(textNode.data);//"Other Message."

		textNode.data="Some <strong>other</strong> message.";//（1）
		console.log(textNode.data);//"Some <strong>other</strong> message."

注意：(1)语句网页上的呈现结果就是该文本本身（strong标签效果没有呈现，而是呈现出标签文本）。因为**此时字符串会经过HTML编码。即大于、小于、引号都会转义**。

转义方式如下：

		"Some &lt;strong&gt;other&lt;/strong&gt; message."

#### 2）创建文本节点： document.createTextNode()

	var element=document.createElement("div");;
	
	var textNode=document.createTextNode("Hello world!");
	element.appendChild(textNode);
	
	document.body.appendChild(element);

注意，作为参数的文本也会进行HTML编码，如果文本中带有标签，我们在结果中只能看到带标签的文本而非具有标签效果的文本：

	var element=document.createElement("div");;
	
	var textNode=document.createTextNode("<strong>Hello</strong> world!");
	element.appendChild(textNode);
	
	document.body.appendChild(element);

也可以为元素设置多个文本节点，它们会连起来显示：

	var element=document.createElement("div");;
	
	var textNode=document.createTextNode("Hello world!");
	element.appendChild(textNode);
	
	var anotherTextNode=document.createTextNode("Yippee!");
	element.appendChild(anotherTextNode);
	
	document.body.appendChild(element);

#### 3）规范化文本节点（将相邻文本节点合并）：element.normalize()

	var element=document.createElement("div");;
	
	var textNode=document.createTextNode("Hello world!");
	element.appendChild(textNode);
	
	var anotherTextNode=document.createTextNode("Yippee!");
	element.appendChild(anotherTextNode);
	
	document.body.appendChild(element);
	
	console.log(element.childNodes.length);//2
	
	element.normalize();
	console.log(element.childNodes.length);//1
	console.log(element.firstChild.nodeValue);//"Hello world!Yippee!"

#### 4)分割文本节点：（Element).splitText(n)
新节点将包含指定位置开始到末尾的内容。

	var element=document.createElement("div");;
	
	var textNode=document.createTextNode("Hello world!");
	element.appendChild(textNode);
	
	var newNode=element.firstChild.splitText(5);
	console.log(element.firstChild.nodeValue);//"Hello"
	console.log(newNode.nodeValue);//" world!"

### 5.Comment类型

### 6.CDATASection类型
略

### 7.DocumentType类型
 	console.log(document.doctype.name);//"html"

### 8.DocumentFragment类型
文本片段继承了Node的所有方法。如果将文档中的节点添加到片段中，就会从文档树种移除。添加到文档片段的新节点也不属于文档树。可通过appendChild()或insertBefore()将其添加到文档中。

	var fragment=document.createDocumentFragment();
	var ul=document.getElementById("myList");
	var li=null;
	
	for (var i=0;i<3;i++) {
	    li=document.createElement("li");
	    li.appendChild(document.createTextNode("Item "+(i+1)));
	    fragment.appendChild(li);
	}
	
	ul.appendChild(fragment);

### 9.Att特性
即元素的attributes属性中的节点。
- nodeType:2
- nodeName:特性名称
- nodeValue:特性值
- parentNode:null
- 无子节点

不建议直接访问特性节点。 推荐使用getAttribute(),setAttribute(),removeAttribute()

## 二、DOM操作技术
### 1.动态脚本
动态脚本含义：页面加载时不存在，但在将来某一时刻刻通过修改DOM动态添加的脚本。

#### 1）动态加载外部JS文件

	function loadScript(url) {
	    var script=document.createElement("script");
	    script.type="text/javascript";
	    script.src=url;
	    document.body.appendChild(script);
	}
	
	loadScript("test2.js");

在执行document.body.appendChild(script)前是不会下载外部文件的。也可以添加到head元素。

#### 2）行内方式指定JS代码
跨浏览器方式：

	function loadScriptString(code) {
	    var script=document.createElement("script");
	    script.type="text/javascript";
	    try {
	        script.appendChild(document.createTextNode(code));//Firefox、Safari、Chrome、Opera中
	    } catch(ex) {
	        script.text=code;//IE中
	    }
	   
	    document.body.appendChild(script);
	}
	
	loadScriptString("function sayHi(){alert('hi');} sayHi();");

#### 2）动态样式
动态样式含义：页面刚加载时不存在的样式，在页面加载完动态添加到页面中。

##### （1）动态加载外部样式
	
	function loadStryles(url) {
	    var link=document.createElement("link");
	    link.rel="stylesheet";
	    link.type="text/css";
	    link.href=url;
	    var head=document.getElementsByTagName("head")[0];
	    head.appendChild(link);
	}
	
	loadStyles("test1.css");

动态加载外部样式文件是异步的

##### （2）动态添加嵌入式样式

	function loadStyleString(css) {
	    var style=document.createElement("style");
	    style.type="text/css";
	    try {
	        style.appendChild(document.createTextNode(css));//除IE外其他浏览器，IE不允许访问style元素的子节点故会报错
	    } catch(ex) {
	        style.styleSheet.cssText=css;//IE的解决办法
	    }
	    var head=document.getElementsByTagName("head")[0];
	    head.appendChild(style);
	}
	
	loadStyleString("body{background-color:red}");

### 3.操作表格
便捷方法：

	var table=document.createElement("table");
	table.border=1;
	table.width="100%";
	
	var tbody=document.createElement("tbody");
	table.appendChild(tbody);
	
	tbody.insertRow(0);//创建第一行
	tbody.rows[0].insertCell(0);
	tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 1,1"));
	tbody.rows[0].insertCell(1);
	tbody.rows[0].cells[1].appendChild(document.createTextNode("Cell 1,2"));
	
	tbody.insertRow(1);//创建第二行
	tbody.rows[1].insertCell(0);
	tbody.rows[1].cells[0].appendChild(document.createTextNode("Cell 2,1"));
	tbody.rows[1].insertCell(1);
	tbody.rows[1].cells[1].appendChild(document.createTextNode("Cell 2,2"));
	
	document.body.appendChild(table);

### 4.使用NodeList
与NamedNodeMap、HTMLCollection三个集合都是动态的。每当文档结构发生变化时它们都会更新。

一般应减少NodeList访问次数。因为每次访问它都会进行一次基于文档的查询。