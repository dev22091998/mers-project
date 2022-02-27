/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/classes.js":
/*!*******************************!*\
  !*** ./js/modules/classes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function classes(){
     // // Classes=================================================
  const getResource = async (url)=>{
    const res = await fetch(url);
    
    if(!res.ok){
      throw new Error(`Couldnt fetch${url}, status ${res.status}`)
    }
    return await res.json()
  }

  class CarCard{
    constructor(src, alt, title, desc, price, parentSelector, ...classes){
      this.src = src,
      this.alt = alt,
      this.title = title,
      this.desc = desc,
      this.price = price,
      this.parent = document.querySelector(parentSelector)
      // this.transform = 10500,
      // this.changeToUSD()
    }
    // changeToUSD(){
    //   this.price = Math.floor(this.price / this.transform)
    // }
    render(){
      const element = document.createElement('div');
      element.innerHTML = `
      <div class="menu__item">
        <img src=${this.src} alt=${this.alt} />
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.desc}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Price:</div>
          <div class="menu__item-total"><span>${this.price}</span> $</div>
        </div>
      </div>`;
          this.parent.append(element)
    }
  }
  axios.get('http://localhost:3000/menu')
  .then(data=>{
    const objects = data.data
    objects.forEach(({img, altImg, title, descr, price})=>{
      new CarCard(img, altImg, title, descr, price, '.menu .container').render()
    })
    // data.forEach(obj=>{
    //   new CarCard(obj.img, obj.altImg, obj.title, obj.descr, obj.price, '.menu .container').render()
    // })
  })
  // getResource('http://localhost:3000/menu')
  // .then(data=>{
  //   data.forEach(obj=>{
  //     new CarCard(obj.img, obj.altImg, obj.title, obj.descr, obj.price, '.menu .container').render()
  //   })
  // })
  // new CarCard(
  //   'img/tabs/1.jpg',
  //   'vegy',
  //   '2021 Mercedes-Benz C-Class',
  //   `The 2021 Mercedes-Benz C-Class finishes in the top half of our
  //   luxury small car rankings. It's powerful and upscale, but it has
  //   so-so handli...`,
  //   125000000,
  //   '.menu .container'
  // ).render();
  // new CarCard(
  //   'img/tabs/3.jpg',
  //   'elite',
  //   '2021 Mercedes-Benz CLA-Class',
  //   `The 2021 Mercedes-Benz CLA offers punchy powertrains, an elegant
  //   interior, and easy-to-use tech features, but it also has a firm
  //   ride and a ..`,
  //   432000000,
  //   '.menu .container'
  // ).render();
  // new CarCard(
  //   'img/tabs/2.jpg',
  //   'post',
  //   '2021 Mercedes-Benz SCLA-Class',
  //   `The German luxury car-manufacturer has been around for more than a
  //   century, having elegantly drifted rough curves of automobile`,
  //   436000000,
  //   '.menu .container'
  // ).render();
  
} 

// module.exports = classes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (classes);

/***/ }),

