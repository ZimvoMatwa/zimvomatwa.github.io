
/* STICKY NAVIGATION */
$(document).ready(function() {
    $('.js-section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');

        }
    }, {
        offset: '60px;'
    });


    /* SCROLL ON BUTTONS */
    $('.js-scroll-to-section-projects').click(function() {
        $('html, body').animate({
            scrollTop: $('.js-section-projects').offset().top
        }, 1000)
    })

    $('.js-scroll-to-section-packages').click(function() {
        $('html, body').animate({
            scrollTop: $('.js-section-packages').offset().top
        }, 1000)
    })

    /* NAV BUTTONS */
    // $(function() { /* smooth scrolling bahavior, but has been replaced by css code int html */
    //     $('a[href*=#]:not(href=#]').click(function() {
    //         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //             var target = $(this.hash);
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //             if (target.length) {
    //                 $('html, body').animate({
    //                     scrollTop: target.offset().top
    //                 }, 1000);
    //                 return false;
    //             }
    //         }
    //     });
    // });

    /* SCROLL ANIMATIONS */
    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animate__animated animate__fadein');
    }, {
        offset: '50%'
    });

    $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animate__animated animate__fadeInUp'); /* animate__slideInUp */
    }, {
        offset: '50%'
    });

    $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animate__animated animate__fadein');
    }, {
        offset: '50%'
    });

    $('.js-wp-4').waypoint(function(direction) {
        $('.js-wp-4').addClass('animate__animated animate__pulse')
    }, {
        offset: '50%'
    });

    /* MOBILE NAVIGATION */
    $('.mobile-nav-icon').click(function() {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');
        
        nav .slideToggle(500);
        if(icon.hasClass('ion-toggle')) {
            icon.addClass('ion-toggle-filled');
            icon.removeClass('ion-toggle');
        } else {
            icon.addClass('ion-toggle');
            icon.removeClass('ion-toggle-filled');
        }
    });

});













    // var waypoints = $('#handler-first').waypoint(function(direction) {
    //     notify(this.element.id + ' hit 25% from top of window')
    // }, {
    //     offset: '25%'
    // });
    
    //e.g
    // $('h1').click(function() {
    //     $(this).css('background-color', '#ff0000')
    // });