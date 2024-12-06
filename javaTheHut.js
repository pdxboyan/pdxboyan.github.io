const toggleButton = document.querySelector('.toggle');
const menu = document.querySelector('.collapse');

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
