const background: HTMLImageElement = document.querySelector("#background");
const thumbnail: HTMLImageElement = document.querySelector("#thumbnail");
let song: HTMLAudioElement = document.querySelector("#song");

const songArtist: HTMLElement = document.querySelector(".song-artist");
const songTitle: HTMLElement = document.querySelector(".song-title");
const progressBar: HTMLInputElement = document.querySelector("#progress-bar");
let pPause: HTMLImageElement = document.querySelector("#play-pause");
const volume: HTMLElement = document.querySelector("#change_vol");
const volumeImage: HTMLImageElement = document.querySelector("#vol_img");
let songIndex = 0;
const songs = [
  "./multimedia/music/another-one.mp3",
  "./multimedia/music/beyonce.mp3",
  "./multimedia/music/dontstartnow.mp3",
  "./multimedia/music/jenny.mp3",
];
const thumbnails = [
  "./multimedia/images/queen.jpg",
  "./multimedia/images/lemonade.png",
  "./multimedia/images/dontstartnow.png",
  "./multimedia/images/on-the-floor.jpg",
];
const songArtists = ["Queen", "Beyonce", "Dua Lipa", "Jennifer Lopez"];
const songTitles = [
  "Another One",
  "Don't Hurt Yourself",
  "Don't Start Now",
  "On the Floor",
];

let playing = true;
function playPause() {
  if (playing) {
    const song1: HTMLAudioElement = document.querySelector("#song");
    const thumbnail1:HTMLImageElement = document.querySelector("#thumbnail");

    pPause.src = "./multimedia/icons/pause.png";
    thumbnail1.style.transform = "scale(1.15)";

    song1.play();
    playing = false;
  } else {
    pPause.src = "./multimedia/icons/play.png";
    thumbnail.style.transform = "scale(1)";

    song.pause();
    playing = true;
  }
}

song.addEventListener("ended", () =>{
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
  document.querySelector(".currentTime").innerHTML = formatTime(
    Math.floor(song.currentTime)
  );
  if (document.querySelector(".durationTime").innerHTML === "NaN:NaN") {
    document.querySelector(".durationTime").innerHTML = "0:00";
  } else {
    document.querySelector(".durationTime").innerHTML = formatTime(
      Math.floor(song.duration)
    );
  }
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    const x = `0${sec}`;
    sec = Number(x);
  }
  return `${min}:${sec}`;
}

setInterval(updateProgressValue, 500);

function changeProgressBar() {
  song.currentTime = Number(progressBar.value);
}

let muted = false;
// let vol = document.getElementById("change_vol").value;
function change_vol() {
  const v: HTMLInputElement= document.querySelector("#change_vol");
  const vol = v.value;
  song.volume = Number(vol);
  if (song.volume === 0) {
    muted = true;
    volumeImage.src = "multimedia/icons/volume.png";
  } else {
    volumeImage.src = "multimedia/icons/volume-on.png";
  }
}

setInterval(change_vol, 1000);