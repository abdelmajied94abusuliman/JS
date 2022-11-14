var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let arrayOfName = [];
let arrayOfEmail = [];
let arrayOfPassword = [];
let arrayOfNumber = [];

function setValueforName() {
    let valueForName = document.getElementById("my-username").value;
    if (/\d/.test(valueForName)) {
        document.getElementById("username-warining").style.display = 'block';
        document.getElementById("username-accept").style.display = 'none';

    } else if (valueForName.match(format) || (valueForName.length <= 0)) {
        document.getElementById("username-warining").style.display = 'block';
        document.getElementById("username-accept").style.display = 'none';

    } else {
        document.getElementById("username-accept").style.display = 'block';
        document.getElementById("username-warining").style.display = 'none';
    }
    return valueForName 

}


function setValueforEmail() {
    let valueForEmail = document.getElementById("my-email").value;

    if (valueForEmail.match("@") && valueForEmail.match(".com")) {
        document.getElementById("email-accept").style.display = 'block';
        document.getElementById("email-warining").style.display = 'none';
    }else {
        document.getElementById("email-warining").style.display = 'block';
        document.getElementById("email-accept").style.display = 'none';
    }
    return valueForEmail
}

var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

function setValueforPassword() {
    let valueForPassword = document.getElementById("my-password").value;

    if (valueForPassword.length >= 8 && valueForPassword.match(passw) && valueForPassword.match(format)){
        document.getElementById("password-warining").style.display = 'none';
        document.getElementById("password-accept").style.display = 'block';
    } else {
        document.getElementById("password-warining").style.display = 'block';
        document.getElementById("password-accept").style.display = 'none';
    }
    return valueForPassword
}

function setValueforNumber() {
    let valueForNumber = document.getElementById("my-number").value;
    
    if (valueForNumber.length <= 10 && valueForNumber.length >= 9 ) {
        document.getElementById("number-warining").style.display = 'none';
        document.getElementById("number-accept").style.display = 'block';
    }
    else{
        document.getElementById("number-warining").style.display = 'block';
        document.getElementById("number-accept").style.display = 'none';
    }
    return valueForNumber
}

let formEvent = document.getElementById("btn")

formEvent.onclick = function (event) {
    event.preventDefault()
    setValueforName()
    setValueforEmail()
    setValueforPassword()
    setValueforNumber()
    if (typeof setValueforName() == 'string' && typeof setValueforEmail() == 'string' && typeof setValueforPassword() == 'string'&& typeof setValueforNumber() == 'string' ){
        window.localStorage.setItem(`username` , setValueforName())
        window.localStorage.setItem(`email` , setValueforEmail())
        window.localStorage.setItem(`password` , setValueforPassword())
        window.localStorage.setItem(`mobile` , setValueforNumber())
    } else {
        event.preventDefault()
    } 
}

let formLogInEvent = document.getElementById("btn-log")

formLogInEvent.onclick = function (event) {
    event.preventDefault()
    let valueFromEmailLog = document.getElementById("login-email").value
    console.log();
    let valueFromPasswordLog = document.getElementById("login-password").value
    if ( valueFromEmailLog == localStorage.getItem('email')){
        document.getElementById("login-email-accept").style.display = 'block'
        document.getElementById("login-email-warining").style.display = 'none'  
    } else {
        document.getElementById("login-email-accept").style.display = 'none'
        document.getElementById("login-email-warining").style.display = 'block' 
    } 

    if ( valueFromPasswordLog == localStorage.getItem('password')){
        document.getElementById("login-password-accept").style.display = 'block'
        document.getElementById("login-password-warining").style.display = 'none'  
    } else {
        document.getElementById("login-password-accept").style.display = 'none'
        document.getElementById("login-password-warining").style.display = 'block' 
    }

}
// localStorage.clear()

