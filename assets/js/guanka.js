
function g1()//第一关
{
	clear()
		//人物
	var ren=document.createElement("img")
	ren.style.position="absolute"//绝对定位。元素将按照包含它的元素的位置进行调整，比如它嵌套在另一个绝对定位的元素中，那么就相对于那个元素定位。
	ren.src="imgs/ren1.gif"
	document.body.appendChild(ren)//添加人
	ren.style.left=10+50*8+"px"//层次+位置
	ren.style.top=10+50*8+"px"
	ren.id="rw"
	
	 bianjie=new Array()//储存边界
	 dian=new Array()//储存点
	 xiangzi=new Array()//储存箱子
	 renwu=document.getElementById("rw")
	for(a=0;a<10;a++)//产生边界 y
	{
		for(b=0;b<10;b++)  //x
		{
			if(a==0||a==9||b==0||b==9)//a为y,b为x
			{
				var bj=document.createElement("img")//css属性
				bj.style.position="absolute"
				bj.style.top=10+50*a+"px"
				bj.style.left=10+50*b+"px"
				bj.src="imgs/qiang.png"
				document.body.appendChild(bj)
				bianjie.push(bj)
			}
		}
	}
	//
	for(a=0;a<10;a++)//产生点
	{
		for(b=0;b<10;b++)
		{
			if((a==2&&b==2)||(a==2&&b==3))
			{
				var di=document.createElement("img")
				di.style.position="absolute"
				di.style.top=10+50*a+"px"
				di.style.left=10+50*b+"px"
				di.src="imgs/点.png"
				document.body.appendChild(di)
				dian.push(di)
			}
		}
	}
	//
	for(a=0;a<10;a++)//产生箱子
	{
		for(b=0;b<10;b++)
		{
			if((a==5&&b==2)||(a==5&&b==3))
			{
				var xz=document.createElement("img")
				xz.style.position="absolute"
				xz.style.top=10+50*a+"px"
				xz.style.left=10+50*b+"px"
				xz.src="imgs/xiang.gif"
				xz.style.zIndex="10"
				document.body.appendChild(xz)
				xiangzi.push(xz)
			}
		}
	}

	
}//g1()结束
/////





function g2()//第二关
{
	clear()
		//人物
	var ren=document.createElement("img")
	ren.style.position="absolute"//绝对定位。元素将按照包含它的元素的位置进行调整，比如它嵌套在另一个绝对定位的元素中，那么就相对于那个元素定位。
	ren.src="imgs/ren1.gif"
	document.body.appendChild(ren)//添加人
	ren.style.left=10+50*8+"px"//层次+位置
	ren.style.top=10+50*8+"px"
	ren.id="rw"
	
	 bianjie=new Array()//储存边界
	 dian=new Array()//储存点
	 xiangzi=new Array()//储存箱子
	 renwu=document.getElementById("rw")
	for(a=0;a<10;a++)//产生边界 y
	{
		for(b=0;b<10;b++)  //x
		{
			if(a==0||a==9||b==0||b==9||(a==4&&b<3)||(a==7&&b>2)||(7>a&&a>3&&b==4)||
			(a<5&&b==1)||(a==1||a==3&&b==2)||(a<7&&b>4))//a为y,b为x
			{
				var bj=document.createElement("img")//css属性
				bj.style.position="absolute"
				bj.style.top=10+50*a+"px"
				bj.style.left=10+50*b+"px"
				bj.src="imgs/qiang.png"
				document.body.appendChild(bj)
				bianjie.push(bj)
			}
		}
	}
	//
	for(a=0;a<10;a++)//产生点
	{
		for(b=0;b<10;b++)
		{
			if((a==2&&b==2)||(a==2&&b==3))
			{
				var di=document.createElement("img")
				di.style.position="absolute"
				di.style.top=10+50*a+"px"
				di.style.left=10+50*b+"px"
				di.src="imgs/点.png"
				document.body.appendChild(di)
				dian.push(di)
			}
		}
	}
	//
	for(a=0;a<10;a++)//产生箱子
	{
		for(b=0;b<10;b++)
		{
			if((a==5&&b==2)||(a==7&&b==2))
			{
				var xz=document.createElement("img")
				xz.style.position="absolute"
				xz.style.top=10+50*a+"px"
				xz.style.left=10+50*b+"px"
				xz.src="imgs/xiang.gif"
				xz.style.zIndex="10"
				document.body.appendChild(xz)
				xiangzi.push(xz)
			}
		}
	}

	
}//g2()结束
/////


