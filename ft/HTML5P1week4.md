# Week4:HTML5 Animations

## Lesson1 Video introduction

略

## Lesson2 动画技术基础
### 2.1 HTML/JavaScript 动画历史

#### 2.1.1 动画原理

canvas中添加动画的基本步骤：

1. clear:可使用ctx.clearRect(0,0,canvasWidth,canvasHeight)方法
2. draw:绘制图形，使用之前学过的任意方法
3. move:移动图形，修改图形的位置、方向、大小或颜色
4. repeat:重复1-3

如果你是重绘整个canvas内容，那么可以跳过步骤1。

#### 2.1.2 HTML5之前
在HTML5和cavas元素出现之前，人们会创建HTML游戏。他们针对div中的CSS样式，改变CSS的top,left,width,height属性等来使屏幕上的图画动起来。

在90年代后期到2000年代初期，JavaScript变得流行起来。社区创造了第一个用于描述创建交互式和动画式网站的技术的涵盖性术语——DHTML(Dynamic HTML)。对于动画，setInterval(func,ms)和setTimeOut(func,ms)方法成为唯一的解决方案，只是ms数非常小。

#### 2.1.3 HTML5之后
新方法：requestAnimationFrame API

### words
- orientation n.方向，定向
- umbrella term 涵盖性术语


### 2.2 video中的一个例子
#### 方法1 过去的setInterval动画方法：

   		window.onload=init;
        var  canvas,ctx;
        var rectangleX=0;
        
        function init() {
            canvas=document.getElementById('myCanvas');
            ctx=canvas.getContext('2d');
            setInterval(animate,1000);               
        }
        
        function animate() {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.fillStyle="#FF0000";
            ctx.fillRect(rectangleX,0,80,100);
            rectangleX+=1;
        }
#### 方法2 过去的setTimeOut()方法：

 		window.onload=init;
        var  canvas,ctx;
        var rectangleX=0;
        
        function init() {
            canvas=document.getElementById('myCanvas');
            ctx=canvas.getContext('2d');
            setTimeout(animate,100);               
        }
        
        function animate() {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.fillStyle="#FF0000";
            ctx.fillRect(rectangleX,0,80,100);
            rectangleX+=1;
            setTimeout(animate,100);
        }
#### 方法3 requestAnimationFrame()

 		window.onload=init;
        var  canvas,ctx;
        var rectangleX=0;
        
        function init() {
            canvas=document.getElementById('myCanvas');
            ctx=canvas.getContext('2d');
            requestAnimationFrame(animate);               
        }
        
        function animate() {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.fillStyle="#FF0000";
            ctx.fillRect(rectangleX,0,80,100);
            rectangleX+=1;
            requestAnimationFrame(animate);               

        }

requestAnimationFrame():每秒60帧，每帧间隔16.6ms，可以得到非常平滑的动画。

#### 但是也不应该忘了setInterval()和setTimeout()，可应用如下：

	 	window.onload=init;
        var  canvas,ctx;
        var rectangleX=0;
        var colors=['red','blue','green'];
        var currentColor=0;
        var speed=1;
        
        function init() {
            canvas=document.getElementById('myCanvas');
            ctx=canvas.getContext('2d');
            requestAnimationFrame(animate);
            setInterval(changeColor,1000);
        }
        
        function animate() {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.fillRect(rectangleX,0,80,100);
            rectangleX+=speed;
            if ((rectangleX+80>200)||(rectangleX<=0)) {
                speed=-speed;
            }
            
            requestAnimationFrame(animate);               

        }
        
        function changeColor() {
            ctx.fillStyle=colors[currentColor%3];
            console.log(colors[currentColor%3]);
            currentColor+=1;
            
        }


### words
- straightfoward adj.直截了当的，干脆的

### 2.3 setInterval() 2.4 使用setTimeout()代替setInterval()

略

### 2.5 requestAnimationFrame()-60帧/s的动画（最好的做法）

#### 2.5.1 简介
requestAnimationFrame(animationLoop)和setTimeOut()很类似：

- 它是60帧/s
- 它也只调用函数一次：如果要让动画继续进行，就像setTimeout那样，你需要在animationLoop函数的末尾再次调用requestAnimationFrame函数。

比起setInterval和setTimeout,它的优点有：

- 时间更加精确
- 高分辨率计时器
- 合并多个动画
- 优化了CPU/GPU，节约了移动设备的电池


