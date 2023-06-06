/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/button-top.js":
/*!******************************!*\
  !*** ./src/js/button-top.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function topPage() {
// Появление кнопки "наверх"
  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 500) {
      document.querySelector('.arrow-top').style.display = 'flex';
    } else {
      document.querySelector('.arrow-top').style.display = 'none';
    }
  });

  // Переход наверх по кнопке
  const btnToTop = document.querySelector('.arrow-top');

  btnToTop.addEventListener('click', () => {
    document.querySelector('.start').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topPage);


/***/ }),

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cartRender() {
  // Блок "Корзина"
  const cartBlock = document.querySelector('.header__cart-block');
  const cartBtn = document.querySelector('.icon-cart');
  const cartBlockClose = document.querySelector('.cart-block__close');

  cartBtn.addEventListener('click', () => {
    cartBlock.style.display = 'block';
  });

  cartBlockClose.addEventListener('click', () => {
    cartBlock.style.display = '';
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartRender);


/***/ }),

/***/ "./src/js/catalog.js":
/*!***************************!*\
  !*** ./src/js/catalog.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function catalogMobile() {
// Каталог
  const catalog = document.querySelector('.promo__menu-wrapper');
  const catalogClose = document.querySelector('.catalog__close');
  const catalogBtn = document.querySelector('.icon-catalog__img');

  catalogBtn.addEventListener('click', () => {
    catalog.classList.add('active');
  });

  catalogClose.addEventListener('click', () => {
    catalog.classList.remove('active');
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalogMobile);


/***/ }),

