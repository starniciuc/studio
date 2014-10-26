if ($(".slider-home").length > 0) {
    $('.slider-home').bxSlider({
        mode: 'vertical',
        auto: true
    });
    $("#openBlock").click(function () {
        $(this).parents(".animated").toggleClass("open");
    });
}