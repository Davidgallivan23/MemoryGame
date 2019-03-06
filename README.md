## Memory Game for Udacity Front End Nanodegree program  
 
### Project Rubric 

##### The page at minimum includes all of the following:
 * The game randomly shuffles the cards. A user wins once all cards have successfully been matched.
 * When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.
 * A restart button allows the player to reset the game board, the timer, and the star rating.
 * The game displays a star rating (from 1 to at least 3) that reflects the player's performance. 
 * When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.
 * Game displays the current number of moves a user has made.
   

#### Interface Design

* Application uses CSS to style components for the game.

* All application components are usable across modern desktop, tablet, and phone browsers.



#### Documentation

* A README file is included detailing the game and all dependencies.
* Comments are present and effectively explain longer code procedure when necessary.
* Code is formatted with consistent, logical, and easy-to-read formatting as described in the Udacity JavaScript Style Guide.

#### My design choices and notes
 Given the the rubric, I have made the following choices in designing this website:
 
 * I did not use the starter code
 * I did use the shuffle routine provided
 * I did create the game board layout as opposed to dyminicly add the game cells via javascript.  I belive it helps to seperate the UI from the code.
 * I did not use any CSS frameworks such as Bootstrap. 
 * I used some CSS grid and some CSS flexbox. 
 * I did not use any 3rd party libraries, even the winner modal was done in pure HTML, CSS and javascript
 * Answers to the questions in the instructions
 ** Idea workflow
 *** I followed a scrum style work flow.  
 *** I create "stories" added them to a board with "To-do", "INW" and "Done"
 *** This allowed me to layout all the work I needed to do, UI, Code, system set up, file layout, GIT etc.
 *** As moved the stories from one column to the next as I worked them
 ** Number of files
 *** I ended up with 6 files
 **** README
 **** index.html
 **** LICENSE
 **** Image file - used on the winner dialog
 **** javascript file
 **** css file
 ** I create the HTML first, then I did the sytling next (the styling was my biggest concern), then I did the javascript
 ** Number of javascript functions
 *** I ended up with 6 functions.  I feel I could have broken them out a little more.
 ** Number of lines of Code
 *** I have 202 lines of code including the comments.