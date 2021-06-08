

var canvas = document.getElementById("my-canvas2");
var ctx = canvax.getContext("2d");
var x = 0;
//var raf = window.requestAnimationFrame;
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"blue");

// function moveBlock(){
//     window.requestAnimationFrame(moveBlock);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = "red";
//     ctx.fillRect(x,50,80,100);
//     x+=1;

// }

// moveBlock();

var x = 0; 
function drawIt() { 
    window.requestAnimationFrame(drawIt); 
    var canvas = document.getElementById('my-canvas2'); 
    var c = canvas.getContext('2d'); 
    c.clearRect(0,0,canvas.width,canvas.height); 
    c.fillStyle = "red"; 
    c.fillRect(x,50,80,100); 
    x+=2; 
} 

//window.requestAnimationFrame(drawIt);
drawIt();