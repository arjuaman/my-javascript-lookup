import {Circle} from "./Circle.js";

var layer2canvas = document.querySelector('#rockNroad');
var layer2ctx = layer2canvas.getContext('2d');

var xpos = 100;
var ypos = 536;

let numRocks = 3;

var road = new Image();
road.src = "https://img.pngio.com/2d-top-down-highway-background-opengameartorg-road-png-top-down-840_650.png";

var spacecraft = new Image();
spacecraft.src = 'images/spacecraftWhite.png';


function move(e){
    if(e.keyCode == 39 || e.keyCode == 68)
        xpos+=5;
    if(e.keyCode == 37 || e.keyCode == 65)
        xpos-=5;
    if(e.keyCode == 38 || e.keyCode == 87)
        ypos-=5;
    if(e.keyCode == 40 || e.keyCode == 83)
        ypos+=5;
}

function animate() {
    
    requestAnimationFrame(animate);
    layer2ctx.clearRect(0, 0, layer2canvas.width, layer2canvas.height);
    layer2ctx.drawImage(road,0,0,250,600);
    layer2ctx.drawImage(spacecraft, xpos, ypos, 50, 50);
    //console.log("Spacecraft's:"+xpos+" "+ypos);
    for(let i=0;i<circleArray.length;i++){
        document.onkeydown = move;
        circleArray[i].update();
        
        if (Math.abs(xpos - circleArray[i].x) < circleArray[i].radius && Math.abs(ypos - circleArray[i].y) < circleArray[i].radius) {
            console.log("Spacecraft's coordinates at collision time:" + xpos + " " + ypos);
            console.log("Circle's coordinates at collision time: " + circleArray[i].x + " " + circleArray[i].y);
            alert("Collision with left top tip of spacecraft! Sending the culprit ball back to top left. Let's restart!");
            circleArray[i].x = 50;
            circleArray[i].y = 50;
            xpos = 100;
            ypos = 536;
        }

    }
    
}
var circleArray = [];

for (let i = 0; i < numRocks; i++) {
    var radius = 20;
    var x = Math.random() * (layer2canvas.width-2*radius) + radius;
    var dx = (Math.random() - 0.5) * 8;
    var y = Math.random() * (layer2canvas.height-2*radius) + radius;
    var dy = (Math.random() - 0.5) * 8;
    circleArray.push(new Circle(x,y,dx,dy,radius));
}

animate()