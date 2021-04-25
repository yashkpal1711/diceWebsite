var randomnumber1 = Math.floor((Math.random()*6)+1);

var randomimg = "images/dice"+randomnumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src" , randomimg);

var randomnumber2 = Math.floor((Math.random()*6)+1);

var randomimg2= "images/dice"+randomnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomimg2);

if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="PLAYER 2 WON !";
}
else if (randomnumber2 == randomnumber1)
{
    document.querySelector("h1").innerHTML="OH! it's a DRAW";
}
else{
    document.querySelector("h1").innerHTML="PLAYER 1 WON !";
}