var audio = document.querySelector('#audio');
var play_button = document.querySelector('#playBtn');
var count = 0;

function playPause() {
    if (count == 0) {
        count = 1;
        audio.play();
        play_button.innerHTML = "Pause &#9208"; //9658
    } else {
        count = 0;
        audio.pause();
        play_button.innerHTML = "Play &#9658";
    }
}

function stop() {
    playPause();
    audio.pause();
    audio.currentTime = 0;
    play_button.innerHTML = "Play &#9658";
}

function change_vol() {
    audio.volume = document.getElementById("change_vol").value;
}