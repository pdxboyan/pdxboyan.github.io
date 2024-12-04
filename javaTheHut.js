let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click', function() {
	collapse.forEach(shrink => shrink.classList.toggle("collapse-toggle"));
})


const toggleButton = document.querySelector('.toggle');
const menu = document.querySelector('.collapse');

toggleButton.addEventListener('click', function() {
	collapse.forEach(shrink => shrink.classList.toggle("collapse-toggle"));
    if (menu.classList.contains('active')) {
        toggleButton.setAttribute('aria-label', 'Open navigation menu');
    } else {
        toggleButton.setAttribute('aria-label', 'Close navigation menu');
    }
});