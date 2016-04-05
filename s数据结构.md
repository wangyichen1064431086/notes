## 1.链表

### 1.单链表
单链表的建立和输出、删除、插入。建立包含5个结点的单链表，5个结点的值分别是101，89；102、77；105、92；107，68；109，91。
（见《C语言程序设计》P254）

	#include <stdio.h>
	#include <stdlib.h>
	
	struct node
	{
		int num,score;
		struct node *link;
	};
	
	
	
	void main()
	{ 
		struct node *creat(int n);
		void print(struct node *h);
		struct node *find(struct node *h,int x);
		struct node *dele(struct node *h,int x);
		struct node *add(struct node *h);
	
		struct node *head=0,*newhead=0,*newhead2=0;
		head=creat(5);//创建链表
		print(head);//输出链表
		printf("\n");
	
		find(head,105);//查找学号为105的链表结点，输出该结点数据域
		printf("\n");
	
		newhead=dele(head,107);//删除学号为107的链表结点
		print(newhead);//输出删除后的新链表
		printf("\n");
		print(head);
		printf("\n");
	
		newhead2=add(newhead);//插入新结点
		print(newhead2);//输出插入新结点后的链表
		printf("\n");
	
		while(1)
		{
			;
		}
	}
	
	struct node *creat(int n)//链表创建函数，参数n为节点个数，函数返回表头指针
	{
		struct node *h=0,*p,*q;
		int i;
		for(i=1;i<=n;i++)
		{
			q=(struct node *)malloc(sizeof(struct node));
			scanf("%d%d",&q->num,&q->score);
			q->link=0;//为新结点指针域赋值为0,故最后效果即最后一个结点指针域为0
	
			if(h==0)//第一次进入for循环，把链头地址q用h保存
			{
				h=q;
			}
			else
			{
				p->link=q;
	
			}
			p=q;//p依次指向新的链表节点
		}
		return h;
	}
	
	void print(struct node *h)//输出链表函数
	{
		while(h)
		{
			printf("num=%d\tscore=%d\n",h->num,h->score);
			h=h->link;
		}
	}
	
	struct node *find(struct node *h,int x)//查找链表函数
	{
		struct node *p;
		p=h;
		while(p!=0&&p->num!=x)//由上创建链表的函数create(n)知，最后一个结点的指针域为0。
		{					  //这里条件即为如果当前结点不是最后一个结点指向的节点，且数据域的学号不为我们要找的x
			p=p->link;//p指向下一个结点
		}
		if(p)     //p最后不等于0表示找到了指定学号的学生
		{
			printf("num=%d\tscore=%d\n",p->num,p->score);
		}
		else
		{
			printf("查无此学生\n");
		}
	}
	
	struct node *dele(struct node *h,int x)//删除链表结点函数
	{
		struct node *p,*q;
		p=h;
		while(p!=0&&p->num!=x)
		{
			q=p;//最终q是要删除节点的上一个结点的指针
			p=p->link;//最终p是要删除的节点的指针
	
		}
		if(p==0)
		{
			printf("链表中无此结点!\n");
		}
		else if(p==h)
		{
			h=p->link;
		}
		else
		{
			q->link=p->link;
		}
		return h;
	}
	
	struct node *add(struct node *h)//插入新结点，要求插入后新节点的num与旧结点的num们是由小到大的顺序排列
	{
		struct node *q,*p,*t;
		q=(struct node *)malloc(sizeof(struct node));
		printf("输入要插入结点的数据域num,score:\n");
		scanf("%d%d",&(q->num),&(q->score));
		p=h;
		while(p!=0)
		{
			if(p->num<q->num)
			{
				t=p;
				p=p->link;
			}
			else
			{
				break;
			}
		}
		if(p==h)
		{
			q->link=h;
			h=q;
		}
		else
		{
			t->link=q;
			q->link=p;
		}
		return h;
	}
