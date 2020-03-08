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

//maybe make score an array to store all of the past stores?
//would have to generate spans to show these via an array...



var questions = {
    question: ["What does the greater than sign look like?", "Which of the following is a valid value for a boolean variable?",
        "A prompt returns what sort of variable?", "What is an if-else statement is called?", "What is the value of myArray [3] if myArray = [1, 2, 4, 8, 16, 32]"],
    answer1: ["+", "integers", "integer", "a party", "3"],
    answer2: ["/", "17", "boolean", "a loop", "4"],
    answer3: ["<", "The Muffin Man", "number", "an object", "6"],
    correctAnswer: [">", "false", "string", "a conditional", "8"]
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
var timeSpan = document.getElementById("time-span");
var initials = document.getElementById("initials");
var isCorrect = false;  //should be a local variable...fix later
var locationSpan = document.getElementById("location")  //tells which question
var addButton = document.getElementById("initial-button");   //button that adds username
var showScore = document.getElementById("last-score");
var showName = document.getElementById("last-name");

var interval;
var isWin = false;
var timeLeft = 60;
var score = 0;
//60 seconds to finish
//timeLeft goes down on wrong answers

function startTimer() {
    //sets timer and hides all but quiz div
    timeLeft = 60;
    isWin = false;
    welcomeDiv.setAttribute("style", "display:none;");
    quizDiv.setAttribute("style", "display:block;");
    scoreDiv.setAttribute("style", "display:none;");
    finalDiv.setAttribute("style", "display:none;");
    interval = setInterval(countdown, 1000);

    
}
function countdown() {
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

function loadLeaderboard() {
    var myScore = score;
    localStorage.setItem("score", myScore);
    var myName = initials.value;
    localStorage.setItem("Initials", myName);
    //ensure correct div is being displayed
    welcomeDiv.setAttribute("style", "display:none;");
    quizDiv.setAttribute("style", "display:none;");
    scoreDiv.setAttribute("style", "display:none;");
    finalDiv.setAttribute("style", "display:block;");
    //read local storage
    showScore.textContent = myScore;
    showName.textContent = myName;
    var myScore = score;
    // localStorage.setItem("score", myScore);
    //this works!
   
    //can I make this show an array of scores and names?
    //perhaps if I make them object pairs?
  
   

    //now pull up names and scores!
}



function seeScore() {
    //transitions to score screen
    //can be called by timer or by reaching end of quiz
    welcomeDiv.setAttribute("style", "display:none;");
    quizDiv.setAttribute("style", "display:none;");
    scoreDiv.setAttribute("style", "display:block;");
    finalDiv.setAttribute("style", "display:none;");

    if (timeLeft < 0) {
        score = 0;
    } else {
        score = timeLeft;
    }
    timeSpan.textContent = timeLeft;
    scoreSpan.textContent = score;
    // console.log("score"+score);
    addButton.addEventListener("click", loadLeaderboard);



    //move to leaderboard once initials entered
    //initials = input text ...




}
//we should probably limit use of local storage here... but how?

//https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/
// JSON.stringify(“nameOfObject”,  object));
//JSON.parse(...)
//var KeyName = window.localStorage.key(index);
//loops?










function takeQuiz() {
    var i = 0;
    function success() {
        // isCorrect = true;
        i++;
        // console.log("suceed");
        event.stopPropagation();
        //I need this to call the next part of the function!
        if (i < questions.question.length) { }
        doQuestion();
        if (i === questions.question.length) {
            isWin = true;
            // alert("youwin");
            //TRANSITION TO SCORE
            seeScore();
        }
    }

    function failure() {
        //should reduce timer
        timeLeft = timeLeft - 30;
        // isCorrect = false;
        // console.log("fail");
        //make it say something so user does not hit again!
        //or at least highlight in red...
        event.stopPropagation();
    }
    // for loop is not working so we are skipping it...
    function doQuestion() {
        quest.textContent = questions.question[i];
        answer1.textContent = questions.answer1[i];
        answer2.textContent = questions.answer2[i];
        answer3.textContent = questions.answer3[i];
        answer4.textContent = questions.correctAnswer[i];
        // location.textContent = toString(i);
        // fix      ***
        answer4.addEventListener("click", success);
        answer3.addEventListener("click", failure);
        answer2.addEventListener("click", failure);
        answer1.addEventListener("click", failure);
        //currently the correct answer is in same place

    }
    //takeQuiz actual orders;
    doQuestion();

    //* ** */
    //if?

}
//* ******************************************** */


startButton.addEventListener("click", function () {
    event.stopPropagation();
    // starts quiz; 

    //turn #welcome invisible through display = none...
    startTimer();       //now sets all but quiz to display:none
    takeQuiz();
    //turn #quiz visible
    //then start timer (120 seconds?)


})

restartButton.addEventListener("click", function () {
    // starts quiz;
    event.stopPropagation();
    welcomeDiv.setAttribute("style", "display:none;");
    welcomeDiv.setAttribute("style", "display:none;");
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