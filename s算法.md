# 算法复习
## 一）排序
### 1.交换排序

#### （1）普通冒泡
- 时间复杂度：最差、平均都是O(n^2)，最好是O(n)
- 空间复杂度：O(1)


		# include<stdio.h>
	
		void bubble(int *list,int len)
		{
			int i,j,t,flag=0;
			for(i=0;i<len-1;i++)
			{
				flag=0;//设置标记，当某一轮交换没有交换任何数，那下一轮交换也不必进行了
				for(j=0;j<len-1-i;j++)
				{
					if(list[j]>list[j+1])
					{
						t=list[j];
						list[j]=list[j+1];
						list[j+1]=t;
						flag=1;
					}			
				}
				if(flag==0)
				{
					break;
				}
			}
		
		}
		
		void main()
		{
			int n,list[10];
			printf("请输入10个整数：");
			for(n=0;n<10;n++)
			{
				scanf("%d",&list[n]);
			}
			printf("\n");
			bubble(list,10);
			for(n=0;n<10;n++)
			{
				printf("%d\t",list[n]);
			}
			printf("\n");
			while(1)
			{
				;
			}
		
		
		}

#### （2）鸡尾酒排序：双向冒泡
- 时间复杂度：最差、平均都是O(n^2)，最好是O(n)
- 空间复杂度：O(1)
- 
	#include<stdio.h>

	void CocktailBubble(int *list,int n)
	{
		int low=0,high=n-1,j,t,flag;
		while(low<high)
		{
			flag=0;//一次进行两趟for循环，第一个for循环排最大值（次大值），第二个for循环排最小值（次小值），只要其中一趟没有交换任何数字就可以结束排序
			for(j=low;j<high;j++)
			{
				if(list[j]>list[j+1])
				{
					t=list[j];
					list[j]=list[j+1];
					list[j+1]=t;
					flag=1;
				}
			}
			if(flag==0)
			{
				break;
			}
			high--;//上述for循环第一次结束，排完最大值；第二次，排完次大值
			for(j=high;j>low;j--)
			{
				if(list[j]<list[j-1])
				{
					t=list[j];
					list[j]=list[j-1];
					list[j-1]=t;
				}
			}
			if(flag==0)
			{
				break;
			}
			low++;//上述for循环第一次结束，排完最小值；第二次，排完次小值
			
		}
	}
	
	void main(){
		int i,list[10];
		printf("请输入10个整数:");
		for(i=0;i<10;i++){
			scanf("%d",&list[i]);
		}
		for(i=0;i<10;i++){
			printf("%d ",list[i]);
		}
		printf("\n");
		CocktailBubble(list,10);
		for(i=0;i<10;i++){
			printf("%d ",list[i]);
		}
		printf("\n");
	
		while(1){
			;
		}
	}

#### （3）快速排序法
- 时间复杂度：平均O(nlogn),最坏O(n^2)
- 空间复杂度:O(logn)


		# include<stdio.h>
	
		void quickSort(int *list,int i,int j);
		int Partition(int *list,int i,int j);
		
		main(){
			int list[10];
			int k;
			int i=0,j=9;
			printf("请输入10个数：");
			for(k=0;k<10;k++){
				scanf("%d",&list[k]);
			}
			printf("\n");
			quickSort(list,i,j);
			for(k=0;k<10;k++){
				printf("%d\t",list[k]);
			}
			printf("\n");
			while(1)
			{
				;	
			}
		}
		
		void quickSort(int *list,int i,int j){
			int pivotPos=0;//初始基准的位置选为0
			if(i<j){
				pivotPos=Partition(list,i,j);//调用Partition函数后，得到此基准值的位置（保证左边的小于它，右边的大于它）
				quickSort(list,i,pivotPos-1);//对基准值位置的左区间递归调用quickSort函数
				quickSort(list,pivotPos+1,j);//对基准值位置的右区间递归调用quickSort函数
			}
		
		}
		
		int Partition(int *list,int i,int j)
		{
		   
		   int pivot=list[i];//基准值首先设为list[i](i初始为0,故基准值即为list[0])
		   int t;
		   int k;
		  // printf("%d\r%d\n",i,j);
		   while(i<j)
		   {//当i<j时，轮流从右向左、从左向右遍历数组值与基准值比较
			   while(i<j&&list[j]>list[i])
			   {//当i<j时，从j向左扫描（即j--),当list[j]不再大于基准值list[j]时，扫描终止
					j--;
			   }
			   if(i<j)
			   {//扫描终止后，交换list[i]和list[j]的值，交换后list[j]中装的是基准值
			   		t=list[i];
					list[i]=list[j];
					list[j]=t;
			   }
			
		
				while(i<j&&list[i]<list[j])
				{//当i<j时，从i向右扫描（即i++)，当list[i]不再小于基准值list[j]时，扫描终止
					i++;
				}
				if(i<j)
				{//扫描终止后，交换list[i]和list[j]的值，交换后list[i]中装的是基准值
					t=list[i];
					list[i]=list[j];
					list[j]=t;
				}
		   }//如此，i逐渐增加，j逐渐减小，最终i==j或j=i+1，此时即可得出中间值的位置，为i
		
		   list[i]=pivot;//为中间值的位置装上中间值，此位置的值就确定了。
		   //printf("%d\r%d\n",list[i],i);
		  
		   for(k=0;k<10;k++){
				printf("%d\t",list[k]);
			}
			printf("\n");
		   return i;//返回此位置的索引，方便后面确定左右区间的索引值。
		
		}

第二次复习写的代码：

	#include<stdio.h>
	int Partition(int *list,int i,int j)
	{
		int t=list[i];
		while(i<j)
		{
			while(i<j&&list[j]>=t)
			{
				j--;
			}
			if(i<j)
			{
				list[i]=list[j];
				i++;
			}
			while(i<j&&list[i]<=t)
			{
				i++;
			}
			if(i<j)
			{
				list[j]=list[i];
				j--;
			}
		}
		list[i]=t;
		return i;
	}
	void QuikSort(int *list,int small,int big)
	{
		int p=0;
		if(small<big)
		{
			p=Partition(list,small,big);//排好P位置处的值，返回P
			QuikSort(list,small,p-1);
			QuikSort(list,p+1,big);
		}
	}
	
	
	
	void main(){
		int i,list[10];
		printf("请输入10个整数:");
		for(i=0;i<10;i++){
			scanf("%d",&list[i]);
		}
		for(i=0;i<10;i++){
			printf("%d ",list[i]);
		}
		printf("\n");
		QuikSort(list,0,9);
		for(i=0;i<10;i++){
			printf("%d ",list[i]);
		}
		printf("\n");
	
		while(1){
			;
		}
	}

