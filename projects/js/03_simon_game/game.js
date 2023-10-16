//description 
$(".description p").hide(); 
$("#desbtn").click(function() {
  $(".description p").fadeToggle();
});

//iniialising required variables & constants
var started = false;
var level = 0;
var gamePattern = [];
var userPattern = [];
const BUTTON_COLORS = ["red", "blue", "green", "yellow"];

// initialising the game when some key is pressed for the first time
$(document).keypress(function() {
  if (!started) {

    started = true;
    startNewLevel();
  }
});

// when a color is pressed during the game
$(".btn").click(function() {

  var pressedColor = $(this).attr("id");
  userPattern.push(pressedColor);

  playSound(pressedColor);
  animatePress(pressedColor);
  checkAnswer(userPattern.length-1);
});

function checkAnswer(currentLevel) {

    //each press userPattern[i] should match with gamePattern[i]
    if (gamePattern[currentLevel] === userPattern[currentLevel]) {

      //if the last color of gamePattern is pressed, next level is called
      if (userPattern.length === gamePattern.length){
        setTimeout(function () { startNewLevel(); }, 1000);
      }
    } 
    else {

      //game over
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () { $("body").removeClass("game-over"); }, 100);
      startOver();
    }
}

function startNewLevel() {

  // user pattern should be empy at the start of each level
  userPattern = [];

  //updating level
  level++;
  $("#level-title").text("Level " + level);

  //new color for new level
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = BUTTON_COLORS[randomNumber];
  gamePattern.push(randomChosenColour);

  //chosen color animation & sound
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");
  setTimeout(function () { $("#" + currentColor).removeClass("pressed"); }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  started = false;
  level = 0;
  gamePattern = [];
  userPattern = [];
}