const calc = () => {
   const num1 = document.querySelector('.calc-item.calc-square');
   const num2 = document.querySelector('.calc-item.calc-count');
   const num3 = document.querySelector('.calc-item.calc-day');
   num1.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
   });
   num2.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
   });
   num3.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
   });
};
export default calc;