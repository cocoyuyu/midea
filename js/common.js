$(function(){
    $('.y-gwc').on('mouseover',function(){
      $('.y-NavDown').show()
    });
    $('.y-gwc').on('mouseout',function(){
      $('.y-NavDown').hide()
    });
})


$(function(){
    $('.y-gzw').on('mouseover',function(){
      $('.y-ewm').show()
    });
    $('.y-gzw').on('mouseout',function(){
      $('.y-ewm').hide()
    });
})


$(function(){
    $('.y-dws').on('mouseover',function(){
      $('.y-denglu').show()
    });
    $('.y-dws').on('mouseout',function(){
      $('.y-denglu').hide()
    });
})

$('.search-y').mouseover(function(){
    $('.y-search').slideDown(400);
})


$(window).scroll(function(){
  if($(window).scrollTop() >= 200){
  $(".y-nav").addClass('cur');
  } else{
  $(".y-nav").removeClass('cur');
  }
});