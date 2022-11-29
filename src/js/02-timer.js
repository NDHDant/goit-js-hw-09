import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]')
const timerMinutes = document.querySelector('[data-minutes]')
const timesSeconds = document.querySelector('[data-seconds]')

startBtn.addEventListener('click', onClick);
startBtn.setAttribute('disabled', true);

//Бажані налаштування для flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectData = selectedDates[0];
    if (Date.now() > selectData) {
		 Notiflix.Notify.warning('Please choose a date in the future');
		 startBtn.setAttribute('disabled', true);
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
};

flatpickr(input, options);


function onClick() {
	setInterval(() => {
		let timerInMs = new Date(input.value) - new Date;
		let objectTimer = convertMs(timerInMs);

		timerDays.textContent = objectTimer.days.toString().padStart(2, '0');
		timerHours.textContent = objectTimer.hours.toString().padStart(2, '0');
		timerMinutes.textContent = objectTimer.minutes.toString().padStart(2, '0');
		timesSeconds.textContent = objectTimer.seconds.toString().padStart(2, '0');

	}, 1000)
	
}




// Функція для підрахунку значень convertMs, де ms - різниця між кінцевою і поточною датою в мілісекундах.
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
