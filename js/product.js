
// 规格选择
$('.guige').on('click','span',function(){
    console.log('测试')
    var index = $(this).index(); //点击元素的索引
    $(this).addClass('active').siblings().removeClass('active');
})

// 加入购物车
$('.addCart-btn').on('click',function(){
    alert('商品成功加入购物车！快去剁手吧！')
})
