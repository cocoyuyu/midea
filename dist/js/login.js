"use strict";var user=document.querySelector(".c-mail-input .c-text-input"),pass=document.querySelector(".c-pass-input .c-text-input"),login=document.querySelector(".c-login-btn");$(login).on("click",function(){$.ajax({url:"./data/login2.php",type:"get",data:"mail="+user.value+"&pass="+pass.value,success:function(t){alert(t)},error:function(){alert("链接失败")}})});