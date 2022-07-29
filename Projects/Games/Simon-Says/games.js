var buttonColours = ['red', 'blue', 'green', 'yellow'];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    $('#level-title').text('Level ' + level);
    nextSequence();
    started = true;
  }
});

$('.btn').click(function () {
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound('wrong');
    $('body').addClass('game-over');
    $('#level-title').text('Game Over, Press Any Key to Restart');

    setTimeout(function () {
      $('body').removeClass('game-over');
    }, 200);

    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $('#level-title').text('Level ' + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $('#' + randomChosenColour)
    .fadeIn(200)
    .fadeOut(200)
    .fadeIn(200);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $('#' + currentColor).addClass('pressed');
  setTimeout(function () {
    $('#' + currentColor).removeClass('pressed');
  }, 100);
}

function playSound(name) {
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

// let cc = console.log;

// const buttonColor = ['yellow', 'red', 'blue', 'green'];
// //create a randomize color change that shows color

// const gamePattern = [];

// const userClickedPattern = [];

// let started = false;
// let level = 0000;

// //---- IF STATEMENTS ----
// //keypress binds the event on an element
// $(document).keypress(function () {
//   if (!started) {
//     $('#level-title').text('Level ' + level);
//     nextRound();
//     started = true;
//   }
// });
// //use jQuery to handle click handler
// $('.btn').click(function () {
//   const userChosenColor = $(this).attr(`id`); //Store the ID of button clicked
//   userClickedPattern.push(userChosenColor);

//   //calling on play sound
//   playSound(userChosenColor);
//   animatePress(userChosenColor);

//   checkAnswer(userClickedPattern.length - 1);
// });

// function checkAnswer(currentLevel) {
//   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//     if (userClickedPattern.length === gamePattern.length) {
//       setTimeout(function () {
//         nextRound();
//       }, 500);
//     }
//   } else {
//     playSound('wrong');
//     $('body').addClass('game-over');
//     $('#level-title').text('Game Over, Press Any Key to Restart');

//     setTimeOut(function () {
//       $('body').removeClass('game-over');
//     }, 200);

//     startOver();
//   }
// }

// function nextRound() {
//   //math.random to get random color from arr by random index

//   userClickedPattern = [];

//   level++;
//   $('#level-title').text('Level ' + level);

//   const randomColor =
//     buttonColor[Math.floor(Math.random() * buttonColor.length)];

//   //ADDING RANDOM COLORS TO OUR GAME PATTERN ARRAY
//   gamePattern.push(randomColor);

//   //use jQuery to connect and animate id of the square to the random color picked
//   $('#' + 'randomColor')
//     .fadeIn(100)
//     .fadeOut(100)
//     .fadeIn(100);

//   //use jQuery to use for play sound
//   playSound(randomColor);
// }

// //use jQuery to add ".pressed" to the animatePress
// function animatePress(currentColor) {
//   $('#' + currentColor).addClass('pressed');

//   setTimeout(function () {
//     $('#' + currentColor).removeClass('pressed');
//   }, 100);
// }

// function playSound(name) {
//   const audio = new Audio('sound/' + name + '.mp3');
//   audio.play();
// }

// function startOver() {
//   level = 0000;
//   gamePattern = [];
//   started = false;
// }