/***/ "./src/js/goods.js":
/*!*************************!*\
  !*** ./src/js/goods.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function callGoods() {
  // название товара
  const cardTitle = document.querySelectorAll('.new__card-title');

  for (let k = 0; k < cardTitle.length; k++) {
    if (cardTitle[k].trim().length > 37) {
      cardTitle[k].textContent = `${cardTitle[k].innerHTML.trim().substr(0, 37)}...`;
    }
  }

  // const url = 'db.json';
  const urlGoods = 'https://jsonplaceholder.typicode.com/photos';

  const createNode = (elem) => document.createElement(elem);

  const append = (parent, element) => parent.appendChild(element);

  const setData = (dataInfo) => {
    const newGoods = document.querySelector('.new__goods');
    dataInfo.forEach(({ id, url, title }) => {
      if (id <= 10) {
        const good = createNode('a');
        good.classList.add('new__card');
        good.setAttribute('href', 'good__page.html');
        append(newGoods, good);
        good.innerHTML = `
        <div class="new__card-img">
          <img src="${url}" alt="${title}">
        </div>
        <div class="new__card-price">
          ${id * 321} ₽
        </div>
        <div class="new__card-title">
            ${title}
        </div>
        <div class="new__card-art">
            Артикул: ${id * 1234}
        </div>
        <button class="new__card-cart">
            В корзину
        </button>
        `;
      }
    });

    const title = document.querySelectorAll('.new__card-title');
    title.forEach((element) => {
      if (element.textContent.trim().length > 37) {
        // eslint-disable-next-line no-param-reassign
        element.textContent = `${element.textContent.trim().substr(0, 37)}...`;
      }
    });
  };

  const addCart = function () {
    // Cart
    const plus = document.querySelectorAll('.new__card-cart');
    const cartProductsList = document.querySelector('.cart-content__list');
    const fullPrice = document.querySelector('.full__price');
    const cartBtnBig = document.querySelector('.cart__btn');
    const cartQuantity = document.querySelector('.header__cart span');
    // const cartContentProduct = cartProductsList.querySelectorAll('.cart__content-item');
    let price = 0;
    let counter = 1;

    const randomId = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const priceWithoutSpaces = (str) => str.replace(/ +/g, ' ');
    const normalPrice = (str) => String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '1');

    const plusFullPrice = function (currentPrice) {
      price += currentPrice;
      return price;
    };

    const minusFullPrice = function (currentPrice, counterProduct) {
      price -= currentPrice * counterProduct;
      return price;
    };

    const printFullPrice = () => {
      fullPrice.textContent = `Итого: ${+price} ₽`;
      if (price === 0) {
        document.querySelector('.cart-block__empty').style.display = 'block';
        fullPrice.style.display = 'none';
        cartBtnBig.style.display = '';
        document.querySelector('.cart-block__body').style.overflow = 'visible';
      }
    };

    const printQuantity = () => {
      const { length } = cartProductsList.children;
      cartQuantity.textContent = length;
    };

    const generateCartProdust = function (img, title, goodPrice, id) {
      return `
      <li class="cart__content-item">
          <article class="cart__content-product cart-product" data-id="${id}">
              <div class="cart-product__img">
                <img src="${img}" alt="" class = "cart-product__img">
              </div>
              <div class="cart__product-text">
                  <h3 class="cart__product-title">
                      ${title}
                  </h3>
                  <span class="cart__product-price"> ${normalPrice(goodPrice)}₽</span>
              </div>
          </article>
          <div class="cart__product-quantity">
  
            <span class="cart__product-count">1</span>
          
          </div>
      </li>
      `;
      // <button class="cart__product_plus">+</button>
      // <button class="cart__product_minus">-</button>
    };

    const deleteProducts = (productParent) => {
      // minus price
      const currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart__product-price').textContent), 10);
      const counterProduct = productParent.querySelector('.cart__product-count').textContent;
      minusFullPrice(currentPrice, counterProduct);
      // print full price
      printFullPrice();
      // remove product
      productParent.remove();
      // count quantity
      printQuantity();
    };

    plus.forEach((el) => {
      el.closest('.new__card').setAttribute('data-id', randomId());
      el.addEventListener('click', (e) => {
        e.preventDefault();
        cartBtnBig.style.display = 'flex';
        fullPrice.style.display = 'block';
        document.querySelector('.cart-block__empty').style.display = 'none';
        document.querySelector('.cart-block__body').style.overflow = 'auto';
        const self = e.currentTarget;
        const parent = self.closest('.new__card');
        const { id } = parent.dataset;
        const img = parent.querySelector('.new__card-img img').getAttribute('src');
        const title = parent.querySelector('.new__card-title').textContent;
        const priceString = parent.querySelector('.new__card-price').textContent;
        const priceNumber = parseInt(priceWithoutSpaces(priceString), 10);

        // sum
        plusFullPrice(priceNumber);
        // full price
        printFullPrice();

        // КОЛИЧЕСТВО ТОВАРОВ В КОРЗИНЕ
        let cartProduct = document.querySelectorAll('.cart-product');
        // const countCartProduct = document.querySelector('.cart__product-count');

        if (cartProduct.length === 0) {
          cartProductsList.insertAdjacentHTML('beforeend', generateCartProdust(img, title, priceNumber, id));
        }

        for (let i = 0; i < cartProduct.length; i++) {
          cartProduct = document.querySelectorAll('.cart-product');
          if (id === cartProduct[i].dataset.id) {
            counter = cartProduct[i].parentElement.querySelector('.cart__product-count').textContent;
            counter++;
            cartProduct[i].parentElement.querySelector('.cart__product-count').textContent = counter;
            break;
          } else if ((i === cartProduct.length - 1) && (id !== cartProduct[i].dataset.id)) {
            cartProductsList.insertAdjacentHTML('beforeend', generateCartProdust(img, title, priceNumber, id));
          }
        }

        // quantity
        printQuantity();

        // определить минус и плюс именно в event.target?
        // const minusQuantityProduct = document.querySelector('.cart__product_minus');
        // const plusQuantityProduct = document.querySelector('.cart__product_plus');

        // const minusProduct = (productParent) => {
        //   counter = +productParent.querySelector('.cart__product-count').textContent;
        //   document.querySelector('.cart__product-count').textContent = counter - 1;
        // };

        // const plusProduct = (productParent) => {
        //   counter = +productParent.querySelector('.cart__product-count').textContent;
        //   document.querySelector('.cart__product-count').textContent = counter + 1;
        // };

      // minusQuantityProduct.addEventListener('click', (event, productParent) => {
      //   const currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart__product-price').textContent), 10);
      //   minusProduct(event.target.closest('.cart__content-item'));
      //   minusFullPrice(currentPrice);
      //   printFullPrice();
      // });
      // plusQuantityProduct.addEventListener('click', (event) => {
      //   plusProduct(event.target.closest('.cart__content-item'));
      //   plusFullPrice();
      //   printFullPrice();
      // });
      });
    });

    cartProductsList.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.classList.contains('cart-product__delete') || event.target.classList.contains('product__delete-img')) {
        deleteProducts(event.target.closest('.cart__content-item'));
      }
    });
  };

  const getInfo = (link) => {
    fetch(link)
      .then((res) => res.json())
      .then((data) => setData(data))
      .then((data) => addCart(data))
      .catch((error) => console.error(error));
  };

  getInfo(urlGoods);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callGoods);


/***/ }),

