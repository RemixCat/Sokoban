// JavaScript Document
function clear()
{
	var imgs=document.getElementsByTagName("img")//传回指定名称
	while(imgs.length>0)	
	{
	document.body.removeChild(imgs[0])//删除节点

	}
}



document.onkeyup=function(event)//键盘输入
{
	event=event||window.event
	switch(event.keyCode)
	{
		//左
		case 37:
		renwu.src="imgs/ren1.gif"
		left()
		break
		//上
		case 38:
		renwu.src="imgs/ren4.gif"
		up()
		break
		//右
		case 39:
		renwu.src="imgs/ren2.gif"
		right()
		break
		//下
		case 40:
		renwu.src="imgs/ren3.gif"
		down()
		break
		//重置
		case 13:
		window.location.reload()
		break
	}
}

/////////////判断部分
//判断移动后是否是边界
//判断移动后是否是箱子
//判断箱子移动后是否是边界
////////////////箱子移动后是否是其他箱子！！！！
//判断箱子是否和点重合
//判断箱子是否全部和点重合
//移动		renwu.style.left=parseInt(renwu.style.left)-50+"px"
//			break
function left()
{
	offleft=true//开关为开
	for(a=0;a<bianjie.length;a++)
	{//判断移动后是否是边界
		if(bianjie[a].style.top==renwu.style.top&&bianjie[a].style.left==parseInt(renwu.style.left)-50+"px")
		{//是边界不做动作
			offleft=false//开关开掉
				renwu.src="imgs/z1.gif"
				break
		}
	}
	//开关：
	//true：不是边界继续运行
	//false：是边界不做动作
	if(offleft==true)
	{//开关打开继续运行
		for(b=0;b<xiangzi.length;b++)
		{//判断移动后是否是箱子
			if(xiangzi[b].style.top==renwu.style.top&&xiangzi[b].style.left==parseInt(renwu.style.left)-50+"px")
			{//移动后是箱子
				offleft=false//开关关 
				renwu.src="imgs/z1.gif"
				break
			}
		}
	}
	else
	{
		return
	}
	//开关：false：移动后是箱子
	//true：不是箱子 正常移动
	if(offleft==true)
	{
		renwu.style.left=parseInt(renwu.style.left)-50+"px"
		return
	}
	else
	{
		for(c=0;c<bianjie.length;c++)
		{//判断箱子后是否是边界
			if(bianjie[c].style.top==renwu.style.top&&bianjie[c].style.left==parseInt(renwu.style.left)-100+"px")
			{//是边界不做动作
				offleft=true
			}
		}
		for(c=0;c<xiangzi.length;c++)
		{//判断箱子后是否是箱子
			if(xiangzi[c].style.top==renwu.style.top&&xiangzi[c].style.left==parseInt(renwu.style.left)-100+"px")
			{//是箱子不做动作
				offleft=true
			}

		}

	}
	//开关：
	//false：箱子后不是边界 人物箱子动
	//true：箱子后是边界不做动作
	if(offleft==true)
	{
		return
	}
	else
	{//false：箱子后不是边界 人物箱子动
		renwu.style.left=parseInt(renwu.style.left)-50+"px"
		for(d=0;d<xiangzi.length;d++)
		{//找到移动后是哪个箱子
			if(xiangzi[d].style.top==renwu.style.top&&xiangzi[d].style.left==renwu.style.left)
			{//移动箱子
				xiangzi[d].style.left=parseInt(xiangzi[d].style.left)-50+"px"
			}
		}
	}
	//开关：
	//false：箱子后不是边界 人物箱子动 判断箱子和点的关系
	for(d=0;d<dian.length;d++)
	{
		if(dian[d].style.top==renwu.style.top&&dian[d].style.left==parseInt(renwu.style.left)-50+"px")
		{//箱子和点重合
			offleft=true
			break
		}
	}
	//true//箱子和点重合
	//false箱子和点不重合
	if(offleft==true)
	{
		for(c=0;c<xiangzi.length;c++)
		{
			if(xiangzi[c].style.top==renwu.style.top&&xiangzi[c].style.left==parseInt(renwu.style.left)-50+"px")
			{
				xiangzi[c].src="imgs/duidian.png"
				break
			}
		}
	}
	else
	{
		for(c=0;c<xiangzi.length;c++)
		{
			if(xiangzi[c].style.top==renwu.style.top&&xiangzi[c].style.left==parseInt(renwu.style.left)-50+"px")
			{
				xiangzi[c].src="imgs/xiang.png"
				break
			}
		}
	}
	gc()
}//left()结束





