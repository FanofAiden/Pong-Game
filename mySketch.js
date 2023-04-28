var x = 50; //initialize a variable
var y = 50;
var speedX = 3;
var speedY = 3;
var xRect = 200;
var yRect = 20;
var score = 0;
var lives = 3;
function setup() {
	createCanvas(600,400);
	background(100);
	
}

function draw() {
	background(100);
	
	
	ellipse(x, y, 20, 20);
	
	rect(xRect, yRect,40,20); 
	x+=speedX;
	y+=speedY;
	if(x > width){
	   speedX = -speedX;
	}

	if(x<0){
	  speedX = -speedX;
	}
	if(y>height){
	  speedY = -speedY;
	}
	
	if(y<0){
		// text(myRandom,150,150);
		x=random(1,400);
		y=350;
		lives = lives - 1

	}
	if (lives < 1){
		text("Game over Try again", 270, 200)
		text("Final score:  " + score, 285, 250)
		x = -50
		speedX=0
		speedY=0
	}
touchStarted();
	if((yRect+30>y)&&(xRect<x)&&(xRect+40>x)){//&& is the logical and 
		speedY =-speedY;
		score +=1;
	}
	if (lives != 0){
		text("score: " + score, 50 ,60);
		text("lives: " + lives,50,45);
	}

}


function touchStarted(){
   xRect = mouseX;
}

