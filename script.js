// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// ```





var questions = {
    question: ["test question", "q2", "q3", "q4", "q5"],
    answer1: ["red", "q2", "q3", "q4", "q5"],
    answer2: ["yellow", "q2", "q3", "q4", "q5"],
    answer3: ["blue", "q2", "q3", "q4", "q5"],
    correctAnswer: ["green", "q2", "q3", "q4", "q5"]
};
/*define html elements; welcome, quiz, score-div, final, option1-4, start-button, restart-button */
var welcomeDiv = document.getElementById("welcome");
var quizDiv = document.getElementById("quiz");
var scoreDiv = document.getElementById("score-div");
var finalDiv = document.getElementById("final");
var answer1 = document.getElementById("option1");
var answer2 = document.getElementById("option2");
var answer3 = document.getElementById("option3");
var answer4 = document.getElementById("option4");
var quest = document.getElementById("quest");
var startButton = document.getElementById("start-button");
var restartButton = document.getElementById("restart-button");
var timerSpan = document.getElementById("timer-span");
var scoreSpan = document.getElementById("score-span");
var initials = document.getElementById("initials");
var isCorrect = false;  //should be a local variable...fix later


var interval;
var isWin = false;
var timeLeft = 120;
//120 seconds to finish
//timeLeft goes down on wrong answers

// var score = 0;
//score should be timeleft...
//this can be local

function setTimer() {
    timeLeft = 12;
    isWin = false;
    // *****************set time to 12 instead of 120 for testing!
}
function countdown() {
    console.log("testcountdown");
    timeLeft--;
    console.log(timeLeft);
    //set timerspan
    // timerSpan.textContent = timeleft;
    timerSpan.textContent = timeLeft.toString();
    // timerSpan.setAttribute("textContent", timeLeft);

    if ((timeLeft < 1) || (isWin === true)) {
        clearInterval(interval);
    }


}

function startTimer() {
    setTimer();
    interval = setInterval(countdown, 1000);


}


//need to pull up quiz components (before starting timer)
//
//need to figure out transitions...
//xxx = questions.question
//xxx.textContent= questions.option1

// function takeQuiz() {
//     var isCorrect = false;
//     for (i = 0; i < questions.question.length; i++) {
//         //move up when correct answer clicked...
//         function success() {
//             isCorrect = true;
//         }
//         function failure() {
//             //should reduce timer
//             timeLeft = timeLeft - 30;
//         }
//         if (i % 2 === 0) {
//             quest.textContent = questions.question[i];
//             answer1.textContent = questions.answer1[i];
//             answer2.textContent = questions.answer2[i];
//             answer3.textContent = questions.answer3[i];
//             answer4.textContent = questions.correctAnswer[i];
//             //eventlistener to make this true when clicked!
//         }
//         else {
//             quest.textContent = questions.question[i];
//             answer1.textContent = questions.answer1[i];
//             answer3.textContent = questions.answer3[i];
//             answer4.textContent = questions.correctAnswer[i];
//             answer2.textContent = questions.answer2[i];
//             //eventlistener to make this true when clicked!
//             answer4.addEventListener("click", success());

//         }


//         //need to stop this from advancing until question is clicked...
//     }
// }
//make "ready"
//move this into start button events!


// function takeQuiz() {
//     do {

// quest.textContent = questions.question[1];
// answer1.textContent = questions.answer1[1];
// answer2.textContent = questions.answer2[1];
// answer3.textContent = questions.answer3[1];
// answer4.textContent = questions.correctAnswer[1];
// answer4.addEventListener("click", success());
// answer3.addEventListener("click", failure());
// answer2.addEventListener("click", failure());
// answer1.addEventListener("click", failure());

//     } while (isCorrect === false)
// }
//my broswer will not load this...







function takeQuiz() {
    function success() {
        isCorrect = true;
        i++;
        console.log("suceed");
        event.stopPropagation();
    }
    function failure() {
        //should reduce timer
        timeLeft = timeLeft - 30;
        isCorrect = false;
        console.log("fail");
        event.stopPropagation();
    }
    //for loop is not working so we are skipping it...
    var i = 0;
    quest.textContent = questions.question[i];
    answer1.textContent = questions.answer1[i];
    answer2.textContent = questions.answer2[i];
    answer3.textContent = questions.answer3[i];
    console.log("write questions to span");
    answer4.textContent = questions.correctAnswer[i];
    answer4.addEventListener("click", success);
    // answer3.addEventListener("click", failure());
    // answer2.addEventListener("click", failure());
    // answer1.addEventListener("click", failure());

}
//* ******************************************** */


startButton.addEventListener("click", function () {
    event.stopPropagation();
    // starts quiz; 

    //turn #welcome invisible through display = none...
    welcomeDiv.setAttribute("style", "display:none;")
    quizDiv.setAttribute("style", "display:block;")
    takeQuiz();
    //turn #quiz visible
    //then start timer (120 seconds?)
    startTimer();

})

restartButton.addEventListener("click", function () {
    // starts quiz;
    event.stopPropagation();
    welcomeDiv.setAttribute("style", "display:none;")
    welcomeDiv.setAttribute("style", "display:none;")
    takeQuiz();



    //turn #welcome invisible through display = none...

    //turn #quiz visible
    //then start timer (120 seconds?)
    startTimer();


})


/* bonus ideas; add text during transitions such as "good luck" when start quiz is presses...
    make timer turn red at 10 seconds
*/

//randomize or mix up answers to questions so it is not always c = true...