# C复习：好代码汇总

## 1.Chapter8 数组
### 1.用“筛法”求500以内的素数***Good***

	# include<stdio.h>
	# include<math.h>
	# define N 501
	void main()
	{
		int i,j,n0,a[N];
		for(i=2;i<N;i++)
		{
			a[i]=1;//a各元素赋初值为1
		}
		n0=sqrt(N);
		for(j=2;j<=n0;j++)
		{
			if(a[j]==0)
			{
				continue;//j一定是小于i的，a[i]已经判断出是否为1，故可用a[j]是否为1判断j是否为素数。a[j]为0时表明j不为素数，直接跳出本次循环
			}
			for(i=j+1;i<N;i++)
			{
				if(i%j==0)//如果j能除尽i,说明i不是素数，a[i]标志位0
				{
					a[i]=0;
				}
			}
		}
		for(i=2;i<N;i++)
		{
			if(a[i])//输出a[i]仍然为1的i值，此i即为素数。
			{
				printf("%d\t",i);
			}
		}
		printf("\n");
		
	
		while(1)
		{
			;
		}
	}


### 2.输入10个整数，输出其中最大和最小者

	# include<stdio.h>

	# define N 10
	void main()
	{
		int a[10],max,min,i;
		printf("输入10个整数:\n");
		for(i=0;i<10;i++)
		{
			scanf("%d",&a[i]);
		}
		max=a[0];
		min=a[0];
		for(i=1;i<10;i++)
		{
			if(a[i]>max)
			{
				max=a[i];
			}
			if(a[i]<min)
			{
				min=a[i];
			}
		}
		printf("max=%d\nmin=%d\n",max,min);
		while(1)
		{
			;
		}
	}


## 2.Chapter10 指针
### 1.理解指针：输入两个整数，按先大后小的顺序输出

	# include<stdio.h>
	# include<string.h>
	
	void main()
	{
		int *p1,*p2,*p,a,b;
		printf("Input 2 int numbers:\n");
		scanf("%d%d",&a,&b);
		p1=&a;
		p2=&b;
		if(a<b)
		{
			p=p1;
			p1=p2;
			p2=p;
		}
		printf("a=%d\tb=%d\n",a,b);
		printf("max=%d\tmin=%d\n",*p1,*p2);
	
		while(1)
		{
			;
		}
	}

### 2.指针算术运算

	# include<stdio.h>
	# include<string.h>
	
	void main()
	{
		int i,a[]={1,3,5,7,9},*p=a;
		for(i=0;i<5;i++)
		{
			printf("a[%d]=%d\t",i,a[i]);
		}
		printf("\n");
		printf("a的首地址:%d\n",p);
		printf("a[2]的地址:%d\n",p+2);
		printf("a[0]+3的值:%d\n",*p+3);
		printf("a[3]的值:%d\n",*(p+3));
		printf("*p++=%d\n",*p++);//输出a[0]的值后，p指向a[1]
		p=a;
		printf("*++p=%d\n",*++p);//p指向a[1]后，输出a[1]的值
		printf("++*p=%d\n",++*p);//输出++a[1]的值
	
		while(1)
		{
			;
		}
	}

### 3.指针关系运算

	# include<stdio.h>

	void main()
	{
		int a[5],*p=a;
		printf("%d\n",p<a+5);
		printf("%d\n",p!=a);
		printf("%d\n",p==0);
		while(1)
		{
			;
		}
	}

### 4.指针变量作为函数参数：调用函数，交换两个变量

	# include<stdio.h>
	
	void swap(int *p1,int *p2)
	{
		int temp;
		temp=*p1;
		*p1=*p2;
		*p2=temp;
	}
	
	void main()
	{
		int a,b;
		scanf("%d%d",&a,&b);
		printf("调用函数前:a=%d\tb=%d\n",a,b);
		swap(&a,&b);
		printf("调用函数后:a=%d\tb=%d\n",a,b);
		while(1)
		{
			;
		}
	}

