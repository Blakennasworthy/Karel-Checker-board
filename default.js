/*
 * This program has Karel paint a checkerboard
 */

function start(){
    for(var i = 0; i < 3; i++){
        line();
        moveup();
        line();
        moveupalt();
    }
    line();
    moveup();
    line();
    if(frontIsBlocked()){
        paint(Color.red);
        turnLeft();
    }
    while(frontIsClear()){
        move();
    }
    turnLeft();
}
function line(){
    for(var i = 0; i < 3; i++){
        paint(Color.black);
        move();
        paint(Color.red);
        move();
    }
    paint(Color.black);
    move();
}
function moveup(){
    if(frontIsBlocked()){
        paint(Color.red);
        turnLeft();
        move();
        turnLeft();
    }
}
function moveupalt(){
    if(frontIsBlocked()){
        paint(Color.red);
        turnRight();
        move();
        turnRight();
    }
}