// Fetches and loads the navbar from a seperate navbar.html file
function loadNavbar() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');

    fetch('navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load navbar');
            }
            return response.text();
        })
        .then(html => {
            navbarPlaceholder.innerHTML = html;
            attachToggleListener();
        })
        .catch(error => {
            console.error(error);
        });
}

// Handles toggle button for smaller screens
function attachToggleListener() {
    const toggleButton = document.querySelector('.toggle');
    const menu = document.querySelector('.collapse');

    if (toggleButton && menu) {
        toggleButton.addEventListener('click', function () {
            // Toggle the class for collapsing/expanding
            menu.classList.toggle('collapse-toggle');

            // Update aria-label for accessibility
            if (menu.classList.contains('collapse-toggle')) {
                toggleButton.setAttribute('aria-label', 'Close navigation menu');
            } else {
                toggleButton.setAttribute('aria-label', 'Open navigation menu');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', loadNavbar);