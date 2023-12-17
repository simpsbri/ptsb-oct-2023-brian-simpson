const startTimeoutButton = document.getElementById('start-timeout');
const timeoutDisplay = document.getElementById('timeout-display');
const startIntervalButton = document.getElementById('start-interval');
const intervalDisplay = document.getElementById('interval-display');


startTimeoutButton.addEventListener('click', startTimeout);
startIntervalButton.addEventListener('click', startInterval);

let timeoutTimer;

function startTimeout() {
    timeoutDisplay.textContent = 'Getting ready...';
    timeoutTimer = setTimeout(() => {
        timeoutDisplay.textContent = 'READY!';
    }, 5000);
}

let intervalTimer;
let count = 5;

function startInterval() {
    intervalDisplay.textContent = count;
    intervalTimer = setInterval(() => {
        count--;
        if (count < 0) {
            intervalDisplay.textContent = 'GO!';
            clearInterval(intervalTimer);
        } else {
            intervalDisplay.textContent = count;
        }
    }, 1000);
}