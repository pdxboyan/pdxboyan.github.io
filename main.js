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