if ($(".slider-home").length > 0) {
    $('.slider-home').bxSlider({
        mode: 'vertical',
        auto: true
    });
    $("#openBlock").click(function () {
        $(this).parents(".animated").toggleClass("open");
    });
}
// Set custom style, close if clicked, change title type and overlay color
$(".full-img").fancybox({
    openEffect: 'elastic',
    closeEffect: 'elastic',
    helpers: {
        title: {
            type: 'inside'
        }
    }
});