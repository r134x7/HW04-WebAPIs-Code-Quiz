// creating html elements
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
var goBack = document.createElement("button");
var clearHighscores = document.createElement("button");
var div = document.createElement("div");

var time = 0; // timer number value
var timer; // for set interval function
var countdown; // for timer when starting the test
var countdown1; // for set interval function
var isEnd = 0; // keeps track of questions

var score = { // object used to keep track of player score
  initials: "0",
  correct: 0,
  timeRemaining: 0,
  bonus: 0,
  total: 0,
};

var questions = { // questions for the quiz in an object using arrays
  q: ["Commonly used data types do not include...?", "To use a function you must...?", "The abbreviation DOM stands for...?", "The difference between a for loop and a while loop is...?", "Which of these are three Boolean operators...?"],
  a: ["strings", "Call it by its first name", "Document Object Model", "One is irritable and the other obsesses over the truth", "Yes, No, Maybe."],
  b: ["prompts", "Call it by its last name", "Data Object Model", "One is iterable and the other loops over false statements", "True, False, Null."],
  c: ["numbers", "Call it", "Disk Operating Manual", "One is irritable and the other loops while a statement is true", "And, Or, Not."],
  d: ["booleans", "Call it something else", "Document Official Model", "One iterates a set number of times and the other loops while a statement is true", "If, For, While."],
}

// textContent for some of the previous variables
highscorespage.textContent = "View Highscores";
timerText.textContent = "Time: ";
h1El.textContent = "Coding Quiz Practice";
intro.textContent = "Test your knowledge by answering\n the following JavaScript-related multiple choice questions\n within the time limit. Incorrect answers result in a \n ten second penalty.\n \n Clicking the button below will start the quiz.";
startButton.textContent = "Start Quiz";
submit.textContent = "Submit";
goBack.textContent = "Go Back";
clearHighscores.textContent = "Clear Highscores";

// set attributes for some of the previous variables

// intro.setAttribute("style", "white-space: pre;"); // code for using new lines with texContent, source: https://stackoverflow.com/questions/9980416/how-can-i-insert-new-line-carriage-returns-into-an-element-textcontent user: nelek

nav1.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: space-between");

h1El.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: center; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size:32px; margin: 10px 10px 10px 10px;");

// intro.setAttribute("style", "font-size:16px; text-align:center;");
intro.setAttribute("style", "display: flex; flex-wrap: wrap; font-size:16px; text-align:center; justify-content: center; margin: 10px 10px 10px 10px;"); // can set only one style, any new style in a new line overwrites the old one.

div.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: space-between; flex-direction: column; align-content: flex-start;");

// startButton.setAttribute("id", "startB");
startButton.setAttribute("style", "padding: 2em 2em 2em 2em; margin: 2em 2em 2em 2em; background-color: red; font-weight: bold; border-radius: 30px; color: white;")

aButton.setAttribute("style", "padding: 2em 2em 2em 2em; margin: 10px 10px 10px 10px; background-color: red; font-weight: bold; border-radius: 30px; color: white;")

bButton.setAttribute("style", "padding: 2em 2em 2em 2em; margin: 10px 10px 10px 10px; background-color: red; font-weight: bold; border-radius: 30px; color: white;")

cButton.setAttribute("style", "padding: 2em 2em 2em 2em; margin: 10px 10px 10px 10px; background-color: red; font-weight: bold; border-radius: 30px; color: white;")

dButton.setAttribute("style", "padding: 2em 2em 2em 2em; margin: 10px 10px 10px 10px; background-color: red; font-weight: bold; border-radius: 30px; color: white;")

submit.setAttribute("style", "padding: 2em 2em 2em 2em; margin: 1em 1em 1em 1em; background-color: red; font-weight: bold; border-radius: 30px; color: white;")

goBack.setAttribute("style", "padding: 2em 2em 2em 2em; margin: 1em 1em 1em 1em; background-color: red; font-weight: bold; border-radius: 30px; color: white;")

