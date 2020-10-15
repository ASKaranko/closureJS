'use strict';

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  function Number() {

    let n = getRandomIntInclusive(1, 100),
      attempts = 10;

      console.log(n);

    function guessNumber () {

      if (attempts > 0) {

        let guess = prompt("Угадай число от 1 до 100");
    
        if (guess === null) {
          alert("Игра окончена");
        } else if (isNaN(guess) || (guess.trim() === '')) {
          alert("Введите число");
          guessNumber();
        } else if (parseFloat(guess) > n) {
            attempts--;
            alert("Загаданное число меньше, осталось " + attempts + " попыток");
            guessNumber();
        } else if (parseFloat(guess) < n) {
            attempts--;
            alert("Загаданное число больше, осталось " + attempts + " попыток");
            guessNumber();
        } else if (parseFloat(guess) === n) {
          let answer2 = confirm("Поздравляю, Вы угадали!!! Хотите сыграть еще?");
          if (answer2 === true) {
            Number();
          } else {
            alert("Игра окончена");
          }
        }

      } else {
        let answer = confirm("Попытки закончились, хотите сыграть еще?");
        if (answer === true) {
          Number();
        } else {
          alert("Игра окончена");
        }
      }

    }

    guessNumber();

  }

  Number();