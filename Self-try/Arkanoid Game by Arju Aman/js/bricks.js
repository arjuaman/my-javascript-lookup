import {brick} from "./BrickLayout.js";

export class Bricks {
    constructor(params) {
        this.bricksMat = [];
        this.SCORE = params.score;
        this.SCORE_UNIT = params.score_unit;
        this.cvs = params.cvs;
        this.ctx = params.ctx;
        this.status = true;
        // this.ball = params.ball;
    }

    createBricks() {
        for (let r = 0; r < brick.row; r++) {
            this.bricksMat[r] = [];
            for (let c = 0; c < brick.column; c++) {
                this.bricksMat[r][c] = {
                    x: c * (brick.offSetLeft + brick.width) + brick.offSetLeft,
                    y: r * (brick.offSetTop + brick.height) + brick.offSetTop + brick.marginTop,
                    status: this.status
                }
            }
        }
    }

    drawBricks() {
        let ctx = this.ctx;
        for (let r = 0; r < brick.row; r++) {
            // console.log(brick.column);
            for (let c = 0; c < brick.column; c++) {
                let b = this.bricksMat[r][c];
                // if the brick isn't broken
                if (b.status) {
                    ctx.fillStyle = brick.fillColor;
                    ctx.fillRect(b.x, b.y, brick.width, brick.height);

                    ctx.strokeStyle = brick.strokeColor;
                    ctx.strokeRect(b.x, b.y, brick.width, brick.height);
                }
            }
        }
    }

}
