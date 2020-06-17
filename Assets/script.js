var quiz = document.querySelector("#quiz");
var question = document.querySelector("#question");
var answerA = document.querySelector("#A");
var answerB = document.querySelector("#B");
var answerC = document.querySelector("#C");
var scoreDiv = document.querySelector("#scoreCount");
var timerDiv = document.querySelector("#timer");

//all questions are stored in this array
var multipleChoice = [
  {
    question: "Which of these is a Boolean?",
    answerA: "False",
    answerB: "56",
    answerC: "Undefined",
    correct: "A",
  },
];

var secondsLeft = 30;
var score = 0;

//all questions are stored in this array
var multipleChoice = [
  {
    question: "Which of these is a Boolean?",
    answerA: "False",
    answerB: "56",
    answerC: "Undefined",
    correct: "A",
  },
];

//these will keep track of index of array
var lastQuestionIndex = multipleChoice.length - 1;
var currentQuestionIndex = 0;

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

//starts the game
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  start.style.display = "none";
  quiz.style.display = "block";
  renderQuestion();
  setTime();
  renderLastRegistered();
}