eg:
	
	<canvas id="myCanvas" width="400" height="400">
	   Your browser does not support the canvas tag.
	</canvas>
	<p>
	<button onclick="start()">Start animation</button>
	<button onclick="stop()">Stop animation</button>
	  
	<script>
	   window.onload=init;
	   var canvas, ctx;
	   var monsterX=100, monsterY=100, monsterAngle=0;
	   var requestId;
	  
	   function init() {
	     // This function is called after the page is loaded
	     // 1 - Get the canvas
	     canvas = document.getElementById('myCanvas');
	     // 2 - Get the context
	     ctx=canvas.getContext('2d');
	   }
	   
	   function animationLoop(timestamp) {
	      // 1 - Clear
	      ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	      // 2 Draw
	      drawMonster(monsterX, monsterY, monsterAngle, 'green', 'yellow');
	
	      // 3 Move
	      monsterX += 10;
	      monsterX %= canvas.width
	      monsterAngle+= 0.01;
	
	      // call again mainloop after 16.6 ms (60 frames/s)
	      requestId = requestAnimationFrame(animationLoop);
	 }   
	   function drawMonster(x, y, angle, headColor, eyeColor) {   
	     // GOOD PRACTICE : SAVE CONTEXT AND RESTORE IT AT THE END
	     ctx.save();
	     
	     // Moves the coordinate system so that the monster is drawn
	     // at position (x, y)
	     ctx.translate(x, y);
	     ctx.rotate(angle)
	     
	     // head
	     ctx.fillStyle=headColor;
	     ctx.fillRect(0,0,200,200);
	     
	     // eyes
	     ctx.fillStyle='red';
	     ctx.fillRect(35,30,20,20);
	     ctx.fillRect(140,30,20,20);
	     
	     // interior of eye
	     ctx.fillStyle=eyeColor;
	     ctx.fillRect(43,37,10,10);
	     ctx.fillRect(143,37,10,10);
	     
	     // Nose
	     ctx.fillStyle='black';
	     ctx.fillRect(90,70,20,80);
	     
	     // Mouth
	     ctx.fillStyle='purple';
	     ctx.fillRect(60,165,80,20);
	     
	     // GOOD PRACTICE !
	     ctx.restore();
	   }
	        
	function start() {
	   // Start the animation loop, targets 60 frames/s
	   requestId = requestAnimationFrame(animationLoop);
	 }
	 function stop() {
	   if (requestId) {
	      cancelAnimationFrame(requestId);
	   }
	 }
	</script>
### words
- resolution n.分辨率
- bundle vt.捆，束
- GPU 显卡，图形处理器（Graphi cs Processing Unit)

## Lesson3 Canvas and user interaction(keyboard,mouse)
### 3.1 输入&输出：事件是怎样在web app和游戏中工作的？

#### 3.1.1 简介：JS中对事件的操控
在JavaScript中，我们将用户处理的事件作为输入，将DOM结构作为输出。在游戏/动画中的大部分时间里，我们将要改变移动对象的状态变量，例如position或者外星飞船的速度。

这些事件叫做DOM事件，而我们使用DOM JavaScript API来创建事件处理程序。

#### 3.2.2 三种操纵事件的方法
##### 方法1：在HTML中
eg:
	<div id="someDiv" onclick="alert('clicked!');">
	    content of the div
	</div>
	
##### 方法2： 
eg:

	document.getElementById('someDiv').onclick = function(evt) {
	  alert('clicked!');
	}

##### 方法3：
eg:

	document.getElementById('someDiv').addEventListener('click', function(evt) {
	    alert('clicked!');
	}, false);

### words
- manipulate vt.操纵，操作
- alien ship 外星飞船
- animation loop 循环动画


### 3.2 操控键盘事件

#### 3.2.1 简介
当你监听键盘相关事件时（keydown,keyup或keypressed）,传递给监听函数的event参数会包含触发事件的键值，即event.keyCode

eg:
	
	window.addEventListener('keydown', function(event) {
	   if (event.keyCode === 37) {
	     //left arrow was pressed(左箭头键的keyCode为37)
	   }
	}, false);
	
 关于键盘的键对应的键码，参见 <http://css-tricks.com/snippets/javascript/javascript-keycodes/>

#### 3.2.2 为window对象添加键盘事件监听函数

