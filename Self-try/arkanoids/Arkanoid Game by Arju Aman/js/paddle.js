export class Paddle {
    constructor(params) {
        this.x = params.x;
        this.y = params.y;
        this.width = params.width;
        this.height = params.height;
        this.dx = params.dx;
        this.cvs = params.canvas;
        this.ctx = params.ctx;
        // this.rightArrow = params.rArrow;
        // this.leftArrow = params.lArrow;
    }

    drawPaddle() {
        let ctx = this.ctx;
        ctx.fillStyle = "#2e3548";
        ctx.fillRect(this.x, this.y, this.width, this.height);

        ctx.strokeStyle = "#ffcd05";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

}
