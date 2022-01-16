const slider = () => {
   const portfolioBlock = document.querySelector('.portfolio-content');
   const portfolioItems = document.querySelectorAll('.portfolio-item');
   const dots = document.querySelectorAll('.dot');

   const timeInterval = 2000;

   let currentSlide = 0;
   let interval;

   dots.forEach(block => block.remove());

   let uList = document.querySelector('.portfolio-dots');
   let listElement = document.createElement('li');
   listElement.classList = 'dot';

   const prevSlide = (elems, index, strClass) => {
      elems[index].classList.remove(strClass);
   };

   const nextSlide = (elems, index, strClass) => {
      elems[index].classList.add(strClass);
   };

   const autoSlide = () => {
      prevSlide(portfolioItems, currentSlide, 'portfolio-item-active');
      prevSlide(dots, currentSlide, 'dot-active');
      currentSlide++;

      if (currentSlide >= portfolioItems.length) {
         currentSlide = 0;
      }
      nextSlide(portfolioItems, currentSlide, 'portfolio-item-active');
      nextSlide(dots, currentSlide, 'dot-active');
   };

   const startSlide = (timer = 1500) => {
      interval = setInterval(autoSlide, timer);
   };

   const stopSlide = () => {
      clearInterval(interval);
   };
   portfolioBlock.addEventListener('click', (e) => {
      e.preventDefault();

      if (!e.target.matches('.dot, .portfolio-btn')) {
         return;
      }

      prevSlide(portfolioItems, currentSlide, 'portfolio-item-active');
      prevSlide(dots, currentSlide, 'dot-active');
      if (e.target.matches('#arrow-right')) {
         currentSlide++;
         uList.appendChild(listElement);
      } else if (e.target.matches('#arrow-left')) {
         currentSlide--;
      } else if (e.target.classList.contains('dot')) {
         dots.forEach((dot, index) => {
            if (e.target === dot) {
               currentSlide = index;
            }
         });
      }

      if (currentSlide >= portfolioItems.length) {
         currentSlide = 0;
      }

      if (currentSlide < 0) {
         currentSlide = portfolioItems.length - 1;
      }

      nextSlide(portfolioItems, currentSlide, 'portfolio-item-active');
      nextSlide(dots, currentSlide, 'dot-active');
   });

   portfolioBlock.addEventListener('mouseenter', (e) => {
      if (e.target.matches('.dot, .portfolio-btn')) {
         return;
      }
   }, true);

   portfolioBlock.addEventListener('mouseleave', (e) => {
      if (e.target.matches('.dot, .portfolio-btn')) {
         return;
      }
   }, true);



   // let uList = document.querySelector('.portfolio-dots');
   //  let arr = [];
   // let listElement = document.createElement('li').classList = 'dot';
   //listElement.classList = 'dot';
   //for (let i = 0; i < portfolioItems.length; i++) {
   //arr = arr[i];
   //  arr.push(listElement);
   //let b = listElement.classList.add('dot')[i];
   //   arr.unshift(listElement.classList.add('dot')[i]);
   //  arr[i] = listElement.classList.add('dot');
   // console.log(arr);
   //  uList.prepend(arr);

   // }
   //console.log(arr);

   //listElement.classList.add('dot');
   //arr.push(listElement);




};

export default slider;