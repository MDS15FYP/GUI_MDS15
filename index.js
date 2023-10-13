const refreshTimer = document.getElementById('refresh-timer');
let timerInSeconds = 32;
let countdownInterval;

function updateTimer() {
  //refreshTimer.innerHTML = `Refreshing page in: ${timerInSeconds} seconds`;
}

function pauseTimer() {
  clearInterval(countdownInterval);
}

function resumeTimer() {
  countdownInterval = setInterval(() => {
    timerInSeconds -= 1;
    updateTimer();

    if (timerInSeconds === 0) {
      window.location.reload();
      clearInterval(countdownInterval); // Stop the countdown after reaching 0
    }
  }, 1000);
}
// Add event listeners to the navigation items to pause the timer
const detectedFaceLink = document.querySelector('a[href="#detectedFace"]');
const emoVisualisationLink = document.querySelector('a[href="#EmoVisualisation"]');
const projectDetailsLink = document.querySelector('a[href="#about"]');
const groupContactLink = document.querySelector('a[href="#contact"]');

detectedFaceLink.addEventListener('click', () => {
  resumeTimer();
});

emoVisualisationLink.addEventListener('click', () => {
  pauseTimer();
});

projectDetailsLink.addEventListener('click', () => {
  pauseTimer();
});

groupContactLink.addEventListener('click', () => {
  pauseTimer();
});

updateTimer();
resumeTimer();
