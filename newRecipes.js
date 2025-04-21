//For the validation of the contact information form
const form = document.getElementById('formRegistration');

const nameInput = document.getElementById('name');
const usernameInput = document.getElementById('username');

const nameError = document.getElementById('nameError');
const usernameError = document.getElementById('usernameError');

const successMessage = document.getElementById('successMessage');
const clearMessage = document.getElementById('clear-btn');

let blog = JSON.parse(localStorage.getItem('blog') || '[]');
let selected = null;

form.addEventListener('submit', function(event) {
    event.preventDefault();

    nameError.textContent = '';
    usernameError.textContent = '';
    successMessage.textContent = ''; 

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter the name of your post/dish';
        event.preventDefault();  //Prevents form submission
        isValid = false;
    }

    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Please enter the recipe for your dish';
        event.preventDefault();  //Prevents form submission
    isValid = false;
    }

    //If all inputs are valid, show success message
    if (isValid) {
        successMessage.textContent = 'The recipe has been posted successfully!';
    } 

    const blogTitle = nameInput.value;
    const blogContent = usernameInput.value;
    const images = document.getElementById('image');

    if (images.files.length > 0) {
        const fileReader = new FileReader();
        fileReader.onload = function() {
            const data = fileReader.result;
            blog.push({ id: Date.now(), blogTitle, blogContent, image: data });
            localStorage.setItem('blog', JSON.stringify(blog));
            successMessage.textContent = 'The dish has been successfully posted!';
            window.location.href = 'updateRecipe.html';
        }
        fileReader.readAsDataURL(images.files[0]);
    }
    else {
        blog.push({ id: Date.now(), blogTitle, blogContent, image: null });
        localStorage.setItem('blog', JSON.stringify(blog));
    }
});