/***/ "./js/modules/data.js":
/*!****************************!*\
  !*** ./js/modules/data.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function data(){
     // DATA===================================================================

  const dedline = '2022-03-20';
  document.querySelector('[data-finish]').innerHTML = `Discount Will Finish ${dedline}`;

  function getTime(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(total / (1000 * 60 * 60 * 24)),
          hours = Math.floor(total / (1000 * 60 * 60) % 24),
          minutes = Math.floor((total / 1000 / 60) % 60),
          seconds = Math.floor((total / 1000) % 60);
    return{
      'total': total,
      'days': days,
      'minutes': minutes,
      'seconds': seconds,
      'hours': hours
    }
  }

  function getZero(num){
    if(num >= 0 && num < 10){
      return '0' + num
    } else {
      return num
    }
  }

  function setClock(selected, endtime){
    const timer = document.querySelector(selected),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = document.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
    updateClock();
    
    function updateClock(){
      const time = getTime(endtime);
      days.innerHTML = getZero(time.days);
      hours.innerHTML = getZero(time.hours);
      minutes.innerHTML = getZero(time.minutes);
      seconds.innerHTML = getZero(time.seconds);
      if(time.total <= 0){
        clearInterval(timeInterval);
      }
    }
  }
  setClock('.timer', dedline);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");


function form(modalTimer){
     // FORM POST DATE==================================================================
     const forms = document.querySelectorAll('form'),
     message = {
       loading: 'loading',
       success: 'Murojatingiz yetkazildi',
       failure: "ERROR"
     };
 forms.forEach(item=>{
   bindPostDate(item)
 })

 const postDate = async(url, data) => {
   const res = await fetch(url, {
     method: 'POST',
     headers: {
       'Content-type': 'application/json'
     }, 
     body: data
   })
   return await res.json()
 }
 function bindPostDate(form){
   form.addEventListener('submit', (e) => {
     e.preventDefault();
     const statusMessage = document.createElement('div');
       statusMessage.textContent = message.loading;
       form.append(statusMessage);
       // const request = new XMLHttpRequest();
       // request.open('POST', 'server.php');
       const formData = new FormData(form);
       const  object = {};
       formData.forEach(function(value, key){
         object[key] = value
       })
       // request.send(formData);
       
       // fetch('server.php', {
       //   method: 'POST',
       //   headers: {'Content-type': 'application/json'},
       //   body: JSON.stringify(object)
       // }).then(data => data.text())
       postDate('http://localhost:3000/', JSON.stringify(object))
         .then(data => {
           console.log(data)
          //  statusMessage.textContent = message.success;
          showThanksModal(message.success);
             statusMessage.remove();
         })
         .catch(()=>{
          //  statusMessage.textContent = message.failure
          showThanksModal(message.failure)
         })
         .finally(()=>{
           form.reset();
         })
       // request.addEventListener('load', () => {
       //   if(request.status === 200){
       //     console.log(request.response)
       //     statusMessage.textContent = message.success;
       //     form.reset();
       //     setTimeout(()=>{
       //       statusMessage.remove();
       //     }, 4000)
       //   } else {
       //     statusMessage.textContent = message.failure
       //   }
       // })
   })
 };
 function showThanksModal(message){
   const prevModalDialog = document.querySelector('.modal__dialog');
   prevModalDialog.classList.add('hide');
   (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimer);

   const thanksModal = document.createElement('div');
   thanksModal.classList.add('modal__dialog');
   thanksModal.innerHTML = `
    <div class="modal__content">
      <div class="modal__close" data-close>x</div>
      <div class="modal__title">${message}</div>
    </div>
   `;

   document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.hideModal)('.modal', modalTimer);
    }, 4000);
 }
 // fetch('https://jsonplaceholder.typicode.com/users/', {
 //   method: 'POST',
 //   headers: {'Content-type': 'application/json'},
 //   body: JSON.stringify({name:'Abdurakhmon'})
 // })
 // .then(response => response.json())
 // .then(json => console.log(json))
 // console.log('first');

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./js/modules/loader.js":
/*!******************************!*\
  !*** ./js/modules/loader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loader(){
          // LOADER--------------------------------------------
  const loader = document.querySelector('.loader');
  setTimeout(function(){
    loader.style.opacity = '0';
    setTimeout(function(){
      loader.style.display = 'none';
    }, 1000);
  }, 2000);


  const tabs = document.querySelectorAll('.tabheader__item'),
      tabContent = document.querySelectorAll('.tabcontent'),
      tabHeader = document.querySelector('.tabheader__items');

  function hideTabContent(){
    tabs.forEach(item =>{
      item.classList.remove('tabheader__item_active');
    });
    tabContent.forEach(item =>{
      item.style.display = 'none'
    })
  }

  function showTabContent(i = 0){
    tabContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active')
    // console.log(tabs);
  }
  hideTabContent();
  showTabContent();

  tabHeader.addEventListener('click', (e)=>{
    if(e.target && e.target.classList.contains('tabheader__item')){
      tabs.forEach((item, i) =>{
        if(e.target == item){
          hideTabContent();
          showTabContent(i);
        }
      })
    }
  })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "hideModal": () => (/* binding */ hideModal)
/* harmony export */ });
function openModal(modalSelector, modalTimer){
  modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  console.log(modalTimer)
  if(modalTimer){
    clearInterval(modalTimer)
  }
  }
  
  function hideModal(modalSelector){
  modal = document.querySelector(modalSelector);
  modal.classList.remove('show');
  modal.classList.add('hide');
  document.body.style.overflow = '';
  }

