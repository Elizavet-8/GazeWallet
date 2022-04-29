document.addEventListener("DOMContentLoaded", function () {
    //бургер меню
    $('.header__burger, .overlay').click(function () {
        $('.header').toggleClass('show');
        $('body').toggleClass('overflow');
    });
    $("#nav").on("click", "a", function (event) {
        $('.header').removeClass('show');
        $('body').removeClass('overflow');
    });

    //плавный скролл
    $("body").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    //модалки
    // $(document).ready(function () {
    //     $("#application-modal").wgModal({
    //         triggerElement: '#application-open-modal',
    //         theme: "info"
    //     });
    // });

    //форма заявки

    //телефон
    function phoneMask() {
        var num = $(this).val().replace(/\D/g, '');
        $(this).val('+7 (' + num.substring(0, 3) + ') ' + num.substring(3, 6) + '-' + num.substring(6, 8) + '-' + num.substring(8, 10));
    }

    $('[type="tel"]').keyup(phoneMask);

    //аккардион

    $(function() {
        // (Optional) Active an item if it has the class "active"
        $(".materials-accordion__item.active").children(".materials-accordion__body").slideDown();

        $(".materials-accordion__item").click(function() {
            // Cancel the siblings
            $(this).siblings(".materials-accordion__item").removeClass("active").children(".materials-accordion__body").slideUp();
            // Toggle the item
            $(this).toggleClass("active").children(".materials-accordion__body").slideToggle("ease-out");
        });
    });

})

