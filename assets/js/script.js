// var header = document.header;
var body = document.body;
var h1El = document.createElement("h1");
var intro = document.createElement("p");
var startButton = document.createElement("button");
var nav1 = document.createElement("nav");
var highscorespage = document.createElement("a")
var timerText = document.createElement("p");
var span = document.createElement("span");
var aButton = document.createElement("button");
var bButton = document.createElement("button");
var cButton = document.createElement("button");
var dButton = document.createElement("button");
var h2El = document.createElement("h2");
var form = document.createElement("form");
var input = document.createElement("input");
var submit = document.createElement("button");
// var submitlink = document.createElement("a")

var time = 0;
var timer;
var countdown; // for time
var countdown1; // for timer function
var isEnd = 0;

var score = {
  initials: "",
  correct: 0,
  timeRemaining: 0,
  bonus: 0,
  total: 0,
};

// var bonus = score.correct * score.timeRemaining;
// var total = score.correct + bonus; 

// var correct = 0;
// var timeRemaining = 0;
// var bonus = correct * timeRemaining;

var questions = {
  q: ["Commonly used data types do not include...?", "11111111"],
  a: ["strings", "11111111"],
  b: ["prompts", "11111111"],
  c: ["numbers", "11111111"],
  d: ["booleans", "11111111"],
}

// textContent
highscorespage.textContent = "Highscores Page";
timerText.textContent = "Time: ";
h1El.textContent = "Coding Quiz Practice";
intro.textContent = "Test you knowledge by answering\n the following JavaScript-related multiple choice questions\n within the time limit. Incorrect answers result in a \n ten second penalty.\n \n Clicking the button will start the quiz.";
startButton.textContent = "Start Quiz";
submit.textContent = "Submit";

// set attributes
highscorespage.setAttribute("href", "highscores.html");
// submitlink.setAttribute("href", "highscores.html");

intro.setAttribute("style", "white-space: pre;");
// code for using new lines with texContent, source: https://stackoverflow.com/questions/9980416/how-can-i-insert-new-line-carriage-returns-into-an-element-textcontent user: nelek

startButton.setAttribute("id", "startB");
// source: https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter Initials <= 3 characters");
input.setAttribute("minlength", "1");
input.setAttribute("maxlength", "3");
submit.setAttribute("href", "highscores.html")

startButton.classList.add("start");
// source: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

span.classList.add("time1");
submit.classList.add("submit1");


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

    countdown1 = setInterval(function () {
    
    h1El.textContent = countdown;
    
    if (countdown > 0) {
      countdown--;  
    } else {
      h1El.textContent = "";
      clearInterval(countdown1) // Do not use init... caused an awful bug, supposed to clear the setInterval function. By having two timers running at once it caused the second timer to not subtract.
      startQuiz()
    }
  }, 1000);
}

function startQuiz() {
  time = 50;
  timerElement.textContent = time;

  renderQuiz()
  startTimer()
}

function startTimer() {
  // Sets timer
  
  timer = setInterval(function() {
    time--;
    timerElement.textContent = time;

    if (isEnd >= 5 && time >= 0 ) {
      // Tests if win condition is met
      // if (isEnd >= 5 && time >= 0) {
        // Clears interval and stops timer
        score.timeRemaining = time;
        clearInterval(timer);
        quizEnd();
        return time;
      // }
    }
    // Tests if time has run out
    if (time <= 0) {
      // Clears interval
      score.timeRemaining = 0;
      clearInterval(timer);
      quizEnd();
      return time;
    }
  }, 1000);
}

function renderQuiz() {

  body.appendChild(aButton);
  body.appendChild(bButton);
  body.appendChild(cButton);
  body.appendChild(dButton);
  body.appendChild(h2El);

  h1El.textContent = questions.q[0];
  aButton.textContent = questions.a[0];
  bButton.textContent = questions.b[0];
  cButton.textContent = questions.c[0];
  dButton.textContent = questions.d[0];

  aButton.addEventListener("click", wrongAnswer)
  bButton.addEventListener("click", correctAnswer)
  cButton.addEventListener("click", wrongAnswer)
  dButton.addEventListener("click", wrongAnswer)



}

x = 0;
y = 0;
function correctAnswer() {
  score.correct++;
  x++;
  isEnd++;
  h2El.textContent = "Correct!";
}


function wrongAnswer() {
  time = time - 5;
  timerElement.textContent = time;
  y++
  h2El.textContent = "Wrong!";  
}

function quizEnd() {

  score.bonus = score.correct * score.timeRemaining;
  score.total = score.correct + score.bonus;

  body.removeChild(aButton);
  body.removeChild(bButton);
  body.removeChild(cButton);
  body.removeChild(dButton);

  h1El.textContent = "Finished.";
  intro.textContent = "You got " + score.correct + "\nYour time remaining was " + score.timeRemaining + " seconds." + "\nYour bonus score is " + score.bonus + "\nYour final score is " + score.total + "."; 

  body.appendChild(form);
  form.appendChild(input);
  // form.appendChild(submitlink);
  form.appendChild(submit);

  // var submit2 = document.querySelector(".submit1")

  form.addEventListener("submit", submitForm); // in the end it was the form that was meant to have the eventListener, not the submit button and not the input. Which meant it finally stopped refreshing.

  console.log(score);
}

function submitForm(event) {
  event.preventDefault();
  // event.stopPropagation();
  score.initials = input.value;
  localStorage.setItem("score", JSON.stringify(score));


}



// possible things to use: 
// document.querySelector(); 
// set interval
// document.querySelectorAll(); use to select an array of buttons, can then run a for loop if needed


