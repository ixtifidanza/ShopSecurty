$(function() {

    // function myFunction() {
    //     if (window.pageYOffset >= sticky) {
    //         navbar.classList.add("sticky");
    //         slider.style.paddingTop = "100px";
    //         megamenu.style.top = "12%";
    //     } else {
    //         navbar.classList.remove("sticky");
    //         slider.style.paddingTop = "20px";
    //         megamenu.style.top = "23%";
    //     }
    // }
    // window.onscroll = function() { myFunction() };

    // // Get the navbar
    // var navbar = document.getElementById("navbar");

    // // Get the offset position of the navbar
    // var sticky = navbar.offsetTop;
    // var slider = document.querySelector('.slider');
    // var megamenu = document.querySelector('.megamenu');

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        spaceBetween: 30,
        effect: 'fade',
        autoplay: {
            delay: 3000,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })

    var noveltySwiper = new Swiper('.novelty-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30,
        allowTouchMove: false,
        navigation: {
            prevEl: '.novelty__button--prev',
            nextEl: '.novelty__button--next',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
                allowTouchMove: true,
                autoplay: {
                    delay: 5000,
                },
            },
            568: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }

    })

    var favoriteSwiper = new Swiper('.favorite-container', {
        // Optional parameters
        direction: 'horizontal',
        observer: true,
        observeParents: true,
        loop: true,
        spaceBetween: 30,
        allowTouchMove: false,
        grabCursor: true,
        navigation: {
            prevEl: '.favorite__button--prev',
            nextEl: '.favorite__button--next',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
                allowTouchMove: true,
                autoplay: {
                    delay: 5000,
                },
            },
            568: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });

    var favoriteSwiper2 = new Swiper('.favorite-container2', {
        // Optional parameters
        direction: 'horizontal',
        observer: true,
        observeParents: true,
        loop: true,
        spaceBetween: 30,
        allowTouchMove: false,
        navigation: {
            prevEl: '.favorite__button--prev2',
            nextEl: '.favorite__button--next2',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
                allowTouchMove: true,
                autoplay: {
                    delay: 5000,
                },
            },
            568: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });

    var favoriteSwiper3 = new Swiper('.favorite-container3', {
        // Optional parameters
        direction: 'horizontal',
        observer: true,
        observeParents: true,
        loop: true,
        spaceBetween: 30,
        allowTouchMove: false,
        navigation: {
            prevEl: '.favorite__button--prev3',
            nextEl: '.favorite__button--next3',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
                allowTouchMove: true,
                autoplay: true,
                navigation: false,
            },
            568: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });



    $('ul.tabs__caption').on('click', 'li:not(.tabs__active)', function() {
        $(this)
            .addClass('tabs__active').siblings().removeClass('tabs__active')
            .closest('div.tabs').find('div.tabs__content').removeClass('tabs__content--active').eq($(this).index()).addClass('tabs__content--active');
    });

    $(function() {
        $("nav.nav").on("click", "a:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("section.megamenu")
                .find(".tab-pane")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });

    $(function() {
        $(".cabinet__item").on("click", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.cabinet__main")
                .find(".cabinet__tab")
                .removeClass("act")
                .eq($(this).index())
                .addClass("act");
        });
    });

    $('.burger').on('click', function() {
        $('.megamenu').toggleClass('show')
        $('.burger-icon').toggleClass('burger-icon-active');
        $('body').toggleClass('lock');
    })
    $('.catalog__box').on('click', function(e) {
        $(this).toggleClass('catalog__box--active');
        $(this).siblings('.catalog__drop').slideToggle();
    })

    var $range = $(".js-range-slider"),
        $inputFrom = $(".js-input-from"),
        $inputTo = $(".js-input-to"),
        instance,
        min = 0,
        max = 1000000,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 200000,
        to: 800000,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function() {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function() {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });
    $('.trash__promo').on('click', function(e) {
        e.preventDefault();
        $(this).siblings().slideToggle();
    });

    $('#pay').on('click', function(e) {
        e.preventDefault();
        $(this).hide();
        $('.trash-payment').slideToggle();
    })
    $('#btn-address').on('click', function(e) {
        e.preventDefault();
        $(this).hide();
        $(this).siblings().slideToggle();
    });
    $('.trash__delete').on('click', function(e) {
        e.preventDefault();
        $(this).parent().hide('slow');
    });
});

$('#modal-open').on('click', function () {
    $('#modal').addClass('active');
    $('body').css('overflow', 'hidden');
});

$('#modal-close').on('click', function () {
    $('#modal').removeClass('active');
    $('body').css('overflow', '');
});

var minus = $('#minus'),
    plus = $('#plus'),
    amount = $('#amount');

var result = parseInt(amount.html());
    
minus.on('click', function (e) {
    e.preventDefault();
    result--;
    amount.html(result);
});


plus.on('click', function (e) {
    e.preventDefault();
    result++;
    amount.html(result);
});



