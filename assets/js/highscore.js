var highScores = JSON.parse(localStorage.getItem("high-scores")) || [];
var topScores = document.querySelector("#top-scores");

highScores.sort(function(a,b) {
    return b.score - a.score;

})

for (let i = 0; i < 3; i++) {
    var list = document.createElement("li");
    list.textContent = highScores[i].name + ": " + highScores[i].score
    topScores.appendChild(list);
    
}

var masterContainer = document.createElement("div");
masterContainer.className = "container";
masterContainer.id = "id-container";

var playButton = document.createElement("button");
playButton.className = "container startButton play";
playButton.innerHTML = "Play Again"
playButton.onclick = function () {
    location.href = "index.html";
}

masterContainer.appendChild(playButton);

document.body.appendChild(masterContainer);