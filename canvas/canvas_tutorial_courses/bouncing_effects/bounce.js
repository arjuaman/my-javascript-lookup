var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var particleArray = [];
var numberOfParticles = 100;

const mouse = {
    x:undefined,
    y:undefined
}

window.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    //console.log(mouse.x,mouse.y);
})

setInterval(function(){    // to prevent recording event when mouse left idle
    mouse.x = undefined;
    mouse.y = undefined;
},200);

class Particle {
    constructor(x,y,size,color,weight) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.weight = weight;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2,false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update(){
        this.size -= 0.005;   //bounce height will reduce after each collision
        if(this.size < 0){
            this.x = (mouse.x + ((Math.random()*20)-10));
            this.y = (mouse.y + ((Math.random()*20)-10));
            this.size = (Math.random()*10) + 2;
            this.weight = (Math.random()*2) - 0.1;
        }
        this.y += this.weight;
        this.weight += 0.2;

        if(this.y > canvas.height - this.size || this.y-this.size<0){
            this.weigth *= -1;
        };
    }
}

function init(){
    particleArray = [];
    for(let i=0;i<numberOfParticles;i++){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let size = (Math.random() * 5)+2;
        let color="pink";
        let weight = 1;
        particleArray.push(new Particle(x,y,size,color,weight));
    }
}

function animate(){
    //ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'rgba(0,0,0,0.08)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<particleArray.length;i++){
        particleArray[i].update();
        particleArray[i].draw();
    }
    requestAnimationFrame(animate);
}

init();
animate();