##### 第三次写


	#include<stdio.h>
	#include<stdlib.h>
	int Partition(int *list,int low,int high)//该划分算法的工作为：排好list[low]，然后返回list[low]排好后的位置
	{
		int i=low,j=high;
		int t=list[low];
	
		while(i<j)
		{
			while(list[j]>=t&&i<j)
			{
				j--;
			}
			if(i<j)
			{
				list[i]=list[j];
				i++;
			}
			
	
			while(list[i]<=t&&i<j)
			{
				i++;
			}
			if(i<j)
			{
				list[j]=list[i];
				j--;
			}
			
		}
		list[i]=t;
		return i;
	}
	
	void QuickSort(int *list,int low,int high)
	{
		int p;
		if(low<high)
		{
			p=Partition(list,low,high);//每运行一次，排好list[low]，然后返回list[low]值排好后的位置，然后对其左右区间进行递归
			QuickSort(list,low,p-1);
			QuickSort(list,p+1,high);
		}
	}
	
	main()
	{
		int list[10],i;
		printf("请输入10个整数：\n");
		for(i=0;i<10;i++)
		{
			scanf("%d",&list[i]);
		}
		
		QuickSort(list,0,9);
		
		for(i=0;i<10;i++)
		{
			printf("%d\t",list[i]);
		}
		
		
		system("pause");
	}
		


### 2.插入排序

#### (1)直接插入法
时间复杂度：最差、平均都是O(n^2)，最好是O(n)

空间复杂度：1

	# include<stdio.h>

	void insertion(int *list,int len)
	{
		int i,t,n,j;
		for(i=0;i<len-1;i++)//以第一项为基础，每次循环把下一项插入到合适的位置
		{
			if(list[i+1]<list[i])//如果下一项比已排好的最后一项小（排好的已经是从小到大的顺序了），则把下一项的值保存为t,并把排好的最后一项赋值给下一项
			{
				t=list[i+1];
				list[i+1]=list[i];
				n=i;
				while(t<list[n-1])//从右向左将t与每一项比较，若t还比比较项小，则比较项右移一位，t继续与左边的项比较
				{
					
					list[n]=list[n-1];
					n--;
				}
				list[n]=t;//直到比较到t大于等于某一项（此时该项为list[n-1]），则把t插入该项的后面
			}
			for(j=0;j<len;j++)
			{
				printf("%d\t",list[j]);
			}
			printf("\n");
		}
	}
	
	void main()
	{
		int n,list[10];
		printf("请输入10个整数：");
		for(n=0;n<10;n++)
		{
			scanf("%d",&list[n]);
		}
		printf("\n");
		insertion(list,10);
		for(n=0;n<10;n++)
		{
			printf("%d\t",list[n]);
		}
		printf("\n");
		while(1)
		{
			;
		}
	}

##### 第二次手写：

	
	#include<stdio.h>
	#include<stdlib.h>
	void insertion(int *list,int n)
	{
		int i,j,t;
		for(i=1;i<n;i++)//待插入的是list[1]到list[n-1]
		{
			if(list[i]<list[i-1])
			{
				t=list[i];
				list[i]=list[i-1];
				j=i;
				while(t<list[j-1]&&j>=1)
				{
					list[j]=list[j-1];
					j--;
				}
				list[j]=t;	
			}
		
		}
	}
	main()
	{
		int list[10],n=10,i;
	
		printf("请输入10个整数：\n");
		for(i=0;i<10;i++)
		{
			scanf("%d",&list[i]);
		}
	
		insertion(list,10);
	
		for(i=0;i<10;i++)
		{
			printf("%d\t",list[i]);
		}
	
	
		system("pause");
	}
	
#### （2)折半插入法

#### （3）shell排序：分组的插入排序

	# include<stdio.h>
	void shell(int *list,int len,int d)//每轮都按照增量d进行插入排序
	{
		int i,t,n,j;
		for(i=0;i<len-d;i=i+d)
		{
			if(list[i+d]<list[i])
			{
				t=list[i+d];
				list[i+d]=list[i];
				n=i;
				while(t<list[n-d])
				{
					list[n]=list[n-d];
					n=n-d;
				}
				list[n]=t;
			}
		}
		for(j=0;j<len;j++)
		{
			printf("%d\t",list[j]);
		}
		printf("\n");
	
	}
	void shellSort(int *list,int len)
	{
		int increment=len;
		do
		{
			increment=increment/3+1;//设置初始增量为(长度/3+1)，以后每轮循环的增量都为(上一增量/3-1),直到增量为1
			shell(list,len,increment);
		}
		while(increment>1);
	}
	void main()
	{
		int n,list[10];
		printf("请输入10个整数：");
		for(n=0;n<10;n++)
		{
			scanf("%d",&list[n]);
		}
		printf("\n");
		shellSort(list,10);
		for(n=0;n<10;n++)
		{
			printf("%d\t",list[n]);
		}
		printf("\n");
		while(1)
		{
			;
		}
	
	
	}
##### 第二次写

	#include<stdio.h>
	#include<stdlib.h>
	
	void ShellPass(int *list,int n,int incre)
	{
		int i,j,t,k;//以第一个步长list[0]……list[incre-1]为基准，待插入的是list[incre]……list[n-1]，每个插的时候和自己的增量组比较。
		
		for(i=incre;i<n;i++)
		{
			if(list[i]<list[i-incre])
			{
				t=list[i];
				list[i]=list[i-incre];
				j=i;
				while(t<list[j-incre]&&j>=incre)
				{
					list[j]=list[j-incre];
					j-=incre;
				}
				list[j]=t;
	
			}
		}
	
	}
	void ShellSort(int *list,int n)
	{
		int incre=n;
		while(1)
		{
			incre=incre/3+1;
			ShellPass(list,n,incre);
			if(incre==1)
			{
				break;
			}
		}
	}
	
	main()
	{
		int list[10],n=10,i;
	
		printf("请输入10个整数：\n");
		for(i=0;i<10;i++)
		{
			scanf("%d",&list[i]);
		}
	
		ShellSort(list,10);
	
		for(i=0;i<10;i++)
		{
			printf("%d\t",list[i]);
		}
	
	
		system("pause");
	}
### 3.选择排序
#### （1）普通选择排序
时间复杂度：最差、平均都是O(n^2)，最好是O(n)

空间复杂度：1

稳定性：**不稳定**

	#include<stdio.h>
	void SimpleSort(int *list,int n)
	{
		int i,j,k,t;
		for(i=0;i<n;i++)
		{
			k=i;
			for(j=i+1;j<n;j++)
			{
				if(list[j]<list[k])
				{
					k=j;//将比list[k]小的list[j]的j存入k
				}
			}
			if(k!=i)//每进行一次循环找出list[i]到list[n-1]中最小的那个，将这个最小值与list[i]交换位置
			{
				t=list[i];
				list[i]=list[k];
				list[k]=t;
			}
		}
	}
	
	main()
	{
		int list[10],n=10,i;
		printf("请输入10个整数：\n");
		for(i=0;i<10;i++)
		{
			scanf("%d",&list[i]);
		}
		SimpleSort(list,10);
	
		for(i=0;i<10;i++)
		{
			printf("%d",list[i]);
		}
		system("pause");
	}
