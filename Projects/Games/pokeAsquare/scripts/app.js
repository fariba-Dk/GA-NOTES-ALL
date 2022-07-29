// Poke A Square
let cc = console.log;
// When the user clicks begin the timer should start counting down
//timer === 30 seconds

//populate with a random color, either red, green, or blue.
//get random color

//when all blue gone:
//1. update round
//2. repopulate squares previous amount + 10
//3. restart timer
//4. when timer to go zero stop the timer and display "game over"
//5. update score

// ~~~~  GLOBAL  ~~~
//set variables

let score = 0;
let timer = 10;
let round = 1;

//let n === number boxes generating
let n = 10;

function goToNextRound() {
  round++;
  timer = 30;

  const extraSquares = (round - 1) * 10;
  populateSquares(30 + extraSquares);
}

//get start TIME
function startTimer() {
  const counter = setInterval(function () {
    timer--;
    renderStats();
    if (timer <= 0) {
      $(`#score`).text('Game Over.');
    }
    clearInterval(counter);
  }, 500);
}

//take values and updates the page
function renderStats() {
  $('#scoreboard').text(`scoreboard: ${score}`);
  $(`#timer`).text(`timer: ${timer}s`);
  $(`#round`).text(`round: ${round}`);
}

//GET RANDOM COLOR
function getRandomColor() {
  const colorList = ['green', 'red', 'blue'];
  // get random index value
  const randomIndex = Math.floor(Math.random() * colorList.length);
  // get random item
  return colorList[randomIndex];
}

function populateSquares(n) {
  $(`.squareContainer`).empty();
  for (let i = 0; i < n; i++) {
    const colorFunc = getRandomColor();
    const newSquare = $(`<div class="square ${colorFunc}" />`);
    $('.squaresContainer').append(newSquare);
  }
}
// Let's start by listening for a click on our begin button. We usually like to keep our event listeners at the bottom of our JavaScript file.

//   $('#begin-button').on('click', function() {
//    console.log('this is working');

function blueSquareLeft() {
  const blueSquare = $('.blue');

  if (blueSquare.length > 0) {
    return true;
  } else {
    return false;
  }
}
function handleSquareClick(event) {
  //if score is blue add

  let isHidden = $(event.target).hasClass('hidden');
  let isBlue = $(event.target).hasClass('blue');

  if (!isHidden && isBlue) {
    score++;
  } else if (!isHidden && !isBlue) {
    score--;
  }

  $(event.target).addClass('hidden');

  renderStats();

  console.log(`Score is ${score}`);
}

$('#begin-button').on('click', function () {
  populateSquares(n);
  startTimer();
  blueSquareLeft();
});

$('.squaresContainer').on('click', '.square', handleSquareClick);

// When the user clicks on a color the color should become invisible.

//if blue add to score += 1
//if green or yellow deduct score += 1

// If the timer gets to 0 the game is over. Update the display to show Game Over and show the score.

// Where should the timer start? How many squares should appear on the board when the game starts? etc... Make sure to identify these unknowns and come up with your own answers now before we start coding.

// Now we need to write a function named (createSquares) that sets up our squares, Try to write a function that takes a parameter numberOfSquares that will create an arbitary number of divs depending on the parameter and attach them to the squares class from the html.

// have a bunch of blue squares, but we want our squares to have a random, red, blue, or green color try to write a function to make that happen.
// function getRandomColor() {
//   const colorsList = ['red', 'green', 'blue'];
//   const randomNumber = Math.floor(Math.random() * 3);

// Now that we have colored squares, lets make them clickable, and hidden when we click on them. Give it a try!

// function handleSquareClick(event) {
//   $(event.target).addClass('hidden');
//  $('.squaresContainer').on('click', '.square', handleSquareClick);

// }
//   if ($(event.target).hasClass('blue')) {
//     $(event.target).removeClass('blue');
//   }
// }
// In our CSS we are targeting the hidden class with opacity: 0; to hide the square.

// function handleSquareClick(event) {
//   $(event.target).addClass('hidden');

