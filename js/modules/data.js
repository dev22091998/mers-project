function data(){
     // DATA===================================================================

  const dedline = '2022-03-20';
  document.querySelector('[data-finish]').innerHTML = `Discount Will Finish ${dedline}`;

  function getTime(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(total / (1000 * 60 * 60 * 24)),
          hours = Math.floor(total / (1000 * 60 * 60) % 24),
          minutes = Math.floor((total / 1000 / 60) % 60),
          seconds = Math.floor((total / 1000) % 60);
    return{
      'total': total,
      'days': days,
      'minutes': minutes,
      'seconds': seconds,
      'hours': hours
    }
  }

  function getZero(num){
    if(num >= 0 && num < 10){
      return '0' + num
    } else {
      return num
    }
  }

  function setClock(selected, endtime){
    const timer = document.querySelector(selected),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = document.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
    updateClock();
    
    function updateClock(){
      const time = getTime(endtime);
      days.innerHTML = getZero(time.days);
      hours.innerHTML = getZero(time.hours);
      minutes.innerHTML = getZero(time.minutes);
      seconds.innerHTML = getZero(time.seconds);
      if(time.total <= 0){
        clearInterval(timeInterval);
      }
    }
  }
  setClock('.timer', dedline);

}

export default data;