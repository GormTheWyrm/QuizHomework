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
var startButton = document.getElementById("start-button");
var restartButton = document.getElementById("restart-button");
var timerSpan = document.getElementById("timer-span");
var scoreSpan = document.getElementById("score-span");

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
// setTimer() should
//set timeLeft and isWin
//countdown from 120
//change timer-span


//* ******************************************** */


//could create an array with questions and cycle thru them
//could write all divs, and them make some dissappear...

//eventlistener for the first button "class start-button"
//starts timer
//puts put 5 p elements within #quiz
startButton.addEventListener("click", function () {
    // starts quiz; sets isWin to false
    startTimer();
    //turn #welcome invisible through display = none...

    //turn #quiz visible
    //then start timer (120 seconds?)

    console.log("test");

})

restartButton.addEventListener("click", function () {
    // starts quiz;


    //sets isWin false and timeLeft to 120
    startTimer();


    //turn #welcome invisible through display = none...

    //turn #quiz visible
    //then start timer (120 seconds?)



})


/* bonus ideas; add text during transitions such as "good luck" when start quiz is presses... 
    make timer turn red at 10 seconds
*/
//