// Script to handle loading and manual redirection
document.addEventListener("DOMContentLoaded", function() {
    const loadingElement = document.querySelector(".loading");
    const redirectSection = document.querySelector(".redirect-section");
    const signinButton = document.getElementById("signin-button");

    // Show the loading spinner for 3 seconds, then reveal the button
    setTimeout(function() {
        loadingElement.style.display = "none"; // Hide loading message
        redirectSection.style.display = "block"; // Show the sign-in button
    }, 3000); // 3 seconds delay for loading simulation

    // Add click event listener to manually go to Google Sign-In
    signinButton.addEventListener("click", function() {
        // Direct users to Google Sign-In page
        window.open("https://accounts.google.com/ServiceLogin?authuser=0", "_blank");
    });
});
