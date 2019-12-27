$('.guige').on('click','span',function(){
    console.log('测试')
    var index = $(this).index(); //点击元素的索引
    $(this).addClass('active').siblings().removeClass('active');
})