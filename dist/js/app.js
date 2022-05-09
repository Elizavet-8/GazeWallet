/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  //бургер меню
  $('.header__burger, .overlay').click(function () {
    $('.header').toggleClass('show');
    $('body').toggleClass('overflow');
  });
  $("#nav").on("click", "a", function (event) {
    $('.header').removeClass('show');
    $('body').removeClass('overflow');
  }); //плавный скролл

  $("body").on("click", "a[href^=\"#\"]", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  }); //модалки

  $("#application-modal").wgModal({
    triggerElement: '.application-open-modal',
    onBeforeOpen: function onBeforeOpen(e) {
      $('body').toggleClass('overflow');
    },
    onBeforeClose: function onBeforeClose(e) {
      $('body').removeClass('overflow');
    }
  });
  $("#opportunities-modal").wgModal({
    triggerElement: '.opportunities-open-modal',
    onBeforeOpen: function onBeforeOpen(e) {
      $('body').toggleClass('overflow');
    },
    onBeforeClose: function onBeforeClose(e) {
      $('body').removeClass('overflow');
    }
  });
  $("#success-modal").wgModal({
    onBeforeOpen: function onBeforeOpen(e) {
      $('body').toggleClass('overflow');
    },
    onBeforeClose: function onBeforeClose(e) {
      $('body').removeClass('overflow');
    }
  });
  $("#error-modal").wgModal({
    onBeforeOpen: function onBeforeOpen(e) {
      $('body').toggleClass('overflow');
    },
    onBeforeClose: function onBeforeClose(e) {
      $('body').removeClass('overflow');
    }
  }); //телефон

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
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
        i = new_value.indexOf("_");

        if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i);
        }

        var reg = matrix.substr(0, this.value.length).replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
    });
  }); //валидация

  $("#application-form").validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true,
        minlength: 16
      },
      email: {
        email: true
      }
    },
    messages: {
      name: {
        required: 'Поле обязательно для заполнения'
      },
      phone: {
        required: 'Поле обязательно для заполнения',
        minlength: 'Введите номер в формате "+7 (123) 456-78-90"'
      },
      email: {
        email: 'Введите корректный email'
      }
    },
    submitHandler: function submitHandler() {
      var modalClose = $("#application-modal").wgModal();
      $('#application-modal')(function () {
        modalClose.closeModal();
      });
      var modal = $("#success-modal").wgModal();
      $('#success-modal')(function () {
        modal.openModal();
      });
    }
  });
  $("#opportunities-form").validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true,
        minlength: 16
      },
      email: {
        email: true
      }
    },
    messages: {
      name: {
        required: 'Поле обязательно для заполнения'
      },
      phone: {
        required: 'Поле обязательно для заполнения',
        minlength: 'Введите номер в формате "+7 (123) 456-78-90"'
      },
      email: {
        email: 'Введите корректный email'
      }
    }
  });
  $("#questions-form").validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true,
        minlength: 16
      },
      email: {
        email: true
      },
      city: {
        required: true
      }
    },
    messages: {
      name: {
        required: 'Поле обязательно для заполнения'
      },
      phone: {
        required: 'Поле обязательно для заполнения',
        minlength: 'Введите номер в формате "+7 (123) 456-78-90"'
      },
      email: {
        email: 'Введите корректный email'
      },
      city: {
        required: 'Поле обязательно для заполнения'
      }
    }
  });
  $("#opportunities-gaze-form").validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true,
        minlength: 16
      },
      email: {
        email: true
      },
      city: {
        required: true
      }
    },
    messages: {
      name: {
        required: 'Поле обязательно для заполнения'
      },
      phone: {
        required: 'Поле обязательно для заполнения',
        minlength: 'Введите номер в формате "+7 (123) 456-78-90"'
      },
      email: {
        email: 'Введите корректный email'
      },
      city: {
        required: 'Поле обязательно для заполнения'
      }
    }
  }); //аккардион

  $(".materials-accordion__head.active").next(".materials-accordion__body").slideDown();
  $('.materials-accordion').on('click', '.materials-accordion__head', function (e) {
    e.preventDefault();
    $(this).toggleClass("active").next('.materials-accordion__body').not(':animated').slideToggle();
  }); //видео

  function findVideos() {
    var videos = document.querySelectorAll('.video');

    for (var i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }

  function setupVideo(video) {
    var link = video.querySelector('.video__link');
    var media = video.querySelector('.video__media');
    var button = video.querySelector('.video__button');
    var id = parseMediaURL(media);
    video.addEventListener('click', function () {
      var iframe = createIframe(id);
      link.remove();
      button.remove();
      video.appendChild(iframe);
    });
    link.removeAttribute('href');
    video.classList.add('video--enabled');
  }

  function parseMediaURL(media) {
    var regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    var url = media.src;
    var match = url.match(regexp);
    return match[1];
  }

  function createIframe(id) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');
    return iframe;
  }

  function generateURL(id) {
    var query = '?rel=0&showinfo=0&autoplay=1';
    return 'https://www.youtube.com/embed/' + id + query;
  }

  findVideos();
});

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgazewallet"] = self["webpackChunkgazewallet"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/sass/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;