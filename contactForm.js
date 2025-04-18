//For the validation of the contact information form
const form = document.getElementById('container');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

const successMessage = document.getElementById('successMessage');
const clearMessage = document.getElementById('clear-btn');

form.addEventListener('submit', function(event) {
    nameError.textContent = '';
    emailError.textContent = '';
    confirmEmailError.textContent = '';
    successMessage.textContent = ''; 

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name';
        event.preventDefault();  //Prevents form submission
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email';
        event.preventDefault();
        isValid = false;
    }
    else if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        event.preventDefault();
        isValid = false;
    }

    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Please enter a message';
        event.preventDefault();  //Prevents form submission
    isValid = false;
    }

    //If all inputs are valid, show success message
    if (isValid) {
        successMessage.textContent = 'The information has been saved and the form submitted successfully!';
    }

    event.preventDefault(); 
});

//Function to validate email format
function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
     return re.test(String(email));
     }