var start = document.querySelector("#start");
var startBtn = document.querySelector("#start-btn");
var quiz = document.querySelector("#quiz");
var question = document.querySelector("#question");
var answerA = document.querySelector("#A");
var answerB = document.querySelector("#B");
var answerC = document.querySelector("#C");
var scoreDiv = document.querySelector("#scoreCount");
var timerDiv = document.querySelector("#timer");
var messageDiv = document.querySelector("#message");
var initialsDiv = document.querySelector("#initials");
var submit = document.querySelector("#submitBtn");
var userInitials = document.querySelector("#user-initials");
var userScore = document.querySelector("#user-score");

var secondsLeft = 30;
var score = 0;

//all questions are stored in this array as objects
var multipleChoice = [
  {
    question: "Which of these is a Boolean?",
    answerA: "False",
    answerB: "56",
    answerC: "Undefined",
    correct: "A",
  },
  {
    question: "Which of these is an array?",
    answerA: "var number = 123;",
    answerB: "var number = [1, 2, 3];",
    answerC: "function();",
    correct: "B",
  },
  {
    question: "How long is the string 'Hello'?",
    answerA: "7",
    answerB: "6",
    answerC: "5",
    correct: "C",
  },
  {
    question: "How do you declare a variable?",
    answerA: "event",
    answerB: "var",
    answerC: "for",
    correct: "B",
  },
  {
    question: "How do you increment?",
    answerA: "i++",
    answerB: "i==",
    answerC: "i--",
    correct: "A",
  },
];

//these will keep track of the index of array
var lastQuestionIndex = multipleChoice.length - 1;
var currentQuestionIndex = 0;

//starts the game
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  start.style.display = "none";
  quiz.style.display = "block";
  renderQuestion();
  setTime();
  renderLastRegistered();
}

//renders the question to the page
function renderQuestion() {
  var q = multipleChoice[currentQuestionIndex];

  question.innerHTML = "<p>" + q.question + "<p>";
  answerA.innerHTML = q.answerA;
  answerB.innerHTML = q.answerB;
  answerC.innerHTML = q.answerC;
}

//starts the time and displays it in the divtag
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    // update the count down
    timerDiv.textContent = secondsLeft + " seconds left";
    // check if time has run out
    if (secondsLeft === 0) {
      // stop the interval by passing the identifier returned by setInterval to
      // the clearInterval method.
      clearInterval(timerInterval);
      renderScore();
    }
  }, 1000);
}

//checks answer
function checkAnswer(answer) {
  if (answer === multipleChoice[currentQuestionIndex].correct) {
    score++;
    //display correct message
    message.textContent = "Correct!";
    message.style.color = "Green";
  } else {
    score--;
    message.textContent = "Incorrect!";
    message.style.color = "Red";
    //deduct time fuction here and display wrong messaage
    deductTime();
  }

  //checks to see if there is a next question
  if (currentQuestionIndex < lastQuestionIndex) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    renderScore();
  }
}

//deduct time when incorrect is chosen
function deductTime() {
  secondsLeft = secondsLeft - 5;
  return secondsLeft;
}

//shows the score section after quiz is complete
function renderScore() {
  scoreDiv.style.display = "block";
  initialsDiv.style.display = "block";
  quiz.style.display = "none";
  scoreDiv.textContent = "Your score is " + score;
}

//saves score and initials in local storage
submit.addEventListener("click", function (event) {
  event.preventDefault();

  var initials = document.querySelector("#name").value;
  localStorage.setItem("initials", initials);
  localStorage.setItem("score", score);
});

//saves score and initials to local storage
function renderLastRegistered() {
  var savedInitials = localStorage.getItem("initials");
  userInitials.textContent = savedInitials;

  var savedScore = localStorage.getItem("score");
  userScore.textContent = savedScore;
}
