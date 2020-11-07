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

//Displays the question and answer choices
function displayQuestion(questionIndex) {
  questions.innerHTML = "";
  ul.innerHTML = "";

  for (var i = 0; i < questionsArray.length; i++) {
    var userQuestion = questionsArray[questionIndex].question;
    var userChoices = questionsArray[questionIndex].choices;
    questions.textContent = userQuestion;
  }
  userChoices.forEach(function (nextOptions) {
    var answerOptions = document.createElement("li");
    answerOptions.textContent = nextOptions;
    questions.appendChild(ul);
    ul.appendChild(answerOptions);
    answerOptions.addEventListener("click", (evaluateAnswer));
  })
}

