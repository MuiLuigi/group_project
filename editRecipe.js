window.onload = function() {
    const form2 = document.getElementById('editor');

    const nameInput = document.getElementById('name');
    const usernameInput = document.getElementById('username');
    const selection = document.getElementById('saved-blogs');
    const deleteButton = document.getElementById('delete');

    const successMessage = document.getElementById('successMessage');

    let blog = JSON.parse(localStorage.getItem('blog') || '[]');
    let selected = null;

    blog.forEach(blogs => {
        const select = document.createElement('option');
        select.value = blogs.id;
        select.textContent = blogs.blogTitle;
        selection.appendChild(select);
    });
    
    selection.addEventListener('change', () => {
        const id = parseInt(selection.value);
        selected = blog.find(blogSelect => blogSelect.id === id);
    
        if (selected) {
            nameInput.value = selected.blogTitle;
            usernameInput.value = selected.blogContent;
        }
        else {
            nameInput.value = '';
            usernameInput.value = '';
        }
    });
    
    form2.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (selected) {
            selected.blogTitle = nameInput.value;
            selected.blogContent = usernameInput.value;
        }
        else {
            blog.push({ id: Date.now(), blogTitle: nameInput.value, blogContent: usernameInput.value, image: null });
        }
    
        localStorage.setItem('blog', JSON.stringify(blog));
        successMessage.textContent = 'The dish post has been updated successfully!'
        alert('The dish post has been updated successfully! Please reload the page.');
    });
    
    deleteButton.addEventListener('click', function() {
        if (selected == null) {
            alert('You have not selected which dish post you would like to delete');
            return;
        }

        blog = blog.filter(d => d.id !== selected.id);
        localStorage.setItem('blog', JSON.stringify(blog));
        nameInput.value = '';
        usernameInput.value = '';
        selected = null;
        alert('The dish post has been deleted successfully! Please reload the page');
    });
}