import Swiper from 'swiper';

const sliderSwiper = () => {
   const slider = new Swiper('.swiper', {
      slidesPerView: 1,
      freeMode: true,
      loop: true,
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      breakpoints: {
         600: {
            slidesPerView: 2,
         },
         900: {
            slidesPerView: 3,

         },
      }
   });
};
export default sliderSwiper;