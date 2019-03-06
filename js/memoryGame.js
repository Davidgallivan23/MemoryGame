
let match = 0;  //track the number of matches
let clicks = 0; //trick the number of tries

//the objects to match
let symbols = ['bars', 'bars', 'cog', 'cog', 'gift', 'gift', 'star', 'star', 'phone', 'phone', 'pie-chart', 'pie-chart', 'plane', 'plane', 'home', 'home'];

let matchItem; //the item TO match
let current_seconds; //the starting time
let second = 0;  //the number of seconds the user has been playing
let stars = 3; //the number of full stars left

//wire in the game pieces
let board = document.getElementsByClassName('game_board')[0];

board.addEventListener('click', function(event) {
    if (event.target.classList.contains("game_cell")) {
			if(event.target.classList.contains('hide')){
				event.target.classList.replace('hide', 'show');

			//check to see if we are looking for a match
			if(matchItem){
				//we have a match
				clicks++;
				if(event.target.innerHTML === matchItem.innerHTML){
					event.target.classList.replace('show', 'matched');
					matchItem.classList.replace('show', 'matched');
					matchItem = null;
					match++;
					if(match === 1)
					    gameOver();
				}
				else
				{
					//no match let the user know
					event.target.classList.replace('show', 'shake');
					matchItem.classList.replace('show', 'shake');
					setTimeout(function(){ 
						event.target.classList.replace('shake', 'hide');
						matchItem.classList.replace('shake', 'hide');
						matchItem = null;
					}, 250);
				}
				//update the game information in the UI
				updateGameInfo();
		}
		else
				//set what we are looking to match
				matchItem = event.target;
      }
    }
	});
	
	//wire in the reset button
	let resetBtn = document.getElementsByClassName('cancel')[0];
	resetBtn.addEventListener('click', function(event) {
		initGame();
	});

function updateGameInfo(){
	//set clicks
	document.getElementsByClassName('moves')[0].textContent = clicks + ' moves';

	//set star rating
	let stars = document.getElementsByClassName('star-item');
	switch(clicks){
		case 0 : 
			for (let i = 0; i < stars.length; i++) 
				stars[i].classList.replace('fa-star-o', 'fa-star');
			stars = 3;
			break;
		
		case 10 : 
				if(stars.length > 2)
					stars[2].classList.replace('fa-star', 'fa-star-o');
				stars = 2;
				break;

		case 15 : 
			if(stars.length > 2){
				stars[1].classList.replace('fa-star', 'fa-star-o');
				stars[2].classList.replace('fa-star', 'fa-star-o');
			}
			stars = 1;
			break;

		case 20:
			for (let j = 0; j < stars.length; j++) 
				stars[j].classList.replace('fa-star', 'fa-star-o');
			stars = 0;
			break;		
		}
	}

function shuffle(array) {
	let currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

// Initial Game
function initGame() {
	  //mix up the icons
		let items = shuffle(symbols);	
		
		//generate the icons on the blocks
	  let boardRows = document.getElementsByClassName('game_cell');
		if(boardRows.length == items.length){

			  //start with a blank board
				clearBoard(items, boardRows);
				
				for (let i = 0; i < items.length; i++) {
					boardRows[i].innerHTML = '<i class="fa fa-' + items[i] + '"></i>';
			}
		 }

		//clear any showing pieces
		for (let j = 0; j < boardRows.length; j++) {
			boardRows[j].classList.replace('matched', 'hide');
			boardRows[j].classList.replace('show', 'hide');
		}

		 //initialize the counters
		 clicks = 0;
		 second = 0;
		 match = 0;
		 matchItem = null;

		 //reset the UI
		 updateGameInfo();
		 startTimer();
}

//remove all the object to be match so we can reset them
function clearBoard(items, boardRows)
{
  for (let i = 0; i < items.length; i++) {
		boardRows[i].innerHTML = '';
  }
}

function startTimer() {
	_ = setInterval(function () {
		second = second + 1;
	}, 1000);
}

//show the winner board
function gameOver()
{
	// Get the modal
	let modal = document.getElementById('myModal');

	// Get the button that opens the modal
	let btn = document.getElementById("replay_btn");

	// When the user clicks on the button, open the modal 
	btn.onclick = function() {
		modal.style.display = "none";
		initGame();	
	};

	//set the moves in the modal
	document.getElementsByClassName('winning_moves')[0].textContent = 'It took you ' + clicks + ' moves';

	//set the elapsed timing in the modal
	document.getElementsByClassName('seconds')[0].textContent = 'You finished in ' + second + ' seconds';
		
	//set the elapsed timing in the modal
	document.getElementsByClassName('winning_stars')[0].textContent = 'You earned ' + stars + ' stars';

	//show the modal
	modal.style.display = "block";

	// Get the <span> element that closes the modal
	let span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
		initGame();
	};

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
			initGame();
		}
	};
}

initGame();