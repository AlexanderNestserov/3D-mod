import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import form from './modules/form';
import calc from './modules/calc';
import sliderSwiper from './modules/sliderSwiper';
import tabs from './modules/tabs';
import slider from './modules/slider';
import flatCalc from './modules/flatCalc';
import sendForm from './modules/sendForm';

timer('20 juny 2022');
menu();
modal();
form();
calc();
sliderSwiper();
tabs();
slider();
flatCalc(100);
sendForm({
   formId: 'form1',
   someElem: [
      {
         type: 'block',
         id: 'total'
      }
   ],
});