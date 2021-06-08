var temp = setInterval(function changeBG(){
    var body = document.body;
    if(body.style.backgroundColor=="pink"){
        body.style.backgroundColor = "yellow";
    }
    else{
        body.style.backgroundColor = "pink";
    }
},100)

function stopChanging(){
    clearInterval(temp);
}