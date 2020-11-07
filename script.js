//Variables
var questionIndex = 0;
var secondsLeft = 116;
var pause = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#timer");
var questions = document.querySelector("#questions");
var wrapper = document.querySelector("#wrapper");
var ul = document.createElement("ul");


//Timer
timer.addEventListener("click", function () {
  if (pause === 0) {
      pause = setInterval(function () {
        secondsLeft--;
        currentTime.textContent = "Time left: " + secondsLeft;   
      }, 1000);

      if (secondsLeft <= 0) {
        clearInterval(pause);
        finished();
        currentTime.textContent = "Out of time!";
    }
  }
  displayQuestion(questionIndex);
});

