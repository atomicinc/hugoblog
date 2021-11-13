window.jQuery.fancybox || document.write('<script src="/javascripts/fancybox/jquery.fancybox.pack.js?v=2.1.4"><\/script>')
window.jQuery.fancybox.helpers.buttons || document.write('<script src="/javascripts/fancybox/helpers/jquery.fancybox-buttons.js?v=1.0.5"><\/script>')
$("head").append('<link rel="stylesheet" href="/javascripts/fancybox/jquery.fancybox.css?v=2.1.4" type="text/css" />');
$("head").append('<link rel="stylesheet" href="/javascripts/fancybox/helpers/jquery.fancybox-buttons.css?v=1.0.5" type="text/css" />');
$(".post-image").fancybox({
    prevEffect: 'none',
    nextEffect: 'none',
    closeBtn: true,
    helpers: {
        title: {
            type: 'float'
        }
    }
});
$(document).ready(function () {
    $(".post-image > img").unveil(450);
});
