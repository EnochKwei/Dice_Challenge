//First image
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random numbers from 1 - 6

var randonImageSource1 = "images/dice" + randomNumber1 + ".png"; // Create images/dice1.png - images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randonImageSource1);


//Second image
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //random numbers from 1 - 6

var randonImageSource2 = "images/dice" + randomNumber2 + ".png"; // Create images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randonImageSource2);


if (randonImageSource1 > randonImageSource2) {
  document.querySelector("h1").innerHTML = "🏁Player 1 Wins!";
}else if (randonImageSource1 < randonImageSource2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🏁";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