### 5.通过指针参数间接访问主函数的变量：
已知长方体的长、宽、高，求其体积和3个侧面的面积。

	# include<stdio.h>
	
	int volume(int l,int w,int h,int *ps1,int *ps2,int *ps3)
	{
		*ps1=l*w;
		*ps2=l*h;
		*ps3=w*h;
		return l*w*h;
	}
	
	void main()
	{
		int a,b,c,v,s1,s2,s3;
		printf("请输入长方体的三条边:");
		scanf("%d%d%d",&a,&b,&c);
		v=volume(a,b,c,&s1,&s2,&s3);
		printf("volume=%d\n",v);
		printf("s1=%d\ts2=%d\ts3=%d\n",s1,s2,s3);
		while(1)
		{
			;
		}
	}

### 6.指向函数的指针——使函数参数得以传递函数（即传递代码）***Very Good and Difficult***
求函数在任意区间上的积分。

	# include<stdio.h>
	# include<math.h>
	# define EPS 0.001
	double fun(double x)
	{
		return x*x;
	}
	
	double integral(int a,int b,double(*f)(double))
	{
		double sum=0.0,x;
		for(x=a;x<b;x=x+EPS)
		{
			sum=sum+EPS*(*f)(x);
		}
		return sum;
	
	}
	
	
	void main()
	{
		printf("f(x)=x*x在[0,1]区间的定积分:%f\n",integral(0,1,fun));
		printf("f(x)=sin(x)在[0,1]区间的定积分:%f\n",integral(0,1,sin));
		printf("f(x)=sqrt(x)在[0,1]区间的定积分:%f\n",integral(0,1,sqrt));
		while(1)
		{
			;
		}
	}

### 7.指针法引用数组元素
请分别使用下标法、数组名法、指针法三种方法输入并引用数组元素。

	# include<stdio.h>
	void main()
	{
		int a[5],i,*p;
		printf("用下标引用数组元素:\n");
		for(i=0;i<5;i++)
		{
			scanf("%d",&a[i]);
		}
		for(i=0;i<5;i++)
		{
			printf("%d\t",a[i]);
		}
		printf("\n");
	
		printf("用数组名引用数组元素:\n");
		for(i=0;i<5;i++)
		{
			scanf("%d",(a+i));
		}
		for(i=0;i<5;i++)
		{
			printf("%d\t",*(a+i));
		}
		printf("\n");
	
		printf("用指针引用数组元素:\n");
		for(p=a;p<a+5;p++)
		{
			scanf("%d",p);
		}
		for(p=a;p<(a+5);p++)
		{
			printf("%d\t",*p);
		}
		printf("\n");
	
		while(1)
		{
			;
		}
	}

### 8.数组名作为函数参数
#### 求素组元素的平均值。

	# include<stdio.h>
	void main()
	{
		int average(int a[]);
		int score[5]={60,80,90,70,50},i,aver;
		printf("Scores:\n");
		for(i=0;i<5;i++)
		{
			printf("%d\t",score[i]);
		}
		printf("\n");
		aver=average(score);
		printf("Average=%d\n",aver);
	
		while(1)
		{
			;
		}
	}
	
	int average(int a[])
	{
		int i,sum=0;
		for(i=0;i<5;i++)
		{
			sum=sum+*(a+i);
		}
		return sum/5;
	}


#### 逆序输出数组元素。
方法一：数组名赋值给新指针变量

	#include<stdio.h>
	void main()
	{
		void list(int *a,int n);
		int score[5]={60,80,90,70,50},i,*p;
		p=score;//int *p=score;等价于 int *p;p=score;
		printf("原数组:");
		for(i=0;i<5;i++)
		{
			printf("%d\t",*(p+i));
		}
		printf("\n");
		list(p,5);
		printf("倒序数组:");
		for(i=0;i<5;i++)
		{
			printf("%d\t",*(p+i));
		}
		printf("\n");
		while(1)
		{
			;
		}
	}
	
	void list(int *a,int n)
	{
		int i,t;
		for(i=0;i<n/2;i++)
		{
			t=*(a+i);
			*(a+i)=*(a+n-i);
			*(a+n-i)=t;
		}
	}

