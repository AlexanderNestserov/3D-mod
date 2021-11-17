const form = () => {
   const formName1 = document.getElementById('form1-name');
   const formEmail1 = document.getElementById('form1-email');
   const formPhone1 = document.getElementById('form1-phone');
   const form1 = document.getElementById('form1');

   const formName2 = document.getElementById('form2-name');
   const formEmail2 = document.getElementById('form2-email');
   const formPhone2 = document.getElementById('form2-phone');
   const form2 = document.getElementById('form2');

   const formName3 = document.getElementById('form3-name');
   const formEmail3 = document.getElementById('form3-email');
   const formPhone3 = document.getElementById('form3-phone');
   const form3 = document.getElementById('form3');

   form1.addEventListener('input', (e) => {
      e.preventDefault();
      formName1.value = formName1.value.replace(/[^\s\-\а-яА-Я]+/g, "");
      formEmail1.value = formEmail1.value.replace(/[^\@\-\_\!\.\~\*\'\w]+/gi, "");
      formPhone1.value = formPhone1.value.replace(/[^\(\)\-\d]+/g, "");
   });

   form2.addEventListener('input', (e) => {
      e.preventDefault();
      formName2.value = formName2.value.replace(/[^\s\-\а-яА-Я]+/g, "");
      formEmail2.value = formEmail2.value.replace(/[^\@\-\_\!\.\~\*\'\w]+/gi, "");
      formPhone2.value = formPhone2.value.replace(/[^\(\)\-\d]+/g, "");
   });

   form3.addEventListener('input', (e) => {
      e.preventDefault();
      formName3.value = formName3.value.replace(/[^\s\-\а-яА-Я]+/g, "");
      formEmail3.value = formEmail3.value.replace(/[^\@\-\_\!\.\~\*\'\w]+/gi, "");
      formPhone3.value = formPhone3.value.replace(/[^\(\)\-\d]+/g, "");
   });
};

export default form;