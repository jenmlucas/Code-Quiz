var startBtn = document.getElementById("startButton");
console.log(startBtn);
var timerBegins = document.getElementById("timerbegins");
var questionText = document.getElementById("questionText");
var questionAnswers = document.getElementById("questionAnswers");

//var answerArrayQ1= ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];
//var questionArray= ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"]

var currentQuestion = 0;

var quizList = [
    {
        question: "Question 1:",
        choices: ["A1", "B1", "C1", "D1"],
        answer: "A1"
    },
    {
        question: "Question 2:",
        choices: ["A2", "B2", "C2", "D2"],
        answer: "B2"
    },
    {
        question: "Question 3:",
        choices: ["A3", "B3", "C3", "D3"],
        answer: "C3"
    },
    {
        question: "Question 4:",
        choices: ["A4", "B4", "C4", "D4"],
        answer: "D4"
    },
    {
        question: "Question 5:",
        choices: ["A5", "B5", "C5", "D5"],
        answer: "D6"
    }
];
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
function startGame () {
     console.log("button click");
     countdown();
     displayQuestions();
     displayAnswers();
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
function displayQuestions () {
    //createElement that serves as the box where the question will go, can use classes and ID. Update text content, use an array of questions
    //for (var i = 0; i < questionArray.length; i++){
        //reset the question area
    questionText.innerHTML= "";
   var questionContent = document.createElement("section");
   questionContent.textContent = quizList[currentQuestion].question;
   questionText.appendChild(questionContent);
};

function displayAnswers () {
    questionAnswers.innerHTML= "";
    for (var i = 0; i < quizList[currentQuestion].choices.length; i++){
        var answersContent = document.createElement("section");
        answersContent.textContent = quizList[currentQuestion].choices[i];
        answersContent.addEventListener("click", authenticate)
        questionAnswers.appendChild(answersContent);
    }
}; 
// set for multiple questions, pass in different question in display questions, loop to display questions, array to answers 
function authenticate() {
    console.log("button clicked", this.textContent);

    var answer = quizList[currentQuestion].answer;
    if (this.textContent === answer) {
        textContent.alert("correct answer")
        
    } else {
        alert("Incorrect Answer");
    }
    currentQuestion = currentQuestion +1;

    //call the display functions
    displayAnswers();
    displayQuestions();
}


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