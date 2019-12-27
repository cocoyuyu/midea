$(function (){

    // 判断购物车是否有数据
    if (localStorage.getItem('goods')) {
        //本地数据  ["abc2","abc6","abc8","abc1"]
        var codeArr = JSON.parse(localStorage.getItem('goods')).code;

        // 加载数据
        $.ajax({
            url: './data/goods.json',
            type: 'get',
            cache: false,
            dataType: 'json',
            success: function (jsonArr){
                var results = '';
                $.each(codeArr,function (i,code){// code = 'abc2'
                    $.each(jsonArr,function (index,item){// item = {...,code:'abc8'}
                        if (code == item.code) {// 判断是否为购物车的数据
                            results += `<li code="${item.code}">
                                <img src="${item.imgurl}" alt="">
                                <h5>${item.title}</h5>
                                <p>${item.price}</p>
                                <span>删除</span>
                            </li>`;
                        }
                    });
                });
                $('.list').append(results);
            }
        });

        // 删除购物车商品
        $('.list').on('click','li span',function (){
            // 获取要删除商品的编号
            var code = $(this).parent().attr('code');

            // 删除数组元素  pop  unshift  splice(index,1)
            $.each(codeArr,function (index,item){
                if (code == item) {
                    codeArr.splice(index,1);//删除指定下标的数组元素
                    return false; //避免删除添加的多个相同商品出现的问题
                }
            });
            if (codeArr.length == 0) {
                $('.list').append('<li style="line-height: 80px; text-align: center; color: #999;">购物车暂无数据！</li>');
                localStorage.removeItem('goods');
            } else {
                 // 更新本地存储数据
                var jsonStr = JSON.stringify({"code":codeArr});
                localStorage.setItem('goods',jsonStr);
            }
            // 删除页面中的节点
            $(this).parent().remove();

            alert('商品成功移出购物车！');
        })


    } else {
        // $('.list').append('<li style="line-height: 80px; text-align: center; color: #999;">购物车暂无数据！</li>');
    }

});