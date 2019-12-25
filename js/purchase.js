// 点击留言
var leaveM = document.querySelector('.c_leave_message'); //点击留言按钮
var leaveF = document.querySelector('.c_leave_frame'); //留言框（用来设置显示隐藏）
var submit = document.querySelector('.c_btn_submit'); //提交留言按钮
var contentL = document.querySelector('.long_input') //长输入框
var contentS = document.querySelector('.short_input') //短输入框 （验证码）
var textarea= document.querySelector('.c_textarea') //留言内容输入框

leaveF.style.display = 'none';


// 点击留言
$('.c_leave_message').toggle(function (){
    leaveF.style.display = 'block';
},function (){
    leaveF.style.display = 'none';
});
$('c_leave_message').toggle()

// 点击提交
$('.c_btn_submit').on('click',function(){

    if(contentL.value == ''){
        alert('基础信息不能为空');
        return;
    }else if(contentS.value == ''){
        alert('验证码不能为空');
        return;
    }else if(textarea.value == ''){
        alert('留言内容不能为空');
        return;
    }else{
        alert('提交成功')
        leaveF.style.display = 'none';
        contentL.value = '';
        // contentS.value == '';
        // textarea.value == '' ;
    }
   
   
})

// 点击登录
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