const modal = () => {
   const popupBtn = document.querySelectorAll('.popup-btn');
   const modal = document.querySelector('.popup');
   const popupContent = document.querySelector('.popup-content');
   let count = 0;
   let idInterval;

   const animate = () => {
      count++;
      idInterval = requestAnimationFrame(animate);
      if (count < 100 && screen.availWidth >= 768) {
         popupContent.style.top = count + 'px';
      } else {
         cancelAnimationFrame(idInterval);
      }
   };

   popupBtn.forEach(btn => btn.addEventListener('click', () => {
      idInterval = requestAnimationFrame(animate);
      modal.style.display = "block";
      count = 0;
   }));

   modal.addEventListener('click', (e) => {
      if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
         modal.style.display = "none";
      }
   });
};
export default modal;