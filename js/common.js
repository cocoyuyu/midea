// 头部底部引用
  $('.header').load('./header.html');
  $('.footer').load('./footer.html');


  // 购物车
  $('.header').on('mouseover','.y-gwc',function(){
    $('.y-NavDown').show()
  });
  $('.header').on('mouseout','.y-gwc',function(){
    $('.y-NavDown').hide()
  });


// 二维码
  $('.header').on('mouseover','.y-gzw',function(){
    $('.y-ewm').show()
  });
  $('.header').on('mouseout','.y-gzw',function(){
    $('.y-ewm').hide()
  });


// 登录
  $('.header').on('mouseover','.y-dws',function(){
    $('.y-denglu').show()
  });
  $('.header').on('mouseout','.y-dws',function(){
    $('.y-denglu').hide()
  });


  // 搜索
  $('.header').on('mouseover','.search-y',function(){
    $('.y-search').slideDown(400)
  });


// 滑动固定导航
  $(window).scroll(function(){
     if($(window).scrollTop() >= 200){
    $(".y-nav").addClass('cur');
     } else{
    $(".y-nav").removeClass('cur');
    }
  });

// 在线客服 YangFangLing 2019年12月23日 
$('.kf-mobile, .kf-weChat, .online-service').hover(function(){
  $(this).children('div').stop().show().animate({right:'70px',opacity:1}, 400);
},function(){
  $(this).children('div').stop().animate({right:'90px',opacity:0}, 400,function(){$(this).hide()});
})

//返回顶部
var yWin = $(window).scrollTop();
var isShow = true;
$(window).scroll(function(){
  yWin = $(window).scrollTop();
  console.log(yWin);
  if(yWin > 500){
      if(isShow){
          isShow = false;
          $('#yBackTop').show().animate({left:'0'}, 400);
      } 
  }
  if(yWin < 500){
      if(!isShow){
          isShow = true;
          $('#yBackTop').animate({left:'55px'}, 400,function(){$(this).hide();});
      }
      
  }
})
$('#yBackTop').on('click',function(){
  $('html,body').animate({'scrollTop':0}, 800);
})