(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', '{{ .Site.Data.site.google_analytics }}', 'auto');
    ga('send', 'pageview');
  

$(document).ready(function () {
    function sendGaEvent(category, action, label) {
        if (typeof label === 'undefined') {
            ga('send', {
                hitType: 'event',
                eventCategory: category,
                eventAction: action
            });
        } else {
            ga('send', {
                hitType: 'event',
                eventCategory: category,
                eventAction: action,
                eventLabel: label.trim()
            });
        };
    };

    function handleOutboundLinkClicks(href) {
        ga('send', 'event', {
            eventCategory: 'Outbound Link',
            eventAction: 'Click',
            eventLabel: href.trim(),
            transport: 'beacon'
        });
    }

    $('.external').on('click', function () {
        handleOutboundLinkClicks($(this).attr('href'));
    });

    $('.the-header .nav-link a, [class$=wrapper] .results a').on('click', function () {
        sendGaEvent('Blog', 'Navigate', this.textContent);
    });
    $('.the-header .nav-link button').on('click', function () {
        sendGaEvent('Blog', 'Navigate', this.getAttribute('data-ga'));
    });
    $('.the-footer .about h4 a').on('click', function () {
        sendGaEvent('Blog', 'Go to About');
    });
    $('.tag_box.categories a').on('click', function () {
        sendGaEvent('Blog', 'Click Category', this.title);
    });
    $('.tag_box.tags a').on('click', function () {
        sendGaEvent('Blog', 'Click Tag', this.title);
    });
    $('.unit-article .comments .show-hidden').on('click', function () {
        sendGaEvent('Post', 'Show Comments', this.textContent);
    });
    $('a.internal').on('click', function () {
        label = (this.getAttribute('data-ga') !== null)
            ? this.getAttribute('data-ga')
            : this.textContent;
        sendGaEvent('Post', 'Navigate', label);
    });
    $('.unit-article .meta .author').on('click', function () {
        sendGaEvent('Post', 'Show Author');
    });
    $('.unit-article .meta .license').on('click', function () {
        sendGaEvent('Post', 'Show License');
    });
    $('.unit-article .meta .list-tag a').on('click', function () {
        if (this.getAttribute('data-ga') !== null) {
            sendGaEvent('Post', 'Click Tag', this.getAttribute('data-ga'));
        }
    });
    $('.unit-article .meta .list-category a').on('click', function () {
        if (this.getAttribute('data-ga') !== null) {
            sendGaEvent('Post', 'Click Category', this.getAttribute('data-ga'));
        }
    });
    $('.addthis_toolbox .btn-share-post').on('click', function () {
        sendGaEvent('Post', 'Share Post', this.attr('title'));
    });
});
