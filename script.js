var x = 0;
var y = 0;
var x2;
var y2;
var vx = 0;
var vy = 0;
var side = 25;
var speed = 25;
var tail = [];
var appleX;
var appleY;
var count = 0;
let div;

function setup(){
    div = createDiv('').size(100, 100);
    div.html("Score:"+count);
    createCanvas(600,600);
    frameRate(15);
    appleX = floor(floor(random(width))/side)*side;
    appleY = floor(floor(random(height))/side)*side;
}

function draw(){
    background(0);
    square(appleX,appleY,side);
    fill(0,255,0);
    square(x,y,side);
    if(tail.length>0){
        for(let i = tail.length-1;i>0;i--){
            tail[i][0] = tail[i-1][0];
            tail[i][1] = tail[i-1][1];
        }
        tail[0][0] = x;
        tail[0][1] = y;
    }
    // for(let i = tail.length-1;i>1;i++){

    // }
    for(let i = 0;i<tail.length;i++){
        fill(0,255,0);
        square(tail[i][0],tail[i][1],side);
    }
    fill(255,0,0);
    if(x>width-side || x<0 || y<0 || y>height-side){
        return;
    }
    if(x==appleX && y==appleY){
        eat();
    }
    // x2=x;
    // y2=y;
    x+=vx;
    y+=vy;
}

function eat(){
    appleX = floor(floor(random(width))/side)*side;
    appleY = floor(floor(random(height))/side)*side;
    count++;
    div.html("Score:"+count);
    tail.push([0,0]);
    console.log(tail);
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