eg:

	<canvas id="myCanvas" width="350" height="200">
	   Your browser does not support the canvas tag.
	</canvas>
	
	<script>
	    window.onload=init;
	    var canvas, ctx;
	    var monsterX=100, monsterY=100, monsterAngle=0;
	    var incrementX = 0;
	    function init() {
	        canvas=document.getElementById("myCanvas");
	        ctx=canvas.getContext("2d");
	        
	        window.addEventListener("keydown",handleKeydown,false);
	        window.addEventListener("keyup",handleKeyup,false);
	        
	        requestId=requestAnimationFrame(animationLoop);
	    }
	    function handleKeydown(e) {
	        if (e.keyCode===37) {
	            incrementX=-1;
	        }
	        else if (e.keyCode===39) {
	            incrementX=1;
	        }
	    }
	    function handleKeyup(e) {
	        incrementX=0;
	    }
	   
	   function animationLoop() {
	      // 1 - Clear
	      ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	      // 2 Draw
	      drawMonster(monsterX, monsterY, monsterAngle, 'green', 'yellow');
	
	      // 3 Move
	        monsterX+=incrementX;
	
	      // call again mainloop after 16.6 ms (60 frames/s)
	      requestId = requestAnimationFrame(animationLoop);
	    }
	    
	   function drawMonster(x, y, angle, headColor, eyeColor) {   
	        // GOOD PRACTICE : SAVE CONTEXT AND RESTORE IT AT THE END
	        ctx.save();
	        
	        // Moves the coordinate system so that the monster is drawn
	        // at position (x, y)
	        ctx.translate(x, y);
	        ctx.rotate(angle)
	        
	        // head
	        ctx.fillStyle=headColor;
	        ctx.fillRect(0,0,200,200);
	        
	        // eyes
	        ctx.fillStyle='red';
	        ctx.fillRect(35,30,20,20);
	        ctx.fillRect(140,30,20,20);
	        
	        // interior of eye
	        ctx.fillStyle=eyeColor;
	        ctx.fillRect(43,37,10,10);
	        ctx.fillRect(143,37,10,10);
	        
	        // Nose
	        ctx.fillStyle='black';
	        ctx.fillRect(90,70,20,80);
	        
	        // Mouth
	        ctx.fillStyle='purple';
	        ctx.fillRect(60,165,80,20);
	        
	        // GOOD PRACTICE !
	        ctx.restore();
	    }
	
	</script>

点击键盘的左箭头、右箭头按键，可以左右移动怪兽。

#### 3.2.3 如果我想要仅仅在我的canvas中监听键盘事件呢？
如果你想为你的canvas元素添加键盘监听事件，你们问题是只有当该元素获得焦点时它才会获取事件。默认的是它没有获得焦点。

***canvas元素的tabindex属性可以让该元素变得可获得焦点。没有它，canvas永远不会获得焦点！***

这样让canvas可以获得焦点

	<canvas id="myCanvas" width="350" tabindex="1" height="200">
	</canvas>

	canvas=document.getElementById('myCanvas');
	...
	canvas.focus();

将上例代码如下修改：

		<script>
	    window.onload=init;
	    var canvas, ctx;
	    var monsterX=100, monsterY=100, monsterAngle=0;
	    var incrementX = 0;
	    function init() {
	        canvas=document.getElementById("myCanvas");
	        canvas.focus();
	        ctx=canvas.getContext("2d");
	        
	        canvas.addEventListener("keydown",handleKeydown,false);
	        canvas.addEventListener("keyup",handleKeyup,false);
	        
	        requestId=requestAnimationFrame(animationLoop);
	    }
	    function handleKeydown(e) {
	        if (e.keyCode===37) {
	            incrementX=-1;
	        }
	        else if (e.keyCode===39) {
	            incrementX=1;
	        }
	    }
	    function handleKeyup(e) {
	        incrementX=0;
	    }
	   
	   function animationLoop() {
	      // 1 - Clear
	      ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	      // 2 Draw
	      drawMonster(monsterX, monsterY, monsterAngle, 'green', 'yellow');
	
	      // 3 Move
	        monsterX+=incrementX;
	
	      // call again mainloop after 16.6 ms (60 frames/s)
	      requestId = requestAnimationFrame(animationLoop);
	    }
	    
	   function drawMonster(x, y, angle, headColor, eyeColor) {   
	        // GOOD PRACTICE : SAVE CONTEXT AND RESTORE IT AT THE END
	        ctx.save();
	        
	        // Moves the coordinate system so that the monster is drawn
	        // at position (x, y)
	        ctx.translate(x, y);
	        ctx.rotate(angle)
	        
	        // head
	        ctx.fillStyle=headColor;
	        ctx.fillRect(0,0,200,200);
	        
	        // eyes
	        ctx.fillStyle='red';
	        ctx.fillRect(35,30,20,20);
	        ctx.fillRect(140,30,20,20);
	        
	        // interior of eye
	        ctx.fillStyle=eyeColor;
	        ctx.fillRect(43,37,10,10);
	        ctx.fillRect(143,37,10,10);
	        
	        // Nose
	        ctx.fillStyle='black';
	        ctx.fillRect(90,70,20,80);
	        
	        // Mouth
	        ctx.fillStyle='purple';
	        ctx.fillRect(60,165,80,20);
	        
	        // GOOD PRACTICE !
	        ctx.restore();
	    }
	
	</script>

