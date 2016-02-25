
var EventUtil={
    addHandler:function(element,type,handler){
        if (element.addEventListener) {
            element.addEventListener(type,handler,false);//表示在冒泡阶段调用事件处理程序
        }
        else if (element.attachEvent) {
            element.attachEvent(type,handler);
        }
        else{
            element["on"+event]=handler;
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
    },
    getEvent:function(event){
        return event? event:window.event;
    },
    getTarget:function(event){
        return event.target||event.srcElement;
    },
    preventDefault:function(event){
        if (event.preventDefault) {
            event.preventDefault();
        }
        else if(event.returnValue){
            event.returnValue =false;
        }
    },
    getRelatedTarget:function(event){
        if (event.relatedTarget) {
            return event.relatedTarget;
        }
        else if (event.toElement) {//IE8之前只有下面两种，IE9三种都有
            return event.toElement;
        }
        else if (event.fromElement) {
            return event.fromElement;
        }
        else{
            return null;
        }
    },
   getButton: function(event){
        if (document.implementation.hasFeature("MouseEvents","2.0")) {
            return event.button;//DOM的event.button就三个值：0、1、2
        }
        else{
            switch (event.button) {//IE8之前的很复杂，如下转换
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    getWheelDelta:function(event){
        if (event.wheelDelta) {//大多数浏览器的mousewheel事件，及相应event.wheelDelta属性
            return(client.engine.opera&&client.engine.opera<9.5? -event.wheelDelta:event.wheelDelta);
        }
        else{
            return -event.detail*40;//Firefox是DOMMouseScroll事件，相应滚动信息在event.detail属性
        }
    },
    getCharCode: function(event){
        if (typeof event.charCode=="number") {
            return event.charCode;
        }
        else{
            return event.keyCode;
        }
    },
    getClipboardText:function(event){
        var clipboardData=(event.clipboardData||window.clipboardData);
        return clipboardData.getData("text");
    },
    setClipboardText: function(event,value){
        if (event.clipboardData) {
            return event.clipboardData.setData("text/plain",value);
        }
        else if (window.clipboardData) {
            return window.clipboardData.setData("text",value);
        }
    }
};




EventUtil.addHandler(window,"beforeunload",function(event){
       event=EventUtil.getEvent(event);
       var message="I will miss you";
       event.returnValue=message;
       return message;
       
       
});	

