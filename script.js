var x = 0;
var y = 0;
var vx = 0;
var vy = 0;
var side = 30;
var speed = 30;

function setup(){
    createCanvas(600,600);
    frameRate(15);
}

function draw(){
    background(0);
    square(x,y,side);
    fill(0,255,0)
    if(x>width-side || x<0 || y<0 || y>height-side){
        return;
    }
    x+=vx;
    y+=vy;
}

function keyPressed(){
    if(keyCode == DOWN_ARROW){
        vy = speed;
        vx = 0;
    }else if(keyCode == UP_ARROW){
        vy = -speed;
        vx = 0;
    }else if(keyCode == LEFT_ARROW){
        vx = -speed;
        vy = 0;
    }else if(keyCode == RIGHT_ARROW){
        vx = speed;
        vy = 0;
    }
}