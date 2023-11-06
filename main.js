
// refreshes the page once after load to prevent buggy load with 5 millisecond delay

document.addEventListener('click', function() {
    location.reload();
    document.removeEventListener('click', arguments.callee);
});


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