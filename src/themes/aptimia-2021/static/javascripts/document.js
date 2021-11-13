$(document).ready(function () {
    var offset = 50,
        duration = 500,
        width = 960;
    $(window).scroll(function () {
        if ($(window).width() > width) {
            if ($(this).scrollTop() > offset) {
                $('footer').css('top', '20px');
                $('footer .back-to-top').fadeIn(duration);
            } else {
                $('footer').css('top', 'auto');
                $('footer .back-to-top').fadeOut(duration);
            }
        }
    });
    $(window).resize(function () {
        if ($(window).width() < width) {
            $('footer').css('top', 'auto');
            $('footer .back-to-top').fadeOut(duration);
        }
        if ($(window).width() >= width && $(this).scrollTop() > offset) {
            $('footer').css('top', '20px');
            $('footer .back-to-top').fadeIn(duration);
        }
    });

    $('footer .back-to-top, .gotop a').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    });

    $('.show-hidden').on('click', function () {
        $(this).parent().next().toggleClass("hidden");
        $(this).toggleClass("hidden");
    });
});
