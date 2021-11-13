$(document).ready(function () {
    $('.search-field').simpleSsgSearch({
      jsonFile: "/search.json",
      template: '<li><a href="{url}">{title} <span class="entry-date"><time datetime="{date}">{shortdate}</time></span></a></li>',
      searchResults: '.search-wrapper .results',
      searchResultsTitle: '<h4>Search Results</h4>',
      noResults: '<p>No results found</p>'
    });
});

(function ($, window, undefined) {
    var closeOverlay = function () {
        $('.nav-wrapper, .search-wrapper').removeAttr('style');
        $(".nav-form, .search-form").removeClass('active');
        $("body").removeClass('nav-overlay search-overlay');
    };
    $('header').on('click','.btn-search', function () {
        $('.search-wrapper').css({display: "block"});
        $(".search-form").addClass('active');
        $(".search-form").find('input').focus();
        $("body").addClass('search-overlay');
    });

    $('.nav-global .btn-menu').on('click', function () {
        $('.nav-wrapper').css({display: "block"});
        $(".nav-form").addClass('active');
        $(".nav-form .search-field").prop('disabled', true);
        $("body").addClass('nav-overlay');
    });

    $('.nav-wrapper .btn-close, .search-wrapper .btn-close').on('click', function () {
        closeOverlay();
    });

    $(document).on('keyup', function (e) {
        if (e.keyCode === 27) {
            closeOverlay();
        }
    });
})(jQuery, window);