canvas默认是获取得到焦点的。如果点击canvas外，再按下左右键，则啥也不会发生；再点击canvas内，canvas重新获取焦点，按下左右键，则会移动。

注意：***canvas获得焦点时，其会出现蓝框，只有当canvas获得焦点时，键盘事件才会被探测到。***

#### 3.2.4 更好的方法：当光标移入canvas时，canvas获得焦点

如下修改上例代码：

	function init() {
        canvas=document.getElementById("myCanvas");
        ctx=canvas.getContext("2d");
        
        canvas.addEventListener("keydown",handleKeydown,false);
        canvas.addEventListener("keyup",handleKeyup,false);
        canvas.addEventListener("mouseenter",setFocus,false);
        canvas.addEventListener("mouseout",unsetFocus,false);
        
        requestId=requestAnimationFrame(animationLoop);
    }
    function setFocus(e) {
        canvas.focus();
    }
    function unsetFocus(e) {
        canvas.blur();
        incrementX=0;
    }
### words
- are fond of 爱好，喜好
- archeology n.考古学
- tricky adj.棘手的

### 3.3 鼠标交互，鼠标事件

#### 3.3.1 简介 && 3.3.2 不同的鼠标事件
略

#### 3.3.3 棘手的部分：精确地获取canvas相关的光标位置：getBoundingClientRect()方法

当你监听任意一个鼠标事件，传递给事件监听函数的事件对象event会拥有属性:clientX和clientY。

但是这是窗口坐标系，和window有关，而非和canvas自身有关。

大多数时间你需要和canvas坐标打交道，而非window坐标，所以你必须在window和canvas之间转换坐标系。这需要考虑canvas的位置，以及影响canvas位置的CSS属性。

幸运的是，**这里有一个获取页面中任何元素的位置和大小的方法:getBoundingClientRect()**。

以下代码有问题：

	<body>
		    This is a canvas:
		<canvas id="myCanvas" width="578" height="200">
		   Your browser does not support the canvas tag.
		</canvas>
		
		<script>
		    window.onload=init;
		    var canvas, ctx;
		
		    function init() {
		        canvas=document.getElementById("myCanvas");
		        ctx=canvas.getContext("2d");
		        
		        canvas.addEventListener('mousemove',function(e){
		            mousePos=getMousePos(canvas,e);
		            var message='Mouse position:'+mousePos.x+','+mousePos.y;
		            writeMessage(canvas,message);
		        },false);
		        
		        canvas.addEventListener('mousedown', function (evt) {
		            mouseButton = evt.button;
		            var message = "Mouse button " + evt.button + " down at position: " + mousePos.x + ',' + mousePos.y;
		            writeMessage(canvas, message);
		        }, false);
		    
		        canvas.addEventListener('mouseup', function (evt) {
		            var message = "Mouse up at position: " + mousePos.x + ',' + mousePos.y;
		            writeMessage(canvas, message);
		        }, false);
		    };
		
		        function writeMessage(canvas, message) {
		            ctx.save();
		            ctx.clearRect(0, 0, canvas.width, canvas.height);
		            ctx.font = '18pt Calibri';
		            ctx.fillStyle = 'black';
		            ctx.fillText(message, 10, 25);
		            ctx.restore();
		        }   
		        function getMousePos(canvas,e) {
		            return{
		                x:e.clientX,
		                y:e.clientY
		            }
		        }
		    
		</script>
	</body>

