import { animate } from "./helpers";

const modal = () => {
   const popupBtn = document.querySelectorAll('.popup-btn');
   const modal = document.querySelector('.popup');
   const popupContent = document.querySelector('.popup-content');

   popupBtn.forEach(btn => btn.addEventListener('click', () => {
      if (window.innerWidth >= 768) {
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
      }
   }));

   modal.addEventListener('click', (e) => {
      if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
         modal.style.display = "none";
      }
   });

};
export default modal;