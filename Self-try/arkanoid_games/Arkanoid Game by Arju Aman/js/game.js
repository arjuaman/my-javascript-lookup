import {Bricks} from './bricks.js'
import {Paddle} from './paddle.js'
import {Ball} from './ball.js'
import {brick} from "./BrickLayout.js";

// GAME VARIABLES AND CONSTANTS
const PADDLE_WIDTH = 100;
const PADDLE_MARGIN_BOTTOM = 50;
const PADDLE_HEIGHT = 20;

const BALL_RADIUS = 8;

let LIFE = 2; // PLAYER HAS THIS MUCH LIVES
let SCORE = 0;
const SCORE_UNIT = 10;

let LEVEL = 1;
const MAX_LEVEL = 2; // NUMBER OF BRICKS WILL INCREASE AT EACH LEVEL
// let isLevelDone = true;

export class Game {
    constructor(canvas,GAME_OVER,leftArrow,rightArrow) {
        this.cvs = canvas;
        this.ctx = this.cvs.getContext("2d");
        this.GAME_OVER = GAME_OVER;
        this.leftArrow = leftArrow;
        this.rightArrow= rightArrow;
    }
    
    start() {
        let cvs = this.cvs;
        let ctx = this.ctx;
        this.bricks = new Bricks({
            score: SCORE,
            score_unit: SCORE_UNIT,
            canvas: this.cvs,
            ctx : this.ctx,
            ball: this.ball
        });
        this.bricks.createBricks();
        // this.bricks.drawBricks();

        this.paddle = new Paddle({
            x: cvs.width / 2 - PADDLE_WIDTH / 2,
            y: cvs.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT,
            width: PADDLE_WIDTH,
            height: PADDLE_HEIGHT,
            dx: 5,
            canvas: cvs,
            ctx: ctx,
            // rArrow: this.rightArrow,
            // lArrow: this.leftArrow
        });
        // this.paddle.drawPaddle();

        this.ball = new Ball({
            x: cvs.width / 2,
            y: this.paddle.y - BALL_RADIUS - 10,
            radius: BALL_RADIUS,
            speed: 4,
            dx: 3 * (Math.random() * 2 - 1),
            dy: -3,
            canvas: cvs,
            ctx: ctx,
            rArrow:this. rightArrow,
            lArrow: this.leftArrow
        })

    }

    ballBrickCollision() {
        for (let r = 0; r < brick.row; r++) {
            for (let c = 0; c < brick.column; c++) {
                let b = this.bricks.bricksMat[r][c];
                // if the brick isn't broken
                if (b.status) {
                    if (this.ball.x + this.ball.radius > b.x && this.ball.x - this.ball.radius < b.x + brick.width && this.ball.y + this.ball.radius > b.y && this.ball.y - this.ball.radius < b.y + brick.height) {
                        BRICK_HIT.play();
                        this.ball.dy = -this.ball.dy;
                        b.status = false; // the brick is broken
                        SCORE += SCORE_UNIT;
                    }
                }
            }
        }
    }

    ballWallCollision(){
        let ball = this.ball;
        let cvs = this.cvs;
        if(ball.x + ball.radius > cvs.width || ball.x - ball.radius < 0){
            ball.dx = - ball.dx;
            WALL_HIT.play();
        }
        
        if(ball.y - ball.radius < 0){
            ball.dy = -ball.dy;
            WALL_HIT.play();
        }
        
        if(ball.y + ball.radius > cvs.height){
            LIFE--; // LOSE LIFE
            LIFE_LOST.play();
            this.resetBall();
        }
    }

    resetBall(){
        this.ball.x = this.cvs.width/2;
        this.ball.y = this.paddle.y - BALL_RADIUS;
        this.ball.dx = 3 * (Math.random() * 2 - 1);
        this.ball.dy = -3;
    }   

    ballPaddleCollision(){
        let ball = this.ball;
        let paddle = this.paddle;
        if(ball.x < paddle.x + paddle.width && ball.x > paddle.x && paddle.y < paddle.y + paddle.height && ball.y > paddle.y){
        
            // PLAY SOUND
            PADDLE_HIT.play();
            
            // CHECK WHERE THE BALL HIT THE PADDLE
            let collidePoint = ball.x - (paddle.x + paddle.width/2);
            
            // NORMALIZE THE VALUES
            collidePoint = collidePoint / (paddle.width/2);
            
            // CALCULATE THE ANGLE OF THE BALL
            let angle = collidePoint * Math.PI/3;
                
                
            ball.dx = ball.speed * Math.sin(angle);
            ball.dy = - ball.speed * Math.cos(angle);
        }
    }

