const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    timer = setInterval(function () {
      second = seconds%60
      minuts = seconds/60%60;
      hour = seconds/60/60%60;
      if (seconds <0){
        clearInterval(timer);
        console.log(seconds)
      } else {
        let timer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${second}`;
        timerEl.innerHTML = timer;
      }
      --seconds 
      console.log()
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  let seconds = Number(inputEl.value.replace(/[^0-9]/g, ''));

  animateTimer(seconds);
  inputEl.value = '';
});