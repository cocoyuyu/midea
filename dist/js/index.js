"use strict";for(var timer1,left=document.querySelector(".left"),right=document.querySelector(".right"),imgs=document.querySelector(".imgs"),nums=document.querySelector(".num"),index=0,datas=["img/banner01.jpg","img/banner02.jpg","img/banner03.jpg","img/banner04.jpg"],i=0,len=datas.length;i<len;i++)imgs.innerHTML+='<img src="'.concat(datas[i],'" alt="">'),nums.innerHTML+="<span></span>";var img=document.querySelectorAll(".imgs img"),num=document.querySelectorAll(".num span");function autoMove(){timer1=setInterval(function(){initState(),++index>=img.length&&(index=0),active(),move(img[index],100)},3e3)}img[0].style.zIndex=10,num[0].className="active",move(img[index],100),autoMove();for(i=0,len=num.length;i<len;i++)num[i].ind=i,num[i].onclick=function(){clearInterval(timer1),initState(),index=this.ind,active(),move(img[index],100),autoMove()};function initState(){img[index].style.opacity=.1,img[index].style.zIndex=1,num[index].className=""}function active(){img[index].style.zIndex=10,num[index].className="active"}function move(e,n){e.opa=10,clearInterval(e.timer),e.timer=setInterval(function(){if(n>e.opa)var i=4;else i=-4;Math.abs(n-e.opa)<=Math.abs(i)?(clearInterval(e.timer),e.style.opacity=n/100,e.style.filter="alpha(opacity:"+n+")"):(e.opa+=i,e.style.opacity=e.opa/100,e.style.filter="alpha(opacity:"+e.opa+")")},30)}left.onclick=function(){clearInterval(timer1),initState(),--index<0&&(index=img.length-1),active(),move(img[index],100),autoMove()},right.onclick=function(){clearInterval(timer1),initState(),++index>=img.length&&(index=0),active(),move(img[index],100),autoMove()},$(".header").load("./header.html"),$(".footer").load("./footer.html"),$(".y-DownNav dl").on("mouseover",function(){$(this).find(".y-EnDown").show(),$(this).siblings().find(".y-EnDown").hide()}),$(".y-DownNav dl").on("mouseout",function(){$(this).find(".y-EnDown").hide(),$(this).siblings().find(".y-EnDown").hide()}),$(".kf-mobile, .kf-weChat, .online-service").hover(function(){$(this).children("div").stop().show().animate({right:"70px",opacity:1},400)},function(){$(this).children("div").stop().animate({right:"90px",opacity:0},400,function(){$(this).hide()})});var yWin=$(window).scrollTop(),isShow=!0;$(window).scroll(function(){yWin=$(window).scrollTop(),console.log(yWin),500<yWin&&isShow&&(isShow=!1,$("#yBackTop").show().animate({left:"0"},400)),yWin<500&&(isShow||(isShow=!0,$("#yBackTop").animate({left:"55px"},400,function(){$(this).hide()})))}),$("#yBackTop").on("click",function(){$("html,body").animate({scrollTop:0},800)});