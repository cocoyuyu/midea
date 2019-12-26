// 选项卡切换
$('.q_left .tab').click(function (){
    var index = $(this).index();//  点击元素的索引
    $(this).addClass('active').siblings().removeClass('active');
    $('.q_right div').eq(index).addClass('show').siblings().removeClass('show');
})

$('.q_left .tab').mouseenter(function (){
    var index = $(this).index();//  点击元素的索引
     $(this).addClass('tab-bg').siblings().removeClass('tab-bg')
})