function up()
{
	offleft=true//开关为开
	for(a=0;a<bianjie.length;a++)
	{//判断移动后是否是边界
		if(bianjie[a].style.left==renwu.style.left&&bianjie[a].style.top==parseInt(renwu.style.top)-50+"px")
		{//是边界不做动作
			offleft=false//开关开掉
				renwu.src="imgs/z2.gif"
				break
		}
	}
	//开关：
	//true：不是边界继续运行
	//false：是边界不做动作
	if(offleft==true)
	{//开关打开继续运行
		for(b=0;b<xiangzi.length;b++)
		{//判断移动后是否是箱子
			if(xiangzi[b].style.left==renwu.style.left&&xiangzi[b].style.top==parseInt(renwu.style.top)-50+"px")
			{//移动后是箱子
				offleft=false//开关关 
				renwu.src="imgs/z2.gif"
				break
			}
		}
	}
	else
	{
		return
	}
	//开关：false：移动后是箱子
	//true：不是箱子 正常移动
	
	if(offleft==true)
	{
		renwu.style.top=parseInt(renwu.style.top)-50+"px"
		return
	}
	else
	{
		for(c=0;c<bianjie.length;c++)
		{//判断箱子移动后是否是边界
			if(bianjie[c].style.left==renwu.style.left&&bianjie[c].style.top==parseInt(renwu.style.top)-100+"px")
			{//是边界不做动作
				offleft=true
			}
		}
		for(c=0;c<xiangzi.length;c++)
		{//判断箱子后是否是箱子
			if(xiangzi[c].style.left==renwu.style.left&&xiangzi[c].style.top==parseInt(renwu.style.top)-100+"px")
			{//是箱子不做动作
				offleft=true
			}
		}
	}
	//开关：
	//true：箱子后不是边界 人物箱子动
	//false：箱子后是边界不做动作
	if(offleft==true)
	{
		return
	}
	else
	{
		renwu.style.top=parseInt(renwu.style.top)-50+"px"
		for(d=0;d<xiangzi.length;d++)
		{//找到移动后是哪个箱子
			if(xiangzi[d].style.top==renwu.style.top&&xiangzi[d].style.left==renwu.style.left)
			{//移动箱子
				xiangzi[d].style.top=parseInt(xiangzi[d].style.top)-50+"px"
			}
		}
	}
	//开关：
	//false：箱子后不是边界 人物箱子动 判断箱子和点的关系
	for(d=0;d<dian.length;d++)
	{
		if(dian[d].style.left==renwu.style.left&&dian[d].style.top==parseInt(renwu.style.top)-50+"px")
		{//箱子和点重合
			offleft=true
			break
		}
	}
	//true//箱子和点重合
	//false箱子和点不重合
	if(offleft==true)
	{
		for(c=0;c<xiangzi.length;c++)
		{
			if(xiangzi[c].style.left==renwu.style.left&&xiangzi[c].style.top==parseInt(renwu.style.top)-50+"px")
			{
				xiangzi[c].src="imgs/duidian.png"
				break
			}
		}
	}
	else
	{
		for(c=0;c<xiangzi.length;c++)
		{
			if(xiangzi[c].style.left==renwu.style.left&&xiangzi[c].style.top==parseInt(renwu.style.top)-50+"px")
			{
				xiangzi[c].src="imgs/xiang.png"
				break
			}
		}
	}
	gc()
}//top()结束







