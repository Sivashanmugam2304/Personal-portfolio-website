document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Simple validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    // If validation passes, you can handle the form submission here
    // For example, you could send the data to a server or display a success message
    alert('Thank you for your message, ' + name + '!');

    // Optionally, reset the form
    document.getElementById('contact-form').reset();
});