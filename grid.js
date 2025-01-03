window.onload = function () {
    var grid = document.querySelector('.grid');

    // Creates a Masonry grid selecting .grid-items as the tiles
    var masonry = new Masonry(".grid", {
        itemSelector: '.grid-item, .big-item',
        gutter: 20
    });

    imagesLoaded(grid).on('progress', function() {
        masonry.layout();
    });
};

imagesLoaded( grid ).on( 'progress', function() {
  // recalculte Masonry grid after each image loads
  masonry.layout();
});