$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        item: 3,
        center: true,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<img src='../img/prev.png'>", "<img src='../img/next.png'>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
            }
        }

    });
});