    showGameStats(text, textX, textY, img, imgX, imgY){
        let ctx = this.ctx;
        // draw text
        ctx.fillStyle = "#FFF";
        ctx.font = "25px Germania One";
        ctx.fillText(text, textX, textY);
        
        // draw image
        ctx.drawImage(img, imgX, imgY,25, 25);
    }

    gameOver(){
        if(LIFE <= 0){
            this.showYouLose();
            this.GAME_OVER = true;
        }
    }   

    showYouWin(){
        const gameover = document.getElementById("gameover");
        gameover.style.display = "block";
        const youwin = document.getElementById("youwon");
        youwin.style.display = "block";
    }

    showYouLose(){
        const gameover = document.getElementById("gameover");
        gameover.style.display = "block";
        const youlose = document.getElementById("youlose");
        youlose.style.display = "block";
    }

    levelUp(){
        let isLevelDone = true;
        
        // check if all the bricks are broken
        for(let r = 0; r < brick.row; r++){
            for(let c = 0; c < brick.column; c++){
                isLevelDone = isLevelDone && ! this.bricks.bricksMat[r][c].status;
            }
        }
        
        if(isLevelDone){
            WIN.play();
            
            if(LEVEL >= MAX_LEVEL){
                this.showYouWin();
                this.GAME_OVER = true;
                return;
            }
            brick.row++;
            this.bricks.createBricks();
            this.ball.speed += 0.5;
            this.resetBall();
            LEVEL++;
        }
        else{
            isLevelDone = false;
            this.gameOver();
        }
    }

    movePaddle() {
        if (this.rightArrow && this.paddle.x + this.paddle.width < this.paddle.cvs.width) {
            this.paddle.x += this.paddle.dx;
            // console.log("inside move condition");
        } else if (this.leftArrow && this.paddle.x > 0) {
            this.paddle.x -= this.paddle.dx;
            // console.log("inside move condition");
        }
    }

    onKeyDown(event){
        // console.log("key pressed");
        if(event.keyCode == 37){
            this.leftArrow = true;
            // console.log("left arrow true");
        }else if(event.keyCode == 39){
            this.rightArrow = true;
            // console.log("right arrow true");
        }
    }
    onKeyUp(event){
        // console.log("key released");
        if(event.keyCode == 37){
            this.leftArrow = false;
            // console.log("left arrow false");
        }else if(event.keyCode == 39){
            this.rightArrow = false;
            // console.log("right arrow false");
        }
    }

    update() {
        this.movePaddle();

        this.ball.moveBall();

        this.ballWallCollision();

        this.ballPaddleCollision();

        this.ballBrickCollision();

        this.gameOver();

        this.levelUp();
    }

    draw() {
        let cvs = this.cvs;
        this.paddle.drawPaddle();

        this.ball.drawBall();

        // this.bricks.createBricks();
        this.bricks.drawBricks();

        this.showGameStats(SCORE, 35, 25, SCORE_IMG, 5, 5);
    
        this.showGameStats(LIFE, cvs.width - 25, 25, LIFE_IMG, cvs.width - 55, 5);
       
        this.showGameStats(LEVEL, cvs.width / 2, 25, LEVEL_IMG, cvs.width / 2 - 30, 5);
    }

}

const restart = document.getElementById("restart");
restart.addEventListener("click", function(){
    location.reload(); // reload the page
})

// SELECT SOUND ELEMENT
const soundElement  = document.getElementById("sound");

soundElement.addEventListener("click", audioManager);

function audioManager(){
    // CHANGE IMAGE SOUND_ON/OFF
    let imgSrc = soundElement.getAttribute("src");
    let SOUND_IMG = imgSrc == "img/SOUND_ON.png" ? "img/SOUND_OFF.png" : "img/SOUND_ON.png";
    
    soundElement.setAttribute("src", SOUND_IMG);
    
    // MUTE AND UNMUTE SOUNDS
    WALL_HIT.muted = WALL_HIT.muted ? false : true;
    PADDLE_HIT.muted = PADDLE_HIT.muted ? false : true;
    BRICK_HIT.muted = BRICK_HIT.muted ? false : true;
    WIN.muted = WIN.muted ? false : true;
    LIFE_LOST.muted = LIFE_LOST.muted ? false : true;
}

