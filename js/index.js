var left = document.querySelector('.left');
var right = document.querySelector('.right');
var imgs = document.querySelector('.imgs');
var nums = document.querySelector('.num');
var index = 0;//当前显示图片的下标
var timer1;

// 动态数据
var datas = ['img/banner01.jpg','img/banner02.jpg','img/banner03.jpg','img/banner04.jpg'];

// 动态渲染数据
for (var i = 0, len = datas.length; i < len; i++){
    imgs.innerHTML += `<img src="${datas[i]}" alt="">`;
    nums.innerHTML += `<span></span>`;
}

var img = document.querySelectorAll('.imgs img');
var num = document.querySelectorAll('.num span');

// 初始样式
img[0].style.zIndex = 10;
num[0].className = 'active';

// 进入页面执行
move(img[index],100);//显示第一张图片
autoMove();//自动播放

//自动播放
function autoMove(){
    timer1 = setInterval(function (){
        initState();
        index++;
        if (index >= img.length) {
            index = 0;
        }
        active();
        move(img[index],100);//透明切换
    },3000);
}

// 点击数字切换图片
for (var i = 0, len = num.length; i < len; i++){
    num[i].ind = i;//给每一个元素添加一个属性，保存自己的下标
    num[i].onclick = function (){
        clearInterval(timer1);//停止自动播放
        initState();
        index = this.ind;//同步下标
        active();
        move(img[index],100);
        autoMove();//自动播放
    }
}

// 点击左边按钮
left.onclick = function (){
    clearInterval(timer1);//停止自动播放
    initState();
    index--;
    if (index < 0) {
        index = img.length - 1;//最后一张
    }
    active();
    move(img[index],100);
    autoMove();//自动播放
}

// 点击右边按钮
right.onclick = function (){
    clearInterval(timer1);//停止自动播放
    initState();
    index++;
    if (index >= img.length) {
        index = 0;
    }
    active();
    move(img[index],100);
    autoMove();//自动播放
}

function initState(){
    img[index].style.opacity = 0.1;//透明度恢复初始状态
    img[index].style.zIndex = 1;//层级恢复初始状态
    num[index].className = '';//去掉数字样式
}

function active(){
    img[index].style.zIndex = 10;//提高当前显示图片的层级
    num[index].className = 'active';//添加数字样式
}

function move(dom,target){
    dom.opa = 10;
    clearInterval(dom.timer);
    dom.timer = setInterval(() => {
        if (target > dom.opa) {
            var speed = 4;//透明度递增
        } else {
            var speed = -4;//透明度递减
        }
        // 剩余可运动量 <= 每次所走的量
        if (Math.abs(target - dom.opa) <= Math.abs(speed)) {
            clearInterval(dom.timer);//结束运动
            dom.style.opacity = target/100;//到达终点
            dom.style.filter = 'alpha(opacity:'+target+')';//IE678
        } else {
            dom.opa += speed;
            dom.style.opacity = dom.opa/100;
            dom.style.filter = 'alpha(opacity:'+dom.opa+')';//IE678
        }
    }, 30);
}