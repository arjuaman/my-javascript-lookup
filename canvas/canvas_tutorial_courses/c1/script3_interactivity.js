var canvas = document.querySelector('#my-canvas')
var ctx = canvas.getContext('2d')

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener('resize', function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    init();
});

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
var minRadius = 2;

var colorArray = [
    '#E8DEDC',
    '#6FEE3E',
    '#73E3EA',
    '#CDF21D',
    '#F32686'
];

window.addEventListener('mousemove',
    function onCLickAction(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = colorArray[Math.floor(Math.random() * 5)];

    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - radius < 0) {   //x+circles's radius, so that circle bounces back right from the edge
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //Interactivity:
        if (Math.abs(mouse.x - this.x) < 50 && Math.abs(mouse.y - this.y) < 50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        }
        else if (this.radius > minRadius) {
            this.radius -= 1;
        }

        //Draw call:
        this.draw();
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
        //circleArray[i].draw();
    }
}
var circleArray = [];

function init() {
    circleArray = [];
    for (let i = 0; i < 500; i++) {
        
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * (innerWidth - 2 * radius) + radius;
        var dx = (Math.random() - 0.5) * 8;
        var y = Math.random() * (innerHeight - 2 * radius) + radius;
        var dy = (Math.random() - 0.5) * 8;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}
init()
animate()