#### （2）二元选择排序***待研究***

	# include<stdio.h>

	int selectMinIndex(int *list,int len,int i)
	{
		int k=i,j;//k来记录最小项索引,k初始化为i。若后面某项list[j]小于list[i],则最小项索引k更新为j
		for(j=i+1;j<len;j++)
		{
			if(list[j]<list[i])
			{
				k=j;
			}
		}
		return k;
	}
	
	int selectMaxIndex(int *list,int len,int i)
	{
		int k=len-1,j;//k来记录最大项索引,k初始化为len。若后面某项list[j]大于list[i],则最小项索引k更新为j
		for(j=len-2;j>i-1;j--)//与(j=i;j<len-1;j++)等价
		{
			if(list[j]>list[len-1])
			{
				k=j;
			}
		}
		return k;
	}
	
	void selectSort(int *list,int len)//参数为数组，数组长度
	{
		int minIndex,maxIndex,i,t,n;
		for(i=0;i<len/2;i++)
		{
			minIndex=selectMinIndex(list,len,i);//循环执行len-1次，每次都选出list[i]~list[len-1]中值最小的一项的索引
			if(minIndex!=i)//最小项的索引若不为该次比较项（list[i]~list[len-1]）的第一项i,则交换最小项与第一项的值，将最小项装入list[i]
			{
				t=list[i];
				list[i]=list[minIndex];
				list[minIndex]=t;
			}
			maxIndex=selectMaxIndex(list,len,i);
			if(maxIndex!=(len-1))
			{
				t=list[len-1];
				list[len-1]=list[maxIndex];
				list[maxIndex]=t;
			}
			for(n=0;n<10;n++)//输出每次比较的结果
			{
				printf("%d\t",list[n]);
			}
			printf("\n");
	
		}
	}
	
	
	
	
	
	void main()
	{
		int n,list[10];
		printf("请输入10个整数：");
		for(n=0;n<10;n++)
		{
			scanf("%d",&list[n]);
		}
		printf("\n");
		selectSort(list,10);
		for(n=0;n<10;n++)
		{
			printf("%d\t",list[n]);
		}
		printf("\n");
		while(1)
		{
			;
		}
	
	
	}

#### （3）堆排序***有错误，待研究***

	#include<stdio.h>
	void HeapAdjust(int *list,int s,int n)//list[s+1],list[s+2]……list[n-1]已经是堆，list[s+1]是堆顶、最大，list[s]新加入进来到堆顶位置
	{
		int r,i,j;
		r=list[s];
		i=s;//i指向新的堆顶
		j=2*i;//j指向新堆顶的左孩子
	
		while(j<=n)
		{
			if(j<n&&list[j]<list[j+1])
			{
				j=j+1;//j修改为左右两个孩子中较大的那个孩子的序号
			}
	
			if(r>list[j])//若放到堆顶的数r比两个孩子中较大的那个还大，那么就不用调整任何顺序了，直接退出
			{
				break;
			}
			else
			{
				list[i]=list[j];//堆顶的值改为其较大的那个孩子的值
	
				i=j;//i指向新的堆顶，即原堆较大的孩子
				j=2*i;//j指向新的堆顶的左孩子
			}	
		}
		list[i]=r;//最终的i即为最后调整过的堆的较大的孩子，将其当做堆顶，再无孩子，不用调整了，将其赋值为初始r
	
	}
	
	void HeapSort(int *list,int n)
	{
		int i,t;
		for(i=n/2-1;i>0;i--)//从第n/2个元素(即序号为n/2-1)开始作为堆顶，将其下的部分调整为堆
		{
			HeapAdjust(list,i,n-1);
		}
		for(i=n-1;i>=1;i--)//依次将堆顶list[0]与堆底元素lisit[i]交换，然后调整堆
		{
			t=list[0];
			list[0]=list[i];
			list[i]=t;//list[n-1]已排好数列最大值
			HeapAdjust(list,0,i-1);
		}
		
	}
	
	main()
	{
		int list[10],n=10,i;
		printf("请输入10个整数：\n");
		for(i=0;i<10;i++)
		{
			scanf("%d",&list[i]);
		}
		HeapSort(list,10);
	
		for(i=0;i<10;i++)
		{
			printf("%d",list[i]);
		}
	
		system("pause");
	}
堆排序正确方法：

	#include<stdio.h>
	#include<stdlib.h>
	
	
	//向下调整运算
	void AdjustDown(int *h,int i,int n)//待排序数组h[],待调整元素下标号i和序列长度n
	{
		int l=2*i+1,j;//l为待调整元素左孩子下标
		int temp=h[i];//待调整元素
		while(l<=n-1)
		{
		  if(l<n-1&&h[l]>h[l+1])
		  {
			l++;//现在l为待调整元素左右孩子中较小孩子的下标
		  }
		  if(temp<h[l])
		  {
			break;//当待调整元素小于左右孩子时，直接退出，调整结束
		  }
		  h[i]=h[l];//交换h[i]和其较小的孩子，由于h[i]保存在temp中，所以可以直接赋值
		  i=l;//为下一次调整做好准备
		  l=l*2+1;
		}
		h[i]=temp;//填入temp，调整结束
	
		for(j=0;j<10;j++)
		{
			printf("%d\t",h[j]);
				
		}
		printf("\n");
	}
	
	//建立小根堆
	void CreatHeap(int *h,int n)
	{
		int i,j;
		for(i=(n-2)/2;i>=0;i--)
		{
			printf("%d\n",i);//待调整的元素下标为i
			AdjustDown(h,i,n);//待调整的元素为下标为n/2到0的元素
		
		}
	}
	
	//堆排序
	void HeapSort(int *h,int n)
	{
		int temp,i;
		CreatHeap(h,n);//得到一个小根堆
		for(i=n-1;i>=0;i--)
		{
		   temp=h[i];//首末位交换，将最小值（首位）和末位交换，排好最小值（即排在最后），再将剩余元素（除最后一个元素外）调整为小根堆
		   h[i]=h[0];
		   h[0]=temp;
		   AdjustDown(h,0,i);
	
		}
	}
	
	void main()
	{
		int i,h[10];
		for(i=0;i<10;i++)
		{
			scanf("%d",&h[i]);
		}
		HeapSort(h,10);
		for(i=0;i<10;i++)
		{
			printf("%d\t",h[i]);
		}
	
		system("pause");
	
	}

### 4.归并排序
时间复杂度：最差、平均、最好都是O(nlogn)