function right()
{
	offleft=true//开关为开
	for(a=0;a<bianjie.length;a++)
	{//判断移动后是否是边界
		if(bianjie[a].style.top==renwu.style.top&&bianjie[a].style.left==parseInt(renwu.style.left)+50+"px")
		{//是边界不做动作
			offleft=false//开关开掉
				renwu.src="imgs/z3.gif"
				break
		}
	}
	//开关：
	//true：不是边界继续运行
	//false：是边界不做动作
	if(offleft==true)
	{//开关打开继续运行
		for(b=0;b<xiangzi.length;b++)
		{//判断移动后是否是箱子
			if(xiangzi[b].style.top==renwu.style.top&&xiangzi[b].style.left==parseInt(renwu.style.left)+50+"px")
			{//移动后是箱子
				offleft=false//开关关 
				renwu.src="imgs/z3.gif"
				break
			}
		}
	}
	else
	{
		return
	}
	//开关：false：移动后是箱子
	//true：不是箱子 正常移动
	if(offleft==true)
	{
		renwu.style.left=parseInt(renwu.style.left)+50+"px"
		return
	}
	else
	{
		for(c=0;c<bianjie.length;c++)
		{//判断箱子后是否是边界
			if(bianjie[c].style.top==renwu.style.top&&bianjie[c].style.left==parseInt(renwu.style.left)+100+"px")
			{//是边界不做动作
				offleft=true
			}
		}
		for(c=0;c<xiangzi.length;c++)
		{//判断箱子后是否是箱子
			if(xiangzi[c].style.top==renwu.style.top&&xiangzi[c].style.left==parseInt(renwu.style.left)+100+"px")
			{//是箱子不做动作
				offleft=true
			}

		}

	}
	//开关：
	//false：箱子后不是边界 人物箱子动
	//true：箱子后是边界不做动作
	if(offleft==true)
	{
		return
	}
	else
	{//false：箱子后不是边界 人物箱子动
		renwu.style.left=parseInt(renwu.style.left)+50+"px"
		for(d=0;d<xiangzi.length;d++)
		{//找到移动后是哪个箱子
			if(xiangzi[d].style.top==renwu.style.top&&xiangzi[d].style.left==renwu.style.left)
			{//移动箱子
				xiangzi[d].style.left=parseInt(xiangzi[d].style.left)+50+"px"
			}
		}
	}
	//开关：
	//false：箱子后不是边界 人物箱子动 判断箱子和点的关系
	for(d=0;d<dian.length;d++)
	{
		if(dian[d].style.top==renwu.style.top&&dian[d].style.left==parseInt(renwu.style.left)+50+"px")
		{//箱子和点重合
			offleft=true
			break
		}
	}
	//true//箱子和点重合
	//false箱子和点不重合
	if(offleft==true)
	{
		for(c=0;c<xiangzi.length;c++)
		{
			if(xiangzi[c].style.top==renwu.style.top&&xiangzi[c].style.left==parseInt(renwu.style.left)+50+"px")
			{
				xiangzi[c].src="imgs/duidian.png"
				break
			}
		}
	}
	else
	{
		for(c=0;c<xiangzi.length;c++)
		{
			if(xiangzi[c].style.top==renwu.style.top&&xiangzi[c].style.left==parseInt(renwu.style.left)+50+"px")
			{
				xiangzi[c].src="imgs/xiang.png"
				break
			}
		}
	}
	gc()
}//right()结束





