let signUpbtn = document.querySelector('.signupbtn');
let signInbtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');


signInbtn.addEventListener('click', ()=> {
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Forget Password';
    signUpbtn.classList.add('disable');
    signInbtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});

signUpbtn.addEventListener('click', ()=> {
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    text.innerHTML = 'Password Suggestion';
    signUpbtn.classList.remove('disable');
    signInbtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
});