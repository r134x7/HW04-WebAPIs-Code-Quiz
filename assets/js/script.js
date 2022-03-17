// var header = document.header;
var body = document.body;
var h1El = document.createElement("h1");
var intro = document.createElement("p");
var startButton = document.createElement("button");
var nav1 = document.createElement("nav");
var highscorespage = document.createElement("button")
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
var goBack = document.createElement("button");
var clearHighscores = document.createElement("button");
var div = document.createElement("div");

var time = 0;
var timer;
var countdown; // for time
var countdown1; // for timer function
var isEnd = 0;

var score = {
  initials: "0",
  correct: 0,
  timeRemaining: 0,
  bonus: 0,
  total: 0,
};

var questions = {
  q: ["Commonly used data types do not include...?", "To use a function you must...?", "The abbreviation DOM stands for...?", "The difference between a for loop and a while loop is...?", "Which of these are three Boolean operators...?"],
  a: ["strings", "Call it by its first name", "Document Object Model", "One is irritable and the other obsesses over the truth", "Yes, No, Maybe."],
  b: ["prompts", "Call it by its last name", "Data Object Model", "One is iterable and the other loops over false statements", "True, False, Null."],
  c: ["numbers", "Call it", "Disk Operating Manual", "One is irritable and the other loops while a statement is true", "And, Or, Not."],
  d: ["booleans", "Call it something else", "Document Official Model", "One iterates a set number of times and the other loops while a statement is true", "If, For, While."],
}

// textContent
highscorespage.textContent = "View Highscores";
timerText.textContent = "Time: ";
h1El.textContent = "Coding Quiz Practice";
intro.textContent = "Test your knowledge by answering\n the following JavaScript-related multiple choice questions\n within the time limit. Incorrect answers result in a \n ten second penalty.\n \n Clicking the button below will start the quiz.";
startButton.textContent = "Start Quiz";
submit.textContent = "Submit";
goBack.textContent = "Go Back";
clearHighscores.textContent = "Clear Highscores";

// set attributes
// intro.setAttribute("style", "white-space: pre;");
// code for using new lines with texContent, source: https://stackoverflow.com/questions/9980416/how-can-i-insert-new-line-carriage-returns-into-an-element-textcontent user: nelek

nav1.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: space-between");

h1El.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: center; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size:32px;");

// intro.setAttribute("style", "font-size:16px; text-align:center;");
intro.setAttribute("style", "display: flex; flex-wrap: wrap; font-size:16px; text-align:center; justify-content: center;");

div.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: space-between; flex-direction: column; align-content: flex-start;");

startButton.setAttribute("id", "startB");
startButton.setAttribute("style", "padding: 2em 2em 2em 2em; margin: 2em 2em 2em 2em; background-color: red; font-weight: bold; border-radius: 30px; color: white;")

aButton.setAttribute("style", "padding: 2em 2em 2em 2em; margin: 1em 1em 1em 1em; background-color: red; font-weight: bold; border-radius: 30px; color: white;")

bButton.setAttribute("style", "padding: 2em 2em 2em 2em; margin: 1em 1em 1em 1em; background-color: red; font-weight: bold; border-radius: 30px; color: white;")

cButton.setAttribute("style", "padding: 2em 2em 2em 2em; margin: 1em 1em 1em 1em; background-color: red; font-weight: bold; border-radius: 30px; color: white;")

dButton.setAttribute("style", "padding: 2em 2em 2em 2em; margin: 1em 1em 1em 1em; background-color: red; font-weight: bold; border-radius: 30px; color: white;")

input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter Initials <= 3 characters");
input.setAttribute("minlength", "1");
input.setAttribute("maxlength", "3");
// source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

span.classList.add("time1");
submit.classList.add("submit1");

// append variables to DOM
body.appendChild(nav1);
nav1.appendChild(highscorespage);
nav1.appendChild(timerText);
timerText.appendChild(span);
span.append(time); //place time inside span
body.appendChild(h1El);
body.appendChild(intro);
body.appendChild(div);
div.appendChild(startButton);

erase = [highscorespage, h1El, intro, startButton];

var timerElement = document.querySelector(".time1") // must be placed after appendChild

startButton.addEventListener("click", init)

// function startQuiz() {

