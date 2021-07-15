export class Bar{
    constructor(params){
        //x,y,width,height and maxBound from params
        this.x = params.x - params.width/2;
        this.y = params.y - params.height/2;
        this.height = params.height;
        this.width = params.width;
        this.maxBound = params.maxBound - params.width;

        this.speed = 0;
        this.maxSpeed = 5;
        this.direction = '';
    }

    set x(val){
        this.uX = val;
    }
    get x(){
        return this.uX;
    }

    set y(val){
        this.uY = val;
    }
    get y(){
        return this.uY;
    }

    set width(val){
        this.uW = val;
    }
    get width(){
        return this.uW;
    }

    set height(val){
        this.uH = val;
    }
    get height(){
        return this.uH;
    }

    hitTest(ball) {
        let distX = Math.abs(ball.x - this.x - this.width/2);
        let distY = Math.abs(ball.y - this.y - this.height/2);
        if( distX <= (ball.radius + this.width/2) && distY <= (ball.radius + this.height/2)) {
            return true;
        } else {
            return false;
        }
    }

    get boundRect() {
        return {
            top: this.uY,
            left: this.uX,
            right: this.uX + this.uW,
            bottom : this.uY + this.uH
        };
    }

    move(direction){
        this.direction = direction;
    }

    stop(){
        this.direction = '';
    }

    update(){
        let x = this.x;

        if(this.direction === 'left') {
            this.speed = (x > 0)? -this.maxSpeed : 0;
        } else if(this.direction === 'right') {
            this.speed = (x < this.maxBound)? this.maxSpeed : 0;
        } else {
            this.speed = 0;
        }
        this.x += this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.uX, this.uY, this.uW, this.uH);
    }
}