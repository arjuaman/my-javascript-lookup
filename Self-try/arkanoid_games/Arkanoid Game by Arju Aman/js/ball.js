export class Ball{
    constructor(params){
        this.x = params.x;
        this.y = params.y;
        this.radius = params.radius;
        this.speed = params.speed;
        this.dx = params.dx;
        this.dy = params.dy;
        this.cvs = params.cvs;
        this.ctx = params.ctx;
    }
    
    drawBall(){
        let ctx = this.ctx;
        ctx.beginPath();
        
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = "#ffcd05";
        ctx.fill();
        
        ctx.strokeStyle = "#2e3548";
        ctx.stroke();
        
        ctx.closePath();
    }

    moveBall(){
        this.x += this.dx;
        this.y += this.dy;
    }

}