修改getMousePos函数为：

	     function getMousePos(canvas,e) {
            var rect=canvas.getBoundingClientRect();
            return{
                x:e.clientX-rect.left,
                y:e.clientY-rect.top
            }
        }

#### 3.3.4 例子：使用鼠标移动monster,当鼠标按键按下时，旋转它

code:

	<script>
    window.onload=init;
    var canvas, ctx;
    var monsterX=100, monsterY=100, monsterAngle=0;
    var incrementX = 0;
    var incrementAngle =0;
    var mousePos;
    
    function init() {
        canvas=document.getElementById("myCanvas");
        ctx=canvas.getContext("2d");
        
        canvas.addEventListener('mousemove', handleMousemove, false);
        canvas.addEventListener('mousedown', handleMousedown, false);
        canvas.addEventListener('mouseup', handleMouseup, false);
        
        requestId = requestAnimationFrame(animationLoop);

    }
    function handleMousemove(e) {
        mousePos=getMousePos(canvas,e);
    }
    function handleMousedown(e) {
        incrementAngle=0.1;
    }
    function handleMouseup(e) {
        incrementAngle=0;
    }
    
    function getMousePos(canvas,e) {
        var rect=canvas.getBoundingClientRect();
        return{
            x:e.clientX-rect.left,
            y:e.clientY-rect.top
        }
    }
    

    
    function drawMonster(x, y, angle, headColor, eyeColor) {   
        // GOOD PRACTICE : SAVE CONTEXT AND RESTORE IT AT THE END
        ctx.save();

        // Moves the coordinate system so that the monster is drawn
        // at position (x, y)
        ctx.translate(x, y);
        ctx.rotate(angle)

        // head
        ctx.fillStyle=headColor;
        ctx.fillRect(0,0,200,200);

        // eyes
        ctx.fillStyle='red';
        ctx.fillRect(35,30,20,20);
        ctx.fillRect(140,30,20,20);

        // interior of eye
        ctx.fillStyle=eyeColor;
        ctx.fillRect(43,37,10,10);
        ctx.fillRect(143,37,10,10);

        // Nose
        ctx.fillStyle='black';
        ctx.fillRect(90,70,20,80);

        // Mouth
        ctx.fillStyle='purple';
        ctx.fillRect(60,165,80,20);

        // GOOD PRACTICE !
        ctx.restore();
    }

    function animationLoop() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        drawMonster(monsterX, monsterY, monsterAngle, 'green', 'yellow');
        if (mousePos!==undefined) {
            monsterX=mousePos.x;
            monsterY=mousePos.y;
            monsterAngle+=incrementAngle;
            
        }
        
        requestId=requestAnimationFrame(animationLoop);
    }
</script>
#### 3.3.5 就像你使用铅笔一样在canvas中绘图
code:

 	window.onload=init;
    var canvas, ctx,previousMousePos,started;
    
    function init() {
        canvas=document.getElementById("myCanvas");
        ctx=canvas.getContext("2d");
        started=false;
        canvas.addEventListener('mousemove', handleMousemove, false);
    }
    
    function drawLineImmediate(x1,y1,x2,y2) {
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
    }
    function handleMousemove(e) {
        var mousePos=getMousePos(canvas,e);
        if (!started) {
            previousMousePos=mousePos;
            started=true;
        }
        else{
            drawLineImmediate(previousMousePos.x, previousMousePos.y,mousePos.x,mousePos.y);
            previousMousePos = mousePos;
        }
    }
  
    
    function getMousePos(canvas,e) {
        var rect=canvas.getBoundingClientRect();
        return{
            x:e.clientX-rect.left,
            y:e.clientY-rect.top
        }
    }	

我们需要定义一个变量started=false，因为我们不能在鼠标移动之前绘出线条。
#### 3.3.6 和上例相同，只不过是只有当鼠标按键按下时才会绘图

	 window.onload=init;
    var canvas, ctx,previousMousePos,painting;
    
    function init() {
        canvas=document.getElementById("myCanvas");
        ctx=canvas.getContext("2d");
        started=false;
        
        canvas.addEventListener('mousemove', handleMousemove, false);
        canvas.addEventListener('mousedown', clicked);
        canvas.addEventListener('mouseup', released);
    }
    
    function drawLineImmediate(x1,y1,x2,y2) {
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
    }
    function handleMousemove(e) {
        var mousePos=getMousePos(canvas,e);
       
        if (painting) {
            drawLineImmediate(previousMousePos.x, previousMousePos.y,mousePos.x,mousePos.y);
            previousMousePos = mousePos;
        }
       
        
    }
    function clicked(e) {
        previousMousePos=getMousePos(canvas,e);
        painting=true;
    }
    function released(e) {
        painting=false;
    }
    
    function getMousePos(canvas,e) {
        var rect=canvas.getBoundingClientRect();
        return{
            x:e.clientX-rect.left,
            y:e.clientY-rect.top
        }
    }