#### 第二次写

	#include<stdio.h>
	#include<stdlib.h>
	
	typedef struct node
	{
		int data;
		struct node *next;
	}node;
	
	//固定长度单链表的建立
	node *Create(int n)
	{
		node *p,*q,*h=0;
		int i;
		printf("请输入%d个数:\n",n);
		for(i=0;i<n;i++)
		{
			q=(node *)malloc(sizeof(node));
			scanf("%d",&q->data);
			q->next=NULL;
		
			if(h==0)
			{
				h=q;
				p=q;
			}
			else
			{
				p->next=q;
				p=q;
			}
		}
		return h;
	}
	//单链表的打印
	void Print(node *h)
	{
		node *p=h;
		while(p)
		{
			printf("%d",p->data);
			if(p->next)
			{
				printf("->");
			}
			p=p->next;
		}
		printf("\n");
	}
	//非固定长度单链表的建立
	node *Createany()
	{
		node *p,*q,*h=0;
		int x;
		printf("请输入任意多个正数:\n");
		while(1)
		{
			scanf("%d",&x);
			if(x!=-1)//输入-1退出录入
			{
				q=(node *)malloc(sizeof(node));
				q->data=x;
				q->next=NULL;
				if(h==0)
				{
					h=q;
					p=q;
				}
				else
				{
					p->next=q;
					p=q;
				}
			}
			else
			{
				break;
			}
		}
		return h;
	}
	//未知长度链表测长
	int Findlen(node *h)
	{
		node *q=h;
		int i=0;
		while(q)
		{
			i++;
			q=q->next;
		}
		return i;
	}
	
	//删除单链表节点
	node *Delchain(node *h,int mydata)
	{
		node *q=h,*t;
		while(q)
		{
			if(mydata==q->data)
			{
				if(q==h)//删除的是表头(包括只有表头一个节点和多于一个节点两种情况）
				{
					if(q->next)
					{
						h=q->next;
					}
					else
					{
						h=NULL;
					}
				}
				else if(q->next==NULL)//删除的是表尾
				{
					t->next=NULL;
				}
				else
				{
					t->next=q->next;
				}
				free(q);
				break;
			}
			else
			{
				t=q;
				q=q->next;
				
			}
		}
		if(q==NULL)//q一直遍历到了最后为NULL还没有找到相等的数
		{
			printf("没有这个结点!\n");	
		}
		return h;
	
	}
	
	//增加单链表的节点到合适位置（按从小到大排列）
	node *Insert(node *head, int mydata)
	{
		node *q=head,*p=(node *)malloc(sizeof(node)),*t;
		p->data=mydata;
		p->next=NULL;
		if(mydata<head->data)//如果mydata比表头的data还小
		{
			p->next=head;
			head=p;
		}
		else
		{
			while(q!=NULL&&mydata>q->data)
			{
				t=q;
				q=q->next;
			}
			if(q)
			{
				t->next=p;
				p->next=q;
			}
			else
			{
				t->next=p;
			}
		}
		return head;
	
	
	}
	main()
	{
		node *myhead,*myhead2,*myhead3,*myhead4;
		int i,len,mydata,mydata2;
		myhead=Create(5);
		Print(myhead);
	
		/*
		myhead2=Createany();
		Print(myhead2);
		len=Findlen(myhead2);
		printf("链表长度为%d\n",len);
		
		printf("请输入要删除的节点数据域:\n");
		scanf("%d",&mydata);
		myhead3=Delchain(myhead,mydata);
		Print(myhead3);
		*/
	
		printf("请输入要添加的节点数据域:\n");
		scanf("%d",&mydata2);
		myhead4=Insert(myhead,mydata2);
		Print(myhead4);
		system("pause");
	}
		

