onload = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/2', false);
    // xhr.responseType = 'json';
    try {
        xhr.send();
        if (xhr.status == 200) {
            console.log(xhr.response);
        } else {
            console.log(' no response');
        }
    } catch(e) {
        console.log('Error: ', e);
    } finally {
        console.log( 'this is final');
    }


    // async
    const audioCtx = new AudioContext();
    let buffer = null;
    let pBar = document.querySelector('#file');
    let xhr2 = new XMLHttpRequest();
    xhr2.open('GET', 'https://archive.org/download/78_sonata-in-c-minor-c-moll-op-13-pathetique_edwin-fischer-beethoven_gbia7013475/_78_sonata-in-c-minor-c-moll-op-13-pathetique_edwin-fischer-beethoven_gbia7013475a_01_3.5_ET_EQ.mp3');
    xhr2.responseType = "arraybuffer";
    xhr2.addEventListener('readystatechange', (e) => {
        console.log('Ready State ', xhr2.readyState);
        if(xhr2.readyState == 4 ) {
            if(xhr2.status == 200) {
                console.log("xhr ", xhr2);
                pBar.style.display = 'none';
                let button = document.createElement('input');
                button.type = "button";
                button.value = "Play Sound";
                audioCtx.decodeAudioData(xhr2.response)
                    .then(data => {
                        const source = audioCtx.createBufferSource();
                        source.buffer = data;
                        source.connect(audioCtx.destination);
                        button.onclick = ()=>source.start();
                        pBar.parentElement.append(button);
                    });

            }
        }
    });
    xhr2.addEventListener('progress', (e) => {
        if(e.lengthComputable) {
            console.log(`loaded ${e.loaded} of ${e.total}`);
            pBar.value = e.loaded/e.total * 100;
            pBar.innerHTML = pBar.value +'%';
        } else {
            console.log('Loaded ', e.loaded);
        }
    });
    xhr2.send();
}