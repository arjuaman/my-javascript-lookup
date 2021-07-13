let aPlayer;
onload = ()=>{
    let playlist = document.querySelector('#playlist');
    aPlayer = document.querySelector("#audio");
    songs.forEach((song, index) => {
       const li = document.createElement('li');
       const link = document.createElement('a');
        link.href = song.href;
        link.innerText = song.title;
        link.addEventListener('click', clickHandler, false);
       li.append(link);
       playlist.append(li);
    });
}

function clickHandler(event) {
    // stop the actual event
    event.preventDefault();
    // event.target refers to a tag.
    // event.target.parentElement will refer to li
    // const parent = event.target.parentElement;
    // parent.parentElement will refer to ul
    // ul.children will be a collection of li tags
    // but since it is collection and not array we need to convert the collection to array we use Array.from
    // const index = Array.from(parent.parentElement.children).indexOf(parent);
    // playAudio(index);
    aPlayer.src = event.target.href;
    aPlayer.load();
    aPlayer.play();
}

function playAudio(index) {
    aPlayer.src = songs[index].href;
    aPlayer.load();
    aPlayer.play();
}