方法二：直接调换原数组指针

	#include <stdio.h>
	void main()
	{ 
		void list(int *a,int n);
		int score[]={60,70,80,90,100};
		int i;
		list(score,5);
		for(i=0;i<5;i++)
		{
			printf("%d\t",*(score+i));
		}
		while(1)
		{
			;
		}
	}
	
	void list(int *a,int n)
	{
		int i,t1,t2;
		for(i=0;i<n/2;i++)
		{
			t1=*(a+i);
			t2=*(a+n-1-i);
			*(a+i)=t2;
			*(a+n-1-i)=t1;
		}
	}




### 9.字符串指针运算

	# include<stdio.h>
	void main()
	{
		char *a="ABCD";
		while(*a)
		{
			printf("%s\n",a++);
		}
		
		while(1)
		{
			;
		}
	}

输出

	ABCD
	BCD
	CD
	D


对比

	# include<stdio.h>
	void main()
	{
		char *a="ABCD";
		while(*a)
		{
			printf("%c\n",*a++);
		}
		
		while(1)
		{
			;
		}
	}

输出

	A
	B
	C
	D


### 10.使用字符串指针求字符串长度。***useful***

	# include<stdio.h>
	
	int strlen(char *str)
	{
		char *p=str;
		while(*p)
		{
			p++;
		}
		return p-str;
	}
	void main()
	{
		char *a="ABCD";
		printf("len(a)=%d\n",strlen(a));
		
		while(1)
		{
			;
		}
	}

自创新方法：

	#include <stdio.h>
	int strlen(char *str)
	{
		int i=0;
		while(*(str+i))
		{
			i++;
		}
		return i;
	}
	
	void main()
	{ 
		char *a="ABCD";
		printf("len=%d\n",strlen(a));
		while(1)
		{
			;
		}
	}

### 11.利用字符串指针，自定义字符串连接函数。***第二遍未开，下次重点看***

	# include<stdio.h>
	
	char *stract(char *str1,char *str2)
	{
		char *p1,*p2;
		p1=str1;
		p2=str2;
		while(*p1)
		{
			p1++;
		}
		while(*p2)
		{
			*p1=*p2;
			p1++;
			p2++;
		}
		*p1='\0';
		return str1;
	}
	void main()
	{
		char a[20]="Chinese ",*b="xiamen",*c;
		printf("a=%s\n",a);
		printf("b=%s\n",b);
		c=stract(a,b);
		printf("c=%s\n",c);
		printf("a=%s\n",a);
		
		while(1)
		{
			;
		}
	}
	

## 3.基本编程例题

### 1.求一个整数各个位数字之和

	# include<stdio.h>

	void main()
	{
		int x,i,sum=0;
		printf("输入一个4位整数:\n");
		scanf("%d",&x);
		while(x)
		{
			sum=sum+x%10;
			x=x/10;
		}
		printf("%d",sum);
		while(1)
		{
			;
		}
	}
	

### 2.判断一个五位数是否为回文数。

	# include<stdio.h>
	
	void main()
	{
		int x,i=0,a[5]={0},t,f=0;
		printf("输入一个5位整数:\n");
		scanf("%d",&x);
		t=x;
		while(x)
		{
			a[i]=x%10;
			x=x/10;
			i++;
		}
		for(i=0;i<5/2;i++)
		{
			if(a[i]!=a[4-i])
			{
				f=1;
			}	
		}
		if(f==0)
		{
			printf("%d是回文数\n",t);
		}
		else
		{
			printf("%d不是回文数\n",t);
		}
		while(1)
		{
			;
		}
	}


### 3.累加法：求1~100中所有偶数之和。

	# include<stdio.h>
	
	void main()
	{
		int i=2,sum=0;
		while(i<=100)
		{
			sum+=i;
			i+=2;
		}
		printf("和为%d",sum);
		while(1)
		{
			;
		}
	}

