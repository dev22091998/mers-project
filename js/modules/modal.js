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

export default modal;
export {openModal};
export {hideModal};