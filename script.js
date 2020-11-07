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

//Questions, answers, and answer array
var questionsArray = [
    {
        question: "What is JavaScript",
        choices: ["coffee", "a potentially brutal programming language", "religious text", "a type of paper"],
        answer: "a potentially brutal programming language"
    },

    {
        question: "Variables in JavaScript can contain what?",
        choices: ["string only", "nothing", "numbers only", "all of the above"],
        answer: "all of the above"
    },

    {
        question: "HTML is the ______ of a webpage.",
        choices: ["skin", "hair", "muscles", "skeleton"],
        answer: "skeleton"
    },

    {
        question: "What HTML tag do you put JavaScript in?",
        choices: ["<head>", "<body>", "<script>", "<link>"],
        answer: "<script>"
    },
    
    {
        question: "What do you put before a comment in JavaScript?",
        choices: ["'", "//", "<!--", "/*"],
        answer: "//"
    },
];

