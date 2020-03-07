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
    question: ["test question", "q2", "q3", "q4" , "q5"],
    answer1: ["red", "q2", "q3", "q4" , "q5"],
    answer2: ["yellow", "q2", "q3", "q4" , "q5"],
    answer3: ["blue", "q2", "q3", "q4" , "q5"],
    correctAnswer:["green", "q2", "q3", "q4" , "q5"]
};
var timeLeft = 120;
    //120 seconds to finish
    //timeLeft goes down on wrong answers
var score = 0;
//score should be timeleft...
//

//create div with 5 p; 
//fill 

//create a header for the question and 4 p for ...5 text areas...
//start with a welcome text

//create array of quizpages



//could create an array with questions and cycle thru them
//could write all divs, and them make some dissappear...

//eventlistener for the first button "class start-button"
    //starts timer
    //puts put 5 p elements within #quiz
