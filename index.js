function win(a,b){
    if(a>b){
        return 1;
    }
    else if(a==b){
        return -1;
    }
    else{
        return 2;
    }
}

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;


document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

var winner=win(randomNumber1,randomNumber2);
if(winner>=1){
    document.querySelector(".title").innerHTML="player "+winner+" won";
}
else{
    document.querySelector(".title").innerHTML="Oh Boy, It's a draw!";
}

// ps: Im using all the things i learnt in javascript and DOM manupulation