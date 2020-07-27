var pwd = document.querySelector('#password');
var rpwd = document.querySelector('#repassword');
var usr = document.querySelector('#username');
var btns = document.querySelector('.btn');

document.ready(function(){
    if (rpwd.value!="" && usr.value != "" && pwd.value != "") {
        btns.attr('disabled', false);
    }
}
)



btns.addEventListener('click',function(event){
    if(pwd.value != rpwd.value) {
        alert('Kindly Re-Enter the password');
    }else if(pwd.value == rpwd.value && usr.value != "" && pwd.value != ""){
        alert('Congratulation logged in');
    }
})