clearHighscores.setAttribute("style", "padding: 2em 2em 2em 2em; margin: 1em 1em 1em 1em; background-color: red; font-weight: bold; border-radius: 30px; color: white;")

highscorespage.setAttribute("style", "background-color: red; font-weight: bold; border-radius: 30px; color: white;")

input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter Initials, max 3 characters");
// input.setAttribute("minlength", "1");
input.setAttribute("maxlength", "3");
// source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

// adds classes to html elements
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

var timerElement = document.querySelector(".time1") // must be placed after timerText.appendChild(span);

startButton.addEventListener("click", init)

  function init() { // called when startButton is clicked
    
    h1El.textContent = "";
    intro.textContent = "";
    div.removeChild(startButton); // to remove start button

    countdown = 3; // set countdown timer

    countdown1 = setInterval(function () { // displays 3, 2, 1 countdown
    
      h1El.textContent = countdown; // countdown display
    
    if (countdown > 0) {
      countdown--;  
    } else {
      h1El.textContent = "";
      clearInterval(countdown1) // Do not use init... caused an awful bug, supposed to clear the setInterval function. By having two timers running at once it caused the second timer to not subtract.
      startQuiz()
      }
    }, 1000);
  }

function startQuiz() { // Quiz starts after countdown ends
  time = 50;
  timerElement.textContent = time;

  renderQuiz()
  startTimer()
}

function startTimer() { // Timer for quiz
  
  timer = setInterval(function() {
    time--;
    timerElement.textContent = time;

    if (isEnd >= 5 && time >= 0 ) {
        score.timeRemaining = time;
        clearInterval(timer); //stops timer setInterval
        quizEnd();
        return time;
    }

    if (time <= 0) {
      score.timeRemaining = 0;
      clearInterval(timer); //stops timer setInterval
      quizEnd();
      return time;
    }
  }, 1000);
}

function renderQuiz() { // appends buttons for answers, starts with question 1

  div.appendChild(aButton);
  div.appendChild(bButton);
  div.appendChild(cButton);
  div.appendChild(dButton);
  body.appendChild(h2El);

  h1El.textContent = questions.q[0]; // question 1
  aButton.textContent = questions.a[0]; // answers
  bButton.textContent = questions.b[0];
  cButton.textContent = questions.c[0];
  dButton.textContent = questions.d[0];

  aButton.addEventListener("click", wrongAnswer)
  bButton.addEventListener("click", correctAnswer)
  cButton.addEventListener("click", wrongAnswer)
  dButton.addEventListener("click", wrongAnswer)

}

