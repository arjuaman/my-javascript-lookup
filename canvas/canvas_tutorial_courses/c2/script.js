// //Set canvas dimension through js so that it takes entire space
// var canvas = document.querySelector('#my-canvas');
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;

// var ctx = canvas.getContext('2d');

// ctx.fillStyle = "pink";
// ctx.fillRect(100,100,120,100);
// ctx.fillStyle = "red";
// ctx.fillRect(300,100,120,100);

// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(80,80);
// ctx.strokeStyle = "#427462";
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(50,120,30,0,2*Math.PI,false);
// ctx.stroke();


// for(let i=0;i<90;i++){
//     var x = Math.random()*window.innerHeight;
//     var y = Math.random()*window.innerWidth;
//     ctx.beginPath();
//     ctx.arc(x,y,30,0,2*Math.PI,false);
//     ctx.stroke();
// }

// //ANIMATION: 
// var i = 0;

// function animate() {
//     if (i < 500) {
//         requestAnimationFrame(animate);
//         ctx.beginPath();
//         ctx.fillStyle = "red";
//         ctx.strokeStyle = "red";
//         ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 30, 0, 2 * Math.PI);
//         ctx.stroke();
//     }
//     i++;
// }

// animate()
    

// //LOADING BAR:
// var i=0;
// function animate(){
//     if(i<window.innerWidth){
//     window.requestAnimationFrame(animate);
//     //ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
//     ctx.beginPath();
//     ctx.fillStyle = "green";
//     //ctx.arc(500*Math.random(),500+i*Math.random(),30,0,2*Math.PI,false);
//     ctx.fillRect(i,10,10,10);
//     ctx.stroke();
//     }
//     i++;
    

// }
// animate()