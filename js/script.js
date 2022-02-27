import modal from './modules/modal';
import data from './modules/data';
import classes from './modules/classes';
import form from './modules/form';
import slider from './modules/slider';
import loader from './modules/loader';
import {openModal} from './modules/modal'

window.addEventListener("DOMContentLoaded", ()=>{
    // const modal = require('./modules/modal'),
    //   data = require('./modules/data'),
    //   classes = require('./modules/classes'),
    //   form = require('./modules/form'),
    //   slider = require('./modules/slider'),
    //   loader = require('./modules/loader');
  const modalTimer = setTimeout(()=>openModal('.modal', modalTimer), 5000);


      modal('[data-modal]', '.modal', modalTimer);
      data();
      classes();
      form(modalTimer);
      slider();
      loader();
})