// }

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  function init() {
    
    h1El.textContent = "";
    intro.textContent = "";
    div.removeChild(startButton);
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

  div.appendChild(aButton);
  div.appendChild(bButton);
  div.appendChild(cButton);
  div.appendChild(dButton);
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

// x = 0;
// y = 0;
function correctAnswer() {
  score.correct++;
  // x++;
  isEnd++;
  h2El.textContent = "Correct!";

  setTimeout(function() {
    h2El.textContent = "";
  }, 1*1000);
    // setTimeout source: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

  // if event listener is not removed, then bug occurs regarding isEnd++ being doubled on a button that was previously right and wrong
  aButton.removeEventListener("click", correctAnswer)
  bButton.removeEventListener("click", correctAnswer)
  cButton.removeEventListener("click", correctAnswer)
  dButton.removeEventListener("click", correctAnswer)

  aButton.removeEventListener("click", wrongAnswer)
  bButton.removeEventListener("click", wrongAnswer)
  cButton.removeEventListener("click", wrongAnswer)
  dButton.removeEventListener("click", wrongAnswer)


  if (isEnd === 1) {
    secondQ();
  } else if (isEnd === 2) {
    thirdQ();
  } else if (isEnd === 3) {
    fourthQ();
  } else if (isEnd === 4) {
    fifthQ();
  }

  console.log(isEnd)
}


function wrongAnswer() {
  time = time - 10;
  timerElement.textContent = time;
  h2El.textContent = "Wrong!";
  isEnd++;

  setTimeout(function() {
    h2El.textContent = "";
  }, 1*1000);
  // setTimeout source: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

  // if event listener is not removed, then bug occurs regarding isEnd++ being doubled on a button that was previously right and wrong
  aButton.removeEventListener("click", correctAnswer)
  bButton.removeEventListener("click", correctAnswer)
  cButton.removeEventListener("click", correctAnswer)
  dButton.removeEventListener("click", correctAnswer)

  aButton.removeEventListener("click", wrongAnswer)
  bButton.removeEventListener("click", wrongAnswer)
  cButton.removeEventListener("click", wrongAnswer)
  dButton.removeEventListener("click", wrongAnswer)

  if (isEnd === 1) {
    secondQ();
  } else if (isEnd === 2) {
    thirdQ();
  } else if (isEnd === 3) {
    fourthQ();
  } else if (isEnd === 4) {
    fifthQ();
  }

  console.log(isEnd)
}

function secondQ() {

  h1El.textContent = questions.q[1];
  aButton.textContent = questions.a[1];
  bButton.textContent = questions.b[1];
  cButton.textContent = questions.c[1];
  dButton.textContent = questions.d[1];

  aButton.addEventListener("click", wrongAnswer)
  bButton.addEventListener("click", wrongAnswer)
  cButton.addEventListener("click", correctAnswer)
  dButton.addEventListener("click", wrongAnswer)

}

function thirdQ() {

  h1El.textContent = questions.q[2];
  aButton.textContent = questions.a[2];
  bButton.textContent = questions.b[2];
  cButton.textContent = questions.c[2];
  dButton.textContent = questions.d[2];

  aButton.addEventListener("click", correctAnswer)
  bButton.addEventListener("click", wrongAnswer)
  cButton.addEventListener("click", wrongAnswer)
  dButton.addEventListener("click", wrongAnswer)

}

function fourthQ() {

  h1El.textContent = questions.q[3];
  aButton.textContent = questions.a[3];
  bButton.textContent = questions.b[3];
  cButton.textContent = questions.c[3];
  dButton.textContent = questions.d[3];

  aButton.addEventListener("click", wrongAnswer)
  bButton.addEventListener("click", wrongAnswer)
  cButton.addEventListener("click", wrongAnswer)
  dButton.addEventListener("click", correctAnswer)

}

function fifthQ() {

  h1El.textContent = questions.q[4];
  aButton.textContent = questions.a[4];
  bButton.textContent = questions.b[4];
  cButton.textContent = questions.c[4];
  dButton.textContent = questions.d[4];

  aButton.addEventListener("click", wrongAnswer)
  bButton.addEventListener("click", wrongAnswer)
  cButton.addEventListener("click", correctAnswer)
  dButton.addEventListener("click", wrongAnswer)

}


function quizEnd() {

  h2El.textContent = "";

  score.bonus = score.correct * score.timeRemaining;
  score.total = score.correct + score.bonus;

  div.removeChild(aButton);
  div.removeChild(bButton);
  div.removeChild(cButton);
  div.removeChild(dButton);

  intro.setAttribute("style", "display: flex; flex-wrap: wrap; font-size:16px; text-align:center; justify-content: center; white-space: pre;");

  h1El.textContent = "Finished.";
  intro.textContent = "You got " + score.correct + " correct. \nYour time remaining was " + score.timeRemaining + " seconds." + "\nYour bonus score is " + score.bonus + "\nYour total score is " + score.total + "."; 

  body.appendChild(form);
  form.appendChild(input);
  // form.appendChild(submitlink);
  form.appendChild(submit);

  // var submit2 = document.querySelector(".submit1")

  if (input.value === "") {
    input.value === "AAA";
  }

  form.addEventListener("submit", submitForm); // in the end it was the form that was meant to have the eventListener, not the submit button and not the input. Which meant it finally stopped refreshing.
}

function submitForm(event) {
  event.preventDefault();
  // event.stopPropagation();

  if (input.value === "") {
    score.initials = "AAA";
  } else score.initials = input.value; 
  
  localStorage.setItem("score", JSON.stringify(score));

  highscores();
}

function highscores() {
  body.removeChild(form);

  h1El.textContent = "Highscores";

  var obj = JSON.parse(localStorage.getItem("score"));

intro.textContent = "1. " + " Initials: " + obj.initials + ", Correct Answers: " + obj.correct + ", Time Remaining: " + obj.timeRemaining + " seconds" + ", Bonus Points: " + obj.bonus + ", Total: " + obj.total + "."; 

  div.appendChild(goBack);
  div.appendChild(clearHighscores);

  goBack.addEventListener("click", reset)

  clearHighscores.addEventListener("click", resetHighscores);
}

function reset() {
  location.reload(); // refreshes the page
}

function resetHighscores() {
  localStorage.clear(); // deletes localStorage related to URL
  intro.textContent = "";
}

function viewHighscores() { 
  nav1.removeChild(timerText);
  div.removeChild(startButton);

  h1El.textContent = "Highscores";
  

  var obj = JSON.parse(localStorage.getItem("score"));

  if (obj !== null) {
    intro.textContent = "1. " + " Initials: " + obj.initials + ", Correct Answers: " + obj.correct + ", Time Remaining: " + obj.timeRemaining + " seconds" + ", Bonus Points: " + obj.bonus + ", Total: " + obj.total + ".";
  } else {
    intro.textContent = "";
  }

  

  div.appendChild(goBack);
  div.appendChild(clearHighscores);

  goBack.addEventListener("click", reset)

  clearHighscores.addEventListener("click", resetHighscores);
}

highscorespage.addEventListener("click", viewHighscores);



// possible things to use: 
// document.querySelector(); 
// set interval
// document.querySelectorAll(); use to select an array of buttons, can then run a for loop if needed