### 3.4 响应式的canvas，重新调整canvas的大小
#### 3.4.1 简介

如果我们不知道一些规则的话，重新调整canvas的大小可能是很棘手的：

1. 在JavaScript中改变canvas的width或height属性会清楚掉它的内容，并重置context对象。
2. 在CSS中只用%来设定canvas的width和height并不会改变它的px大小。相反，它会放大现有的px大小而不清除内容。

#### 3.4.1 例1：实时改变canvas的大小会清除它的内容
code:

	function resizeCanvas() {
	     canvas.width = 300;
	}
	 
	</script>
	...
	<button onclick="resizeCanvas();">
	    Click this button to resize the canvas and erase it!
	</button>

#### 3.4.2 例2：使用百分比设置CSSwidth和height属性重新调整canvas大小

code:

	<style type="text/css">
	    #myCanvas {
	       border: 1px solid black;
	       width:100%
	    }
	    
	</style>
	</head>
	<body>
	    <canvas id="myCanvas" width="100" height="100" ></canvas>
	
	<script>
	    window.onload=init;
	    var canvas, ctx;
	    
	    function init() {
	        canvas=document.getElementById("myCanvas");
	        ctx=canvas.getContext("2d");
	        
	         
	            // draw two diagonals
	        ctx.beginPath();
	        ctx.moveTo(0, 0);
	        ctx.lineTo(canvas.width, canvas.height);
	        ctx.moveTo(0, canvas.height, canvas.width, 0);
	        ctx.lineTo(canvas.width, 0);
	        ctx.stroke();
	        
	    }
	    
	</script>

可以看到结果中分辨率没有改变，只是像素点变大了。

#### 3.4.3 例3： 使用一个resize事件监听器+一个父元素来创建响应式canvas

创建一个真正响应式的canvas是比较棘手的，步骤如下：

1. 将canvas元素嵌入一个div或其他父元素容器中
2. 为父元素设置百分比的CSSwidth和height
3. 对父元素设置resize监听器
4. 在JavaScript的resize监听器中，改变canvas的width和height属性（内容将被清除）
5. 重绘内容，根据父元素的尺寸来缩放。

Code:

	<style type="text/css">
	    #parentDiv {
	        width:100%;
	        height:50%;
	        margin-right: 10px;
	        border: 1px solid red;
	    }
	 
	    canvas {
	       border: 2px solid black;
	    }
	</style>
	</head>
	<body>
	    <div id="parentDiv">
	        <canvas id="myCanvas" width="100" height="100" ></canvas>
	    </div>
	<script>
	    window.onload=init;
	    var canvas, ctx,divcanvas;
	    
	    function init() {
	        divcanvas=document.getElementById("parentDiv");
	        canvas=document.getElementById("myCanvas");
	        ctx=canvas.getContext("2d");
	        
	        drawDiagonals();
	      
	        
	        window.addEventListener('resize',resizeCanvasAccordingToParentSize,false); 
	    }
	    
	    function resizeCanvasAccordingToParentSize() {
	        // adjust canvas size, take parent's size, this erases content
	        canvas.width = divcanvas.clientWidth;
	        canvas.height = divcanvas.clientHeight;
	      
	        drawDiagonals();      
	   }
	   
	   function drawDiagonals() {
	        ctx.beginPath();
	        ctx.moveTo(0, 0);
	        ctx.lineTo(canvas.width, canvas.height);
	        ctx.moveTo(0, canvas.height);
	        ctx.lineTo(canvas.width, 0);
	        ctx.stroke();
	   }
	    
	</script>

#### 练习
Using CSS % for resizing a canvas is?

答案：Bad practice

使用%是不推荐的，是不好的做法，因为它会改变canvas的像素点的大小而使其变模糊。当尺寸变大时，分辨率并没有改变，只是像素点变大了而已。


### words
- blurry adj.模糊的
- diagonal n.对角线 adj.斜的，对角线的



