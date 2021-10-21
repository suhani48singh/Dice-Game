
var randomNum1= Math.floor(Math.random()*6)+1;

var dice1= "dice"+ randomNum1+ ".png";
var imageSource1= "images/"+ dice1;

var image= document.querySelectorAll("img")[0];
image.setAttribute("src", imageSource1);


var randomNum2= Math.floor(Math.random()*6)+1;

var dice2= "dice"+ randomNum2+ ".png";
var imageSource2= "images/"+ dice2;

var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource2);

if(randomNum1>randomNum2){
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNum1<randomNum2){
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML="Its a DRAW!";
}
