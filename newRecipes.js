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
        nameError.textContent = 'Please enter the title of your post';
        event.preventDefault();  //Prevents form submission
        isValid = false;
    }

    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Please enter the content of your post';
        event.preventDefault();  //Prevents form submission
    isValid = false;
    }

    //If all inputs are valid, show success message
    if (isValid) {
        successMessage.textContent = 'The post has been added successfully!';
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
            successMessage.textContent = 'The blog has been successfully posted!';
            window.location.href = 'post.html';
        }
        fileReader.readAsDataURL(images.files[0]);
    }
    else {
        blog.push({ id: Date.now(), blogTitle, blogContent, image: null });
        localStorage.setItem('blog', JSON.stringify(blog));
    }
});