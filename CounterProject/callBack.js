// Code here for the callbacks task

// Setting variables to hold the intervalID
// and also a counter
let intervalID;
let counter = 0;

let startCounter = function () {
  intervalID = setInterval(function () {
    counter++;
    console.log(counter);
  }, 1000); // Interval set to 1 second (1000 milliseconds)
};

function stopCounter() {
  clearInterval(intervalID);
}

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

startButton.addEventListener("click", startCounter);
stopButton.addEventListener("click", stopCounter);
