import {Circle} from "./Circle.js";
import { ShapeBoundingBox } from "./ShapeBoundingBox.js";

var layer2canvas = document.querySelector('#rockNroad');
var layer2ctx = layer2canvas.getContext('2d');

var xpos = 180;
var ypos = 550;
var speed = 15;

let numRocks = 3;

var road = new Image();
road.src = "https://img.pngio.com/2d-top-down-highway-background-opengameartorg-road-png-top-down-840_650.png";

var spacecraft = new Image();
spacecraft.src = 'images/spacecraftWhite.png';


function move(e){
    if(e.keyCode == 39 || e.keyCode == 68)
        shapeBoundingBox.left+=speed;
    if(e.keyCode == 37 || e.keyCode == 65)
        shapeBoundingBox.left-=speed;
    if(e.keyCode == 38 || e.keyCode == 87)
        shapeBoundingBox.top-=speed;
    if(e.keyCode == 40 || e.keyCode == 83)
        shapeBoundingBox.top+=speed;
}


let shapeBoundingBox = new ShapeBoundingBox(xpos, ypos, 0, 0);
shapeBoundingBox.width = shapeBoundingBox.left + 50;
shapeBoundingBox.height = shapeBoundingBox.top + 50;

function animate() {
    
    requestAnimationFrame(animate);
    document.onkeydown = move;
    layer2ctx.clearRect(0, 0, layer2canvas.width, layer2canvas.height);
    layer2ctx.drawImage(road,0,0,layer2canvas.width,layer2canvas.height);
    layer2ctx.drawImage(spacecraft, shapeBoundingBox.left, shapeBoundingBox.top, 50, 50);
    shapeBoundingBox.width = shapeBoundingBox.left + 50;
    shapeBoundingBox.height = shapeBoundingBox.top + 50;

    // console.log("Spacecraft's: "+shapeBoundingBox.left+" "+shapeBoundingBox.top); 
    // console.log("Spacecraft's dim: "+shapeBoundingBox.width+" "+shapeBoundingBox.height);

    if(shapeBoundingBox.left+50>layer2canvas.width || shapeBoundingBox.left<0)
    {
        alert("You're going off the boundary! Recentering..Recentering..");
        shapeBoundingBox.left = xpos;
        shapeBoundingBox.width = shapeBoundingBox.left + 50;
    }
    if(shapeBoundingBox.top+50>layer2canvas.height || shapeBoundingBox.top<0)
    {
        alert("You're going off the boundary! Recentering..Recentering..");
        shapeBoundingBox.top = ypos;
        shapeBoundingBox.height = shapeBoundingBox.top + 50;
    }

    for(let i=0;i<circleArray.length;i++){
        // document.onkeydown = move;
        circleArray[i].update();

        // console.log("Circle's: " + circleArray[i].x + " " + circleArray[i].y);
        
        //Collision condition:
        if (
            (circleArray[i].x>shapeBoundingBox.left && circleArray[i].x<shapeBoundingBox.width)
            &&
            (circleArray[i].y>shapeBoundingBox.top && circleArray[i].y<shapeBoundingBox.height) 
            )
        {
            
            console.log("Spacecraft's coordinates at collision time:" + shapeBoundingBox.left + " " + shapeBoundingBox.top);
            console.log("Spacecraft's wide coordinates at collision time:" + shapeBoundingBox.width + " " + shapeBoundingBox.height);
            console.log("Circle's coordinates at collision time: " + circleArray[i].x + " " + circleArray[i].y);
            alert("Collision with tip of spacecraft! Sending the culprit ball back to origin. Let's restart!");
            
            circleArray[i].x = 50;
            circleArray[i].y = 50;
            shapeBoundingBox.left = xpos;
            shapeBoundingBox.top = ypos;
            shapeBoundingBox.width = shapeBoundingBox.left + 50;
            shapeBoundingBox.height = shapeBoundingBox.top + 50;
        }

    }
    
}
var circleArray = [];

for (let i = 0; i < numRocks; i++) {
    var radius = 20;
    circleArray.push(new Circle(radius));
}

animate()