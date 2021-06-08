// var canvas = document.getElementById('my-canvas');
// const ctx = canvas.getContext('2d');
// console.log(ctx);

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const particleArray = [];

// window.addEventListener('resize', function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// });

// const mouse = {
//     x: undefined,
//     y: undefined
// }

// canvas.addEventListener('click', function (event) {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     //console.log(mouse.x, mouse.y);
//     //drawCircle();
// });

// canvas.addEventListener('mousemove', function (event) {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     //console.log(mouse.x, mouse.y);
//     //drawCircle();
// });

// // function drawCircle() {
// //     ctx.beginPath();
// //     ctx.fillStyle = "blue";
// //     ctx.arc(mouse.x, mouse.y,50,0,2*Math.PI);
// //     ctx.fill();
// // }

// function Particle() {
//     // this.x = mouse.x;
//     // this.y = mouse.y;
//     this.x = Math.random()*innerWidth;
//     this.y = Math.random()*innerHeight;
//     this.size = Math.random() * 5 + 1;
//     this.speedX = Math.random() * 3 - 1.5;
//     this.speedY = Math.random() * 3 - 1.5;
// }

// Particle.prototype.update = function () {
//     this.x += this.speedX;
//     this.y += this.speedY;
// }

// Particle.prototype.draw = function () {
//     ctx.beginPath();
//     ctx.fillStyle = "blue";
//     ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
//     ctx.fill();
// }

// function init() {
//     for (let i = 0; i < 250; i++) {
//         particleArray.push(new Particle());
//     }
// }
// init();
// //console.log(particleArray);

// function handleParticles(){
//     for(let i=0;i<particleArray.length;i++){
//         particleArray[i].update();
//         particleArray[i].draw();
//     }
// }

// function animate() {
//     ctx.clearRect(0, 0, innerWidth, innerHeight);
//     handleParticles();
//     requestAnimationFrame(animate);
// }

// animate();