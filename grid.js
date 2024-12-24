window.onload = function () {
    var grid = document.querySelector('.grid');

    // Create a Masonry grid selecting .grid-items as the tiles
    var masonry = new Masonry(".grid", {
        itemSelector: '.grid-item',
        gutter: 20
    });

    // Get the last image by its ID
    var lastImage = document.getElementById('last-image');

    // Trigger Masonry layout only after the last image loads
    if (lastImage) {
        lastImage.onload = function () {
            masonry.layout();
        };
    }
};