空间复杂度：O(n)

	#include<stdio.h>
	#include<stdlib.h>
	void Merge(int *list,int *newlist,int s,int m,int t)
	{
		int i,j,k;
		i=s;
		j=m+1;
		k=s;
		while(i<=m&&j<=t)
		{
			if(list[i]<=list[j])
			{
				newlist[k]=list[i];
				k++;
				i++;
			}
			else
			{
				newlist[k]=list[j];
				k++;
				j++;
			}
		}
	
		while(i<=m)//剩余的若是前一个序列，则其直接按并入newlist
		{
			newlist[k]=list[i];
			i++;
			k++;
		}
		while(j<=t)
		{
			newlist[k]=list[j];
			j++;
			k++;
		}
	}
	
	void MSort(int *list,int *newlist,int s,int t)
	{
		int *newlist2;
		int m;
		newlist2=(int *)malloc((t-s+1)*sizeof(int));//分配一个新数组，和list等长
	
	
		if(s==t)
		{
			newlist[s]=list[s];
		}
		else
		{
			m=(s+t)/2;
			MSort(list,newlist2,s,m);//将list[s]……list[m]递归归并为有序的newlist2[s]……newlist2[m]
			MSort(list,newlist2,m+1,t);//将list[m+1]……list[t]递归归并为有序的newlist2[m+1]……newlist2[t]
			Merge(newlist2,newlist,s,m,t);//将newlist2[s]……newlist2[m]和newlist2[m+1]……newlist2[t]归并到newlist[s]……newlist[t]
		}
	}
	void MergeSort(int *list,int *newlist,int n)
	{
		MSort(list,newlist,0,n-1);
	}
	main()
	{
		int list[10],n=10,i,newlist[10];
		printf("请输入10个整数：\n");
		for(i=0;i<10;i++)
		{
			scanf("%d",&list[i]);
		}
		MergeSort(list,newlist,10);
	
		for(i=0;i<10;i++)
		{
			printf("%d",newlist[i]);
		}
	
		system("pause");
	}

### 5.基数排序
时间复杂度：O(dn)

空间复杂度：O(n)


## 总结

