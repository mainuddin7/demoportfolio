document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Form validation
    if (name && email && message) {
        document.getElementById('formMessage').innerHTML = `<p>Thank you for your message, ${name}!</p>`;
        // You can send the data to a backend server here
    } else {
        document.getElementById('formMessage').innerHTML = `<p>Please fill in all fields.</p>`;
    }

    // Clear form after submission
    document.getElementById('contactForm').reset();
});
