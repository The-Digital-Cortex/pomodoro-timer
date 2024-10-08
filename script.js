let countdown;
let isRunning = false;
let timeLeft;  // This will store the current time in seconds

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');

// Input fields for custom times
const focusTimeInput = document.getElementById('focusTime');
const shortBreakInput = document.getElementById('shortBreak');
const longBreakInput = document.getElementById('longBreak');

// New buttons for short and long breaks
const shortBreakButton = document.getElementById('startShortBreak');
const longBreakButton = document.getElementById('startLongBreak');
const resetButton = document.getElementById('reset');

// Function to update the display
function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
}

// Function to set the timer based on the input
function setTimer(duration) {
    timeLeft = duration * 60;  // Convert minutes to seconds
    updateDisplay();
}

// Start the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        
        countdown = setInterval(() => {
            timeLeft--;
            updateDisplay();

            if (timeLeft <= 0) {
                clearInterval(countdown);
                alert('Time is up!');
                isRunning = false;
                timeLeft = 0;
                updateDisplay();
            }
        }, 1000);
    }
}

// Reset the timer
function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    
    // Reset to the focus time by default
    const focusTime = parseInt(focusTimeInput.value);
    setTimer(focusTime);
}

// Event listeners
startButton.addEventListener('click', () => {
    if (!isRunning) {
        const focusTime = parseInt(focusTimeInput.value);
        setTimer(focusTime);
        startTimer();
    }
});

// New event listeners for short and long breaks
shortBreakButton.addEventListener('click', () => {
    if (!isRunning) {
        const shortBreakTime = parseInt(shortBreakInput.value);
        setTimer(shortBreakTime);
        startTimer();
    }
});

longBreakButton.addEventListener('click', () => {
    if (!isRunning) {
        const longBreakTime = parseInt(longBreakInput.value);
        setTimer(longBreakTime);
        startTimer();
    }
});

resetButton.addEventListener('click', resetTimer);

// Initialize display with focus time
window.onload = () => {
    const focusTime = parseInt(focusTimeInput.value);
    setTimer(focusTime);
};