//   if ($(event.target).hasClass('blue')) {
//     $(event.target).removeClass('blue');
//     score++
//   } else {
//     if (score > 0) {
//       score--;
//     }
//   }
// }
// Now that we've updated the score variable we still have to update the score on the page. We might have a method called renderStats that takes care of rendering all of our stats. Then we can call that single method any time we want to update the stats on the page.
// function renderStats() {
//   $('h1').text(`scoreBoard: ${score}`);
//   $('#timer').text(`timer: ${timer}`);
//   $('#round').text(`round: ${round}`);
// }
// We can call renderStats() when we update the score when a square is clicked.
// function handleSquareClick(event) {
//   $(event.target).addClass('hidden');

//   if ($(event.target).hasClass('blue')) {
//     $(event.target).removeClass('blue');
//     score++
//     renderStats();
//   } else {
//     if (score > 0) {
//       score--;
//       renderStats();
//     }
//   }
// }
// Now try to write a function called startTimer that uses the setInterval method. This method should decrease our timer variable by one every second and then call renderStats to rerender the stats on the page.
// function startTimer() {
//   let counter = setInterval(function() {
//     timer--;

//     renderStats();
//   }, 1000);
// }
// The setInterval takes as it's first parameter a function to call every interval, and as it's second parameter the number of milliseconds to call it in. Here we call a function every 1000 milliseconds.

// Whenever we use setInterval we want to remember to clear the interval at some point in the future. Here we check if timer is less than or equal to 0 and if so we call clearInterval stopping the timer and displaying a Game Over" message to the user.

// function startTimer() {
//   let counter = setInterval(function() {
//     timer--;

//     if (timer <= 0) {
//       clearInterval(counter);
//       scoreBoard.text(`Game Over. Your score is ${score}`);
//       return;
//     }

//     renderStats();
//   }, 1000);
// }
// Now let's call startTimer when the begin button is clicked.

// function handleBeginClick() {
//   startTimer();
//   populateSquares(30);
// }
// Now write a function called goToNextRound, that will increase the round number, reset the timer, clear out all of our squares and call populateSquares with an increased number of squares, increasing the difficulty. It should also call renderStats to update the display on the page.
//  function goToNextRound() {
//   round++;
//   timer = 30;
//   renderStats();

//   $('.squaresContainer').empty();
//   populateSquares(30 + (round * 2));
// }
// Just one more feature to add. All of the blue squares are clicked on the page we want to go to the next round. How would we do this? When ever a blue square is clicked we could do a check to see if there are any remaining blue squares on the page. Let's write a function called blueSquaresRemain() {} that will do this check.

// function blueSquaresRemain() {
//   const blueSquares = $('.blue');

//   if (!blueSquares.length) {
//     console.log('no more blues 🎶');
//     return false;
//   }

//   return true;
// }
// We can use the jQuery selector to get a list of the blueSquares. If the length of that list is 0 than we want to return false. Since 0 is a falsy value we can easily check for 0 with !blueSquares.length. If the length of that list is not 0 then we return true; there are blue squares remaining.

// Now we want to use this function to check for blue squares every time we click a blue square. If there are no blue squares than we can call goToNextRound().

// function handleSquareClick(event) {
//   $(event.target).addClass('hidden');

//   if ($(event.target).hasClass('blue')) {
//     $(event.target).removeClass('blue');

//     if (!blueSquaresRemain()) {
//       goToNextRound();
//     }

//     score++;
//     renderStats();
//   } else {
//     if (score > 0) {
//       score--;
//       renderStats();
//     }
//   }
// }
// Extras
// So whats some add on we can make up and do together?
// Make the squares lose transparency during each round so you have to click faster.
// Make a Modal to gather the players name at the beginning of the game, and leave them a greeting in the header
// Can you refactor your code to encapsulate your methods and variables in an object
// Style it make it look nice
// Make a sound when you click a wrong one or a right one.
// have a modal pop up at the begining of a ready so the user knows how to continue
// make a section about how to play the game (how do you want to do that? an About page, in the header, a modal, idk???? anything you can imagine)
// Anything you can imagine, any twist, any turn you like, USE USE USE your imagination in this, it will allow you to create worlds.
