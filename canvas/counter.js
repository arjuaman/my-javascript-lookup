var num=0
var element = document.getElementById("counter")
function count(){
    num++;
    element.textContent = num;

    if(num<100)
        window.requestAnimationFrame(count);
}
count();

// function stopcount(){
//     clearInterval(temp2);
// }