var clear = document.querySelector("#clear");
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
}); 

var scores = localStorage.getItem("scores");
scores = JSON.parse(scores);
var highScore = document.querySelector("#highScore");
for (var i = 0; i < scores.length; i++) {
    var createLi = document.createElement("li");
    createLi.textContent = scores[i].initials + " " + scores[i].score;
    highScore.appendChild(createLi);
}

var startOver = document.querySelector("#startOver");
startOver.addEventListener("click", function() {
    window.location.replace("index.html");
});