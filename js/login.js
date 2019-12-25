var user = document.querySelector('.c-mail-input .c-text-input');
var pass = document.querySelector('.c-pass-input .c-text-input');
var login = document.querySelector('.c-login-btn');

$(login).on('click',function(){
    $.ajax({
        url: './data/login2.php',
        type: 'get',
        data: 'mail='+user.value+'&pass='+pass.value,
        success: function (res){
            alert(res);
        },
        error: function (code){
            alert('链接失败');
            
        }   
    });
})