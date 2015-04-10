/*jslint browser:true */
/*global $, jQuery*/
(function ($) {
    "use strict";

    var target;

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1500);
                    return false;
                }
            }
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.goTop').fadeIn(200);
        } else {
            $('.goTop').fadeOut(200);
        }
    });
}(jQuery));