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