document.addEventListener("DOMContentLoaded", function() {
    // Select all links inside the navigation
    const navLinks = document.querySelectorAll('.sidebar nav ul li a');

    // Add click event listener to each link
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior

            // Get the target element's ID (href attribute)
            const targetId = this.getAttribute('href').substring(1);

            // Use the target ID to find the corresponding element
            const targetElement = document.getElementById(targetId);

            // Scroll to the target element smoothly
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