function g3()//第三关
{
	clear()
		//人物
	var ren=document.createElement("img")
	ren.style.position="absolute"//绝对定位。元素将按照包含它的元素的位置进行调整，比如它嵌套在另一个绝对定位的元素中，那么就相对于那个元素定位。
	ren.src="imgs/ren1.gif"
	document.body.appendChild(ren)//添加人
	ren.style.left=10+50*5+"px"//层次+位置
	ren.style.top=10+50*4+"px"
	ren.id="rw"
	
	 bianjie=new Array()//储存边界
	 dian=new Array()//储存点
	 xiangzi=new Array()//储存箱子
	 renwu=document.getElementById("rw")
	for(a=0;a<10;a++)//产生边界 y
	{
		for(b=0;b<10;b++)  //x
		{
			if(a==0||a==9||b==0||b==9||(a>3&&b==1)||(a>2&&a<5&&b==2)||(a>6&&b==2)||(a>6&&b==3)||(a>2&&a<5&&b==4)||(a>5&&b==4)||(a==2&&b==5)||(a>5&&b==5)||(a>3&&b==6)||(b>6))//a为y,b为x
			{
				var bj=document.createElement("img")//css属性
				bj.style.position="absolute"
				bj.style.top=10+50*a+"px"
				bj.style.left=10+50*b+"px"
				bj.src="imgs/qiang.png"
				document.body.appendChild(bj)
				bianjie.push(bj)
			}
		}
	}
	//
	for(a=0;a<10;a++)//产生点
	{
		for(b=0;b<10;b++)
		{
			if((a==1&&b==1)||(a==2&&b==1)||(a==3&&b==1))
			{
				var di=document.createElement("img")
				di.style.position="absolute"
				di.style.top=10+50*a+"px"
				di.style.left=10+50*b+"px"
				di.src="imgs/点.png"
				document.body.appendChild(di)
				dian.push(di)
			}
		}
	}
	//
	for(a=0;a<10;a++)//产生箱子
	{
		for(b=0;b<10;b++)
		{
			if((a==2&&b==2)||(a==3&&b==3)||(a==1&&b==5))
			{
				var xz=document.createElement("img")
				xz.style.position="absolute"
				xz.style.top=10+50*a+"px"
				xz.style.left=10+50*b+"px"
				xz.src="imgs/xiang.gif"
				xz.style.zIndex="10"
				document.body.appendChild(xz)
				xiangzi.push(xz)
			}
		}
	}

	
}//g3()结束
/////



function g4()//第四关
{
	clear()
		//人物
	var ren=document.createElement("img")
	ren.style.position="absolute"//绝对定位。元素将按照包含它的元素的位置进行调整，比如它嵌套在另一个绝对定位的元素中，那么就相对于那个元素定位。
	ren.src="imgs/ren1.gif"
	document.body.appendChild(ren)//添加人
	ren.style.left=10+50*4+"px"//层次+位置
	ren.style.top=10+50*4+"px"
	ren.id="rw"
	
	 bianjie=new Array()//储存边界
	 dian=new Array()//储存点
	 xiangzi=new Array()//储存箱子
	 renwu=document.getElementById("rw")
	for(a=0;a<10;a++)//产生边界 y
	{
		for(b=0;b<10;b++)  //x
		{
			if(a==0||a==9||b==0||b==9||(a>2&&b==1)||(a==3&&b==3)||(a>5)||(b>5)||(a==1&&b==5))//a为y,b为x
			{
				var bj=document.createElement("img")//css属性
				bj.style.position="absolute"
				bj.style.top=10+50*a+"px"
				bj.style.left=10+50*b+"px"
				bj.src="imgs/qiang.png"
				document.body.appendChild(bj)
				bianjie.push(bj)
			}
		}
	}
	//
	for(a=0;a<10;a++)//产生点
	{
		for(b=0;b<10;b++)
		{
			if((a==3&&b==4)||(a==4&&b==5)||(a==5&&b==5))
			{
				var di=document.createElement("img")
				di.style.position="absolute"
				di.style.top=10+50*a+"px"
				di.style.left=10+50*b+"px"
				di.src="imgs/点.png"
				document.body.appendChild(di)
				dian.push(di)
			}
		}
	}
	//
	for(a=0;a<10;a++)//产生箱子
	{
		for(b=0;b<10;b++)
		{
			if((a==2&&b==3)||(a==3&&b==2)||(a==4&&b==3))
			{
				var xz=document.createElement("img")
				xz.style.position="absolute"
				xz.style.top=10+50*a+"px"
				xz.style.left=10+50*b+"px"
				xz.src="imgs/xiang.gif"
				xz.style.zIndex="10"
				document.body.appendChild(xz)
				xiangzi.push(xz)
			}
		}
	}

	
}//g4()结束
/////





