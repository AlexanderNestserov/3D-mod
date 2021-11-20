import { animate } from "./helpers";

const modal = () => {
   const popupBtn = document.querySelectorAll('.popup-btn');
   const modal = document.querySelector('.popup');
   const popupContent = document.querySelector('.popup-content');
   let count = 0;
   let idInterval;

   /* const animate = () => {
       count++;
       idInterval = requestAnimationFrame(animate);
       if (count < 100 && screen.availWidth >= 768) {
          popupContent.style.top = count + 'px';
       } else {
          cancelAnimationFrame(idInterval);
       }
    };*/

   popupBtn.forEach(btn => btn.addEventListener('click', () => {
      //idInterval = requestAnimationFrame(animate);
      animate({

         duration: 1000,
         timing(x, timeFraction) {
            return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
         },
         draw(progress) {
            modal.style.display = "block";
            popupContent.style.left = (40 * progress) + '%';
            popupContent.style.top = (25 * progress) + '%';
            popupContent.style.opacity = progress;
         }
      });
      //modal.style.display = "block";
      //count = 0;
   }));

   modal.addEventListener('click', (e) => {
      if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
         modal.style.display = "none";
      }
   });
};
export default modal;