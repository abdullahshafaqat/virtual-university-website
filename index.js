
document.addEventListener('DOMContentLoaded', () => {
    // Define the correct credentials for testing (you can modify these values)
    const correctStudentID = "bc240411826"; // Example Student ID
    const correctPassword = "Zz@12345"; // Example Password

    // Select the Sign-In button
    const signInButton = document.querySelector('.login-button');

    // Add a click event listener to the Sign-In button
    signInButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the form from submitting

        // Get the values of the Student ID and Password input fields
        const studentID = document.querySelector('input[placeholder="Student ID"]').value.trim();
        const password = document.querySelector('input[placeholder="Password"]').value.trim();

        // Check if Student ID and Password are correct
        if (studentID === correctStudentID && password === correctPassword) {
            // If correct, redirect to another page (e.g., dashboard.html)
            window.location.href = "dashboard.html";
        } else {
            // If incorrect, show an error message
            alert("Invalid Student ID or Password. Please try again.");
        }
    });
});



 document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('toggle-password');
    const eyeIcon = document.getElementById('eye-icon');

    togglePassword.addEventListener('click', () => {
        // Toggle the input type attribute between 'password' and 'text'
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;

        // Toggle the eye icon class to switch between showing and hiding
        eyeIcon.classList.toggle('fa-eye-slash');
    });
});
