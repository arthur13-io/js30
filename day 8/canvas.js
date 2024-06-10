const canvas = document.querySelector('#draw')
//we don't draw on the actual html. we draw on context
const ctx = canvas.getContext('2d');
//set width and height
canvas.width= window.innerWidth;
canvas.height = window.innerHeight;
// ctx.strokeStyle= "BADA55";
ctx.strokeStyle = "bada55";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '100'

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e){
    if(!isDrawing) return;
    console.log(e);
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    //go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]
}
canvas.addEventListener('mousedown', (e)=>{
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', ()=> isDrawing = false);
canvas.addEventListener('mouseout', ()=> isDrawing = false);