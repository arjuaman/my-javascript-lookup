const target = Math.floor(Math.random() * 100);
let attempt = 0;
const prevInputArr = [];

const submit = document.getElementById("submitBtn");
submit.addEventListener("click", runTheGame);

function runTheGame() {
    const inputTag = document.getElementById("input");
    const input = inputTag.valueAsNumber;
    prevInputArr.push(input);

    const prevGuesses = document.getElementById("prevGuesses");
    const verdict = document.getElementById("verdict");
    const newGame = document.getElementById("newGame");
    const highOrLow = document.getElementById("highOrLow");

    if (attempt === -1) {
        inputTag.value = "";
        highOrLow.innerText = "";
        verdict.innerText = "";
        inputTag.disabled = false;
        submit.disabled = false;
        prevInputArr.splice(0,prevInputArr.length);
        prevGuesses.textContent = "";
    } else if (attempt >= 9) {
        prevGuesses.textContent = "Previous guesses: "; 
        for(let i=0;i<prevInputArr.length;i++){
            prevGuesses.textContent += prevInputArr[i] + " ";
        }
        highOrLow.innerText = "";
        inputTag.disabled = true;
        submit.disabled = true;
        verdict.innerText = "!!!GAME OVER!!!";
        newGame.innerHTML = "<button id='startAgain'>Start new game</button>";

        const restartBtn = document.getElementById("startAgain");
        if (restartBtn) {
            attempt = -2;
            restartBtn.addEventListener("click", runTheGame);
        }
    } else {
        prevGuesses.textContent = "Previous guesses: "; 
        for(let i=0;i<prevInputArr.length;i++){
            prevGuesses.textContent += prevInputArr[i] + " ";
        }
        if (input === target) {
            highOrLow.innerText = "";
            inputTag.disabled = true;
            submit.disabled = true;
            verdict.innerText = "Congratulations! You got it right!";
            newGame.innerHTML = "<button id='startAgain'>Start new game</button>";

            const restartBtn = document.getElementById("startAgain");
            if (restartBtn) {
                attempt = -2;
                restartBtn.addEventListener("click", runTheGame);
            }
        } else if (input < target) {
            // Previous guesses: 50
            verdict.innerText = "Wrong!";
            highOrLow.innerText = "Last guess was too low!";
        } else {
            verdict.innerText = "Wrong!";
            highOrLow.innerText = "Last guess was too high!";
        }
    }
    attempt++;
}