### 4.累加法：按照pi/4=1-1/3+1/5-1/7````求pi的近似值，直到最后一项绝对值小于1e-6。

	# include<stdio.h>
	
	void main()
	{
		double i=1,a=1,sum=0,pi;
		int k=1;
		while(a>1.0e-6)
		{
			sum=sum+k*a;
			a=1/(2*i+1);
			i++;
			k=-k;
		}
		pi=sum*4;
		printf("pi约为%f",pi);
		while(1)
		{
			;
		}
	}


### 5.辗转相除法求最大公约数。
输入两个正整数m和n,求其最大公约数。

# include<stdio.h>

	void main()
	{
		int m,n,big,small,t,r;
		printf("输入两个正整数:\n");
		scanf("%d%d",&m,&n);
		if(m<n)
		{
			t=m;
			m=n;
			n=t;
		}
		big=m;
		small=n;
		while(m%n)
		{
			r=m%n;
			m=n;
			n=r;
		}
		printf("最大公约数为%d\n",n);
	
		while(1)
		{
			;
		}
	
	}

### 6.逆序输出数字
输入一个正整数，将其各位数字逆序输出。

##### 用while()

	# include<stdio.h>
	
	void main()
	{
		int x,a;
		printf("输入一个正整数:\n");
		scanf("%d",&x);
		while(x)
		{
			a=x%10;
			x=x/10;
			printf("%d",a);
		}
	
		while(1)
		{
			;
		}
	
	}

##### 用do...while

	# include<stdio.h>
	
	void main()
	{
		int x,a;
		printf("输入一个正整数:\n");
		scanf("%d",&x);
		do
		{
			a=x%10;
			x=x/10;
			printf("%d",a);
		}
		while(x);
	
		while(1)
		{
			;
		}
	
	}


### 7.字符型变量运算：使用K=4凯撒加密法给电文加密。

	# include<stdio.h>

	void main()
	{
		char ch;
		do
		{
			ch=getchar();
			if((ch>='A'&&ch<='Z')||(ch>='a'&&ch<='z'))
			{
				ch=ch+4;
				if((ch>'Z'&&ch<='Z'+4)||(ch>'z'&&ch<='z'+4))
				{
					ch=ch-26;
				}
			}
			putchar(ch);
			
			
		}
		while(ch!='\n');
		while(1)
		{
			;
		}
	
	}


### 8.求阶乘

	# include<stdio.h>
	
	void main()
	{
		int n,i;
		double m=1;//使用double型范围是2^32，用int的话只有2^16，17!就会溢出
		printf("请输入一个正整数:\n");
		scanf("%d",&n);
		for(i=1;i<=n;i++)
		{
			m=m*i;
		}
		printf("n!=%.0f\n",m);
		while(1)
		{
			;
		}
	
	}

### 9.查看ascii码的字符及对应十进制编码

	# include<stdio.h>
	
	void main()
	{
		int a,i,n=1;
		for(i=32;i<128;i++)
		{
			if(n%9==0)
			{
				printf("\n");
			}
			printf("%c-%d\t",i,i);
			n++;
		}
		while(1)
		{
			;
		}
	
	}


### 10.判断某正整数是否为素数。***标记法判断素数***

	# include<stdio.h>
	# include<math.h>
	
	void main()
	{
		int i,a,flag=1;
		printf("请输入一个正整数:\n");
		scanf("%d",&a);
		for(i=2;i<=sqrt(a);i++)
		{
			if(a%i==0)
			{
				flag=0;
			}
		}
		if(flag==0)
		{
			printf("不是素数\n");
		}
		else
		{
			printf("是素数\n");
		}
		while(1)
		{
			;
		}
	
	}

### 11.判断某正整数是否为素数。***break法***

	# include<stdio.h>
	# include<math.h>
	
	void main()
	{
	    int i,m;
		printf("请输入一个正整数:\n");
		scanf("%d",&m);
		for(i=2;i<=sqrt(m);i++)
		{
			if(m%i==0)
			{
				break;
			}
		}
		if(i>sqrt(m))
		{
			printf("是素数\n");
		}
		else
		{
			printf("不是素数\n");
		}
		while(1)
		{
			;
		}
	
	}

