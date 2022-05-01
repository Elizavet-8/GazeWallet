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

