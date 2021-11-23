const ajax = () => {

   let getData = () => {
      fetch('db.json')
         .then(res => res.json())
         .then(data => {
            console.log(data);
            sendData(data)
               .then((data) => {
                  console.log(data);
               })
               .catch(error => {
                  console.log(error);
               });
         })
         .catch(error => {
            console.log(error);
         });
   };

   const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then(res => res.json());
   };



   getData();
};

export default ajax;