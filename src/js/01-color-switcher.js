

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyBgc = document.querySelector('body');
let setInt;

btnStart.addEventListener('click', onStartClick)
btnStop.addEventListener('click', onStopClick)


 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }

function onStartClick() {
  btnStart.setAttribute('disabled', true) 
      setInt = setInterval(() => {
      bodyBgc.style.backgroundColor = getRandomHexColor();
      console.log('backgroundColor: ', getRandomHexColor())
  }, 1000)
 }


function onStopClick() { 
  clearInterval(setInt)
  btnStart.removeAttribute('disabled')
  console.log('off')
}






