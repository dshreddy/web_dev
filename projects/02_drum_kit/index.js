// storing all the buttons in a list
let buttons = document.querySelectorAll(".drum");

// adding event listeners to all buttons for making sound when clicked 
for (var i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener("click", function() {
    
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
// adding event listener to the entire webpage based on keyboard buttons
document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {

  var sound;

  if(key=="s") sound = new Audio("sounds/tom-1.mp3");
  else if(key=="d") sound = new Audio("sounds/tom-2.mp3");
  else if(key=="f") sound = new Audio('sounds/tom-3.mp3');
  else if(key=="g") sound = new Audio('sounds/tom-4.mp3');
  else if(key=="j") sound = new Audio('sounds/snare.mp3');
  else if(key=="k") sound = new Audio('sounds/crash.mp3');
  else if(key=="l") sound = new Audio('sounds/kick-bass.mp3');
  else console.log(key);

  if(key=="s" || key=="d" || key=="f" || key=="g" || key=="j" || key=="k" || key=="l") sound.play();
}

function buttonAnimation(key) {

  var pressed_button = document.querySelector("." + key);
  pressed_button.classList.add("pressed");

  //keep animation as long as the button is pressed (at max 100s)
  setTimeout(function() {
    pressed_button.classList.remove("pressed");w
  }, 100);
}