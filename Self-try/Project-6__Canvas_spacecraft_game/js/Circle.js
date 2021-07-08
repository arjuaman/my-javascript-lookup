var layer2canvas = document.querySelector('#rockNroad');
var layer2ctx = layer2canvas.getContext('2d');

var xpos = 100;
var ypos = 536;

export class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;

        this.draw = function () {
            layer2ctx.beginPath();
            layer2ctx.fillStyle = "red";
            layer2ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
            layer2ctx.fill();
        };

        this.update = function () {
            if (this.x + this.radius > layer2canvas.width || this.x - radius < 0) { //x+circles's radius, so that circle bounces back right from the edge
                this.dx = -this.dx;
            }
            if (this.y + this.radius > layer2canvas.height || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }

            
            this.x += this.dx;
            this.y += this.dy;

            //Draw call:
            //console.log("Circle's: "+this.x+" "+this.y);
            this.draw();
        };
    }
}