document.querySelector("button").addEventListener("click",function(){
  
  var num1 = Math.floor(Math.random() * 6) + 1; 
  var num2 = Math.floor(Math.random() * 6) + 1;

  document.querySelectorAll("img")[0].setAttribute("src","images/dice"+num1+".png");
  document.querySelectorAll("img")[1].setAttribute("src","images/dice"+num2+".png");

  //If player 1 wins
  if (num1 > num2) {
    document.querySelector("h1").innerHTML = "Play 1 Won 🥇";
  }
  else if (num2 > num1) {
    document.querySelector("h1").innerHTML = "Player 2 Won 🥈";
  }
  else {
    document.querySelector("h1").innerHTML = "= Draw =";
  }
});

document.querySelector("button").addEventListener("click",function(){

  document.querySelector("button").classList.add("clicked");

  setTimeout(function(){
    document.querySelector("button").classList.remove("clicked");
  }, 300);
});