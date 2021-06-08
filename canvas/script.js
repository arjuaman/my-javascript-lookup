let canvas = document.getElementById("my-canvas");
let ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.fillRect(10,10,100,120);

// ctx.beginPath();
// ctx.moveTo(150,150);
// ctx.lineTo(200,200);
// ctx.strokeStyle = "pink";
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(150,300,50,0,2*Math.PI);
// ctx.strokeStyle = "yellow";
// ctx.stroke();

ctx.beginPath();
//var grd = ctx.createLinearGradient(0,0,200,0);
var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"green");
ctx.fillStyle = grd;
ctx.fillRect(0,0,150,80);



// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0, 0, 150, 75);
//         ctx.fillStyle = "green";
//         ctx.strokeStyle = "brown";
//         ctx.font = "24px arial";

//         ctx.lineWidth = 12;
//         ctx.lineJoin = "round";
//         ctx.lineCap = "round";

//         ctx.shadowColor= "Black";
//         ctx.shadowBlur = 10;

//         var x = 0;
//         //window.requestAnimationFrame(drawIt);
//         function drawIt() {
//             window.requestAnimationFrame(drawIt);
//             //ctx.beginPath();
//             //ctx.save();
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             ctx.fillStyle = "red";
//             ctx.fillRect(x, 50, 80, 100);
//             x += 2;
//             //ctx.restore();
//             window.requestAnimationFrame(drawIt);
//         }

//         //window.requestAnimationFrame(drawIt);
//         drawIt();
