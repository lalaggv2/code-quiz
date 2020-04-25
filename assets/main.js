// in the html, create a div with the intro

//users can click start button, that starts timer

//variables to store current count, set to 0 by default
var currentCount = 0;
//variable to store the array of questions

var questions = [
    {
        question: "Why do you use JavaScrip",
        answers: ["strings, 'boolenas", "alerts", "numbers"],
        correctAnswer: 2,
    },
    {
        question: "common used types of values",
        answers: ["strings, 'boolenas", "alerts", "numbers"],
        correctAnswer: 2,
    },
];

answers: ["A thing I use to play video games", "Where my mom showcases her figurines", "Part of the Inspector used to check my JS", "Part of the Inspector used to check my JS"],
    correctAnswer: 2
}
// vairable to store the index of the current question they are answering
var questionIndex = 0;

//-     array of possible answers (list)
//  - questions (string)
//  - correct answer (nuimber, indexx of the answer from the aray of possible    ///    answers)

var questions = [
    {
        question: "common used types of values",
        answers: ["strings, 'boolenas", "alerts", "numbers"],
        correctAnswer: 2,
    },
    {
        question: "common used types of values",
        answers: ["strings, 'boolenas", "alerts", "numbers"],
        correctAnswer: 2,
    },
];

//when the user clicks on start:
// -    hide the intro <div>
// -    create a set interval of 75000 ms
// update the current count to 75
// every time the interval runs, we need to decrement the current count by 1, re'render the current count
// render the first question
// using DOM manipulation, create a new element (document.createElement) with the question infor, and display it on screen (appendChild)

// when a user clicks on one of those questjionsl, determine if it is correct or incorrect, display the next question, and display the status of their answer (correct/incorrect, for a short period of time)

// end condition (quizas una funcion endgame)
// user answers all the questions or
// timer runs out

// when the game ends, allow the user to enter the initials, and store their score

// redirect user to the highscores page, which will display all the stored high scores


