var layer2canvas = document.querySelector('#rockNroad');
var layer2ctx = layer2canvas.getContext('2d');

var xpos = 180;
var ypos = 550;

export class Circle {
    constructor(radius) {
        this.x = Math.abs(Math.random() * (layer2canvas.width-2*radius));
        this.y = radius;
        this.radius = radius;
        this.dx = 0;
        this.dy = Math.abs(Math.random() - 0.5) * 15;

        this.draw = function () {
            layer2ctx.beginPath();
            layer2ctx.fillStyle = "#a6a6a6";
            layer2ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
            layer2ctx.fill();
        };

        this.update = function () {
            // if (this.x + this.radius > layer2canvas.width || this.x - radius < 0) {
            //     this.x = Math.abs(Math.random() * (layer2canvas.width-2*radius));
            //     this.y = radius;
            //     this.radius = radius;
            //     this.dx = 0;
            //     this.dy = Math.abs(Math.random() - 0.5) * 8;
            // }
            if (this.y + this.radius > layer2canvas.height || this.y - this.radius < 0) {
                this.x = Math.abs(Math.random() * (layer2canvas.width-2*radius));
                this.y = radius;
                this.radius = radius;
                this.dx = 0;
                this.dy = Math.abs(Math.random() - 0.5) * 8;
            }


            this.x += this.dx;
            this.y += this.dy;

            //Draw call:
            //console.log("Circle's: "+this.x+" "+this.y);
            this.draw();
        };
    }
}