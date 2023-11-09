const form = document.getElementById('form');
const username = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const password2 = document.getElementById('pass2');
const newsletter = document.getElementById('newsletter');
const terms = document.getElementById('terms');


form.addEventListener('submit', e => {
    e.preventDefault();
    console.log("Achived here");
    checkInputs();
});


function checkInputs() {
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const newsletterValue = newsletter.checked;
    const termsValue = terms.checked;
    
    //Checks for login
    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } if (usernameValue.length > 30) {
        setErrorFor(username, 'Username must be no more than 30 characters');
    } else {
        console.log(username.value.toLowerCase());
        setSuccessFor(username);
    }
    
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }
    
    //Checks for password
    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } if (passwordValue.length < 6) {
        setErrorFor(password, 'Password must be at least 6 characters');
    } else {
        setSuccessFor(password);
    }
    
    if(password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else{
        setSuccessFor(password2);
    }

    if(newsletterValue) {
        alert("You have to accept newsletter");
    }
    else {
        setSuccessFor(newsletter);
    }

    if(!termsValue) {
        setErrorFor(terms, 'You must accept terms and conditions');
    }
    else {
        setSuccessFor(terms);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'textfield error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'textfield';
    const small = formControl.querySelector('small');
    small.innerText = "";
}
    
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
