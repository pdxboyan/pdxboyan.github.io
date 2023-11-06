
// refreshes the page once after load to prevent buggy load with 5 millisecond delay

if (!localStorage.getItem('visited')) {
    // This is the first visit, so reload the page
    localStorage.setItem('visited', 'true');
    location.reload();
} else {
    if (sessionStorage.getItem('reloaded') !== 'true') {
        // This is a subsequent visit, so reload the page
        sessionStorage.setItem('reloaded', 'true');
        location.reload();
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