### 2.双链表
创建双链表，并实现其删除、插入结点。
（见《程序员面试宝典》P139)

	#include<stdio.h>
	#include<stdlib.h>
	
	typedef struct student
	{
		int data;
		struct student *next;
		struct student *pre;
	}dnode;
	
	dnode *creat()//创建双链表，以输入0为链表结束标志
	{
		dnode *head,*p,*s;
		int x,cycle=1;
		head=(dnode *)malloc(sizeof(dnode));
		p=head;
		while(cycle)
		{
			printf("请输入链表数据域data：\n");
			scanf("%d",&x);
			if(x!=0)
			{
				s=(dnode *)malloc(sizeof(dnode));
				s->data=x;
				printf("%d\n",s->data);
				p->next=s;
				s->pre=p;
				p=s;
	
			}
			else
			{
				cycle=0;
			}
		}
		head=head->next;
		head->pre=NULL;
		p->next=NULL;
	
		printf("\n yyy %d",head->data);
		return(head);
	}
	
	void print(dnode *h)
	{
		while(h)
		{
			printf("data=%d\n",h->data);
			h=h->next;
		}
	
	}
	
	dnode *del(dnode *h,int num)//双链表删除结点
	{
		dnode *p,*q,*t;
		p=h;
		while(p->next!=NULL&&p->data!=num)
		{
			q=p;
			p=p->next;
		}
		
		if(p->data==num)
		{
			if(p==h)
			{
				h=p->next;
				h->pre=NULL;
				free(p);
			}
			else
			{
				t=p->next;
				q->next=t;
				t->pre=q;
			}
		}
		else
		{
			printf("无此结点!\n");
		}
		return h;
	}
	
	dnode *insert(dnode *h,int n)//双链表插入结点
	{
		dnode *p,*q,*t;
		q=(dnode *)malloc(sizeof(dnode));
		q->data=n;
		p=h;
		while(p->next!=NULL&&(p->data<q->data))
		{
			t=p;
			p=p->next;
		}
	
		if(p==h)//如果插入的这个值最小，插在链表最前端
		{
			h=q;
			h->next=p;
			h->pre=NULL;
		}
		else if(p->data>=q->data)
		{
			t->next=q;
			q->pre=t;
			q->next=p;
			p->pre=q;
		}
		else//p->next==NULL
		{
			p->next=q;
			q->pre=p;
			q->next=NULL;
		}
	
		return h;
	
	}
	
	
	main()
	{
		dnode *head,*head1,*head2,*head3,*head4;
		head=creat();//创建双链表，数据域为2，3，4，5
		print(head);
		printf("\n");
	
		head1=del(head,3);//删除数据域data=3的结点
		print(head1);
		printf("\n");
	
		head2=insert(head1,3);//插入数据域data=3的结点
		print(head2);
		printf("\n");
	
		head3=insert(head2,6);//插入数据域data=6的结点
		print(head3);
		printf("\n");
	
		head4=insert(head2,1);//插入数据域data=1的结点
		print(head4);
		printf("\n");
	
	
	
		while(1)
		{
			;
		}
	
	}

### 3.循环单链表
已知n个人（编号为1，2，3，……n)围坐在一张圆桌周围。从编号为k的人开始报数，从1开始报数，数到m的那个人出列；他的下一个又从1报数，数到m出列。依次重复下去，使所有人全部出列。

	#include<stdio.h>
	#include<stdlib.h>
	
	typedef struct LNode
	{
		int data;
		struct LNode *link;
	}LNode,*LinkList;
	
	void JOSEPHUS(int n,int k,int m)
	{
		LinkList p,r,list,curr,t;//都是指针
		int i,s;
		p=(LinkList)malloc(sizeof(LNode));
		p->data=0;//第一个结点p装载数据域为0
		p->link=p;
		curr=p;
		for(i=1;i<n;i++)//链表的数据域装载的是从0到n-1的数值，循环从1开始装载。
		{
			t=(LinkList)malloc(sizeof(LNode));
			t->data=i;
			t->link=curr->link;
			curr->link=t;
			curr=t;
		}
	
		while(k--)
		{
			r=p;//p本来为序号0的结点，这样循环（k-1）次，最后p指向k-1,k-1就是第k个人。
			p=p->link;
		}
		while(n--)
		{
			for(s=m-1;s>=0;s--)//执行循环m次，最后p指向data=(k-1+m-1)，即报数为m的人
			{
				r=p;//r保存的是指向第k个人（即data=k-1）的人的指针
				p=p->link;
			}
	
			r->link=p->link;//指向第k个人（即data=k-1）的r的link指向报完数的下一个人（即data=k-1+m）
			printf("%d->",p->data);//输出报数为m(即data=k-1+m)的人的data
			free(p);//释放这个报数的人的存储空间
			p=r->link;//p指向报完数的下一个人（即data=k+m)
		}
	
	}
	
	main()
	{
		JOSEPHUS(13,4,1);
	
		while(1)
		{
			;
		}
	}


