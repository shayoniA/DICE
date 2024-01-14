var rn1 = Math.floor(Math.random()*6)+1;
var source1 = "./dice"+rn1+".png";
var img1 = document.querySelector("#im1");
img1.setAttribute("src", source1);

var rn2 = Math.floor(Math.random()*6)+1;
var source2 = "./dice"+rn2+".png";
var img2 = document.querySelector("#im2");
img2.setAttribute("src", source2);

if(rn1>rn2)
    document.querySelector("h1").innerHTML = "Player 1 Wins!!!";
else if(rn1<rn2)
    document.querySelector("h1").innerHTML = "Player 2 Wins!!!";
else
    document.querySelector("h1").innerHTML = "Draw...";