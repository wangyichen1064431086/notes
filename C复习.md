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