# 一. 好贴搜集
腾讯前端面试经历<http://my.oschina.net/june6502/blog/392914>

2015腾讯WEB前端开发面试题
<http://www.xzhichang.com/Strategy/Article_107017.html>

史上最全前端面试题（含答案）
<http://www.jobui.com/mianshiti/it/web/5066/>

腾讯的三轮面试（web前端）
<http://www.cnblogs.com/hustskyking/archive/2013/04/27/mianshi.html>

腾讯面试经历一
<http://www.cnblogs.com/bullub/archive/2013/03/13/2956897.html>

腾讯面试经历二
<http://www.cnblogs.com/bullub/archive/2013/03/14/2960458.html>

腾讯2013实习生面经
<http://www.cnblogs.com/tonylp/archive/2013/04/27/3048084.html>

# 二、 专题总结
## 1.关于HTTP协议


## 2.关于数据库表的设计查询


## 3、关于自己做的网站的介绍


## 4.响应式布局设计
http://www.educity.cn/jianzhan/403677.html

***在自己的网站上实现一下***

## 5.算法


***晚上把《程序员面试宝典》拿过来


## 6.div拖动
看《JavaScript高级程序设计》Chapter16

<http://www.cnblogs.com/dolphinX/p/3290520.html>

## 7.Ajax自动补全
<http://blog.csdn.net/tounaobun/article/details/8062781>

## 8.自定义js右键菜单
<http://www.cnblogs.com/snandy/archive/2011/03/09/1977789.html>

## 9.字符串、数组方法记住！

## 10.面向对象编程原理
***看《JavaScript高级程序设计》Chapter6

## 11.面向对象编程原理
***看《JavaScript高级程序设计》Chapter13

# 三、面经题目总结

腾讯面试经历一
<http://www.cnblogs.com/bullub/archive/2013/03/13/2956897.html>
## 1. 
两个非常大的整数相加，整数大到计算机的整型数据已经无法保存了，要求写一个函数来进行计算。

	  var a="123456789";
        var b="22334455";
        var len=Math.max(a.length,b.length);
        var relAdvance=0;
        var result=[];
        
        
        for (var i=0;i<len;i++) {
            if (i==0) {
                aData=Number(a.slice(-1));
                bData=Number(b.slice(-1));
            }
            else{
                if(a.slice(-1-i,-i)){
                    aData=Number(a.slice(-1-i,-i));
                }
                else{
                    aData=0
                }
                
                if(b.slice(-1-i,-i)){
                    bData=Number(b.slice(-1-i,-i));
                }
                else{
                    bData=0;
                }
                
            }
                
            
          
            console.log(aData);
            console.log(bData);
            var rel=aData+bData+Number(relAdvance);
            console.log(rel);
            var relCurrent=String(rel).slice(-1);
            console.log(relCurrent);
            if (relCurrent.length>1) {
                var relAdvance=String(rel).slice(0,1);
            }
            else{
                var relAdvance=0;
            }
            console.log(relAdvance);
            result.unshift(relCurrent);
        }
        console.log(result);
        var resultStr=result[0];
        for (var i=1,l=result.length;i<l;i++) {
            var resultStr=resultStr.concat(result[i]);
        }
        
        console.log(resultStr);