/***/ "./src/js/hamburger.js":
/*!*****************************!*\
  !*** ./src/js/hamburger.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function buildHamburger() {
// Гамбургер
  const menu = document.querySelector('.menu-hamburger__list');
  const menuItem = document.querySelectorAll('.menu-hamburger__item');
  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('active');
  });

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('active');
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHamburger);


/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function mobileMenu() {
  // Многоуровневое меню на мобильных устройствах
  const winWidth = document.documentElement.clientWidth;

  const listItem = document.querySelectorAll('.promo__menu-item > a');
  const listSubmenuItems = document.querySelectorAll('.promo__submenu');

  // eslint-disable-next-line no-inner-declarations
  function subOpen(event) {
    event.preventDefault();
    const subMenu = event.target.nextElementSibling.nextElementSibling;
    subMenu.classList.add('active');
    const back = document.createElement('li');
    back.classList.add('back-to-menulist');
    back.innerHTML = '< Назад';
    const subList = subMenu.querySelector('ul');
    subList.insertAdjacentElement('afterbegin', back);

    const backToMenuList = document.querySelector('.back-to-menulist');

    backToMenuList.addEventListener('click', () => {
      listSubmenuItems.forEach(() => {
        subMenu.classList.remove('active');
      });
      subList.firstChild.remove();
    });
  }

  listItem.forEach((item) => {
    const opener = document.createElement('span');
    opener.innerHTML = '>>';
    item.insertAdjacentElement('afterend', opener);
    if (winWidth >= 769) {
      // Выпадающее меню
      listItem.forEach((element) => {
        element.addEventListener('mouseover', (event) => {
          if (document.querySelector('.promo__submenu.show') !== null) {
            document.querySelector('.promo__submenu.show').classList.remove('show');
          }
          event.target.classList.add('show');
          const listItemId = event.target.dataset.id;
          const submenuActive = document.querySelector(`div[data-id="${listItemId}"]`);
          submenuActive.classList.add('show');
        });
        listSubmenuItems.forEach((listSubmenuItem) => {
          listSubmenuItem.addEventListener('mouseleave', () => {
            if (document.querySelector('.promo__submenu.show') !== null) {
              document.querySelector('.promo__submenu.show').classList.remove('show');
            }
          });
        });
      });
    } else {
      listSubmenuItems.forEach((el) => {
        el.classList.remove('promo__submenu');
        el.classList.add('sub-menu');
      });
      item.addEventListener('click', subOpen);
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobileMenu);


/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function openModal() {
// Модальное окно с выбором города
  const modal = document.querySelector('.modal');
  const modalClose = document.querySelector('.modal__close');
  const modalTowns = document.querySelector('.modal__towns');
  const modalButton = document.querySelector('.header__menu-town');

  modalClose.addEventListener('click', () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
  });

  const openModalTown = () => {
    modal.classList.add('show');
  };

  modalTowns.addEventListener('click', (event) => {
    event.preventDefault();
    modalButton.textContent = event.target.textContent;
    localStorage.setItem('Населенный пункт', event.target.textContent);
    modal.classList.add('hide');
    modal.classList.remove('show');
  });

  if (localStorage.getItem('Населенный пункт') === null) {
    modalButton.textContent = 'Улан-Удэ';
    setTimeout(openModalTown, 3000);
  } else {
    modalButton.textContent = localStorage.getItem('Населенный пункт');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openModal);


/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function search() {
// Поиск
  const searchModal = document.querySelector('.promo__menu-search');
  const searchClose = document.querySelector('.search__close');
  const searchEmpty = document.querySelector('.search__empty');
  const searchHeaderBtn = document.querySelector('.header__list-item.icon-search');
  // const searchModal = document.querySelector('.promo__menu-search');

  searchHeaderBtn.addEventListener('click', () => {
    searchModal.style.display = 'block';
  });

  searchClose.addEventListener('click', () => {
    searchModal.style.display = 'none';
  });

  searchEmpty.addEventListener('click', () => {
    document.querySelector('.promo__menu-input input').value = '';
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);


/***/ }),