### 12.把100~150间不能被6整除的数输出（每行输出12个）***continue的使用***

	# include<stdio.h>
	# include<math.h>
	
	void main()
	{
	    int i,k=1;
		for(i=100;i<=150;i++)
		{
			if(i%6!=0)
			{	
				
				printf("%3d ",i);
				if(k%12==0)
				{
					printf("\n");
				}
				k++;
			}
			else
			{
				continue;
			}
		}
		while(1)
		{
			;
		}
	
	}


### 13.输入一串字符串，以回车结束，统计其中大写字母的个数。
方法一：break法

	# include<stdio.h>
	# include<math.h>
	
	void main()
	{
	    int n,k=0;
		printf("请输入一个字符串，以回车结束\n");
		while(1)
		{
			n=getchar();
			if(n=='\n')
			{
				break;
			}
			else
			{
				if(n>='A'&&n<='Z')
				{
					k++;
				}
			}
		}
		printf("%d",k);
		while(1)
		{
			;
		}
	}

方法二:continue法

	# include<stdio.h>
	# include<math.h>
	
	void main()
	{
	    int n,k=0;
		printf("请输入一个字符串，以回车结束\n");
		while((n=getchar())!='\n')
		{
			if(n<'A'||n>'Z')
			{
				continue;
			}
			k++;
		}
		printf("%d",k);
		while(1)
		{
			;
		}
	}


### 14。打印呈下三角的乘法口诀表***循环嵌套***

	# include<stdio.h>
	# include<math.h>
	
	void main()
	{
	    int i,j;
		for(i=1;i<=9;i++)
		{
			for(j=1;j<=i;j++)
			{
				printf("%d*%d =%d ",i,j,i*j);
			}
			printf("\n");
		}
		while(1)
		{
			;
		}
	}

### 15.打印圣诞树型雪花图案***循环嵌套***

	# include<stdio.h>
	# include<math.h>
	
	void main()
	{
	    int i,j,k,n;
		for(i=1;i<=5;i++)
		{
			j=5-i;
			k=i*2-1;
			for(n=1;n<=j;n++)
			{
				printf(" ");
			}
			for(n=1;n<=k;n++)
			{
				printf("*");
			}
			printf("\n");
	
		}
		while(1)
		{
			;
		}
	}

## 4.常用基础算法
### 1.累加法
利用公式e=1+1/1!+1/2!+1/3!+……+1/n!……计算无理常数e的近似值，要求误差小于1e-5。

方法一：

	# include<stdio.h>
	# include<math.h>
	
	int jiechen(int n)
	{
		int i,rel=1;
		for(i=1;i<=n;i++)
		{
			rel=rel*i;
		}
		return rel;
	}
	void main()
	{
	    int i=1;
		double n,rel=1;
		while(1)
		{
			n=1.0/jiechen(i);//两个整数相除为整数，故两个里面必须有一个是浮点数
			printf("%f\n",n);
			if(n<1e-5)
			{
				break;
			}
			else
			{
				rel+=n;
				i++;
			}
			
		}
		printf("e近似为%f\n",rel);
		while(1)
		{
			;
		}
	}

方法二：
	
	# include<stdio.h>
	# include<math.h>
	
	void main()
	{
	   int i=1;
	   double rel=1.0,n=1.0;
	   while(n>1e-5)
	   {
			n=n*(1.0/i);
			rel+=n;
			i++;
	   }
		printf("e近似为%f\n",rel);
		while(1)
		{
			;
		}
	}

