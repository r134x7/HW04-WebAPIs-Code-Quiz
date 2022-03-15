// var header = document.header;
var body = document.body;
var h1El = document.createElement("h1");
var intro = document.createElement("p");
var startButton = document.createElement("button");
var nav1 = document.createElement("nav");
var highscorespage = document.createElement("a")
var timerText = document.createElement("p");
var span = document.createElement("span")

var time = 0;
var timer;
var isEnd = 0;



// textContent
highscorespage.textContent = "Highscores Page";
timerText.textContent = "Time: ";
h1El.textContent = "Coding Quiz Practice";
intro.textContent = "Test you knowledge by answering\n the following JavaScript-related multiple choice questions\n within the time limit. Incorrect answers result in a \n ten second penalty.\n \n Clicking the button will start the quiz.";
startButton.textContent = "Start Quiz";

// set attributes
highscorespage.setAttribute("href", "highscores.html")

intro.setAttribute("style", "white-space: pre;");
// code for using new lines with texContent, source: https://stackoverflow.com/questions/9980416/how-can-i-insert-new-line-carriage-returns-into-an-element-textcontent user: nelek

startButton.setAttribute("id", "startB")
// source: https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

startButton.classList.add("start")
// source: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

span.classList.add("time1")


// append variables to DOM
body.appendChild(nav1);
nav1.appendChild(highscorespage);
body.appendChild(timerText);
timerText.appendChild(span);
span.append(time); //place time inside span
body.appendChild(h1El);
body.appendChild(intro);
body.appendChild(startButton);

erase = [highscorespage, h1El, intro, startButton];

var timerElement = document.querySelector(".time1") // must be placed after appendChild

startButton.addEventListener("click", init)

// function startQuiz() {

// }

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  function init() {
    
    h1El.textContent = "";
    intro.textContent = "";
    body.removeChild(startButton);
    countdown = 3;
    // time.textContent = "25";

    setInterval(function () {
    
    h1El.textContent = countdown;
    
    if (countdown > 0) {
      countdown--;  
    } else {
      h1El.textContent = '';
      clearInterval(init)
      startQuiz()
    }
  }, 1000);
}

function startQuiz() {
  time = 25;
  timerElement.textContent = time;
  
  renderQuiz()
  startTimer()
}

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    time--;
    timerElement.textContent = time;
    // time.textContent = time;
    if (time >= 0) {
      // Tests if win condition is met
      if (isEnd === 5 && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        quizEnd();
      }
    }
    // Tests if time has run out
    if (time === 0) {
      // Clears interval
      clearInterval(timer);
      quizEnd();
    }
  }, 1000);
}

function renderQuiz() {

}

function quizEnd() {

}

// possible things to use: 
// document.querySelector(); 
// set interval
// document.querySelectorAll(); use to select an array of buttons, can then run a for loop if needed