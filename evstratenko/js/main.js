$(document).ready(function () {


    // -------------SLIDERS SETUP------------
    $('.top_banner_slider').slick({
        vertical: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    $('.clinics_slider').slick({
        prevArrow: $('.prev_clinic'),
        nextArrow: $('.next_clinic'),
        adaptiveHeight: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.services_slider').slick({
        prevArrow: $('.prev_service'),
        nextArrow: $('.next_service'),
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // ----------- HEADER VIEW CHANGE---------
    $(window).scroll(function () {

            scroll = $(window).scrollTop();

        if (scroll > 0) {
            $('header').addClass('scrolled');
            $('.navbar-brand img').attr("src", "media/logo_black.svg")
        } else {
            $('header').removeClass('scrolled')
            $('.navbar-brand img').attr("src", "media/logo.svg")
        }
    });
});