function g5()//第五关
{
	clear()
		//人物
	var ren=document.createElement("img")
	ren.style.position="absolute"//绝对定位。元素将按照包含它的元素的位置进行调整，比如它嵌套在另一个绝对定位的元素中，那么就相对于那个元素定位。
	ren.src="imgs/ren1.gif"
	document.body.appendChild(ren)//添加人
	ren.style.left=10+50*4+"px"//层次+位置
	ren.style.top=10+50*2+"px"
	ren.id="rw"
	
	 bianjie=new Array()//储存边界
	 dian=new Array()//储存点
	 xiangzi=new Array()//储存箱子
	 renwu=document.getElementById("rw")
	for(a=0;a<10;a++)//产生边界 y
	{
		for(b=0;b<10;b++)  //x
		{
			if(a==0||a==9||b==0||b==9||(a>4&&b==1)||(a>6||b>4)||(a>4&&b>3)||(a==1&&b==4))//a为y,b为x
			{
				var bj=document.createElement("img")//css属性
				bj.style.position="absolute"
				bj.style.top=10+50*a+"px"
				bj.style.left=10+50*b+"px"
				bj.src="imgs/qiang.png"
				document.body.appendChild(bj)
				bianjie.push(bj)
			}
		}
	}
	//
	for(a=0;a<10;a++)//产生点
	{
		for(b=0;b<10;b++)
		{
			if((a==2&&b==1)||(a==2&&b==3)||(a==4&&b==3)||(a==4&&b==1))
			{
				var di=document.createElement("img")
				di.style.position="absolute"
				di.style.top=10+50*a+"px"
				di.style.left=10+50*b+"px"
				di.src="imgs/点.png"
				document.body.appendChild(di)
				dian.push(di)
			}
		}
	}
	//
	for(a=0;a<10;a++)//产生箱子
	{
		for(b=0;b<10;b++)
		{
			if((a==3&&b==1)||(a==3&&b==3)||(a==2&&b==2)||(a==4&&b==2))
			{
				var xz=document.createElement("img")
				xz.style.position="absolute"
				xz.style.top=10+50*a+"px"
				xz.style.left=10+50*b+"px"
				xz.src="imgs/xiang.gif"
				xz.style.zIndex="10"
				document.body.appendChild(xz)
				xiangzi.push(xz)
			}
		}
	}

	
}//g5()结束
/////


function g6()//第六关
{
	clear()
		//人物
	var ren=document.createElement("img")
	ren.style.position="absolute"//绝对定位。元素将按照包含它的元素的位置进行调整，比如它嵌套在另一个绝对定位的元素中，那么就相对于那个元素定位。
	ren.src="imgs/ren1.gif"
	document.body.appendChild(ren)//添加人
	ren.style.left=10+50*1+"px"//层次+位置
	ren.style.top=10+50*1+"px"
	ren.id="rw"
	
	 bianjie=new Array()//储存边界
	 dian=new Array()//储存点
	 xiangzi=new Array()//储存箱子
	 renwu=document.getElementById("rw")
	for(a=0;a<10;a++)//产生边界 y
	{
		for(b=0;b<10;b++)  //x
		{
			if(a==0||a==9||b==0||b==9||(a>6||b>7)||(a==3&&b<6)||(a==1&&b==3)||(a==4&&b==3)||(a==6&&b==5))//a为y,b为x
			{
				var bj=document.createElement("img")//css属性
				bj.style.position="absolute"
				bj.style.top=10+50*a+"px"
				bj.style.left=10+50*b+"px"
				bj.src="imgs/qiang.png"
				document.body.appendChild(bj)
				bianjie.push(bj)
			}
		}
	}
	//
	for(a=0;a<10;a++)//产生点
	{
		for(b=0;b<10;b++)
		{
			if((a==1&&b==4)||(a==4&&b==2)||(a==4&&b==4)||(a==4&&b==5)||(a==6&&b==1)||(a==6&&b==4))
			{
				var di=document.createElement("img")
				di.style.position="absolute"
				di.style.top=10+50*a+"px"
				di.style.left=10+50*b+"px"
				di.src="imgs/点.png"
				document.body.appendChild(di)
				dian.push(di)
			}
		}
	}
	//
	for(a=0;a<10;a++)//产生箱子
	{
		for(b=0;b<10;b++)
		{
			if((a==2&&b==2)||(a==2&&b==6)||(a==4&&b==6)||(a==5&&b==6)||(a==5&&b==2)||(a==5&&b==4))
			{
				var xz=document.createElement("img")
				xz.style.position="absolute"
				xz.style.top=10+50*a+"px"
				xz.style.left=10+50*b+"px"
				xz.src="imgs/xiang.gif"
				xz.style.zIndex="10"
				document.body.appendChild(xz)
				xiangzi.push(xz)
			}
		}
	}

	
}//g6()结束
/////
