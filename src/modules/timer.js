const timer = (deadline) => {
   const timerHours = document.getElementById('timer-hours');
   const timerMinutes = document.getElementById('timer-minutes');
   const timerSeconds = document.getElementById('timer-seconds');

   const getTimeRemaining = () => {

      let dateStop = new Date(deadline).getTime();
      console.log(dateStop);
      let dateNow = new Date().getTime();

      let timeRemaining = (dateStop - dateNow) / 1000;
      let hours = Math.floor(timeRemaining / 3600);
      if (hours < 10) {
         hours = "0" + Math.floor(timeRemaining / 3600);
      }
      let minutes = Math.floor((timeRemaining - (hours * 3600)) / 60);
      if (minutes < 10) {
         minutes = "0" + Math.floor((timeRemaining - (hours * 3600)) / 60);
      }
      let seconds = Math.round(timeRemaining - (minutes * 60 + hours * 3600));
      if (seconds < 10) {
         seconds = "0" + Math.round(timeRemaining - (minutes * 60 + hours * 3600));
      }

      return { timeRemaining, hours, minutes, seconds, };

   };
   const updateClock = () => {
      let getTime = getTimeRemaining();

      timerHours.textContent = getTime.hours;
      timerMinutes.textContent = getTime.minutes;
      timerSeconds.textContent = getTime.seconds;
      let idTimeout;
      if (getTime.timeRemaining > 0) {
         idTimeout = setInterval(updateClock, 1000);
      } else if (getTime.timeRemaining <= 0) {
         clearInterval(idTimeout);
         timerHours.textContent = '00';
         timerMinutes.textContent = '00';
         timerSeconds.textContent = '00';
      }
   };
   updateClock();

};

export default timer;