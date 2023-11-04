
// refreshes the page once after load to prevent buggy load

window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click', function() {
	collapse.forEach(shrink => shrink.classList.toggle("collapse-toggle"));
})

// Masonry Library 

new Masonry("#posts .grid", {
	itemSelector :'.grid-item',
	gutter :20
});