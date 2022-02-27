import {openModal, hideModal} from './modal'

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
   openModal('.modal', modalTimer);

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
      hideModal('.modal', modalTimer);
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

export default form;