function modal(triggleModal, modalSelector, modalTimer){
     // MODAL---------------------------------------------------------------------
  const modalBtn = document.querySelectorAll(triggleModal),
  modal = document.querySelector(modalSelector),
  closeModal = document.querySelector('[data-close]');

modalBtn.forEach(btn => {
btn.addEventListener('click',()=> openModal(modalSelector, modalTimer))
})

closeModal.addEventListener('click',()=> hideModal(modalSelector));

modal.addEventListener('click', (e) => {
if(e.target === modal){
hideModal(modalSelector)
}
})

console.log(window.pageYOffset);
console.log(document.documentElement.clientHeight + window.pageYOffset);
console.log(document.documentElement.scrollHeight);
function showMyModalByScroll(){
if(window.pageYOffset + document.documentElement.clientHeight + 1 >= document.documentElement.scrollHeight){
openModal(modalSelector, modalTimer);
window.removeEventListener('scroll', showMyModalByScroll)
}
}

window.addEventListener('scroll', showMyModalByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider(){
    // Slider======================================================

    // const slides = document.querySelectorAll('.offer__slide'),
    //       prev = document.querySelector('.offer__slider-prev'),
    //       next = document.querySelector('.offer__slider-next'),
    //       current = document.querySelector('#current'),
    //       total = document.querySelector('#total');
    // let slideIndex = 1;
    // show(slideIndex)
    // function show(s){
    //   if(s > slides.length){
    //     slideIndex = 1;
    //   }
    //   if(s < 1){
    //     slideIndex = slides.length;
    //   }
    //   slides.forEach(item => item.style.cssText = 'display: none;');
    //   slides[slideIndex - 1].style.display = 'block';
    //   if(slides.length < 10){
    //     current.textContent = '0' + slideIndex
    //   } else {
    //     current.textContent = slideIndex
    //   }
    // }
    // function slidePlus(s){
    //   show(slideIndex += s)
    // }
    // prev.addEventListener('click', () => {
    //   slidePlus(-1)
    // });
    // next.addEventListener('click', () => {
    //   slidePlus(1);
    // })

    // Slider-2=============================

    const slides = document.querySelectorAll('.offer__slide'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          current = document.querySelector('#current'),
          total = document.querySelector('#total'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          width = window.getComputedStyle(slidesWrapper).width,
          slidesField = document.querySelector('.offer__slider-inner');
    let slideIndex = 1,
        offset = 0;
    if(slides.length < 10){
      total.textContent = `0${slides.length}`;
      current.textContent = `0${slideIndex}`;
    } else {
      total.textContent = slides.length;
      current.textContent = slideIndex
    };

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '.5s all';
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
      slide.style.width = width;
    });

    next.addEventListener('click', () => {
      if(offset == (+width.slice(0, width.length - 2) * (slides.length - 1))){
        offset = 0;
      } else {
        offset += +width.slice(0,  width.length - 2)
      }
      slidesField.style.transform = `translateX(-${offset}px)`
      if(slideIndex == slides.length){
        slideIndex = 1
      } else {
        slideIndex++
      }
      if(slides.length < 10){
        current.textContent = `0${slideIndex}`
      } else {
        current.textContent = slideIndex
      }
    })

    prev.addEventListener('click', () => {
      if(offset == 0){
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
      } else {
        offset -= +width.slice(0,  width.length - 2)
      }
      slidesField.style.transform = `translateX(-${offset}px)`
      if(slideIndex == 1){
        slideIndex = slides.length
      } else {
        slideIndex--
      }
      if(slides.length < 10){
        current.textContent = `0${slideIndex}`
      } else {
        current.textContent = slideIndex;
      }
    })

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

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
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/data */ "./js/modules/data.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./js/modules/classes.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/loader */ "./js/modules/loader.js");








window.addEventListener("DOMContentLoaded", ()=>{
    // const modal = require('./modules/modal'),
    //   data = require('./modules/data'),
    //   classes = require('./modules/classes'),
    //   form = require('./modules/form'),
    //   slider = require('./modules/slider'),
    //   loader = require('./modules/loader');
  const modalTimer = setTimeout(()=>(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimer), 5000);


      (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-modal]', '.modal', modalTimer);
      (0,_modules_data__WEBPACK_IMPORTED_MODULE_1__["default"])();
      (0,_modules_classes__WEBPACK_IMPORTED_MODULE_2__["default"])();
      (0,_modules_form__WEBPACK_IMPORTED_MODULE_3__["default"])(modalTimer);
      (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
      (0,_modules_loader__WEBPACK_IMPORTED_MODULE_5__["default"])();
})

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map