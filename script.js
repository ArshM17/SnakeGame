var x;
var y;
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
var size = 0;
let div;
var tempx;
var tempy;
var stat = 1;

function setup(){
    div = createDiv('').size(100, 100);
    div.html("Score:"+count);
    createCanvas(600,600);
    frameRate(15);
    x = 150;
    y = width/2;
    for(let i = 0;i<size;i++){
        tail.push([x-(i+1)*side,y]);
    }
    appleX = floor(floor(random(width))/side)*side;
    appleY = floor(floor(random(height))/side)*side;
}

function draw(){
    if(stat==0){
        textSize(32);
        text('Game Over!', width/2-100, height/2);
        fill(0, 102, 153);
        text('Final score:'+count, width/2-100, height/2+50);
        fill(0, 102, 153);
        noLoop();
    }else{
        background(0);
        square(appleX,appleY,side);
        fill(0,255,0);
        tempx = x;
        tempy = y;
        x+=vx;
        y+=vy;
        square(x,y,side);
        if(checkBite()){
            stat = 0;
            //noLoop();
        }
        if(tail.length>0){
            for(let i = tail.length-1;i>0;i--){
                tail[i][0] = tail[i-1][0];
                tail[i][1] = tail[i-1][1];
            }
            tail[0][0] = tempx;
            tail[0][1] = tempy;
        }
        for(let i = 0;i<tail.length;i++){
            fill(0,255,0);
            square(tail[i][0],tail[i][1],side);
        }
        fill(255,0,0);
        if(x>width-side || x<0 || y<0 || y>height-side){
            stat = 0;
            //noLoop();
        }
        if(x==appleX && y==appleY){
            eat();
        }
        // x2=x;
        // y2=y;
        // x+=vx;
        // y+=vy;
    }
}

function eat(){
    appleX = floor(floor(random(width))/side)*side;
    appleY = floor(floor(random(height))/side)*side;
    count++;
    div.html("Score:"+count);
    tail.push([0,0]);
    // console.log(tail);
}

function keyPressed(){
    if(keyCode == DOWN_ARROW){
        if(vy<0) return;
        vy = speed;
        vx = 0;
    }else if(keyCode == UP_ARROW){
        if(vy>0) return;
        vy = -speed;
        vx = 0;
    }else if(keyCode == LEFT_ARROW){
        if(vx>0) return;
        vx = -speed;
        vy = 0;
    }else if(keyCode == RIGHT_ARROW){
        if(vx<0) return;
        vx = speed;
        vy = 0;
    }
}

function checkBite(){
    for(let i = 0;i<tail.length;i++){
        if(tail[i][0]==x && tail[i][1]==y){
            return true;
        }
    }
    return false;
}