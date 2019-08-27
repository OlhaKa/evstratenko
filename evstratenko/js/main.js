$(document).ready(function () {

    // -------------SLIDERS SETUP------------

    var topBannerSlider = $('.top_banner_slider');
    var currentSlideNum = $('.current_slide');

    topBannerSlider.on('init', function (event, slick) {
        getSlideCenter();
        $(".slide_count").text(slick.slideCount);
        currentSlideNum.text(1);
        setTimeout(function () {
            $('.slick-current .btm_title span').addClass('scale-slide')
        }, 1000)
    });

    topBannerSlider.slick({
        vertical: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    topBannerSlider.on('afterChange', function (slick, currentSlide) {
        getSlideCenter();
        var i = (currentSlide.currentSlide ? currentSlide.currentSlide : 0) + 1;
        currentSlideNum.text(i);
        $('.slick-current .btm_title span').addClass('scale-slide')
    });

    topBannerSlider.on('beforeChange', function () {
        $('.slick-current .btm_title span').removeClass('scale-slide')
    });

    function getSlideCenter() {
        let currentSlideTitle = $('.slick-current .btm_title'),
            slideCenter = $('.slick-current').height() / 2 - currentSlideTitle.height() / 2;
        currentSlideTitle.css("top", slideCenter)
    }

    $('.clinics_slider').slick({
        prevArrow: $('.prev_clinic'),
        nextArrow: $('.next_clinic'),
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.services_slider').slick({
        rows: 2,
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

    $('.doctors_slider').slick({
        prevArrow: $('.prev_doctor'),
        nextArrow: $('.next_doctor'),
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
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // ----------- HEADER VIEW CHANGE---------

    changeHeaderView ();

    function changeHeaderView () {
        var scroll = $(window).scrollTop();
        if (scroll > 0 && (!$('.navbar').hasClass('opened'))) {
            $('header').addClass('scrolled');
            $('.logo-light').hide();
            $('.logo-dark').show(500);
        } else if (scroll === 0) {
            $('header').removeClass('scrolled');
            $('.logo-dark').hide();
            $('.logo-light').show(500);
        }
    }

    $(window).scroll(function () {
        changeHeaderView ()
    });


    $('#nav-icon1').click(function () {
        var scroll = $(window).scrollTop();
        $(this).toggleClass('open');
        $('.navbar').toggleClass('opened');
        if ($('.navbar').hasClass('opened')) {   //open menu on any scroll position
            $('.logo-dark').hide();
            $('.logo-light').show(500);
        } else if (!($('.navbar').hasClass('opened')) && scroll === 0) {   //close on top
            $('.logo-dark').hide();
            $('.logo-light').show(500);
        } else if (!($('.navbar').hasClass('opened')) && scroll > 0) {  //close on bottom
            $('.logo-light').hide();
            $('.logo-dark').show(500);
        }
    });


    $('#nav-icon2').click(function () {
        $(this).toggleClass('open');
        $('.navbar').toggleClass('opened');
    });

    $("#show_contacts_btn").click(function () {
        $("#contacts_menu").slideToggle("slow");
        $(this).toggleClass("opened");
    });


    // --------- CONTACTS HEADER ANIMATION --------

$("#contacts-anchor").click(function() {
    $(".contacts_page h2").addClass('scale-in-center');
    setTimeout(function() {
        $(".contacts_page h2").removeClass('scale-in-center');
    }, 1500)
});

// ---------- ZOOM CUSTOMER REVIEW----------

    $(".review-thumb").fancybox({
        fitToView: false,
        maxWidth: "100%",
        width: "1200"
    });

});


