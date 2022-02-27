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

export default slider;