/***/ "./src/js/slider-good.js":
/*!*******************************!*\
  !*** ./src/js/slider-good.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sliderGoods() {
  // слайдер на странице товара
  const mainImg = document.querySelector('.card__images-img');
  const sliderImg = document.querySelectorAll('.card__slider-image');
  sliderImg.forEach((image) => {
    image.addEventListener('click', () => {
      mainImg.setAttribute('src', image.getAttribute('src'));
      const sliderImgActive = document.querySelector('.card__slider-image.active');
      sliderImgActive.classList.remove('active');
      image.classList.add('active');
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderGoods);


/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function buildSlider() {
// Слайдер

  // eslint-disable-next-line no-undef
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed: 300,
    spaceBetween: 25,
    autoHeight: false,
    slidesPerView: 3.3,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
    // when window width is >= 320px
      280: {
        slidesPerView: 1.3,
      },
      400: {
        slidesPerView: 1.7,
      },
      577: {
        slidesPerView: 2.2,
      },
      769: {
        slidesPerView: 2.1,
      },
      // when window width is >= 640px
      993: {
        slidesPerView: 2.6,
      },
      1200: {
        slidesPerView: 3.3,
      },
    },
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildSlider);


/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function buildTabs() {
  // Таб
  const tabs = document.querySelectorAll('.desc__tab'); // находим все табы
  // const text = document.querySelectorAll('.desc__text'); // находим все вкладки с текстом

  function tabClick(event) {
    document.querySelector('.desc__tab.active').classList.remove('active'); // убираем класс active у таба
    event.target.classList.add('active'); // добавляем класс active у нажатого таба
    document.querySelector('.desc__text.active').classList.remove('active'); // убираем класс active у вкладки с текстом
    const dataTab = event.target.dataset.tab; // находим дата-атрибут у активного таба
    const textActive = document.querySelector(`div[data-text="${dataTab}"]`); // находим вкладку с текстом с дата-атрибутом активного таба
    textActive.classList.add('active'); // добавляем класс active у вкладки с текстом
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', tabClick);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildTabs);


/***/ }),

/***/ "./src/js/town.js":
/*!************************!*\
  !*** ./src/js/town.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function chooseTown() {
// Выбор города
  const town = document.querySelector('.header__submenu');
  const modalButton = document.querySelector('.header__menu-town');

  // eslint-disable-next-line no-inner-declarations
  function openModal() {
    town.classList.toggle('open');
  }

  modalButton.addEventListener('click', openModal);

  function closeModal() {
    town.classList.toggle('open');
  }

  document.addEventListener('click', (e) => {
    if (e.target !== modalButton && town.classList.contains('open')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && town.classList.contains('open')) {
      closeModal();
    }
  });

  town.addEventListener('click', (event) => {
    event.preventDefault();
    modalButton.textContent = event.target.textContent;
    localStorage.setItem('Населенный пункт', event.target.textContent);
    closeModal();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chooseTown);


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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ "./src/js/search.js");
/* harmony import */ var _catalog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog.js */ "./src/js/catalog.js");
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.js */ "./src/js/slider.js");
/* harmony import */ var _goods_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goods.js */ "./src/js/goods.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.js */ "./src/js/modal.js");
/* harmony import */ var _town_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./town.js */ "./src/js/town.js");
/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.js */ "./src/js/cart.js");
/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hamburger.js */ "./src/js/hamburger.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu.js */ "./src/js/menu.js");
/* harmony import */ var _button_top_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./button-top.js */ "./src/js/button-top.js");
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs.js */ "./src/js/tabs.js");
/* harmony import */ var _slider_good_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slider-good.js */ "./src/js/slider-good.js");


/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
// import * as flsFunction from './modules/functions';

// flsFunction.isWebp();














try {
  (0,_search_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_catalog_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_slider_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_goods_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modal_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
} catch (e) {
  // console.log(e);
} finally {
  (0,_town_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_cart_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_hamburger_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_button_top_js__WEBPACK_IMPORTED_MODULE_9__["default"])();

  // Accordion
  const accord = document.getElementsByClassName('footer__accordion');
  let j;

  // eslint-disable-next-line no-plusplus
  for (j = 0; j < accord.length; j++) {
    accord[j].addEventListener('click', (event) => {
      event.target.classList.toggle('active');
      const panel = event.target.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  }
}

(0,_tabs_js__WEBPACK_IMPORTED_MODULE_10__["default"])();
(0,_slider_good_js__WEBPACK_IMPORTED_MODULE_11__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map