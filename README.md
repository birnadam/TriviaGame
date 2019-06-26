# TriviaGame

This application uses **HTML, CSS, Javascript, and jQuery**. I also implement the use of javascript's **timers** here.

> **"** You'll create a trivia game that shows only one question until the player answers it or their time runs out. 
>If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.
>The scenario is similar for wrong answers and time-outs.
>If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
>If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
>On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page). **"** 

I personally made the theme of the trivia on Counter-Strike because it's one of my favorite chain of games ever. 

The first screen presents a header, a timer that reads "time remaining: 10 seconds", and a start button.

Once you press start, the timer counts down while a question from my array is appended onto the page.
A review showing the correct answer, a gif, and a sound appear following the user's choice. Everything is shown accordingly depending on:
1. if the user gets it correct
2. if the user gets it incorrect
3. if the user runs out of time

There are placeholder variables to count the amount of correct, incorrect, and missed.<br> 
There are functions that are responsible for certain clicks and also functions that are ran based off of time.<br>
There is also a restart button at the end which clears all the counters and restarts the trivia from the beginning.
