var x = 0;
var y = 0;
var xspeed = 3;
var yspeed = 5;

function setup(){
    createCanvas(600,600);
   background(100);
}
function draw(){
     setup()
    if(x + 10 >= 600){
        xspeed =-3;
    }else if(x<= 0){
        xspeed = 3;
    }else if(y <=0){
        yspeed = 5
    }
    x+=xspeed;
    y+=yspeed;
    fill("black");
    ellipse(x, y, 30, 30);
    rect(300, 585, 100, 10)
}