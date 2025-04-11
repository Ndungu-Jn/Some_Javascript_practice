hoursInputElement = document.getElementById("hoursInput");
minutesInputElement = document.getElementById("minutesInput");
secondsInputElement = document.getElementById("secondsInput");

hoursOutpuElement = document.getElementById("hoursOutput");
minutesOutputElement = document.getElementById("minutesOutput");
secondsOutputElement = document.getElementById("secondsOutput");

const startTimerButtonElement = document.getElementById("startTimer");

let targetTime;
let timerInterval;

const updateTimer = () => {
  if (targetTime) {
    const differenceInSeconds = Math.floor(targetTime - Date.now()) / 1000; // gets the difference in time and floors it making sure there is no decimals
    //now gwtting the hours
    const hours = Math.floor(differenceInSeconds / 3600);
    //the to minutes now
    const minutes = Math.floor(differenceInSeconds / 60) % 60;
    //to seconds
    const seconds = Math.floor(differenceInSeconds) % 60;

    hoursOutpuElement.textContent = `${hours} hours`;
    hoursOutpuElement.textContent = `${minutes} minutes`;
    hoursOutpuElement.textContent = `${seconds} seconds`;
  }
};
