// var canvas = document.querySelector('#my-canvas')
// var ctx = canvas.getContext('2d')

// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;


// function Circle(x, y, dx, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.dx = dx;
//     this.dy = dy;

//     this.draw = function () {
//         ctx.beginPath();
//         ctx.strokeStyle = "red";
//         ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
//         ctx.stroke();
//         ctx.fill();
//     }

//     this.update = function () {
//         if (this.x + this.radius > innerWidth || this.x - radius < 0) {   //x+circles's radius, so that circle bounces back right from the edge
//             this.dx = -this.dx;
//         }
//         if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//             this.dy = -this.dy;
//         }
//         this.x += this.dx;
//         this.y += this.dy;

//         //Draw call:
//         this.draw();
//     }
// }

// function animate() {
//     requestAnimationFrame(animate);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for(let i=0;i<circleArray.length;i++){
//         circleArray[i].update();
//         //circleArray[i].draw();
//     }
// }
// var circleArray = [];

// for (let i = 0; i < 100; i++) {
//     var radius = 30;
//     var x = Math.random() * (innerWidth-2*radius) + radius;
//     var dx = (Math.random() - 0.5) * 8;
//     var y = Math.random() * (innerHeight-2*radius) + radius;
//     var dy = (Math.random() - 0.5) * 8;
//     circleArray.push(new Circle(x,y,dx,dy,radius));
// }


// animate()