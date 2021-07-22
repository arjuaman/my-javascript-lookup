const background = document.querySelector('#background'); 
const thumbnail = document.querySelector('#thumbnail'); 
const song = document.querySelector('#song'); 

const songArtist = document.querySelector('.song-artist'); 
const songTitle = document.querySelector('.song-title'); 
const progressBar = document.querySelector('#progress-bar'); 
let pPause = document.querySelector('#play-pause'); 
const volume = document.querySelector('#change_vol');
const volume_image = document.querySelector('#vol_img');

songIndex = 0;
songs = ['./multimedia/music/another-one.mp3', './multimedia/music/beyonce.mp3', './multimedia/music/dontstartnow.mp3','./multimedia/music/jenny.mp3']; 
thumbnails = ['./multimedia/images/queen.jpg', './multimedia/images/lemonade.png', './multimedia/images/dontstartnow.png','./multimedia/images/on-the-floor.jpg']; 
songArtists = ['Queen','Beyonce', 'Dua Lipa','Jennifer Lopez']; 
songTitles = ["Another One","Don't Hurt Yourself", "Don't Start Now", "On the Floor"]; 

let playing = true;
function playPause() {
    if (playing) {
        const song = document.querySelector('#song'),
        thumbnail = document.querySelector('#thumbnail');

        pPause.src = "./multimedia/icons/pause.png"
        thumbnail.style.transform = "scale(1.15)";
        
        song.play();
        playing = false;
    } else {
        pPause.src = "./multimedia/icons/play.png"
        thumbnail.style.transform = "scale(1)"
        
        song.pause();
        playing = true;
    }
}

song.addEventListener('ended', function(){
    nextSong();
});

function nextSong() {
    songIndex++;
    if (songIndex > songs.length-1) {
        songIndex = 0;
    };
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
        songIndex = songs.length-1;
    };
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}

function updateProgressValue() {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
    }
};

function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

setInterval(updateProgressValue, 500);

function changeProgressBar() {
    song.currentTime = progressBar.value;
};

let muted=false;
// let vol = document.getElementById("change_vol").value;
function change_vol() {
    song.volume = document.getElementById("change_vol").value;
    if(song.volume===0){
        muted = true;
        volume_image.src = "multimedia/icons/volume.png";
    }
    else{
        volume_image.src = "multimedia/icons/volume-on.png"
    }
};

setInterval(change_vol, 1000);