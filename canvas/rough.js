var canvas = document.getElementById("my-canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 20;

// window.addEventListener('resize', function () {
//     canvas.width = window.innerWidth;
// });

function toDataURL(src, callback, outputFormat) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
        var canv2 = document.querySelector('#canv2');
        var ctx2 = canv2.getContext('2d');

        canv2.height = 400;
        canv2.width = 800;

        var dataURL;
        ctx2.drawImage(this, 0, 0);
        dataURL = canv2.toDataURL(outputFormat);
        callback(dataURL);
    };
    img.src = src;
    if (img.complete || img.complete === undefined) {
        var image = document.getElementById('get-img2');
        image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        image.src = src;
    }
}

// ctx.beginPath();
// ctx.fillStyle = "blue";
// ctx.arc(50, 50, 10,0, 2 * Math.PI);
// ctx.fill();

var count = 0;
let arr = ["image20.png", "test173.jpg", "sachin1.jpg","img5.jpg"]
var delta = canvas.width / (arr.length);
console.log("delta is "+delta);

var length = 0;
function animate() {
    if (length < window.innerWidth) {
        window.requestAnimationFrame(animate);
        //ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.fillRect(0, 0, length, 20);
        ctx.stroke();
    }
}


function loadFile(url, onDone, onError) {
    if (!onDone) onDone = function () {
        console.log("loaded");
        onDone2();
    };
    if (!onError) onError = function () { };
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 0) {
                setTimeout(function () {
                    try {


                    } catch (e) {
                        onError(e);
                        return;
                    }
                    onDone();
                }.bind(this), 1);
            } else {
                onError(xhr.status);
            }
        }
    }.bind(this);
    try {
        xhr.open("GET", url, true);
        xhr.send();
    } catch (e) {
        onError(e);
    }
}


function onDone2() {

    document.getElementById("example-div").innerText = count + " loaded";
    if (count < arr.length) {
        console.log("running at image: "+count);
        //count++;

        // animate()
        // length += delta;
        console.log("delta is now: "+delta);
        //console.log("length is: "+length);

        toDataURL(
            arr[count], function (dataUrl) {
            }
        )
        animate()
        length += delta;
        
        console.log("length is: "+length);

        loadFile(arr[count], onDone2, onError2);
        count++;
    }
}

function onError2() {
    console.error("there is error");
}