### 4.队列
编程实现链表队列的入队出队操作

	#include<stdio.h>
	#include<stdlib.h>
	
	typedef struct student
	{
		int data;
		struct student *next;
	}node;
	
	typedef struct linkqueue//队列
	{
		node *first,*rear;
	
	}queue;
	
	queue *insert(queue *HQ,int x)//队列入队（进入队尾）
	{
		node *s;
		s=(node *)malloc(sizeof(node));
		s->data=x;
		s->next=NULL;
	
		if(HQ->rear==NULL)
		{
			HQ->first=s;
			HQ->rear=s;
		}
		else
		{
			HQ->rear->next=s;
			HQ->rear=s;
		}
	
		return HQ;
	}
	
	queue *del(queue *HQ)//队列出队（弹出队头）
	{
		node *p;
		int x;//存储弹出的队头值
		if(HQ->first==NULL)
		{
			printf("溢出\n");
		}
		else
		{
			if(HQ->first==HQ->rear)
			{
				HQ->first=NULL;
				HQ->rear=NULL;
			}
			else
			{
				p=HQ->first;
				x=p->data;
				HQ->first=HQ->first->next;
				free(p);
				printf("弹出队头%d\n",x);
	
			}
			return HQ;
	
		}
	}
	
	main()
	{
		queue *list;
		int i;
		list=(queue *)malloc(sizeof(queue));
		list->first=NULL;
		list->rear=NULL;
	
		for(i=1;i<=5;i++)
		{
			list=insert(list,i);
			printf("现在的队尾是%d\n",list->rear->data);
		}
		printf("\n");
	
		for(i=1;i<=4;i++)
		{
			list=del(list);
			printf("现在的队首是%d\n",list->first->data);
		}
	
		while(1)
		{
			;
		}
	}
#### 第二次操作队列

	#include<stdio.h>
	#include<stdlib.h>
	
	typedef struct node
	{
		int data;
		struct node *next;
	}node;
	
	typedef struct queue
	{
		node *head,*rear;
	}queue;
	
	//创建队列
	queue * Createqueue()
	{
		node *q,*p,*h=NULL;
		queue *myqueue=(queue *)malloc(sizeof(queue));
		int x;
	
		printf("请输入队列节点数据域值:\n");
		while(1)
		{
			scanf("%d",&x);
			if(x!=-1)
			{
				q=(node *)malloc(sizeof(node));
				q->data=x;
				q->next=NULL;
	
				if(h==NULL)
				{
					h=q;
					p=q;
				}
				else
				{
					p->next=q;
					p=q;
				}
			}
			else
			{
				break;
			}
		}
	
		if(h==NULL)
		{
			myqueue->head=NULL;
			myqueue->rear=NULL;
		}
		else
		{
			myqueue->head=h;
			myqueue->rear=q;//若h==q，这样写也可以包含
		}
		return myqueue;
		
	}
	
	//打印队列
	void Print(queue *myqueue)
	{
		node *q;
		q=myqueue->head;
		while(q)
		{
			printf("%d",q->data);
			if(q->next)
			{
				printf("->");
			}
			q=q->next;
		}
	}
	
	//队列入列
	queue *Insert(queue *myqueue,int x)
	{
		node *q=(node *)malloc(sizeof(node));
		q->data=x;
		q->next=NULL;
	
		if(myqueue->head==NULL)
		{
			myqueue->head=q;
			myqueue->rear=q;
		}
		else
		{
			myqueue->rear->next=q;
			myqueue->rear=q;
		}
		return myqueue;
	}
	//队列出队
	queue *Del(queue *myqueue)
	{
		node *q;
		if(myqueue->head==NULL)
		{
			printf("溢出\n");
		}
		else if(myqueue->head==myqueue->rear)
		{
			myqueue->head=NULL;
			myqueue->rear=NULL;
		}
		else
		{
			q=myqueue->head;
			myqueue->head=q->next;
			free(q);
		}
		return myqueue;
	}
	
	main()
	{
		queue *myqueue=Createqueue();
		int x;
		Print(myqueue);
	
		printf("请输入要入队的值:\n");
		scanf("%d",&x);
		myqueue=Insert(myqueue,x);
		Print(myqueue);
		myqueue=Del(myqueue);
		Print(myqueue);
	
		system("pause");
	
	}

