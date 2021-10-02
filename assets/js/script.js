var startBtn = document.getElementById("startButton");
console.log(startBtn);
var timerBegins = document.getElementById("timerbegins");
var questionText = document.getElementById("questionText");
var questionAnswers = document.getElementById("questionAnswers");

var answerArrayQ1= ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];
var questionArray= ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"]

//WHEN I click the start button
//THEN a timer starts and I am presented with a question
function startGame () {
     console.log("button click");
     countdown();
     displayQuestions(questionArray);
     displayAnswers(answerArrayQ1);
};

function countdown () {
    var timeLeft = 60;

var timeInterval = setInterval (function() {
  if (timeLeft > 1) {
      timerBegins.textContent = timeLeft + ' seconds remaining'; 
      timeLeft --; 
  } else if (timeLeft === 1) {
      timerBegins.textContent = timeLeft + ' second remaining'; 
      timeLeft --;
  } else {
      timerBegins.textContent = "";
      clearInterval(timeInterval);
     
  }
}, 1000); 
};

//WHEN I answer a question
//THEN I am presented with another question
function displayQuestions (questionArray) {
    //createElement that serves as the box where the question will go, can use classes and ID. Update text content, use an array of questions
    for (var i = 0; i < questionArray.length; i++){
   var questionContent = document.createElement("section");
   questionContent.textContent = questionArray[i];
   questionText.appendChild(questionContent);
    }
};

function displayAnswers (answersArray) {
    for (var i = 0; i < answersArray.length; i++){
        var answersContent = document.createElement("section");
        answersContent.textContent = answersArray[i];
        questionAnswers.appendChild(answersContent);
    }
}; 

// set for multiple questions, pass in different question in display questions, loop to display questions, array to answers 

//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock


//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
function endGame () {

};

//WHEN the game is over
//THEN I can save my initials and score
function highScore () {
    
}
startBtn.addEventListener("click", startGame);