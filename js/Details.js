// 点击展开/收起
var ul02 = document.querySelector('.y-ul02');
var cate_cell = document.querySelector('.cate_cell');

$('.cate_cell').toggle(function (){
    ul02.style.display = 'block';
},function (){
    ul02.style.display = 'none';
});
$('cate_cell').toggle();

// 相关产品
$('.y-xgcpNav h3').each(function (index,item){
    $(item).click(function (){
        $(this).addClass('active').siblings().removeClass('active');
        $('.y-xgcpList .y-navss').eq(index).addClass('show').siblings().removeClass('show');
    })
})