#### 排队系统 ***有错误，待改正***

	#include<stdio.h>
	#include<stdlib.h>
	#include<string.h>
	
	typedef struct node
	{
		char name;
		int index;
		struct node *next;
	}node;
	
	typedef struct queue
	{
		node *head;
		node *rear;
	}queue;
	
	queue *Createqueue()//建立队列
	{
		char c;
		int d=0;
		node *p=NULL,*q=NULL,*h=NULL;
		queue *l;
		printf("请输入排队的人的代号:\n");
		while(1)
		{
			scanf("%c",&c);
			if(c!='#')//'#'结束
			{
				p=(node *)malloc(sizeof(node));
				p->name=c;
				p->index=d;
				d++;
				p->next=NULL;
				if(h==NULL)
				{
					h=p;
					q=p;
				}
				else
				{
					q->next=p;
					q=p;
				}	
			}
			else
			{
				p=NULL;
				break;
			}
		}
	
		
		l=(queue *)malloc(sizeof(queue));
		l->head=h;
		l->rear=p;
		return l;
	}
	
	void Printqueue(queue *l)//打印队列
	{
		node *p=l->head;
		while(p)
		{
			if(p->next)
			{
				printf("%c,%d ->",p->name,p->index);
			}
			else
			{
				printf("%c,%d\n",p->name,p->index);
			}
			p=p->next;
		}
	}
	
	
	queue *Addqueue(queue *l)//某人加入队列最后
	{
		node *p=NULL;
		char c;
		int d,dr;
		printf("请输入新加入的人的代号:\n");
		scanf("%c",&c);
		if(c!='#')
		{
			p=(node *)malloc(sizeof(node));
			p->name=c;
			p->next=NULL;
			if(l==NULL)
			{
				p->index=0;
				l->head=p;
				l->rear=p;
			}
			else
			{
				dr=l->rear->index;
				p->index=dr+1;
				l->rear->next=p;
				l->rear=p;
			}
		}
		return l;
	}
	
	void *Findqueue(queue *l)//查找队列中的某人
	{
		char c;
		int d;
		node *p=l->head;
		printf("请输入要查找的人代号:\n");
		scanf("%c",&c);
		while(p&&p->name!=c)
		{
			p=p->next;
		}
		if(p->name==c)
		{
			d=p->index;
			printf("此人在队伍中的序号为:%d\n",d);
		}
		else
		{
			printf("无此人");
		}
	
	}
	queue *Delqueue(queue *l)//某人退出队列：包括正常第一个走掉，和中间有人退出两种情况
	{
		char c;
		int d;
		node *p=l->head;
		node *q;
		printf("请输入离开的人代号:\n");
		scanf("%c",&c);
		while(p&&p->name!=c)
		{
			q=p;
			p=p->next;
		}
		if(p->name==c)
		{
			if(p->index==0)//如果离开的是第一个人
			{
				if(p->next==NULL)//如果队伍只有这一个人
				{
					l->head=NULL;
					l->rear=NULL;
				}
				else
				{
					l->head=p->next;
					p=p->next;
					while(p)
					{
						p->index=p->index-1;
						p=p->next;
					}
				}
			}
			else
			{
				q->next=p->next;
				p=p->next;
				while(p)
				{
					p->index=p->index-1;
				}
			}
			return l;
		}
		else
		{
			printf("无此人");
		}
		
	}
	
	void main()
	{
		queue *myl=Createqueue();
		queue *myl2,*myl3;
		Printqueue(myl);
		/*
		myl2=Addqueue(myl);
		Printqueue(myl2);
	
		myl3=Delqueue(myl2);
		Printqueue(myl3);
	
		Findqueue(myl3);
		*/
		system("pause");
	}
		
