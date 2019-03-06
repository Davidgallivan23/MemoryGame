
let match = 0;
let clicks = 0;
let timer;
let symbols = ['bars', 'bars', 'cog', 'cog', 'gift', 'gift', 'star', 'star', 'phone', 'phone', 'pie-chart', 'pie-chart', 'plane', 'plane', 'home', 'home'];

let board = document.getElementsByClassName('game_board')[0];

board.addEventListener('click', function(event) {
    if (event.target.classList.contains("game_cell")) {
      if(event.currentTarget.style.fontSize === '0em' || event.currentTarget.style.fontSize === ''){
        event.currentTarget.style.fontSize = '3em';
      }
    }
  });

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

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
    var items = shuffle(symbols);
    //start with a blank board
	clearBoard(items);

	for (var i = 0; i < items.length; i++) {
		$Playground[i].innerHTML = '<i class="fa fa-' + items[i] + '"></i>';
	}
	newListner();
};

function clearBoard(items)
{
    for (var i = 0; i < items.length; i++) {
		$Playground[i].innerHTML = ''
    }
    
    match = 0;
	Clicks = 0;
}

var newListner = function (){
    document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("game_cell")) {
            var $this = $(this)

            if ($this.hasClass('show') || $this.hasClass('match')) { return true; }
    
            var box = $this.context.innerHTML;
            $this.addClass('open show');
            opened.push(box);
        }
      });
}

var addboxListener = function () {

	// box flip
	$Playground.find('.game_board').bind('click', function () {
		var $this = $(this)

		if ($this.hasClass('show') || $this.hasClass('match')) { return true; }

		var box = $this.context.innerHTML;
		$this.addClass('open show');
		opened.push(box);

		// Compare with opened box
		//if (opened.length > 1) {
		//	if (box === opened[0]) {
		//		$Playground.find('.open').addClass('match animated infinite rubberBand');
		//		setTimeout(function () {
		//			$Playground.find('.match').removeClass('open show animated infinite rubberBand');
		//		}, delay);
		//		match++;
		//	} else {
		//		$Playground.find('.open').addClass('notmatch animated infinite wobble');
		//		setTimeout(function () {
		//			$Playground.find('.open').removeClass('animated infinite wobble');
		//		}, delay / 1.5);
		//		setTimeout(function () {
		//			$Playground.find('.open').removeClass('open show notmatch animated infinite wobble');
		//		}, delay);
		//	}
		//	opened = [];
		//	Clicks++;
		//	setRating(Clicks);
		//	$moveNum.html(Clicks);
		//}

		// End Game if match all boxes
		//if (totalbox === match) {
		//	setRating(Clicks);
		//	var score = setRating(Clicks).score;
		//	setTimeout(function () {
		//		endGame(Clicks, score);
		//	}, 500);
		//}
	});
};




initGame();