function correctAnswer() { // if an answer is correct
  score.correct++;
  isEnd++;
  h2El.textContent = "Correct!";

  setTimeout(function() { // To make Correct! dissapear after a moment
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


  if (isEnd === 1) { // Goes to next question depending on isEnd value
    secondQ();
  } else if (isEnd === 2) {
    thirdQ();
  } else if (isEnd === 3) {
    fourthQ();
  } else if (isEnd === 4) {
    fifthQ();
  }
}

function wrongAnswer() { // if answer is wrong
  time = time - 10;
  timerElement.textContent = time;
  h2El.textContent = "Wrong!";
  isEnd++;

  setTimeout(function() { // To make Wrong! dissapear after a moment
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

  if (isEnd === 1) { // Goes to next question depending on isEnd value
    secondQ();
  } else if (isEnd === 2) {
    thirdQ();
  } else if (isEnd === 3) {
    fourthQ();
  } else if (isEnd === 4) {
    fifthQ();
  }
}

function secondQ() { // second question

  h1El.textContent = questions.q[1]; // question 2
  aButton.textContent = questions.a[1]; // answers
  bButton.textContent = questions.b[1];
  cButton.textContent = questions.c[1];
  dButton.textContent = questions.d[1];

  aButton.addEventListener("click", wrongAnswer)
  bButton.addEventListener("click", wrongAnswer)
  cButton.addEventListener("click", correctAnswer)
  dButton.addEventListener("click", wrongAnswer)

}

function thirdQ() { // third question

  h1El.textContent = questions.q[2]; // question 3
  aButton.textContent = questions.a[2]; // answers
  bButton.textContent = questions.b[2];
  cButton.textContent = questions.c[2];
  dButton.textContent = questions.d[2];

  aButton.addEventListener("click", correctAnswer)
  bButton.addEventListener("click", wrongAnswer)
  cButton.addEventListener("click", wrongAnswer)
  dButton.addEventListener("click", wrongAnswer)

}

function fourthQ() { // fourth question

  h1El.textContent = questions.q[3]; // question 4
  aButton.textContent = questions.a[3]; // answers
  bButton.textContent = questions.b[3];
  cButton.textContent = questions.c[3];
  dButton.textContent = questions.d[3];

  aButton.addEventListener("click", wrongAnswer)
  bButton.addEventListener("click", wrongAnswer)
  cButton.addEventListener("click", wrongAnswer)
  dButton.addEventListener("click", correctAnswer)

}

function fifthQ() { // fifth question

  h1El.textContent = questions.q[4]; // question 5
  aButton.textContent = questions.a[4]; // answers
  bButton.textContent = questions.b[4];
  cButton.textContent = questions.c[4];
  dButton.textContent = questions.d[4];

  aButton.addEventListener("click", wrongAnswer)
  bButton.addEventListener("click", wrongAnswer)
  cButton.addEventListener("click", correctAnswer)
  dButton.addEventListener("click", wrongAnswer)

}


function quizEnd() { // when time runs out or isEnd is 5 or greater, shows score

  h2El.textContent = "";

  score.bonus = score.correct * score.timeRemaining; // has to be placed here after test to update score.bonus
  score.total = score.correct + score.bonus; // has to be placed here after test to update score.total

  div.removeChild(aButton);
  div.removeChild(bButton);
  div.removeChild(cButton);
  div.removeChild(dButton);

  intro.setAttribute("style", "display: flex; flex-wrap: wrap; font-size:16px; text-align:center; justify-content: center; white-space: pre;");

  h1El.textContent = "Finished.";
  intro.textContent = "You got " + score.correct + " correct. \nYour time remaining was " + score.timeRemaining + " seconds." + "\nYour bonus score is " + score.bonus + "\nYour total score is " + score.total + "."; 

  body.appendChild(form);
  form.appendChild(input);
  form.appendChild(submit);
  // var submit2 = document.querySelector(".submit1")

  if (input.value === "") { //if no initials entered
    input.value === "AAA";
  }

  form.addEventListener("submit", submitForm); // in the end it was the form that was meant to have the eventListener, not the submit button and not the input. Which meant it finally stopped refreshing.
}

function submitForm(event) { // when submit is clicked
  event.preventDefault(); // To prevent the page from refreshing
  
  if (input.value === "") { // if no value entered for initials
    score.initials = "AAA";
  } else score.initials = input.value; 
  
  localStorage.setItem("score", JSON.stringify(score)); // stores the score object to local storage

  highscores();
}

function highscores() { // displays the highscores "page"
  body.removeChild(form);

  h1El.textContent = "Highscores";

  var obj = JSON.parse(localStorage.getItem("score")); // retrieves the score object from local storage

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

function viewHighscores() {  // displays the view Highscores "page"
  nav1.removeChild(timerText);
  div.removeChild(startButton);

  h1El.textContent = "Highscores";

  var obj = JSON.parse(localStorage.getItem("score"));

  if (obj !== null) { // if local storage isn't empty
    intro.textContent = "1. " + " Initials: " + obj.initials + ", Correct Answers: " + obj.correct + ", Time Remaining: " + obj.timeRemaining + " seconds" + ", Bonus Points: " + obj.bonus + ", Total: " + obj.total + ".";
  } else {
    intro.textContent = "";
  }

  div.appendChild(goBack);
  div.appendChild(clearHighscores);

  goBack.addEventListener("click", reset)

  clearHighscores.addEventListener("click", resetHighscores);
}

highscorespage.addEventListener("click", viewHighscores); // for the view highscores button