### 5.栈
编程实现入栈出栈操作

	#include<stdio.h>
	#include<stdlib.h>
	
	typedef struct student
	{
		int data;
		struct student *next;
	}node;
	
	typedef struct stackqueue
	{
		node *zhandi,*top;
	}queue;
	
	queue *push(queue *HQ,int x)//入栈
	{
		node *s;
		s=(node *)malloc(sizeof(node));
		s->data=x;
		s->next=NULL;
	
		if(HQ->zhandi==NULL)
		{
			HQ->top=s;
			HQ->zhandi=s;
	
		}
		else
		{
			s->next=HQ->top;
			HQ->top=s;
		}
	
	
		return HQ;
	}
	
	queue *pop(queue *HQ)//出栈
	{
		node *s;
		if (HQ->top==NULL)
		{
			printf("溢出!\n");
		}
		else
		{
			s=HQ->top;
			printf("弹出%d\n",s->data);
			if(HQ->top==HQ->zhandi)
			{
				HQ->top=NULL;
				HQ->zhandi=NULL;
			}
			else
			{
				HQ->top=s->next;
				HQ->top->next=s->next->next;
			}
			
		
	
		}
		return HQ;
	}
	
	main()
	{
		queue *myHQ;
		int i;
		myHQ=(queue *)malloc(sizeof(queue));
		myHQ->top=NULL;
		myHQ->zhandi=NULL;//一定要先初始化
	
		for(i=1;i<=5;i++)
		{
			myHQ=push(myHQ,i);
			printf("现在栈顶为%d\n",myHQ->top->data);
			printf("现在栈底为%d\n",myHQ->zhandi->data);
	
		}
	
		for(i=1;i<=4;i++)
		{
		  myHQ=pop(myHQ);
		  	printf("现在的栈顶是%d\n",myHQ->top->data);
			printf("现在栈底为%d\n",myHQ->zhandi->data);
		}
	
		while(1)
		{
			;
		}
	
	
	}

### 6.二叉树

	#include <stdio.h>
	#include <stdlib.h>
	
	typedef struct BiTNode
	{
		char data;
		struct BiTNode *lchild,*rchild;
	}BiTNode,*BiTree;
	
	//先序建立二叉树
	
	BiTree CreateBiTree()
	{
		char ch;
		BiTree T;
		scanf("%c",&ch);//创建的时候输入不要空格,比如直接输AB#DF##G##C#E##
		if(ch=='#')
		{
			T=NULL;
		}
		else
		{
			T=(BiTree)malloc(sizeof(BiTNode));
			T->data=ch;
			T->lchild=CreateBiTree();
			T->rchild=CreateBiTree();
		}
		return T;
	}
	
	//先序遍历二叉树
	
	void PreOrderTraverse(BiTree T)
	{
		if(T)
		{
			printf("%c\t",T->data);
			PreOrderTraverse(T->lchild);
			PreOrderTraverse(T->rchild);
		}
	}
	
	//中序遍历
	void  MidOrderTraverse(BiTree T)
	{

		if(T)
		{
			MidOrderTraverse(T->lchild);
			printf("%c\t",T->data);
			MidOrderTraverse(T->rchild);
		}
	}
	
	//后序遍历
	void PostOrderTraverse(BiTree T)
	{
		if(T)
		{
			PostOrderTraverse(T->lchild);
			PostOrderTraverse(T->rchild);
			printf("%c\t",T->data);
		}
	}

	//先序输出二叉树的叶子节点
	void PreOrderLeaf(BiTree T)
	{
		if(T)
		{
			if(T->lchild==NULL&&T->rchild==NULL)
			{
				printf("%c",T->data);
			}
			else
			{
				PreOrderLeaf(T->lchild);
				PreOrderLeaf(T->rchild);
			}
		}
	}

	//统计二叉树中叶子结点数:方法一
	int CountLeaf(BiTree T)
	{
		int l,r;
		if(T==NULL)
		{
			return 0;
		}
		else if(T->lchild==NULL&&T->rchild==NULL)
		{
			return 1;
		}
		else
		{
			l=CountLeaf(T->lchild);
			r=CountLeaf(T->rchild);
			return l+r;
		}	
	}

	//统计二叉树中叶子节点数：方法二

	int CountLeaf2(BiTree T)
	{
		static int count=0;//静态局部变量，第二次执行函数时不会再赋初值
		if(T)
		{
			if(T->lchild==NULL&&T->rchild==NULL)
			{
				count++;
			}
			else
			{
				CountLeaf2(T->lchild);
				CountLeaf2(T->rchild);
			}
		}
		return count;
	}

	//计算二叉树高度
	int TreeDepth(BiTree T)
	{
		int m,n;
		if(T==NULL)
		{
			return 0;
		}
		else
		{
			m=TreeDepth(T->lchild);
			n=TreeDepth(T->rchild);
			return m>n?m+1:n+1;//高度为左右子树较高者
		}
	}

	//复制二叉树
		BiTree CopyTree(BiTree T)
		{
			BiTree newT ;
			if(T==NULL)
			{
				newT=NULL;
			}
			else
			{
				newT=(BiTree)malloc(sizeof(BiTNode));
				newT->data=T->data;
				newT->lchild=CopyTree(T->lchild);
				newT->rchild=CopyTree(T->rchild);
			}
			return newT;
		}

	void main()
	{
		BiTree myBiTree,myNewT;
		//int leafcount;
		myBiTree=CreateBiTree();
	
		PreOrderTraverse(myBiTree);
		printf("\n");
		MidOrderTraverse(myBiTree);
		printf("\n");
		PostOrderTraverse(myBiTree);
		printf("\n");
		PreOrderLeaf(myBiTree);
		printf("\n");
		printf("叶子节点数为%d\n",CountLeaf(myBiTree));
		printf("叶子节点数为%d\n",CountLeaf2(myBiTree));
		printf("二叉树高度为%d\n",TreeDepth(myBiTree));

		myNewT=CopyTree(myBiTree);
		PreOrderTraverse(myNewT);

		while(1)
		{
			;
		}
	}

