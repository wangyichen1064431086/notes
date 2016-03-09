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

### 6.指向函数的指针——使函数参数得以传递函数（即传递代码）
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
求素组元素的平均值。

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

逆序输出数组元素。

	# include<stdio.h>
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
			*(a+i)=*(a+4-i);
			*(a+4-i)=t;
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



### 11.利用字符串指针，自定义字符串连接函数。

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


### 10.判断某数是否为素数。

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