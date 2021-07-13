let count = 0;

onload = function(){
    document.getElementById("click").addEventListener("click", function(){
        ++count;
        console.log("count is ", count);
        document.getElementById("rightTopDiv").innerHTML += "<br/>Count is now " + count;
        document.getElementById("username").value = count;
    });
    document.getElementById("username").addEventListener("change", function(){
        this.value = this.value.toUpperCase();
    });
}
