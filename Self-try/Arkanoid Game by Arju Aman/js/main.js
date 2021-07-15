import {
    Game
} from "./game.js";

onload = () => {
    const cvs = document.getElementById("breakout");
    const ctx = cvs.getContext("2d");
    cvs.style.border = "1px solid #0ff";
    ctx.lineWidth = 3;

    let GAME_OVER = false;
    let leftArrow = false;
    let rightArrow = false;

    const game = new Game(cvs, GAME_OVER, leftArrow, rightArrow);
    game.start();

    onkeydown = game.onKeyDown.bind(game);
    onkeyup = game.onKeyUp.bind(game);

    function loop() {

        ctx.drawImage(BG_IMG, 0, 0);

        game.draw();

        game.update();

        if (!game.GAME_OVER) {
            requestAnimationFrame(loop);
        }
    }
    loop();

}