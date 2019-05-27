$(document).ready(function () {


    $( window ).resize(function() {
            removeSlideMargins();
    });


    // -------------SLIDERS SETUP------------
    removeSlideMargins();

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
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
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
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

     function removeSlideMargins() {
         var lastSlide;
         if ($(window).width() < 992) {
             lastSlide = parseInt($(".services_slider .slick-current").attr('data-slick-index')) + 1;
         } else {
             lastSlide = parseInt($(".services_slider .slick-current").attr('data-slick-index')) + 2;
         }
         $('.services_slider .slick-slide[data-slick-index="'+lastSlide+'"] .slide_box').css({marginRight: 0});
    }



    // ----------- HEADER VIEW CHANGE---------
    $(window).scroll(function () {

            scroll = $(window).scrollTop();

        if (scroll > 0) {
            $('header').addClass('scrolled');
            $('.navbar-brand img').attr("src", "media/logo_black.svg")
        } else {
            $('header').removeClass('scrolled');
            $('.navbar-brand img').attr("src", "media/logo.svg")
        }
    });


        $('#nav-icon1').click(function(){
            $(this).toggleClass('open');
            $('.navbar').toggleClass('opened')
        });

        $("#show_contacts_btn").click(function () {
            $("#contacts_menu").slideToggle("slow");
            $(this).toggleClass("opened");
        })

});