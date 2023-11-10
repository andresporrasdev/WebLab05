
const form = document.getElementById('form');

//Checks if all inputs are valid
check1 = false;
check2 = false;
check3 = false;
check4 = false;
check5 = false;
form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form from submitting
    const isValid = validate(); // true or false
    if (isValid) {
        form.submit(); // submit form
    }
}
);

//Function to validate all inputs
function validate(){

    const form = document.getElementById('form');
    const username = document.getElementById('login');
    const email = document.getElementById('email');
    const password = document.getElementById('pass');
    const password2 = document.getElementById('pass2');
    const newsletter = document.getElementById('newsletter');
    const terms = document.getElementById('terms');
    checkInputs();

    //Checks for all inputs
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
            setErrorFor(username, 'X Username cannot be blank');
        } else if (usernameValue.length > 30) {
            setErrorFor(username, 'X Username must be no more than 30 characters');
        } else {
            console.log(username.value.toLowerCase()); // to lower case
            setSuccessFor(username);
            check1 = true; // if true, then free to go on submit
        }
        
        //Checks for email
        if(emailValue === '') {
            setErrorFor(email, 'X Email cannot be blank');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'X Not a valid email');
        } else {
            setSuccessFor(email);
            check2 = true; // if true, then free to go on submit
        }
        
        //Checks for password
        if(passwordValue === '') {
            setErrorFor(password, 'X Password cannot be blank');
        } if (passwordValue.length < 6) {
            setErrorFor(password, 'X Password must be at least 6 characters');
        } else {
            setSuccessFor(password);
            check3 = true; // if true, then free to go on submit
        }
        
        //Checks for password2
        if(password2Value === '') {
            setErrorFor(password2, 'X Retype your password');
        } else if(passwordValue !== password2Value) {
            setErrorFor(password2, 'X Passwords does not match');
        } else{
            setSuccessFor(password2);
            check4 = true; // if true, then free to go on submit
        }

        //Checks for newsletter 
        if(newsletterValue) {
            alert("You have accepted newsletter, be aware of spam box");
        }
        else {
            setSuccessFor(newsletter);
        }

        //Checks for terms and conditions
        if(!termsValue) {
            setErrorFor(terms, 'X You must accept terms and conditions');
        }
        else {
            setSuccessFor(terms);
            check5 = true; // if true, then free to go on submit
        }
    }

    //Function to set error message and display it in the form and change the class an by consequence the style of the input
    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const errorMessage = formControl.querySelector('p');
        formControl.className = 'textfield error';
        errorMessage.innerText = message;
        const inputControl = input;
        const inputError = inputControl.querySelector('input');
        inputControl.className = 'inputError';
    }

    //Function to set success setting the border to gree and removing the error message
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        input.style.borderColor = "#00ff00";
        formControl.className = 'textfield';
        const errorMessage = formControl.querySelector('p');
        errorMessage.innerText = "";
    }
    //Determine if email is valid    
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    //Return true if all inputs are valid
    return check1 && check2 && check3 && check4 && check5;
}