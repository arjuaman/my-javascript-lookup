document.getElementById('heading').addEventListener('mouseover', function (e) {
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    var x = e.target.classList;
});