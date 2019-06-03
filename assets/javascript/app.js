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
        choices: ["cat", "lower tunnels", "long a", "upper a"],
        correctChoice: 3
    },

    {
        question: "What is the room next to the lower bombsite on de_nuke called?",
        choices: ["office", "inferno", "toxic", "lobby"],
        correctChoice: 2
    },

    {
        question: "Which version of Counter-Strike was released on Nov 1, 2004?",
        choices: ["1.6", "Source", "1.5", "Condition Zero"],
        correctChoice: 1
    },

    {
        question: "Which of the following bomb defuse maps has sewers?",
        choices: ["contra", "office", "dust", "inferno"],
        correctChoice: 1
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
let ansTimeout = 2000;

//score variables to keep track
let correct = 0;
let incorrect = 0;
let missed = 0;

//array for user's answers 
let userAns = [];

//question timer functions and variables

//start game 

//show one question at a time

//if answer is correct, display screen congratulation for choosing right option then display next question after some time

//taking in user's answers

//changing questions

//showing answer was correct or not

//end game

//reset

});