大类|排序方法|时间复杂度|空间复杂度|稳定性|备注
----|-------|---------|--------|------
交换法|冒泡法|最差、平均都是O(n^2),最好是O(n)|1|稳定|n较小时较好
交换法|鸡尾酒冒泡法|最差、平均都是O(n^2),最好是O(n)|1|稳定|n较小时较好
交换法|快速排序|平均O(nlogn),最坏是O(n^2)|O(logn)|不稳定|n大时较好
插入法|直接插入法|最差、平均都是O(n^2),最好是O(n)|1|稳定|大部分已排序时较好
插入法|希尔排序（分组的插入法）|平均是O(nlogn)|1|不稳定
选择法|普通选择|最差、平均都是O(n^2)|1|不稳定|n较小时较好
选择法|堆排序|最差、平均、最好都是O(nlogn)|1|不稳定|n大时较好
归并排序|归并排序|最差、平均、最好都是O(nlogn)|O(n)|稳定|n大时较好
基数排序|基数排序|O(dn)(d是常数）|O(n)|稳定


## 二）查找

### 1.线性表的查找
#### 1.顺序查找
时间复杂度： O(n)

#### 2.折半查找/二分法查找
时间复杂度： O(logn)

	#include<stdio.h>
	void ErfenSearch(int *list,int n,int x,int *index)
	{
		int low,high,k;
		low=0;
		high=n-1;
		if(x<=list[high]&&x>=list[low])
		{
			while(low<=high)
			{
				k=(low+high)/2;
				if(x<list[k])
				{
					high=k-1;
				}
				else if(x>list[k])
				{
					low=k+1;
				}
				else
				{
					break;
				}
			}
		
			*index=k;
		}
		else
		{
			*index=-1;
		}
		
	}
	main()
	{
		int list[10],n=10,i,x;
		int rel;
		printf("请输入10个整数：\n");
		for(i=0;i<10;i++)
		{
			scanf("%d",&list[i]);
		}
		printf("请输入待查找的数:\n");
		scanf("%d",&x);
	
		ErfenSearch(list,10,x,&rel);
	
		printf("%d",rel);
	
	
		system("pause");
	}

第二次写：

	#include<stdio.h>
	
	int Binary_Search(int *list,int n,int key)
	{
		int low,high,mid,flag;
		low=0;
		high=n-1;
		flag=0;
		while(low<=high)
		{
			mid=(low+high)/2;
			if(list[mid]==key)
			{
				flag=mid;
				break;
			}
			else if(key<list[mid])
			{
				high=mid-1;
			}
			else
			{
				low=mid+1;
			}
		}
		return flag;
	
	}
	
	void main()
	{
		int list[10],i,f;
		printf("输入一个顺序存储的数组:\n");
		for(i=0;i<10;i++)
		{
			scanf("%d",&list[i]);
		}
		f=Binary_Search(list,10,25);
		printf("%d",f);
	
		system("pause");
	}

#### 3.分块查找

### 2.树表的查找

#### (1)二叉排序树的查找

	#include<stdio.h>
	#include<stdlib.h>

	typedef struct BSNode
	{
		int data;
		struct BSNode *lchild,*rchild;
	}BSNode,*BSTree;
	
	int SearchData(BSNode *t,BSNode **p,BSNode **q,int key)//在二叉树上查找数据域为key的元素，若找到则返回1，否则返回0
	{
		int flag=0;
		*q=t;
		while(*q)
		{
			if(key>(*q)->data)
			{
				*p=*q;
				*q=(*q)->rchild;
			}
			else if(key<(*q)->data)
			{
				*p=*q;
				*q=(*q)->lchild;
			}
			else
			{
				flag=1;
				break;
			}
		}
		return flag;
	}
	int InsertNode(BSNode **t,int key)//二叉排序树插入节点
	{
		BSNode *p,*q,*s;
		int flag;
		flag=0;
		p=*t;
		if(!SearchData(*t,&p,&q,key))
		{
			s=(BSNode *)malloc(sizeof(BSNode));
			s->data=key;
			s->lchild=NULL;
			s->rchild=NULL;
			flag=1;
			if(!p)
			{
				*t=s;
			}
			else if(key>p->data)
			{
				p->rchild=s;
			}
			else
			{
				p->lchild=s;
			}
			
	
		}
		return flag;
	
	}
	
	void creatBST(BSTree *T)//创建二叉排序树
	{
		int key;
		*T=NULL;
		scanf("%d",&key);
		while(key!=-1)
		{
			InsertNode(T,key);
			scanf("%d",&key);
		}
	
	}
	
	void printBST(BSTree T)
	{
		BSNode *p=T;
		int d;
		if(p)
		{
			d=p->data;
			printBST(p->lchild);
			printf("%d",d);
			printBST(p->rchild);
		}
	}
	void main()
	{
		BSTree myTree=(BSNode *)malloc(sizeof(BSNode));
		creatBST(&myTree);
	
		printBST(myTree);
	
		system("pause");
	
	}

也可以这么写：

	#include<stdio.h>
	#include<stdlib.h>
	
	typedef struct BSNode
	{
		int data;
		struct BSNode *lchild,*rchild;
	}BSNode,*BSTree;
	
	int SearchData(BSTree t,BSTree *p,BSTree *q,int key)//在二叉树上查找数据域为key的元素，若找到则返回1，否则返回0
	{
		int flag=0;
		*q=t;
		while(*q)
		{
			if(key>(*q)->data)
			{
				*p=*q;
				*q=(*q)->rchild;
			}
			else if(key<(*q)->data)
			{
				*p=*q;
				*q=(*q)->lchild;
			}
			else
			{
				*p=*q;
				flag=1;
				break;
			}
		}
		return flag;
	}
	int InsertNode(BSTree *t,int key)//二叉排序树插入节点
	{
		BSNode *p,*q,*s;
		int flag;
		flag=0;
		p=*t;
		if(!SearchData(*t,&p,&q,key))
		{
			s=(BSNode *)malloc(sizeof(BSNode));
			s->data=key;
			s->lchild=NULL;
			s->rchild=NULL;
			flag=1;
			if(!p)
			{
				*t=s;
			}
			else if(key>p->data)
			{
				p->rchild=s;
			}
			else
			{
				p->lchild=s;
			}
			
	
		}
		return flag;
	
	}
	
	void creatBST(BSTree *T)//创建二叉排序树
	{
		int key;
		*T=NULL;
		scanf("%d",&key);
		while(key!=-1)
		{
			InsertNode(T,key);
			scanf("%d",&key);
		}
	
	}
	
	void printBST(BSTree T)//中序遍历二叉排序树，即得到一个从小到大的排序
	{
		BSNode *p=T;
		int d;
		if(p)
		{
			d=p->data;
			printBST(p->lchild);
			printf("%d\t",d);
			printBST(p->rchild);
		}
	}
	
	int DeleteNode(BSNode **t,int key)//删除节点，还有问题。
	{
		BSNode *p,*q,*s,**f;
		int flag=0;//标记是否删除成功
		p=*t;
		if(SearchData(*t,&p,&q,key))
		{
			flag=1;
			if(p==q)//若待删节点为根节点
			{
				f=t;
			}
			else
			{
				f=&(p->lchild);
				if(key>p->data)
				{
					f=&(p->rchild);
				}
			}
			if(!q->rchild)//若待删节点无右子树，以左子树替换待删节点
			{
				*f=q->lchild;
			}
			else if(!q->lchild)//若待删节点无左子树，以右子树替换待删节点
			{
				*f=q->rchild;
			}
			else//若待删节点既有左子树又有右子树
			{
				p=q->rchild;
				s=p;
				while(p->lchild)
				{
					s=p;
					p=p->lchild;
				}
				*f=p;
				s->lchild=q->lchild;
				if(s!=p)
				{
					s->lchild=p->rchild;
					p->rchild=q->rchild;
				}
			}
			free(q);
		}
		return flag;
	
	}
	void main()
	{
		BSTree myTree=(BSNode *)malloc(sizeof(BSNode));
		creatBST(&myTree);
	
		printBST(myTree);
	
		DeleteNode(&myTree,24);//
		printBST(myTree);
	
		system("pause");
	
	}
## 四）经典编程题
#### 规律总结：
##### 通过局部函数为void类型，通过指针类型的参数得到结果
- 在主函数分配过空间的数，传递给某局部函数的参数，那其就不要再在局部函数内部重新分配空间。

##### 通过局部函数返回得到结果
- 局部函数类型和返回值定义的类型一定要一样，例如返回一个字符数组，局部函数为char *类型，局部函数内部返回值的定义形式不能为char a[8],而应该是char *a=(char *)malloc(sizeof(8));

##### 分配空间的方式 
- 如果知道数组长度，或用宏定义的数组长度n,那char c[n]和char *c=(char *)malloc(n)是一个效果。
#### 1.格雷码生成
格雷码生成方法：某数右移1位后，和原数按位异或，即得到该原数格雷码


	#include<stdio.h>
	#include<string.h>
	#include<stdlib.h>

	//生成某整数的格雷码
	void Graycode(int *t)
	{
		int a,b;
		a=*t;
		b=a>>1;
		*t=a^b;
	
	}
	
	//把某数化为二进制
	char *Turntobit(int data)//设data是小于256的正整数，那么二进制数用8位表示即可
	{
		char a,t;
		char *k=(char *)malloc(8*sizeof(char));//一定要这样分配存储空间，才能返回k为指针
		int i=0;
		while(data)
		{
			a=(char)(data%2+'0');
			data=data/2;
			k[i]=a;
			i++;
		}
		while(i<=7)
		{
			k[i]='0';
			i++;
		}
		for(i=0;i<4;i++)
		{
			t=k[i];
			k[i]=k[7-i];
			k[7-i]=t;
		}
		return k;
	}
	
	void main()
	{
		int d,i=0;
		char *c,*c1;
		c=(char *)malloc(8*sizeof(char));
		c1=(char *)malloc(8*sizeof(char));
		printf("请输入一个小于256的正整数:\n");
		scanf("%d",&d);
		c=Turntobit(d);
		printf("其化为二进制是:\n");
		for(i=0;i<8;i++)
		{
			printf("%c",c[i]);
		}
		printf("\n");
	
		Graycode(&d);
		printf("其格雷码是%d",d);
		c1=Turntobit(d);
		printf("其化为二进制是:\n");
		for(i=0;i<8;i++)
		{
			printf("%c",c1[i]);
		}
		printf("\n");
		system("pause");
	}

#### 2.大数相加

	#include<stdio.h>
	#include<stdlib.h>
	#include<string.h>
	
	#define max 1000
	void BigAdd(char *a,char *b,char *c)
	{
		int m=strlen(a),n=strlen(b);
		int l;
		int *p;
		int t,t1,t2,i,j,h,jinwei;
		char *q=a;
		if(m<n)//确保第一个加数比第二个加数长。
		{
			a=b;
			b=q;
			m=strlen(a);
			n=strlen(b);
		}
		l=m+1;
		
		p=(int *)malloc(l*sizeof(int));
		memset(p,0,l*sizeof(int));
		memset(c,'0',l*sizeof(char));
		c[l]='\0';
	
		jinwei=0;
		h=l-1;
		i=m-1;
		j=n-1;
		while(j>=0)
		{
			t=(int)(a[i]-'0')+(int)(b[j]-'0')+jinwei;
			p[h]=t%10;
			jinwei=t/10;
			i--;
			j--;
			h--;
		}
		while(i>=0)
		{
			t=(int)(a[i]-'0')+jinwei;
			p[h]=t%10;
			jinwei=t/10;
			i--;
			h--;
		}
		p[h]=jinwei;
	
	
		for(i=l-1;i>=0;i--)
		{
			c[i]=(char)(p[i]+'0');
		}
		if(c[0]=='0')
		{
			c[0]=' ';
		}
	
	
		
	}
	void main()
	{
		char a[max],b[max],c[max+1];
		puts("请输入加数1：");
		gets(a);
		puts("请输入加数2：");
		gets(b);
		BigAdd(a,b,c);
		puts("和为:");
		puts(c);
	
		system("pause");
	}

#### 第二次写

	#include<stdio.h>
	#include<string.h>
	#include<stdlib.h>
	#define N 1000
	void Bigadd(char *a,char *b,char *c)
	{
		int m=strlen(a),n=strlen(b);
		char *k=a;
		int i,j,h,t,jinwei;
		if(m<n)
		{
			a=b;
			b=k;
			m=strlen(a);
			n=strlen(b);
		}
		memset(c,'0',(m+1)*sizeof(char));
		c[m+1]='\0';
		
		i=m-1;
		j=n-1;
		h=m;
		jinwei=0;
		while(j>=0)
		{
			t=(int)(a[i]-'0')+(int)(b[j]-'0')+jinwei;
			c[h]=(char)(t%10+'0');
			jinwei=t/10;
			i--;
			j--;
			h--;
		}
		while(i>=0)
		{
			t=(int)(a[i]-'0')+jinwei;
			c[h]=(char)(t%10+'0');
			jinwei=t/10;
			i--;
			h--;
		}
		c[h]=(char)(jinwei+'0');//这时候h等于0
		
		if(c[0]=='0')
		{
			c[0]=' ';
		}
		
	}
	
	void main()
	{
		char *a=(char *)malloc(N);
		char *b=(char *)malloc(N);
		char *c=(char *)malloc(N+1);
	
		printf("请输入第一个加数：\n");
		gets(a);
		printf("请输入第二个加数：\n");
		gets(b);
	
		Bigadd(a,b,c);
		printf("和为:\n");
		puts(c);
	
		system("pause");
	}

#### 3.大数相乘

	#include<stdio.h>
	#include<string.h>
	#include<stdlib.h>
	
	#define maxlen 1000
	void BigMulti(char *a, char *b,char *c)
	{
	    int m=strlen(a),n=strlen(b);//求出被乘数长度m，乘数长度n
		int i,j,h,l=m+n;//l为乘积长度（最高位l[0]可能为0）
		int *p,*q;
		int t,jinwei;
	
		p=(int *)malloc(sizeof(int)*m);//数组p存放乘数的某一位与被乘数的m位数字分别相乘的结果，长为m。因为都是数字与数字相乘，最大为81，整数足够。
		memset(p,0,m*sizeof(int));//初始化p每一位为0
	
		q=(int *)malloc(sizeof(int)*l);//数组q存放乘积的每一位，长度为l。
		memset(q,0,l*sizeof(int));//初始化q每一位为0
	
		memset(c,'0',l*sizeof(char));//初始化c每一位为'0'，下面因为为'\0'结束字符串输出
		c[l]='\0';
	
	
		jinwei=0;
		for(i=n-1;i>=0;i--)//计算n-i轮p。
		{
			h=l-1-(n-1-i);//每一轮要讲数组p的最低位即p[n-1]加到q[h]上，p[n-2]加到q[h-1]上.....直到p加完，进位加完。
			for(j=m-1;j>=0;j--)
			{
				p[j]=((int)(a[j]-'0'))*((int)(b[i]-'0'));
				t=q[h]+p[j]+jinwei;
				q[h]=t%10;
				jinwei=t/10;
				h--;
			}
			while(jinwei)
			{
				t=q[h]+jinwei;
				q[h]=t%10;
				jinwei=t/10;
				h--;
			}
			
			
		}
	
		for(i=l-1;i>=0;i--)
		{
			c[i]=(char)(q[i]+'0');
		}
		if(c[0]=='0')
		{
			c[0]=' ';//最高一位为0则变为空格
		}
	
	
	}
	void main()
	{
		char a[maxlen],b[maxlen],c[2*maxlen];
		
		puts("输入被乘数:\n");
		gets(a);
		puts("输入乘数:\n");
		gets(b);
		
	
		BigMulti(a,b,c);
		puts("乘积为:");
		puts(c);
	
	    system("pause");
	}
#### 第二次写

	#include<stdio.h>
	#include<string.h>
	#include<stdlib.h>
	#define N 1000
	void BigMulti(char *a,char *b,char *c)
	{
		int m=strlen(a),n=strlen(b);
		int i,j,h,t,jinwei;
		memset(c,'0',(m+n));
		c[m+n]='\0';
		
		j=n-1;
		while(j>=0)
		{
			h=m+j;//m+n-1-(n-1-j);
			i=m-1;
			jinwei=0;
			while(i>=0)
			{
				t=(int)(a[i]-'0')*(int)(b[j]-'0')+(int)(c[h]-'0')+jinwei;
				c[h]=(char)(t%10+'0');
				jinwei=t/10;
				i--;
				h--;
			}
			while(jinwei)
			{
				t=(int)(c[h]-'0')+jinwei;
				c[h]=(char)(t%10+'0');
				jinwei=t/10;
				h--;
			}
		
			j--;
		}
		if(c[0]=='0')
		{
			c[0]=' ';
		}
	}
	void main()
	{
		char a[N],b[N],c[2*N];//两数相乘，乘积是两数位数之和，或位数之和减一
		printf("请输入被乘数：\n");
		gets(a);
		printf("请输入乘数:\n");
		gets(b);
		BigMulti(a,b,c);
		printf("乘积为:\n");
		puts(c);
	
		system("pause");
	}

#### 第三次写

	#include<stdio.h>
	#include<stdlib.h>
	#include<string.h>
	#define max 100
	
	void Bigmulti(char *a,char *b,char *c)
	{
		int m=strlen(a);
		int n=strlen(b);
		int t,jinwei;
		int i,j,h;
	
		memset(c,'0',m+n);
		c[m+n]='\0';
	
		for(i=n-1;i>=0;i--)
		{
			jinwei=0;
			j=m-1;
			h=m+i;
			while(j>=0)
			{
				t=(int)(b[i]-'0')*(int)(a[j]-'0')+(int)(c[h]-'0')+jinwei;
				c[h]=(char)(t%10+'0');
				jinwei=t/10;
				j--;
				h--;
			}
			while(jinwei)
			{
				t=(int)(c[h]-'0')+jinwei;
				c[h]=(char)(t%10+'0');
				jinwei=t/10;
				h--;
			}
		}
	
		if(c[0]=='0')
		{
			c[0]=' ';
		}
	}
	
	void main()
	{
		char a[max],b[max],c[2*max];
		printf("请输入被乘数:\n");
		gets(a);
		printf("请输入乘数:\n");
		gets(b);
		Bigmulti(a,b,c);
		puts(c);
		system("pause");
	}
### 1.发红包问题

		#include<stdio.h>
		void CocktailSort(float *gift,int n)
		{
		    int low=0,high=n-1,i,flag;
		    float t;
		    
		    while(low<high)
		    {
		        flag=0;
		        
		        if(low<high)
		        {
		            for(i=low;i<high;i++)
		            {
		                if(gift[i]>gift[i+1])
		                {
		                    t=gift[i];
		                    gift[i]=gift[i+1];
		                    gift[i+1]=t;
		                    flag=1;
		                }
		            }
		        }
		        
		        if(flag==0)
		        {
		            break;
		        }
		        high--;
		        
		        flag=0;
		        if(low<high)
		        {
		            for(i=high;i>low;i--)
		            {
		                if(gift[i]<gift[i-1])
		                {
		                    t=gift[i];
		                    gift[i]=gift[i-1];
		                    gift[i-1]=t;
		                    flag=1;
		                }
		            }
		       }
		       if(flag==0)
		       {
		       		break;    
		       }
		       low++;
		       
		    }
		}
		
		int searchGift(float *sortedgifts,int n)
		{
		    float  t=sortedgifts[0];
		    int i,count=1;
		    
		    for(i=1;i<n;i++)
		    {
		        if(sortedgifts[i]==t)
		        {
		           count++;
		        }
		        else
		        {
		            t=sortedgifts[i];
		            count=1;
		        }
				if(count>n/2)
				{
					return t;
				}
		    }
		
		
		}
		
		void main()
		{
		    float gift[5]={1,2,3,2,2},rel;
		    int n=5,i;
		    
		    CocktailSort(gift,5);
		    for(i=0;i<5;i++)
			{
				printf("%f\t",gift[i]);
			}
			printf("\n");
			rel=searchGift(gift,5);
		    printf("%f\n",rel);
		    
		    while(1)
			{
				;
			}
		}




### 4.A，B两个整数集合，设计一个算法求他们的交集。

	#include<stdio.h>
	#include<string.h>
	#include<stdlib.h>
	
	#define max 100
	int *qiujiao(int *a,int *b,int al,int bl, int *cll)
	{
		int *p=a,t=al,i,j,h=0,*c=NULL,*rel=NULL;
		if(al<bl)
		{
			a=b;
			b=p;
			al=bl;
			bl=t;
		}
	
		c=(int *)malloc(bl*sizeof(int));
		memset(c,0,bl*sizeof(int));
	
		for(i=0;i<bl;i++)
		{
			for(j=0;j<al;j++)
			{
				if(a[j]==b[i])
				{
					c[h]=a[j];
					h++;
				}
			}
		}
	
		rel=(int *)malloc(h*sizeof(int));
		*cll=h;
		for(i=0;i<h;i++)
		{
			rel[i]=c[i];
		}
		return rel;
	}
	
	main()
	{
		int a[max],b[max],al,bl,i=0,*c=NULL,cl;
		
		printf("请输入数组a,以回车结束:\n");
	
		while(1)
		{
			scanf("%d",&a[i]);
			i++;
			if(getchar()=='\n')
			{
				break;
			}
		}
		al=i;
	
		i=0;
		printf("请输入数组b,以回车结束:\n");
		while(1)
		{
			scanf("%d",&b[i]);
			i++;
			if(getchar()=='\n')
			{
				break;
			}
	
	
		}
		bl=i;
	
		c=qiujiao(a,b,al,bl,&cl);
		for(i=0;i<cl;i++)
		{
			printf("%d\t",c[i]);
		}
	
		system("pause");
	}

### 5. 已知rand7()可以产生1~7的7个数(均匀概率),利用rand7() 产 生 rand10() 1~10(均匀概率)。

	int rand10()
	{
		int i=rand7()-1;
		int j=rand7()-1;
		int num=i*7+j;
		if(num>=40)
		{
			return rand10();
		}
		else
		{
			return num%10+1;
		}
	}

	and7()-1等概率地产生0~6的数。
	两个（rand7()-1）可以等概率地产生0~48个数，每个数产生的概率都是 1/49;
	然后当产生 40 - 48 这9个数时我们重新获取，这样相当于把 40 - 48 的概率均摊到 0 - 39 上面， 所以不会影响 0 - 39 的等概率产生。
	然后余10加即可等概率得到0~9的数，加1即可得到1~10的数。

### 五）字符串
#### 1.整数化为二进制数
##### 写法1：结果作为局部函数返回值 

	#include<stdio.h>
	#include<string.h>
	#include<stdlib.h>
	
	char *Intostr(int data)
	{
		char *str,t;
		int i=0;
		str=(char *)malloc(8*sizeof(char));//必须这样写，才和返回类型相配
		memset(str,'0',8);
		while(data) 
		{
			str[i]=(char)(data%2+'0');
			data=data/2;
			i++;
		}
		while(i<=7)
		{
			str[i]='0';
			i++;
		}
		for(i=0;i<4;i++)
		{
			t=str[i];
			str[i]=str[7-i];
			str[7-i]=t;
		}
		return str;
	}
	void main()
	{
		int a,i;
		char *s;//这里分不分配存储空间都行，但一定要是指针，和局部函数返回的类型一致
	
		printf("请输入一个整数:");
		scanf("%d",&a);
		
	
		printf("化为二进制为：");
		s=Intostr(a);
		for(i=0;i<8;i++)
		{
			printf("%c",s[i]);
		}
	
		system("pause");
	}

##### 写法2：结果作为局部函数指针类型参数

		#include<stdio.h>
		#include<string.h>
		#include<stdlib.h>
		
		void Intostr(int data,char *str)
		{
			char t;
			int i=0;//对于参数str，不能再为其分配存储空间
			memset(str,'0',8);
			while(data) 
			{
				str[i]=(char)(data%2+'0');
				data=data/2;
				i++;
			}
			while(i<=7)
			{
				str[i]='0';
				i++;
			}
			for(i=0;i<4;i++)
			{
				t=str[i];
				str[i]=str[7-i];
				str[7-i]=t;
			}
			
		}
		void main()
		{
			int a,i;
			char s[8];
		
			printf("请输入一个整数:");
			scanf("%d",&a);
			
		
			printf("化为二进制为：");
			Intostr(a,s);
			for(i=0;i<8;i++)
			{
				printf("%c",s[i]);
			}
		
			system("pause");
		}
	
#### 2.将整数化为字符串
	
	#include<stdio.h>
	#include<string.h>
	#include<stdlib.h>
	#define N 10  //整数化为字符串，最大int型才65536,故字符串长度为10足矣
	
	void Intostr(int data,char *str)
	{
		char t;
		int i=0,n;//对于参数str，不能再为其分配存储空间
		memset(str,'0',N);
		while(data) 
		{
			str[i]=(char)(data%10+'0');
			data=data/10;
			i++;
		}
		
		n=i;//此时i就为字符串长度，记为n
		str[n]='\0';//截断字符串
		for(i=0;i<n/2;i++)//将该字符串数组反过来，即得到正确的值
		{
			t=str[i];
			str[i]=str[n-1-i];
			str[n-1-i]=t;
		}
		
	}
	void main()
	{
		int a,i;
		char s[N];
	
		printf("请输入一个整数:");
		scanf("%d",&a);
		
	
		printf("化为二进制为：");
		Intostr(a,s);
	
		puts(s);
		system("pause");
	}

#### 3.将字符串化为整数

	#include<stdio.h>
	#include<string.h>
	#include<stdlib.h>
	#define N 10  
	
	void Strtoin(char *str,long *data)
	{
		int i=0,l;
		long d=0;
	
		l=strlen(str);
		while(i<l)
		{
			d=d*10;
			d=d+(int)(str[i]-'0');
			i++;
		}
		*data=d;	
	}
	
	void main()
	{
		int i;
		char s[N];
		long data=0;
	
		printf("请输入一个字符串:");
		gets(s);
		
	
		printf("化为整数为：");
		Strtoin(s,&data);
	
		printf("%ld",data);
		system("pause");
	}

### 4.编程实现字符串的strcpy方法

	#include<stdio.h>
	#include<string.h>
	#include<stdlib.h>
	#define N 10  
	
	char *Mystrcpy(char *strDest,const char *strSrc)
	{
		int i=0;
		while(strSrc[i])
		{
			strDest[i]=strSrc[i];
			i++;
		}
		strDest[i]='\0';
		return strDest;
	}
	void main()
	{
		char strSrc[N],strDest[N],*rel;
		printf("请输入将被复制的源字符串:\n");
		gets(strSrc);
		printf("请输入赋值字符串的目的字符串:\n");
		gets(strDest);
		rel=Mystrcpy(strDest,strSrc);
	
	    puts(rel);
		puts(strDest);
		system("pause");
	
	}

#### 5.编程实现字符串循环右移n位

	#include<stdio.h>
	#include<string.h>
	#include<stdlib.h>
	#define N 10  
	
	void LoopMove(char *str,int n)
	{
		int l=strlen(str),i=n,j;
		char t;
		while(i)
		{
			j=l-1;
			t=str[j];
			while(j>=1)
			{
				str[j]=str[j-1];
				j--;
			}//最后j为0
			str[j]=t;
			i--;
		}
	}
	void main()
	{
		char str[N];
		int n;
		printf("请输入将被移位的字符串:\n");
		gets(str);
		printf("请输入循环右移的步数:\n");
		scanf("%d",&n);
	
		LoopMove(str,n);
		printf("循环右移后的字符串为:\n");
		puts(str);
	    
		system("pause");
	
	}

#### 6.给定一个字符串，求其最长的子字符串
思路：

若字符串为abcdefbcd，长度为l,则其最长子字符串为bcd。

使用两层循环：

- 外循环用i遍历，i>=0,i<l,依次取出字符串abcdefbcd,bcdefbcd,cdefbcd……d,即取(l-1)次，每次取出原字符串的第i最后的字符。

- 内循环用j遍历，j>=i+1,j<l。若外层是abcdefbcd，则内层就依次取出bcdefbcd,cdefbcd...;即每次取出原字符串的第（i+j)到最后的字符。那样每次外循环就可以和后面的字符串比较l-i-1次。每次比较前驱字符，遇到相等的字符就存入r字符串，直到不相等，这时候记下相同的子串位数；下一个比较如果位数比较大，就取而代之。

		#include<stdio.h>
		#include<stdlib.h>
		#include<string.h>
		#define max 100
		
		void Findsubstr(char *str,char *sub,int *n)
		{
			int l=strlen(str);
			int i,j,k1,k2,num=0;
			char *t=(char *)malloc(l);
			char *s=(char *)malloc(l);
			char *r=(char *)malloc(l);
		
			char *p=str;
		
			
			for(i=0;i<l;i++)
			{
				memcpy(t,p+i,l-i);
				for(j=i+1;j<l;j++)
				{
					memcpy(s,p+j,l-j);
					k1=0;
					k2=0;
					while(t[k1]==s[k2]&&k2<l-j&&k1<l-i)
					{
						r[k1]=t[k1];
						k1++;
						k2++;
					}
					if(k1>num)
					{
						num=k1;
						r[k1]='\0';
						memcpy(sub,r,k1+1);
					}
				}
			}
			*n=num;
		}
		
		void main()
		{
			char a[max],substr[max/2];
			int n;
			puts("请输入一个字符串:\n");
			gets(a);
		
			Findsubstr(a,substr,&n);
			puts(substr);
			printf("\n%d",n);
			system("pause");
		
		}

