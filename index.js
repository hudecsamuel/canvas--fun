var LEFT_UP = 0;
var LEFT_DOWN = 1;
var RIGHT_UP = 2;
var RIGHT_DOWN = 3;
var LEFT = 0;
var RIGHT = 1;
var UP = 2;
var DOWN = 3;
/**
 * This should be called on colision
 * @param current DirectionCode
 * @param colisionSide SideCode
 */
var changeDiretion = function (current, colisionSide) {
    // this conditional could be written in fewer lines, but this way its more readable (imho)
    if (current === LEFT_UP) {
        if (colisionSide === LEFT) {
            return RIGHT_UP;
        }
        else if (colisionSide === UP) {
            return LEFT_DOWN;
        }
    }
    else if (current === LEFT_DOWN) {
        if (colisionSide === LEFT) {
            return RIGHT_DOWN;
        }
        else if (colisionSide === DOWN) {
            return LEFT_UP;
        }
    }
    else if (current === RIGHT_UP) {
        if (colisionSide === RIGHT) {
            return LEFT_UP;
        }
        else if (colisionSide === UP) {
            return RIGHT_DOWN;
        }
    }
    else if (current === RIGHT_DOWN) {
        if (colisionSide === RIGHT) {
            return LEFT_DOWN;
        }
        else if (colisionSide === DOWN) {
            return RIGHT_UP;
        }
    }
    return current; //default 
};
var CanvasProps = {
    width: 1000,
    height: 400
};
var checkCollision = function (shape, limits) {
};
window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 1000;
    canvas.height = 600;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#aaa";
    console.log("Script loaded");
    var position = {
        x: 0,
        y: 0
    };
    var size = {
        width: 10,
        height: 10
    };
    var forward = true;
    var move = function () {
        if (forward && ((position.x + size.width) > 1000 || (position.y + size.height) > 600)) {
            forward = false;
        }
        else if (!forward && (position.x < 0 || position.y < 0)) {
            forward = true;
        }
        if (forward) {
            position.x++;
            position.y++;
        }
        else {
            position.x--;
            position.y--;
        }
        ctx.clearRect(0, 0, 1000, 600);
        ctx.fillRect(position.x, position.y, size.width, size.height);
        window.requestAnimationFrame(move);
    };
    move();
};
