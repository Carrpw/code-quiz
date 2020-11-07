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

//Function compares choices with answer
function evaluateAnswer(event) {
  var selection = event.target;

  if (selection.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
      
    if (selection.textContent == questionsArray[questionIndex].answer) {
        createDiv.textContent = "Correct!";
    } 
    else {
        secondsLeft = secondsLeft -= 10;
        createDiv.textContent = "Wrong!";
    }
  }

  questionIndex++;

  if (questionIndex >= questionsArray.length) {
    finished();
  } 
  else {
    displayQuestion(questionIndex);
  }
  questions.appendChild(createDiv);

}

//Final input submission area upon completion of quiz
function finished() {
    questions.innerHTML = "";
    currentTime.innerHTML = "";

    var heading1 = document.createElement("h1");
    heading1.setAttribute("id", "heading1");
    heading1.textContent = "Finished or Not!"
    questions.appendChild(heading1);

    var value = document.createElement("value");
    value.setAttribute("id", "value");
    value.textContent = "Enter your initials: ";
    questions.appendChild(value);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "initials");
    input.textContent = "";
    questions.appendChild(input);

    var submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "Submit");
    submit.textContent = "Submit";
    questions.appendChild(submit);

    var timeRemaining = secondsLeft;
    var define = document.createElement("define");
    clearInterval(pause);
    define.textContent = "Score: " + timeRemaining;
    questions.appendChild(define);

    var area = document.createElement("area");
    area.setAttribute("id", "area");
    questions.appendChild(area);
    

 