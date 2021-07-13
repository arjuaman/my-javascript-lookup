window.addEventListener('load',() => {
    let mainDiv = document.getElementById("main");
    let isMouseDown = false;
    addEventListener('mousedown',(event)=>{
       isMouseDown = true;
        mainDiv.innerHTML += `Mouse Down at : ${event.x} X ${event.y}`;
        console.log(event);
    });
    addEventListener(('mousemove'), (e) => {
        if(isMouseDown) {
            mainDiv.innerHTML += "<br/>Mouse Moved at "+ e.clientX +" X "+ e.clientY;
            // console.log(e);
        }
    });
    addEventListener('mouseup', (ev) => {
        isMouseDown = false;
        mainDiv.innerHTML += "<br/>Mouse up at";
        // console.log(ev);
    });
    // addEventListener('mou')
})