### 2.穷举法
（1）百元买鸡问题。100元买100只鸡。公鸡每只5元，母鸡每只3元，小鸡1元3只。问100元可买公鸡、母鸡、小鸡多少只？

	# include<stdio.h>
	# include<math.h>
	
	void main()
	{
	    int x,y,z;
		for(x=0;x<=(100/5);x++)
		{
			for(y=0;y<=(100/3);y++)
			{
				for(z=0;z<=100;z++)
				{
					if((15*x+9*y+z==300)&&(x+y+z==100))
					{
						printf("x=%d,y=%d,z=%d\n",x,y,z);
					}
				}
			}
		}
		
		while(1)
		{
			;
		}
	}

（2）爱因斯坦阶梯问题。有一阶梯，每步跨2阶最后剩1阶，每步跨3阶最后剩2阶，每步跨4阶，最后剩3阶，每步跨5阶最后剩4阶，每步跨6阶最后剩1阶，只有每步跨7阶时刚好到阶顶。问这个阶梯共有多少阶？

	# include<stdio.h>
	
	void main()
	{
	    int n=7;
		while(1)
		{
			if((n%2==1)&&(n%3==2)&&(n%5==4)&&(n%6==5)&&(n%7==0))
			{
				printf("%d",n);
				break;
			}
			n++;
		}
		
		while(1)
		{
			;
		}
	}

（3）求100~300间的全部素数（每行输出18项）

	# include<stdio.h>
	# include<math.h>
	
	void main()
	{
	    int i,j,k=0;
		for(i=101;i<300;i++)
		{
			for(j=2;j<=sqrt(i);j++)
			{
				if(i%j==0)
				{
					break;
				}
			}
			if(j>sqrt(i))
			{
				printf("%d ",i);
				k++;
				if(k%18==0)
				{
					printf("\n");
				}
			}
		}
		
		while(1)
		{
			;
		}
	}


### 3.迭代法：
- 什么是迭代法？

 	用一个变量既描述新状态又描述旧状态，变量的新值是在其旧值上推出的，这种不断用变量的心值取代旧值的过程，就称为迭代。

用牛顿切线法解一元三次方程 x^3+2x^2+10x-20=0在x1=1.2附近的根的近似值。要求精度为10-6。
思路详见《C语言程序设计》P130

	# include<stdio.h>
	# include<math.h>
	
	void main()
	{
	   int count=0;
	   double x1,x2,f,d;
	   printf("input x2:");
	   printf("count\tx1\tx2\n\n");
	   scanf("%lf",&x2);
	   do
	   {
			x1=x2;
			f=x1*x1*x1+2*x1*x1+10*x1-20;
			d=3*x1*x1+4*x1+10;
			x2=x1-f/d;
			printf("%d\t%lf\t%lf\n",count++,x1,x2);
	   }
	   while(fabs(x2-x1)>1e-6);
	
	   printf("\nx=%lf\t",x2);
	   printf("y=%lf\n",x2*x2*x2+2*x2*x2+10*x2-20);
	
		while(1)
		{
			;
		}
	}

### 4.递推法
- 什么是递推法？

	新状态用新的变量描述，而新变量的值是在旧变量值的基础上推出来的，这种在旧变量值的基础上推出新变量值的过程，称为递推。

求Fibonacci数列1，1，2，3，5，8……的前30项。每行输出6项。（使用数组也可以求）

	# include<stdio.h>
	# include<math.h>
	
	void main()
	{
	   int f1=1,f2=1,i,f,count=2;
	   printf("%d\t%d\t",f1,f2);
	   for(i=3;i<=30;i++)
	   {
			f=f1+f2;
			count++;
			printf("%d\t",f);
			if(count%6==0)
			{
				printf("\n");
			}
			f1=f2;
			f2=f;
	   }
		while(1)
		{
			;
		}
	}

## 5.函数Chapter6

### 1.编写计算n!的函数

	# include <stdio.h>
	long fac(int n)
	{
		long f=1,i;
		for(i=1;i<=n;i++)
		{
			f=f*i;
		}
		return f;
	}
	main()
	{
		int k;
		printf("输入一个正整数计算阶乘:");
		scanf("%d",&k);
		printf("%d!=%ld",k,fac(k));
	
		while(1)
		{
			;
		}
	}


