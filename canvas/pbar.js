// var canvas = document.querySelector('canvas');
// var ctx = canvas.getContext('2d');

// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;

// let fb = document.getElementById('pbar-button');
// fb.addEventListener('click',buttonCLickLoad);

// function buttonCLickLoad(){
//     console.log('Button clicked successfully!');
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET','test173.jpg',true);
//     xhr.onprogress = function(){
//         console.log('Loading');
//     }
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState==0){
//             console.log('at 0');
//         }
//         else if(xhr.readyState==1){
//             console.log('at 1');
//         }
//         else if(xhr.readyState==2){
//             console.log('at 2');
//         }
//         else if(xhr.readyState==3){
//             console.log('at 3');
//         }
//         else if(xhr.readyState==4){
//             if(this.status==200 || this.status==0){
//                 var image = document.getElementById('get-img');
//                 image.src = "data:image/gif;base64," + encode64(xhr.responseText);
//             }
//             else{
//                 alert('Some error occured');
//             }
//         }
//     }
//     xhr.send();
// }


function toDataURL(src, callback, outputFormat) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');

        canvas.height = 400;
        canvas.width = 800;

        var dataURL;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
    };
    img.src = src;
    if (img.complete || img.complete === undefined) {
        var image = document.getElementById('get-img');
        image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        image.src = src;
    }
}

//   toDataURL(
//     'img/sachin1.jpg',
//     function(dataUrl) {
//       //console.log('RESULT:', dataUrl)
//     }
//   )

var i = 0;
var x = 1;

function action() {
    var element = document.getElementById("my-bar");
    
    var temp = setInterval(func, 1000);
    function func() {
        if (i == 100) {
            clearInterval(temp);
        }
        else {
                toDataURL(
                    `img/img${x++}.jpg`, function (dataUrl) {
                        //console.log('RESULT:', dataUrl)
                    }
                )
            i = i + 20;
            element.style.width = i + '%';
        }
    }
}