#### 第二次做

	#include<stdio.h>
	#include<string.h>
	#include<stdlib.h>
	
	typedef struct node
	{
		char data;
		struct node *lchild,*rchild;
	}node,*Tree;
	
	Tree CreateTree()//创建二叉树
	{
		node *p=NULL;
		char c;
	
		scanf("%c",&c);
		if(c!='#')
		{
			p=(node *)malloc(sizeof(node));
			p->data=c;
			p->lchild=CreateTree();
			p->rchild=CreateTree();
		}
		else
		{
			p=NULL;
		}
		return p;
	}
	
	void PrePrintTree(Tree mytree)
	{
		node *p=mytree;
		char c;
		if(p)
		{	
			c=p->data;
			printf("%c",c);
			PrePrintTree(p->lchild);
			PrePrintTree(p->rchild);
		}
	}
	
	void MidPrintTree(Tree mytree)
	{
		node *p=mytree;
		char c;
		if(p)
		{
			c=p->data;
			MidPrintTree(p->lchild);
			printf("%c",c);
			MidPrintTree(p->rchild);
		}
	}
	
	void LastPrintTree(Tree mytree)
	{
		node *p=mytree;
		char c;
		if(p)
		{
			c=p->data;
			LastPrintTree(p->lchild);
			LastPrintTree(p->rchild);
			printf("%c",c);
		}
	}
	
	void PrePrintLeaf(Tree mytree)//先序输出叶子节点
	{
		node *p=mytree;
		char c;
		if(p)
		{
			if(p->lchild==NULL&&p->rchild==NULL)
			{
				c=p->data;
				printf("%c",c);
			}
			else
			{
				PrePrintLeaf(p->lchild);
				PrePrintLeaf(p->rchild);
			}
				
		}
	}
	
	int CountLeaf(Tree mytree)//统计叶子节点数目
	{
		node *p=mytree;
		static int n=0;
		if(p)
		{
			if(p->lchild==NULL&&p->rchild==NULL)
			{
				n++;
			}
			else
			{
				CountLeaf(p->lchild);
				CountLeaf(p->rchild);
			}	
		}
		return n;
	}
	
	int CountLeaf2(Tree mytree)//统计叶子节点数目方法二
	{
		node *p=mytree;
		int n=0;
		if(p)
		{	
			if(p->lchild==NULL&&p->rchild==NULL)
			{
				n=1;
			}
			else
			{
				n=CountLeaf2(p->lchild)+CountLeaf2(p->rchild);
			}
		}
		return n;
	}
	
	
	
	int CountTreeHeight(Tree mytree)//计算树的高度
	{
		node *p=mytree;
		int n=0,l,r;
		if(p)
		{	
			if(p->lchild==NULL&&p->rchild==NULL)
			{
				n=1;
			}
			else
			{
				l=CountTreeHeight(p->lchild);
				r=CountTreeHeight(p->rchild);
				n=l>r?(l+1):(r+1);
				
			}
		}
		return n;
	}
	
	
	void main()
	{
		Tree mytree=NULL;
		int n1,n2,n3;
		printf("请输入二叉树各节点:\n");
		mytree=CreateTree();
		
		PrePrintTree(mytree);
		printf("\n");
	
		MidPrintTree(mytree);
		printf("\n");
	
		LastPrintTree(mytree);
		printf("\n");
	    
		PrePrintLeaf(mytree);
		printf("\n");
	
		n1=CountLeaf(mytree);
		printf("%d\n",n1);
	
		n2=CountLeaf2(mytree);
		printf("%d\n",n2);
	
		n3=CountTreeHeight(mytree);
		printf("%d\n",n3);
		system("pause");
	
	}


