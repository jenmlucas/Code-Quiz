//buttons
var startBtn = document.getElementById("startButton");
var submitBtn = document.getElementById("submit");
var highScoreBtn = document.getElementById("viewHighScores");
//timer
var timerBegins = document.getElementById("timerbegins");
var timeInterval
//
var questionBox = document.getElementsByClassName("questionBox");
var questionText = document.getElementById("questionText");
var questionAnswers = document.getElementById("questionAnswers");
var newTime = document.getElementById("newTime");
var introBox = document.getElementById("introBox");
var currentQuestion = 0;

var quizList = [
    {
        question: "Question 1: What does the Method concat() do?",
        choices: ["A: Joins two or more strings", "B: Joins 2 or more arrays", "C: Changes the existing string", "D: Returns a new string"],
        correctAnswer: "A: Joins two or more strings",
    },
    {
        question: "Question 2: The DOM is built into the JavaScript language.",
        choices: ["A: True", "B: False"],
        correctAnswer: "B: False",

    },
    {
        question: "Question 3: How do we use JavaScript to get the information entered into a form’s input field?",
        choices: ["A: We can select the form’s input element and use the value property to read its data.", "B: We can select the form itself and use the value property to read all of its data.", "C: We can select the form’s input element and use the textContent or innerHTML properties to read its data."],
        correctAnswer: "A: We can select the form’s input element and use the value property to read its data.",
    },
    {
        question: "Question 4: Which of these values is NOT considered false?",
        choices: ["A: 0", "B: '' ", "C: 'null' ", "D: '0' "],
        correctAnswer: "D: '0' ",
    },
    {
        question: "Question 5: Which statement correctly stores data into the Web Storage API?",
        choices: ["A: localStorage.getItem('lunch', 'sandwich'); ", "B: setItem.localStorage('lunch', 'sandwich');", "C: localStorage.setItem('lunch', 'sandwich'); ", "D: getItem.localStorage.('lunch', 'sandwich');"],
        correctAnswer: "C: localStorage.setItem('lunch', 'sandwich'); ",
    },
];
//WHEN I click the start button
//THEN a timer starts and I am presented with a question

function startGame() {
    console.log("button click");
    introBox.style.display = "block";
    introBox.style.display = "none";
    countdown();
    displayQuestions();
    displayAnswers();
};

var timeLeft = 60;

function countdown() {
    timerBegins.textContent = timeLeft + ' seconds remaining';
    timeLeft--;
    timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerBegins.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerBegins.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerBegins.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);
};

//WHEN I answer a question
//THEN I am presented with another question
function displayQuestions() {
    //createElement that serves as the box where the question will go, can use classes and ID. Update text content, use an array of questions
    //reset the question area
    questionText.innerHTML = "";
    var questionContent = document.createElement("section");
    questionContent.textContent = quizList[currentQuestion].question;
    questionText.appendChild(questionContent);
};
// set for multiple questions, pass in different question in display questions, loop to display questions, array to answers 
function displayAnswers() {
    questionAnswers.innerHTML = "";
    for (var i = 0; i < quizList[currentQuestion].choices.length; i++) {
        var answersContent = document.createElement("section");
        answersContent.textContent = quizList[currentQuestion].choices[i];
        answersContent.addEventListener("click", authenticate);
        questionAnswers.appendChild(answersContent);
    }
};


//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
function authenticate() {
    console.log("button clicked", this.textContent);
    var answer = quizList[currentQuestion].correctAnswer;
    if (this.textContent === answer) {
        newTime.textContent = "Correct";
        setTimeout(function () {
            if (currentQuestion >= quizList.length) {
                clearInterval(timeInterval);
                endGame();
            }
            newTime.textContent = "";
            displayAnswers();
            displayQuestions();
        }, 1000)
    }
    else if (this.textContent !== answer) {
        timeLeft -= 15;
        newTime.textContent = "Incorrect";
        setTimeout(function () {
            if (currentQuestion >= quizList.length) {
                clearInterval(timeInterval);
                endGame();
            }
            newTime.textContent = "";
            displayAnswers();
            displayQuestions();
        }, 1000)
        var scoreFormHandler = function (event) {
            event.preventDefault();
            var scoreNameInput = document.querySelector("input[name='task-name']").value;
            scoreNameInput.appendChild(form);
        }
    }
    currentQuestion = currentQuestion + 1;
};
function clickHere() {
    //get High Score
    var scoreForm = document.getElementById("highScoreForm");
  // get the current value of the form display property
    var displaySetting = scoreForm.style.display;
    // also get the clock button, so we can change what it says
    var clickHere = document.getElementById('clickHere');
    if (displaySetting == "block"){
        scoreForm.style.display = "none";
        clickHere.innerHTML ="Click Here";
    }
    else {
        scoreForm.style.display= "block";
        clickHere.innerHTML = "Hide Click Here"
    }
}

//WHEN all questions are answered or the timer reaches 0
//THEN the game is over

// I want the endGame function to initate my highScore

//1. I know I need to create a function
//2. that function needs to be able to hold the score in the localStorage
//3. I need to be able to write initials and have a submit button

//4. to do this. I will create a submit button with addEventListener
//5. I will need to create  an element
//6. I need to append it to a section within my html.
//7. I want my sub
function endGame() {
    console.log("button click");
    console.log("button click");
    localStorage
    //nameInput.innerHTML = "";
    //var highScoreContent = localStorage.getItem("form");
    //highScoreContent.textContent = "";
    // highScoreBtn.addEventListener("click", highScoreForm);
    // nameInput.appendChild(highScoreContent);

};

//WHEN the game is over
//THEN I can save my initials and score
//function highScoreForm() {
//console.log("button click");
//introBox.remove();
//questionBox.remove();
startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", endGame);
highScoreBtn.addEventListener("click", endGame);

