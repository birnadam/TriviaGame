$(document).ready(function(){

//array of objects for questions, answer options, and correct answer
const questions = [
    {
        question: "When was Counter-Strike released?",
        choices: ["Nov 18, 2001", "Nov 8, 2000", "Dec 10, 2000", "Oct 12, 1999"],
        correctChoice: 1
    },

    {
        question: "What is the top pistol choice for competitive matches?",
        choices: ["P250", "Dual Berettas", "Glock", "Desert Eagle"],
        correctChoice: 3
    },

    {
        question: "Which of the following is not a de_dust_2 callout?",
        choices: ["Cat", "Lower Tunnels", "Long A", "Upper A"],
        correctChoice: 3
    },

    {
        question: "What is the room next to the lower bombsite on de_nuke called?",
        choices: ["Office", "Inferno", "Toxic", "Lobby"],
        correctChoice: 2
    },

    {
        question: "Which version of Counter-Strike was released on Nov 1, 2004?",
        choices: ["1.6", "Source", "1.5", "Condition Zero"],
        correctChoice: 1
    },

    {
        question: "Which of the following bomb defuse maps has sewers?",
        choices: ["Office", "Dust", "Contra", "Assault"],
        correctChoice: 2
    },

    {
        question: "Which of these is a team you could play as in Counter-Strike?",
        choices: ["Counter-Terrorist", "Swat", "Marines", "Spetsnaz"],
        correctChoice: 0
    },

    {
        question: "Which of these guns can not be purchased as a Terrorist?",
        choices: ["M4A1", "Glock", "AK47", "Desert Eagle"],
        correctChoice: 0
    }
];

//timeout so there is time before something is displayed
let ansTimeout = 2400;

//score variables to keep track
let questionCounter = 0;
let correct = 0;
let incorrect = 0;
let missed = 0;

//array for user's answers 
let userChoice = [];

//question timer functions and variables
let timeRem = 10;
let increment;
    
function runTimer() {
    increment = setInterval(decrement, 1000);
};

function decrement() {
    timeRem--;
    $("#time-rem").html("Time remaining: " + timeRem + " seconds");
    if (timeRem === 0) {
        stopTimer();
        userChoice.length = 0;		
        //record user answer 
        let userSelection = $("#responses input:radio[name=optionsRadios]:checked").val();
        userChoice.push(userSelection);
        console.log(userChoice);
        nextQ();
    };
};

function resetTimer() {
    timeRem = 10;
    $("#time-rem").html("Time remaining: " + timeRem + " seconds");
};

function displayTimer() {
    $("#time-rem").html("Review Results"+"</h3><br><h3>");
};
    
function stopTimer() {
    clearInterval(increment);
};
    

//start game 
function showStart() {
    $("#content").append('<a href="#" class="btn btn-primary btn-lg" id="start-button">' + "Start" + '</a>');
    $("#start-button").on("click", function(event) {
        event.preventDefault();
        //Reveals first question
        firstQ();
        resetTimer();
    });
};
showStart();

//show one question at a time
function firstQ() {
    let startContent = $("#content");
    startContent.empty(); 
    displayQ();
};

function displayQ() {
    clearQ();
    resetTimer();
    $(".questions").html(questions[questionCounter].question);
    //display response options
    createRadios();
    //submit button
    $("#submit-div").append('<button type="submit" class="btn btn-default" id="submit">' + "Submit" + '</button>');
    runTimer()
    submitAns();
};

//taking in user's answers
function submitAns() {
    $("#submit").on("click", function(e) {
        e.preventDefault();
        userChoice.length = 0;
            
        //record user answer
        let userSelection = $("#responses input:radio[name=optionsRadios]:checked").val();
        userChoice.push(userSelection);
        console.log(userChoice);
        nextQ();
    });
};

// display given options
function createRadios() {
    let responseOptions = $("#responses");
    //empty array before user picks
    responseOptions.empty();
        
    for (var i = 0; i < questions[questionCounter].choices.length; i++) {
        responseOptions.append('<label><input type="radio" name="optionsRadios" id="optionsRadios2" value="' + [i] +'"><div class="cs-opt">' + questions[questionCounter].choices[i] + '</div></input><br></label>');
    };
};

//changing questions
function clearQ() {
    let questionDiv = $(".questions");
    questionDiv.empty();

    let responsesDiv = $("#responses");
    responsesDiv.empty();

    let submitDiv = $("#submit-div");
    submitDiv.empty();

    let contentDiv = $("#content");
    contentDiv.empty();

    stopTimer();
};

function nextQ() {
    checkQ();
    questionCounter++;
    //if the counter reaches the end of the array, show results and reset to 0
    if (questionCounter === questions.length) {
        setTimeout(showResults, ansTimeout);
    } 
    //otherwise display another question
    else {
        setTimeout(displayQ, ansTimeout);
    };
};

//showing answer was correct or not
function checkQ() {
    clearQ();
    let correctAnswer = questions[questionCounter].correctChoice;
    if (userChoice[0] == questions[questionCounter].correctChoice) {
        $("#content").append('<h3>'+"Good Job! You're 1337 AF" + '</h3>');
        correct++;
        displayTimer();
    }
    else if (userChoice[0] === undefined) {
        $("#content").append('<h3>'+"Time's up!" + '</h3><br><h3>' + "The correct answer was: " + questions[questionCounter].choices[correctAnswer] + '</h3>');
        missed++;
        displayTimer();
    }
    else {
        $("#content").append('<h3>'+"You noob, you chose wrong" + '</h3><br><h3>' + "The correct answer was: " + questions[questionCounter].choices[correctAnswer] + '</h3>');
        incorrect++;
        displayTimer();
    };
};

//end game
function showResults() {
    clearQ();
    $("#content").append('<h3>' + "Correct answers: " + correct + '</h3><br><h3>' + "Incorrect answers: " + incorrect + '</h3><br><h3>' + "Skipped questions: " + missed + '</h3><br><br><a href="#" class="btn btn-primary btn-lg" id="restart-button">' + "Restart" + '</a>');
    //restart game
    $("#restart-button").on("click", function(event) {
        event.preventDefault();
        //displays the first question
        reset();
        clearQ();
        showStart();
    });
};

//reset
function reset() {
    questionCounter = 0;
    correct = 0;
    incorrect = 0;
    missed = 0;
    userChoice = [];
    resetTimer();
};

});