### 2.编写模块函数，计算x+x^2+x^3+……x^n的值（其中x=1.2,n=10)

	# include <stdio.h>
	
	main()
	{
		int i=1,n;
		double x,sum=0.0;
		double mymul(double x,int n);
		printf("请输入底数x和项数n:");
		scanf("%lf%d",&x,&n);
		for(i=1;i<=n;i++)
		{
			sum=sum+mymul(x,i);
		}
		printf("%lf\n",sum);
		while(1)
		{
			;
		}
	}
	
	double mymul(double x,int n)
	{
	   int i;
	   double t=1.0;
	   for(i=1;i<=n;i++)
	   {
			t=t*x;
	   }
	   printf("%lf\n",t);
	   return t;
	}

### 3.寻找11~9999间的正整数m,要求m,m*m,m*m*m都为回文数。

	# include <stdio.h>
	
	int isHuiwen(int m)//判断是否为回文数
	{
		int a=m,t,n=0;
		while(a)
		{
			t=a%10;
			n=n*10+t;
			a=a/10;
		}
		if (n==m)//或直接 return(n==m)
		{
			return 1;
		}	
		else
		{
			return 0;
		}
	}
	
	main()
	{
		int i;
		for(i=11;i<=9999;i++)
		{
			if(isHuiwen(i)&&isHuiwen(i*i)&&isHuiwen(i*i*i))
			{
				printf("%d\n",i);
			}
		}
		while(1)
		{
			;
		}
	}

### 4.嵌套调用函数 求最小公倍数。

	# include <stdio.h>
	
	int gcd(int m,int n)//辗转相除求最大公约数，牢记！
	{
		int t,r;
		if(m<n)
		{
			t=m;
			m=n;
			n=t;
		}
		while(m%n)
		{
			r=m%n;
			m=n;
			n=r;
		}
		return n;
	}
	
	int sct(int m,int n)//最小公倍数=m*n/最大公约数
	{
		return m*n/gcd(m,n);
	}
	
	main()
	{
		int a,b;
		printf("请输入要求最小公倍数的两个正整数a,b：\n");
		scanf("%d%d",&a,&b);
		printf("最小公倍数为%d\n",sct(a,b));
		while(1)
		{
			;
		}
	}

### 5.递归求阶乘

	# include <stdio.h>
	
	long jiechen(int n)
	{
		if(n==1)
		{
			return 1;
		}
		else
		{
			return n*jiechen(n-1);
		}
	}
	
	main()
	{
		int a;
		printf("请输入一个求阶乘的数a:\n");
		scanf("%d",&a);
		printf("阶乘是%ld",jiechen(a));
		while(1)
		{
			;
		}
	}

### 6.递归求Fibonacci数列。

	# include <stdio.h>
	
	int fibonacci(int n)
	{
		if(n==1||n==2)
		{
			return 1;
		}
		else
		{
			return fibonacci(n-1)+fibonacci(n-2);
		}
	}
	
	main()
	{
		int n;
		printf("请输入项数n:\n");
		scanf("%d",&n);
		printf("Fibonacci数列第%d项的值是%d",n,fibonacci(n));
		while(1)
		{
			;
		}
	}


### 7.全局、局部变量作用域理解
#### eg1 分析下列程序的运行结果

	# include <stdio.h>
	
	int x=10,y=6;
	int min(int x,int y)
	{
		int z;
		z=x<y?x:y;
		return z;
	}
	
	main()
	{
		int x=3;
		printf("%d\t",min(x,y));//3
	
		{
			int x=1,y=2;
			printf("%d\t",min(x,y));//1
		}
	
		printf("%d\t",min(x,y));//3
		while(1)
		{
			;
		}
	}

对比：

	# include <stdio.h>
	
	int x=10,y=6;
	int min(int x,int y)
	{
		int z;
		z=x<y?x:y;
		return z;
	}
	
	main()
	{
		int x=3;
		printf("%d\t",min(x,y));//3
	
		{
			int x=1;
			y=2;//此处y是全局变量y
			printf("%d\t",min(x,y));//1
		}
	
		printf("%d\t",min(x,y));//2
		while(1)
		{
			;
		}
	}


