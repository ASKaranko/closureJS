'use strict';


  function Number() {

    const n = 50;

    function guessNumber () {

      let guess = prompt("Угадай число от 1 до 100");
  
      if (guess === null) {
        alert("Игра окончена");
      } else if (isNaN(guess) || (guess.trim() === '')) {
        alert("Введите число");
        guessNumber();
      } else if (parseFloat(guess) > n) {
          alert("Загаданное число меньше");
          guessNumber();
      } else if (parseFloat(guess) < n) {
          alert("Загаданное число больше");
          guessNumber();
      } else if (parseFloat(guess) === n) {
        alert("Поздравляю, Вы угадали!!!");
      }

    }
    console.dir(guessNumber);
    guessNumber();
    
  }

  Number();