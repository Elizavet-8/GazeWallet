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
    $("#application-modal").wgModal({
        triggerElement: '.application-open-modal',
        onBeforeOpen: function (e) {
            $('body').toggleClass('overflow');
        },
        onBeforeClose: function (e) {
            $('body').removeClass('overflow');
        },
    });
    $("#opportunities-modal").wgModal({
        triggerElement: '.opportunities-open-modal',
        onBeforeOpen: function (e) {
            $('body').toggleClass('overflow');
        },
        onBeforeClose: function (e) {
            $('body').removeClass('overflow');
        },
    });
    $("#success-modal").wgModal({
        onBeforeOpen: function (e) {
            $('body').toggleClass('overflow');
        },
        onBeforeClose: function (e) {
            $('body').removeClass('overflow');
        },
    });
    $("#error-modal").wgModal({
        onBeforeOpen: function (e) {
            $('body').toggleClass('overflow');
        },
        onBeforeClose: function (e) {
            $('body').removeClass('overflow');
        },
    });


    //телефон
    window.addEventListener("DOMContentLoaded", function () {
        [].forEach.call(document.querySelectorAll('.tel'), function (input) {
            var keyCode;

            function mask(event) {
                event.keyCode && (keyCode = event.keyCode);
                var pos = this.selectionStart;
                if (pos < 3) event.preventDefault();
                var matrix = "+7 (___) ___-__-__",
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, ""),
                    new_value = matrix.replace(/[_\d]/g, function (a) {
                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                    });
                i = new_value.indexOf("_");
                if (i != -1) {
                    i < 5 && (i = 3);
                    new_value = new_value.slice(0, i)
                }
                var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                    function (a) {
                        return "\\d{1," + a.length + "}"
                    }).replace(/[+()]/g, "\\$&");
                reg = new RegExp("^" + reg + "$");
                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
                if (event.type == "blur" && this.value.length < 5) this.value = ""
            }

            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
            input.addEventListener("keydown", mask, false)

        });

    });

    //валидация
    $("#application-form").validate({
        rules: {
            name: {
                required: true,
            },
            phone: {
                required: true,
                minlength: 16
            },
            email: {
                email: true
            },
        },
        messages: {
            name: {
                required: 'Поле обязательно для заполнения',
            },
            phone: {
                required: 'Поле обязательно для заполнения',
                minlength: 'Введите номер в формате "+7 (123) 456-78-90"'
            },
            email: {
                email: 'Введите корректный email'
            },
        },
        submitHandler: function () {
            let modalClose = $("#application-modal").wgModal();
            $('#application-modal')(function () {
                modalClose.closeModal();
            });

            let modal = $("#success-modal").wgModal();

            $('#success-modal')(function () {
                modal.openModal();
            });
        }
    });
    $("#opportunities-form").validate({
        rules: {
            name: {
                required: true,
            },
            phone: {
                required: true,
                minlength: 16
            },
            email: {
                email: true
            },
        },
        messages: {
            name: {
                required: 'Поле обязательно для заполнения',
            },
            phone: {
                required: 'Поле обязательно для заполнения',
                minlength: 'Введите номер в формате "+7 (123) 456-78-90"'
            },
            email: {
                email: 'Введите корректный email'
            },
        }
    });
    $("#questions-form").validate({
        rules: {
            name: {
                required: true,
            },
            phone: {
                required: true,
                minlength: 16
            },
            email: {
                email: true
            },
            city: {
                required: true,
            },
        },
        messages: {
            name: {
                required: 'Поле обязательно для заполнения',
            },
            phone: {
                required: 'Поле обязательно для заполнения',
                minlength: 'Введите номер в формате "+7 (123) 456-78-90"'
            },
            email: {
                email: 'Введите корректный email'
            },
            city: {
                required: 'Поле обязательно для заполнения',
            },
        }
    });

    //аккардион

    $(function () {
        // (Optional) Active an item if it has the class "active"
        $(".materials-accordion__item.active").children(".materials-accordion__body").slideDown();

        $(".materials-accordion__item").click(function () {
            // Cancel the siblings
            $(this).siblings(".materials-accordion__item").removeClass("active").children(".materials-accordion__body").slideUp();
            // Toggle the item
            $(this).toggleClass("active").children(".materials-accordion__body").slideToggle("ease-out");
        });
    });

    //видео
    function findVideos() {
        let videos = document.querySelectorAll('.video');

        for (let i = 0; i < videos.length; i++) {
            setupVideo(videos[i]);
        }
    }

    function setupVideo(video) {
        let link = video.querySelector('.video__link');
        let media = video.querySelector('.video__media');
        let button = video.querySelector('.video__button');
        let id = parseMediaURL(media);

        video.addEventListener('click', () => {
            let iframe = createIframe(id);

            link.remove();
            button.remove();
            video.appendChild(iframe);
        });

        link.removeAttribute('href');
        video.classList.add('video--enabled');
    }

    function parseMediaURL(media) {
        let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
        let url = media.src;
        let match = url.match(regexp);

        return match[1];
    }

    function createIframe(id) {
        let iframe = document.createElement('iframe');

        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('src', generateURL(id));
        iframe.classList.add('video__media');

        return iframe;
    }

    function generateURL(id) {
        let query = '?rel=0&showinfo=0&autoplay=1';

        return 'https://www.youtube.com/embed/' + id + query;
    }

    findVideos();

})