#### 第二次写

	#include<stdio.h>
	#include<stdlib.h>
	#include<string.h>
	#define max 100
	
	void Findmaxsub(char *str,char *substr)
	{
		int l=strlen(str);
		char *s=(char *)malloc(l);
		char *t=(char *)malloc(l);
		
	
		int i,j,h,n=0;
	
		for(i=0;i<=l-1;i++)
		{
			memcpy(s,str+i,l-i);//一次比较中的前一个子串
			for(j=i+1;j<=l-1;j++)
			{
				memcpy(t,str+j,l-j);//一次比较中的后一个子串
				h=0;
				while(s[h]==t[h]&&h<l-j)
				{
					h++;
				}
				if(h>n)
				{
					n=h;
					memcpy(substr,s,n);
				}
			}
	
		}
	
		substr[n]='\0';
	}
	
	void main()
	{
		char str[max],substr[max/2];
		printf("请输入字符串:\n");
		gets(str);
		Findmaxsub(str,substr);
		printf("最长的重复子串为:\n");
		puts(substr);
	
		system("pause");
	}


### 7.请写一个函数模拟C++的strstr()函数，把主串中子串及子串以后的字符全部返回。如strstr("12345678","234")，即返回"2345678“

思路：

依次从主串的第1，2，3....个字符开始作为比较字符串和子串比较。依次将比较字符串和子串的对应序号的字符比较，如果可以全部相同则找到该子串，返回该子串和其后面的字符。

	#include<stdio.h>
	#include<stdlib.h>
	#include<string.h>
	#define max 100
	
	char *Mystrstr(char *str,char *substr)
	{
		int l=strlen(str);
		int lsub=strlen(substr);
		char *rel=(char *)malloc(l);
		int i,j,k;
		for(i=0;i<l;i++)
		{
			k=i;
			j=0;
			while(str[k]==substr[j]&&j<lsub)
			{
				k++;
				j++;
			}
			if(j==lsub)
			{
				memcpy(rel,&str[i],l-i);
				rel[l-i]='\0';
				return rel;
			}
		}
	}
	
	void main()
	{
		char str[max],substr[max];
		int n;
		char *mystrstr;
		puts("请输入一个字符串:\n");
		gets(str);
		puts("请输入子串:\n");
		gets(substr);
	
		mystrstr=Mystrstr(str,substr);
		puts(mystrstr);
	
		system("pause");
	}

