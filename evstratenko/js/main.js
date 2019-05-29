$(document).ready(function () {


    $( window ).resize(function() {
            removeSlideMargins();
    });


    // -------------SLIDERS SETUP------------
    removeSlideMargins();

    var topBannerSlider = $('.top_banner_slider');
    var currentSlideNum = $('.current_slide');

    function showSliderAnimation() {
        $('.slick-current .devider').addClass("scaled");
        $('.slick-current .top_title span').css({ "transform": "none"});
        $('.slick-current .btm_title span').css({"transform": "none"});
    }
    function hideSliderAnimation() {
        $('.slick-current .devider').removeClass("scaled");
        $('.slick-current .top_title span').css({ transform: "translateY(150px) skew(0deg, 25deg)" });
        $('.slick-current .btm_title span').css({"transform": "translateY(-160px) skew(0deg, -25deg)"});
    }

    topBannerSlider.on('init', function(event, slick){
        $(".slide_count").text(slick.slideCount);
        currentSlideNum.text(1);
        setTimeout(function () {
            showSliderAnimation()
        },1000)
    });

    topBannerSlider.slick({
        vertical: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    topBannerSlider.on('afterChange', function(slick, currentSlide){
        var i = (currentSlide.currentSlide ? currentSlide.currentSlide : 0) + 1;
        currentSlideNum.text(i);
        showSliderAnimation()
    });

    topBannerSlider.on('beforeChange', function(){
        hideSliderAnimation()
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
            $('#main_page_logo img').attr("src", "media/logo_black.svg")
        } else {
            $('header').removeClass('scrolled');
            $('#main_page_logo img').attr("src", "media/logo.svg")
        }
    });


        $('#nav-icon1').click(function(){
            $(this).toggleClass('open');
            $('.navbar').toggleClass('opened');
        });

        $("#show_contacts_btn").click(function () {
            $("#contacts_menu").slideToggle("slow");
            $(this).toggleClass("opened");
        });
});