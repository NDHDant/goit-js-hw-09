const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

let timerId = null;
stopBtn.setAttribute('disabled', true);

function onStartClick() {
	timerId = setInterval(() => {
		document.body.style.backgroundColor = getRandomHexColor();
	}, 1000);

	startBtn.setAttribute('disabled', true);
	stopBtn.removeAttribute('disabled');
}

function onStopClick() {
	clearInterval(timerId);
	
	startBtn.removeAttribute('disabled');
	stopBtn.setAttribute('disabled', true);
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}