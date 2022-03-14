// var header = document.header;
var body = document.body;
var h1El = document.createElement("h1");
var intro = document.createElement("p");
var startButton = document.createElement("button");
var nav1 = document.createElement("nav");
var highscorespage = document.createElement("a")

h1El.textContent = "Coding Quiz Practice";
intro.textContent = "Test you knowledge by answering\n the following JavaScript-related multiple choice questions\n within the time limit. Incorrect answers result in a \n ten second penalty.\n \n Clicking the button will start the quiz.";
startButton.textContent = "Start Quiz";

intro.setAttribute("style", "white-space: pre;");
// code for using new lines with texContent, source: https://stackoverflow.com/questions/9980416/how-can-i-insert-new-line-carriage-returns-into-an-element-textcontent user: nelek

startButton.setAttribute("id", "startB")
// source: https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

startButton.classList.add("start")
// source: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

highscorespage.textContent = "Highscores Page";
highscorespage.setAttribute("href", "highscores.html")

body.appendChild(nav1);
body.appendChild(highscorespage);
body.appendChild(h1El);
body.appendChild(intro);
body.appendChild(startButton);

startButton.addEventListener("click", startQuiz)

function startQuiz() {

}


// possible things to use: 
// document.querySelector(); 
// set interval
// document.querySelectorAll(); use to select an array of buttons, can then run a for loop if needed