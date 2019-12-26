var user = document.querySelector('.user');
var pass = document.querySelector('.pass');
var login = document.querySelector('.login');

login.onclick = function(){
    ajax({
        url:'./data/login2.php',
        type:'get',
        data:'act=login&user=' + user.value + '&pass=' + pass.value,
        success:function(data){
            var json = JSON.parse(data);
            alert(json.msg);
        }
    });
}