[C语言scanf详细解释](http://blog.csdn.net/kobesdu/article/details/39051399)

### 7.图
#### 创建有向图的邻接矩阵存储的算法

	#include<stdio.h>
	#include<stdlib.h>
	#define MaxVerNum 1000
	
	typedef char VerType;
	typedef int EdgeType;
	typedef struct{
		VerType vexs[MaxVerNum];
		EdgeType edges[MaxVerNum][MaxVerNum];
		int vNum,eNum;
	}MGraph;
	
	void CreateGraph(MGraph *G){
		int i,j,k;
		char ch;
		printf("输入顶点数和边数(格式为：顶点数，边数）：");
		scanf("%d,%d",&G->vNum,&G->eNum);
		printf("请输入顶点信息:");
		for(i=0;i<G->vNum;i++){
			scanf("%c",&G->vexs[i]);//?不知为何输不进来
		}
		for(i=0;i<G->vNum;i++){
			for(j=0;j<G->eNum;j++){
				G->edges[i][j]=0;//初始化邻接矩阵
			}
		}
		printf("请输入每条边对应的两个顶点的序号（输入格式：i,j):");
		for(k=0;k<G->eNum;k++){
			scanf("%d,%d",&i,&j);
			G->edges[i][j]=1;
		}
	}
	void main(){
		MGraph *myG;
		myG=(MGraph *)malloc(sizeof(MGraph));
		CreateGraph(myG);
		while(1){
			;
		}
	}

#### 创建有向图的邻接链表存储

	#include<stdio.h>
	#include<stdlib.h>
	#define MaxVerNum 1000 //需要的最大顶点数
	
	typedef char VerType;
	typedef int ElemType;
	
	typedef struct ArcNode{//边结点
		int adjvex;		   //名称域
		struct  ArcNode *nextarc;//指针域
		ElemType info;//权值域
	}ArcNode;
	
	typedef struct{			//表头结点
		VerType data;		//名称域
		ArcNode *firstarc;	//指针域
	}VNode,AdjList[MaxVerNum];
	
	typedef struct{      //邻接链表
		AdjList verlist;//表头结点
		int vexnum,arcnum;//图的顶点数和边数
	}ALGraph;
	
	void CreateALGraph(ALGraph *G){
		int i,j,k;
		ArcNode *s;//定义一个边结点
		printf("请输入顶点数和弧数：\n");
		scanf("%d,%d",&G->vexnum,&G->arcnum);
		printf("请输入顶点信息:\n");
		for(i=0;i<G->vexnum;i++){
			scanf("%c",&G->verlist[i].data);
			G->verlist[i].firstarc=NULL;
		}
		printf("请输入每条弧对应的两个顶点的序号:");
		for(k=0;k<G->arcnum;k++){
			scanf("%d,%d",&i,&j);//?不知为何输不进来
			s=(ArcNode *)malloc(sizeof(ArcNode));
			s->adjvex=j;//边的数据域存该条弧的第二个顶点序号
			s->nextarc=G->verlist[i].firstarc;//边的指针域存第一个顶点所指的指针域
			G->verlist[i].firstarc=s;//每个表头结点的指针域指向边结点
		}
	}