function down()
{
	offleft=true//开关为开
	for(a=0;a<bianjie.length;a++)
	{//判断移动后是否是边界
		if(bianjie[a].style.left==renwu.style.left&&bianjie[a].style.top==parseInt(renwu.style.top)+50+"px")
		{//是边界不做动作
			offleft=false//开关开掉
				renwu.src="imgs/z4.gif"
				break
		}
	}
	//开关：
	//true：不是边界继续运行
	//false：是边界不做动作
	if(offleft==true)
	{//开关打开继续运行
		for(b=0;b<xiangzi.length;b++)
		{//判断移动后是否是箱子
			if(xiangzi[b].style.left==renwu.style.left&&xiangzi[b].style.top==parseInt(renwu.style.top)+50+"px")
			{//移动后是箱子
				offleft=false//开关关 
				renwu.src="imgs/z4.gif"
				break
			}
		}
	}
	else
	{
		return
	}
	//开关：false：移动后是箱子
	//true：不是箱子 正常移动
	
	if(offleft==true)
	{
		renwu.style.top=parseInt(renwu.style.top)+50+"px"
		return
	}
	else
	{
		for(c=0;c<bianjie.length;c++)
		{//判断箱子移动后是否是边界
			if(bianjie[c].style.left==renwu.style.left&&bianjie[c].style.top==parseInt(renwu.style.top)+100+"px")
			{//是边界不做动作
				offleft=true
			}
		}
		for(c=0;c<xiangzi.length;c++)
		{//判断箱子后是否是箱子
			if(xiangzi[c].style.left==renwu.style.left&&xiangzi[c].style.top==parseInt(renwu.style.top)+100+"px")
			{//是箱子不做动作
				offleft=true
			}
		}
	}
	//开关：
	//true：箱子后不是边界 人物箱子动
	//false：箱子后是边界不做动作
	if(offleft==true)
	{
		return
	}
	else
	{
		renwu.style.top=parseInt(renwu.style.top)+50+"px"
		for(d=0;d<xiangzi.length;d++)
		{//找到移动后是哪个箱子
			if(xiangzi[d].style.top==renwu.style.top&&xiangzi[d].style.left==renwu.style.left)
			{//移动箱子
				xiangzi[d].style.top=parseInt(xiangzi[d].style.top)+50+"px"
			}
		}
	}
	//开关：
	//false：箱子后不是边界 人物箱子动 判断箱子和点的关系
	for(d=0;d<dian.length;d++)
	{
		if(dian[d].style.left==renwu.style.left&&dian[d].style.top==parseInt(renwu.style.top)+50+"px")
		{//箱子和点重合
			offleft=true
			break
		}
	}
	//true//箱子和点重合
	//false箱子和点不重合
	if(offleft==true)
	{
		for(c=0;c<xiangzi.length;c++)
		{
			if(xiangzi[c].style.left==renwu.style.left&&xiangzi[c].style.top==parseInt(renwu.style.top)+50+"px")
			{
				xiangzi[c].src="imgs/duidian.png"
				break
			}
		}
	}
	else
	{
		for(c=0;c<xiangzi.length;c++)
		{
			if(xiangzi[c].style.left==renwu.style.left&&xiangzi[c].style.top==parseInt(renwu.style.top)+50+"px")
			{
				xiangzi[c].src="imgs/xiang.png"
				break
			}
		}
	}
	gc()
}//down()结束




function gc(){
	x=0
	for(a=0;a<dian.length;a++)
	{
		for(b=0;b<xiangzi.length;b++)
		{
			if(dian[a].style.top==xiangzi[b].style.top&&dian[a].style.left==xiangzi[b].style.left)
			{
				x++
			}
		}
	}
	if(x==dian.length)
	{
	stopclock()
	alert("哎呦~！过关了！好厉害哦！用时为"+t)
	}
}



var se,m=0,h=0,s=0,ss=1;  
function second(){  
if((ss%100)==0){s+=1;ss=1;}  
if(s>0 && (s%60)==0){m+=1;s=0;}  
if(m>0 && (m%60)==0){h+=1;m=0;}  
t=h+"时"+m+"分"+s+"秒"+ss+"毫秒";  //时分秒运算
document.getElementById("showtime").value=t;   //这有一个给id为showtime的input赋值的语句，可以实现动态计时。
ss+=1;  
}  
function startclock(){se=setInterval("second()",1);}  //这个函数是要放到按钮的click事件上的
function pauseclock(){clearInterval(se);}    //这个函数是要放到按钮的click事件上的
function stopclock(){clearInterval(se);ss=1;m=h=s=0;}    //这个函数是要放到按钮的click事件上的