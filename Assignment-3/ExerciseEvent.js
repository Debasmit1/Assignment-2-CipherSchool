var pwd = document.querySelector('#password');
var rpwd = document.querySelector('#repassword');
var btns = document.querySelector('.btn');

btns.addEventListener('click',function(event){
    if (pwd.value != rpwd.value) {
        alert('Kindly Re-Enter the password');
    }
})


