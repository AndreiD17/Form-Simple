const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConf = document.getElementById('passwordConfirmation');

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfValue = passwordConf.value;
    
    if(usernameValue === ''){
        setError(username, "O campo é obrigatório.");
    }else{
        setSuccess(username);
    }
    if(emailValue === ''){
        setError(email, "O campo é obrigatório.");
    }else if(!checkEmail){
        setError(email, "Email invalido.");
    }else{
        setSuccess(email);
    }
    if(passwordValue === ''){
        setError(password, "O campo é obrigatório.");
    }else if(passwordValue.length <7){
        setError(password, "A senha não pode conter menos de 7 carateres.");
    }else{
        setSuccess(password);
    }
    if(passwordConfValue === ''){
        setError(passwordConf, "Confirme a senha.");
    }else if(passwordConfValue != passwordValue){
        setError(passwordConf, "As senhas não conferem.");
    }else{
        setSuccess(passwordConf);
    }
}
function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerHTML = message;
    formControl.className = 'form-control error';
}
function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }