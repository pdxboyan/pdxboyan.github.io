// Fetches and loads the navbar from a seperate navbar.html file
function loadBars() {
    const navbarLoader = document.getElementById('navbar-loader');
    const footerLoader = document.getElementById('footer-loader');


    fetch('navbar.html')
        .then(response => {
            return response.text();
        })
        .then(html => {
            navbarLoader.innerHTML = html;
            // Adds listener for the toggle button
            attachToggleListener();
        })

    fetch('footer.html')
        .then (response => {
            return response.text();
        })
        .then(html => {
            footerLoader.innerHTML = html;
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

            // Updates aria-label for accessibility on click
            if (menu.classList.contains('collapse-toggle')) {
                toggleButton.setAttribute('aria-label', 'Close navigation menu');
            } else {
                toggleButton.setAttribute('aria-label', 'Open navigation menu');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', loadBars);