#### eg2 分析下列程序的运行结果

	# include <stdio.h>
	
	int x,y;
	void swap()
	{
		int t;
		t=x;x=y;y=t;
	}
	
	main()
	{
		scanf("x=%d,y=%d",&x,&y);
		printf("x=%d,y=%d\n",x,y);//x=5,y=3
		swap();
		printf("x=%d,y=%d\n",x,y);//x=3,y=5
	
		while(1)
		{
			;
		}
	
	}

对比：

	# include <stdio.h>

	void swap(int x,int y)
	{
		int t;
		t=x;x=y;y=t;
	}
	
	main()
	{
		int x,y;
		scanf("x=%d,y=%d",&x,&y);
		printf("x=%d,y=%d\n",x,y);//x=5,y=3
		swap(x,y);
		printf("x=%d,y=%d\n",x,y);//x=5,y=3
	
		while(1)
		{
			;
		}
	
	}

### 8、自动局部变量与静态局部变量理解。
程序1：自动局部变量

	# include <stdio.h>
	
	int x,y;
	void fun()
	{
		int x=1;//x是自动变量，每次调用fun时，x都要重新分配存储单元及重新初始化为1
		x++;
		printf("x=%d\n",x);
	}
	
	main()
	{
		int i;
		for(i=0;i<3;i++)
		{
			fun();//x=2 x=2 x=2
		}
		while(1)
		{
			;
		}
	
	}

程序2：自动局部变量

	# include <stdio.h>
	
	int x,y;
	void fun()
	{
		static int x=1;//x是静态局部变量，仅初始化一次。在函数调用结束后仍能保持其值。
		x++;
		printf("x=%d\n",x);
	}
	
	main()
	{
		int i;
		for(i=0;i<3;i++)
		{
			fun();//x=2 x=3 x=4
		}
		while(1)
		{
			;
		}
	
	}


### 9.利用静态局部变量输出1~4的阶乘值。*

	# include <stdio.h>
	long fac(int n)
	{
		static long k=1;
		k=k*n;
		return k;;
	}
	
	main()
	{
		int i;
		for(i=1;i<=4;i++)
		{
			printf("%d!=%d\n",i,fac(i));
		}
		while(1)
		{
			;
		}
	
	}


### 10.在多文件中使用extern 对全局变量进行声明

text1.c文件：

	# include <stdio.h>
	float PI=3.1415926;//如果这里使用static float PI则限制该全局变量只在本文件中使用，在text2.c中就算声明了extern float PI也会报错
	
	main()
	{
		float area(float r);
		float volume(float r);
		float r;
		printf("请输入球的半径r:");
		scanf("%f",&r);
		printf("S=%f\tV=%f\n",area(r),volume(r));
	
	
		while(1)
		{
			;
		}
	
	}

text2.c文件：

	extern float PI;
	float area(float r)
	{
		return 4.0*PI*r*r;
	}
	float volume(float r)
	{
		return 4.0*PI*r*r*r/3;
	}

## 6.编译预处理，宏（Chapter7)
### 1.比较项目的宏扩展和函数调用

	#include <stdio.h>
	#define CUBE(x) ((x)*(x)*(x))
	int cube(int x)
	{
		return x*x*x;
	}
	
	main()
	{
		int a=2,b;
		b=CUBE(a++);
		printf("%d\n",b);//8
		printf("%d\n",a);//5
		b=CUBE(a);//125
		printf("%d\n",b);
	
		a=2;
		b=cube(a++);
		printf("%d\n",b);//8
		printf("%d\n",a);//3
		b=cube(a);
		printf("%d\n",b);//27
	
		while(1)
		{
			;
		}
	}

宏调用CUBE(a++)将被扩展为((a++)*(a++)*(a++))，因此执行后a由2变为了5。



## 8.待研究问题

### 1.C的编译、链接步骤到底在做什么工作？