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


// 产品列表图片
var ynavss = document.querySelector('.slxzfl');

var date = [
    {imgUr1:'https://pic.midea.cn/ImageStore/150029/pic/2a30082afd69ebb5A1192/2a30082afd69ebb5A1192_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&',title:'【洗烘一体】洗衣机 10KG变频洗烘 蒸汽烘干 巴氏除菌洗 祛味空气洗 MD100V11D'},
    {imgUr1:'https://pic.midea.cn/ImageStore/145530/pic/7e575d10484b511bA21168/7e575d10484b511bA21168_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&',title:'电暖器 13片速热油汀 高效取暖 大范围制热 取暖器NY2213-18GW'},
    {imgUr1:'https://pic.midea.cn/ImageStore/154165/pic/0b99d7ed9a84dcd1A16515/0b99d7ed9a84dcd1A16515_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&',title:'【性价比星品】318L多门冰箱 变频节能 雷达感温 速冷速冻 BCD-318WTPZM(E)'},
    {imgUr1:'https://pic.midea.cn/ImageStore/171088/pic/de8f2f47e7642c47A13858/de8f2f47e7642c47A13858_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&',title:'【洗烘一体】洗衣机 10KG变频洗烘 蒸汽烘干 巴氏除菌洗 祛味空气洗 MD100V11D'}
]

var text = '';

for(var i = 0, len = date.length; i < len; i++){
    text += `
        <div class="list">
            <div class="pic">
                <a href="#"><img src="${date[i].imgUr1}" alt="${date[i].title}"></a>
                <em>限时特惠</em>
            </div>
            <div class="text">
                <p>￥1599.00<span>评价 57</span></p>
                <h3><a href="#">${date[i].title}</a></em>
            </div>
            <div class="box">
                <a href="./myCart.html">加入购物车</a>
                <a href="./myCart.html">查看详情</a>
            </div>
        </div>
    `;
}

ynavss.innerHTML = text;


// 产品分类
var wrap = document.querySelector('.classList');
var list = document.querySelectorAll('ul li');
for(var i = 0 , len = list.length; i < len; i++){
    list[i].onclick = function(){
        for(var i = 0, len = list.length; i < len; i++){
            list[i].className = '';
        }
        this.className = 'hover';
    }
}