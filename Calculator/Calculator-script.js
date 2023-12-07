let calculation = localStorage.getItem('calculation') || '';

    function updateCalculation(number){
      
      var snd = new Audio('./Audio/button-sound.mp3');
      snd.play();
      
      calculation += number ;
      document.querySelector('.js-cal-display').innerHTML = calculation;
      localStorage.setItem('calculation',calculation);
 
    }

    function loadPage(){
      document.querySelector('.js-cal-display').innerHTML = calculation;
    }

