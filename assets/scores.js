// get scores fromlocal storage
// render them to screen

var scoresHTML = document.getElementById("scores")

var scores = localStorage.getItem('scores')
if (scores) {
    scoresHTML.textContent = " "
    scores = JSON.parse(scores)

    scores.forEach(score => {
        var row = document.createElement("div");
        row.className = "row";

        var initials = document.createElement("div");
        initials.className = "name";
        initials.textContent = score.initials;
        row.appendChild(initials);

        var userScore = document.createElement("div");
        userScore.className = "userscore";
        userScore.textContent = score.score;
        row.appendChild(userScore);

        scoresHTML.appendChild(row);
    });

};
//provide the user a way to go back to the quiz
document.getElementById("goBackBtn").addEventListener("click", function () {
    window.location = "index.html";
});