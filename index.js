const  CANVAS_BORDER_COLOR='black'
const  CANVAS_BACKGROUND_COLOR='white'
const  SNAKE_COLOR='lightgreen'
const  SNAKE_BORDER_COLOR='darkgreen'
//snake
let snake = 
[
    {x:150, y:150},
    {x:140, y:150},
    {x:130, y:150},
    {x:120, y:150},
    {x:110, y:150}
]


//get canvas element
var gameCanvas= document.getElementById("gameCanvas");
//get context from canvas element

var ctx = gameCanvas.getContext("2d");

//select colour to fill canvas

ctx.fillStyle= CANVAS_BACKGROUND_COLOR;
ctx.strokeStyle=CANVAS_BORDER_COLOR;

ctx.fillRect(0,0,gameCanvas.width,gameCanvas.height)
ctx.strokeRect(0,0,gameCanvas.width,gameCanvas.height)
drawSnake();
//draw each snake part
function drawSnake(){
    snake.forEach(drawSnakePart)
}

function drawSnakePart(sp)
{   
    //set style for fill,rect
    ctx.fillStyle = SNAKE_COLOR
    ctx.strokeStyle = SNAKE_BORDER_COLOR
    //fill rect
    ctx.fillRect(sp.x, sp.y,10,10)
    //stroke border
    ctx.strokeRect(sp.x, sp.y,10,10)
}