### 8.求一个字符串中连续出现次数最多的子串。

	#include<stdio.h>
	#include<stdlib.h>
	#include<string.h>
	#define max 100
	
	char *Mostsub(char *str)
	{
		int l=strlen(str);
		int i,j,k,h,n,num=1;
		char *s=(char *)malloc(l);
		char *r=(char *)malloc(l);
		char *p=str;
		for(i=0;i<l;i++)// i记录子串从主原串哪个字符开始取，如原串abcbcbcabc，则子串分别从a、b、c、b开始取
		{
			for(j=1;j<=(l-i)/2;j++)//j记录从某个字符开始取的位数。因为重复次数要想最多，那至少为2，所以子串长度最多取剩余长度的一半
			{
				memcpy(s,p+i,j);
				k=0;
				h=i+j;
				n=1;//记录连续子串个数，初始为1
				while(h<l&&s[k]==str[h])
				{
					k++;
					h++;
					if(k==j)//下一个子串和该子串相同，再往下比较，连续子串个数加1
					{
						k=0;
						n++;
					}
				}
				if(n>num)
				{
					num=n;
					s[j]='\0';
					memcpy(r,s,j+1);//或strcpy(r,s)
				}
	
			}
		}
		return r;
	}
	
	void main()
	{
		char str[max];
		char *mostsub;
		puts("请输入一个字符串:\n");
		gets(str);
	
	
		mostsub=Mostsub(str);
		puts(mostsub);
	
		system("pause");
	
	
	}