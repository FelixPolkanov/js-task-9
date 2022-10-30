import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('[data-start]');
let startDate;
let startDateUnix;
let currentDate;
let deltaTime = null; 


btnStart.addEventListener('click', onStartClick);
btnStart.setAttribute('disabled', true)

 const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
   
     startDate = new Date(selectedDates[0]);
     startDateUnix = startDate.getTime()
     currentDate = Date.now()

    console.log("startDate", startDate.getTime())
    console.log('currentDate', currentDate)

    if (startDateUnix > currentDate) {
     btnStart.removeAttribute('disabled');
} else
    {
      window.alert("Please choose a date in the future")
      location.reload();
    }
    
  deltaTime = setInterval(() => {
    const timer = startDateUnix - Date.now();

 if (Math.floor(timer < 1000)){
        stopTimer();
      }
      const { days, hours, minutes, seconds } = convertMs(timer);
      console.log(`${days}: ${hours}: ${minutes}: ${seconds}`)
      }, 1000)
 },
};

function stopTimer() {
  console.log('РОЗПРОДАЖ РОЗПОЧАТО !!!')
  clearTimeout(deltaTime);
 }

flatpickr('#datetime-picker', options)

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}

function onStartClick() {
  console.log("старт")
}

