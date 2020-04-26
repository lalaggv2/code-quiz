// -- GIVEN I am taking a code quiz
// -- WHEN I click the start button
// -- THEN a timer starts and I am presented with a question
// -- WHEN I answer a question
// -- THEN I am presented with another question
// -- WHEN I answer a question incorrectly
// -- THEN time is subtracted from the clock

// -- WHEN all questions are answered or the timer reaches 0
// -- THEN the game is over
// -- WHEN the game is over
// THEN I can save my initials and score

//start button starts the timer

var startButton = document.querySelector("#start");
var timer = document.querySelector("#timer");
var quizArea = document.querySelector('#quiz')
var secondsLeft = 75;
var running = false;
var quizScore = 0;

// Here are the quiz questions as array
var quizQuestions = [{

    question: "What are the variables used for in JS?",
    answers: [
        "Store values",
        "Things that change",
        "To do stuff",
        "All of the above"
    ],
    correctAnswer: 0
},
{
    question: "Why do you use JS in your website?",
    answers: [
        "To make it fancy",
        "To allow user input",
        "To make it dynamic",
        "All of the above"
    ],
    correctAnswer: 3
},
{
    question: "Which one of this is correct?",
    answers: [
        "var myVariable=4",
        "var myVariable = '4kdkfldlkfs'",
        "var myVariable = car;",
        "var myVariable = car",
    ],
    correctAnswer: 3
},
{
    question: "What should you do when faced with a new JS task?",
    answers: [
        "Dive right in to code, things will work out in the end",
        "Try to understand what you need to do",
        "Search online for answers",
        "Panic and feel overwhelmed",
    ],
    correctAnswer: 1
},
{
    question: "What is console?",
    answers: [
        "A thing I use to play video games",
        "Where my mom showcases her figurines",
        "Part of the Inspector used to check my JS",
        "Conforting someone at a time of grief",
    ],
    correctAnswer: 2

}];

var questionIndex = 0;

function setTime() {
    var timerQuiz = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left in Quiz";
        //check out condition for running out of time
        if (secondsLeft <= 0) {
            clearInterval(timerQuiz);
            gameOver();
            //} else {
            /// var showQuestion === true;
            // showQuestion()

        }
    }, 1000);
}

// when time is 0 you get a Time Over message

function gameOver() {
    secondsLeft = 0;
    timer.textContent = " ";
    alert("Game is Over");

    var initials = prompt(`Score: ${quizScore}\n Initials:`);
    console.log(initials, quizScore)

    // get scores from local storage
    // if scores exist, parse and update them with new score
    // save new scores to local storge

    var scores = localStorage.getItem('scores')
    if (scores) {
        // update
    } else {
        scores = { initials: initials, score: quizScore }
    }

    localStorage.setItem(JSON.stringify(scores))
}

console.log(quizQuestions);

// I need to show the questions to the user, then a place to store                                                                                                                           
function showQuestion() {
    if (questionIndex < quizQuestions.length) {
        quizArea.textContent = " ";
        var currentQuestion = quizQuestions[questionIndex];

        var question = document.createElement("h2");
        question.textContent = currentQuestion.question;


        quizArea.appendChild(question)

        currentQuestion.answers.forEach(function (answer, index) {
            var answerBtn = document.createElement('button');

            answerBtn.textContent = answer;
            answerBtn.setAttribute('data-index', index)
            answerBtn.addEventListener("click", function () {
                if (index == currentQuestion.correctAnswer) {
                    quizScore += 5;
                    document.getElementById("score").textContent = quizScore;
                    showQuestion()
                } else {
                    secondsLeft -= 5;
                    showQuestion()
                }
            })

            quizArea.appendChild(answerBtn)
        });

    } else {
        gameOver()
    }
    // to display them all on the same page
    // quizQuestions.forEach(question => {
    // });
    questionIndex++;
}

startButton.addEventListener("click", function () {
    if (running === false) {
        running = true;
        setTime();
        showQuestion();
    }
});

document.getElementById("highscores").addEventListener("click", function () {
    window.location = "highscores.html";
});