// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Toggle Profile Dropdown on Photo Click
    const userAvatar = document.querySelector(".user-avatar");
    const profileDropdown = document.getElementById("profileDropdown");

    // Toggle the dropdown display on click
    userAvatar.addEventListener("click", function () {
        profileDropdown.style.display = (profileDropdown.style.display === "block") ? "none" : "block";
    });

    // Close dropdown if clicked outside of the dropdown area
    document.addEventListener("click", function (event) {
        if (!profileDropdown.contains(event.target) && event.target !== userAvatar) {
            profileDropdown.style.display = "none";
        }
    });
});
