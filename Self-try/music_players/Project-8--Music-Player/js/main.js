var background = document.querySelector("#background");
var thumbnail = document.querySelector("#thumbnail");
var song = document.querySelector("#song");
var songArtist = document.querySelector(".song-artist");
var songTitle = document.querySelector(".song-title");
var progressBar = document.querySelector("#progress-bar");
var pPause = document.querySelector("#play-pause");
var volume = document.querySelector("#change_vol");
var volumeImage = document.querySelector("#vol_img");
var songIndex = 0;
var songs = [
    "./multimedia/music/another-one.mp3",
    "./multimedia/music/beyonce.mp3",
    "./multimedia/music/dontstartnow.mp3",
    "./multimedia/music/jenny.mp3",
];
var thumbnails = [
    "./multimedia/images/queen.jpg",
    "./multimedia/images/lemonade.png",
    "./multimedia/images/dontstartnow.png",
    "./multimedia/images/on-the-floor.jpg",
];
var songArtists = ["Queen", "Beyonce", "Dua Lipa", "Jennifer Lopez"];
var songTitles = [
    "Another One",
    "Don't Hurt Yourself",
    "Don't Start Now",
    "On the Floor",
];
var playing = true;
function playPause() {
    if (playing) {
        var song1 = document.querySelector("#song");
        var thumbnail1 = document.querySelector("#thumbnail");
        pPause.src = "./multimedia/icons/pause.png";
        thumbnail1.style.transform = "scale(1.15)";
        song1.play();
        playing = false;
    }
    else {
        pPause.src = "./multimedia/icons/play.png";
        thumbnail.style.transform = "scale(1)";
        song.pause();
        playing = true;
    }
}
song.addEventListener("ended", function () {
    nextSong();
});
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];
    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    playing = true;
    playPause();
}
function previousSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];
    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    playing = true;
    playPause();
}
function updateProgressValue() {
    progressBar.max = String(song.duration);
    progressBar.value = String(song.currentTime);
    document.querySelector(".currentTime").innerHTML = formatTime(Math.floor(song.currentTime));
    if (document.querySelector(".durationTime").innerHTML === "NaN:NaN") {
        document.querySelector(".durationTime").innerHTML = "0:00";
    }
    else {
        document.querySelector(".durationTime").innerHTML = formatTime(Math.floor(song.duration));
    }
}
function formatTime(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = Math.floor(seconds - min * 60);
    if (sec < 10) {
        var x = "0" + sec;
        sec = Number(x);
    }
    return min + ":" + sec;
}
setInterval(updateProgressValue, 500);
function changeProgressBar() {
    song.currentTime = Number(progressBar.value);
}
var muted = false;
function change_vol() {
    var v = document.querySelector("#change_vol");
    var vol = v.value;
    song.volume = Number(vol);
    if (song.volume === 0) {
        muted = true;
        volumeImage.src = "multimedia/icons/volume.png";
    }
    else {
        volumeImage.src = "multimedia/icons/volume-on.png";
    }
}
setInterval(change_vol, 1000);
//# sourceMappingURL=main.js.map