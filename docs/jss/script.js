// create high scores link
// create timer

// create start button
    // create questions
    // create answers
    // if correct answer is clicked
        // score ++
        // next question
    // if incorrect answer is clicked
        // time --
    // when time is over
        // show score
        // enter name and submit and go to leaderboard
    // leaderboard
        // go back button
        // clear leaderboard button
    

//declare variables
var timerCount;
var timer; 
var winCounter;
var isWin = false;
var i = 0;
var score = 0;

var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector("#timer-count");
var card = document.querySelector("#card");
var correctAnswer = document.querySelectorAll(".correctBtn");
var incorrectAnswer = document.querySelectorAll(".incorrectBtn");
var initials = document.getElementById("initialsText");
var submitButton = document.getElementById("submit")


// Create Questions

var questions = ["Inside which HTML element do we put the JavaScript?",
   "The external JavaScript file must contain the <script> tag",
   "How do you write 'Hello World' in an alert box?",
   "How do you create a function in JavaScript",
   "How do you call a function named 'myFunction'?",
   "How to write an IF statment in JavaScript",
   "How does a WHILE loop start?",
   "How does a FOR loop start?",
   "JavaScript is the same as Java",
   "How do you declare a JavaScript variable?",
];

// create winning scenario

var win = "Congratulations! You won the game! Enter your Initials"; 

// create losing scenario

var lose = "Yikes! You lost. Your score is " + score;

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);


// correct answer is chosen
correctAnswer.forEach(function(button) {
   button.addEventListener("click", generateNextQuestion);
   score ++;
})

// incorrect answer is chosen
incorrectAnswer.forEach(function(button) {
    button.addEventListener("click", minusTime)
})

// Function to start the game
function startGame() {
   isWin = false;
 timerCount = 50;
 // disable start button during game
 startButton.disabled = true;
 startTimer();
 nextQuestion();
 showAnswer();
}

function generateNextQuestion() {
   i++;
   nextQuestion();
}

function minusTime() {
    if (timerCount <= 10) {
        timerCount = 1;
        loseGame();
    }
    else {
        timerCount = timerCount - 10;
    }
}


function nextQuestion() {
   card.textContent = questions[i];
   showAnswer();
} 

function  showAnswer() {
   if (i === 0) {
       document.getElementById("answer00").style.display = "inline-block";
   }
   else if (i === 1) {
       console.log("test")
       document.getElementById("answer00").style.display = "none";
       document.getElementById("answer01").style.display = "inline-block";
   }
   else if (i === 2) {
       console.log("test2")
       document.getElementById("answer01").style.display = "none";
       document.getElementById("answer02").style.display = "inline-block";
   }
   else if (i === 3) {
       document.getElementById("answer02").style.display = "none";
       document.getElementById("answer03").style.display = "inline-block";
   }
   else if (i === 4) {
       document.getElementById("answer03").style.display = "none";
       document.getElementById("answer04").style.display = "inline-block";
   }
   else if (i === 5) {
       document.getElementById("answer04").style.display = "none";
       document.getElementById("answer05").style.display = "inline-block";
   }
   else if (i === 6) {
       document.getElementById("answer05").style.display = "none";
       document.getElementById("answer06").style.display = "inline-block";
   }
   else if (i === 7) {
       document.getElementById("answer06").style.display = "none";
       document.getElementById("answer07").style.display = "inline-block";
   }
   else if (i === 8) {
       document.getElementById("answer07").style.display = "none";
       document.getElementById("answer08").style.display = "inline-block";
   }
   else if (i === 9) {
       document.getElementById("answer08").style.display = "none";
       document.getElementById("answer09").style.display = "inline-block";
   }
   else if (i === 10) {
       document.getElementById("answer09").style.display = "none";
       document.getElementById("leaderboard").style.display = "inline-block";
       winGame();
   }
}


// Starts timer and triggers a win or loss based on conditions
function startTimer() {
   // Sets timer
   timer = setInterval(function() {
     timerCount--;
     timerElement.textContent = timerCount;
     if (timerCount >= 0) {
       // Tests if win condition is met
       if (i === 10 && timerCount > 0) {
         // Clears interval and stops timer
         clearInterval(timer);
         winGame();
       }
     }
     // Tests if time has run out
     if (timerCount <= 0) {
       // Clears interval
       clearInterval(timer);
       loseGame();
     }
   }, 1000);
 }

 function winGame() {
     card.textContent = win;
     renderScore();
 }

 function loseGame() {
    document.getElementById("answer00").style.display = "none";
    document.getElementById("answer01").style.display = "none";
    document.getElementById("answer02").style.display = "none";
    document.getElementById("answer03").style.display = "none";
    document.getElementById("answer04").style.display = "none";
    document.getElementById("answer05").style.display = "none";
    document.getElementById("answer06").style.display = "none";
    document.getElementById("answer07").style.display = "none";
    document.getElementById("answer08").style.display = "none";
    document.getElementById("answer09").style.display = "none";
    card.textContent = lose;
    renderScore();
 }
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var finalScore = {
        initials: initials.value,
        score: score
    };

    localStorage.setItem("finalScore", JSON.stringify(finalScore));
    renderScore();
});

function renderScore() {
     var lastScore = JSON.parse(localStorage.getItem("finalScore"));
     if (lastScore !== null) {
         document.querySelector("#scores").textContent = lastScore.initials + " answered " + lastScore.score + " questions correctly!";
     }
 }