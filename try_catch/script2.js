let a = document.getElementById("first-cont")
a.addEventListener("click", buttonClickHandler)

function buttonClickHandler(){
    const xhr = new XMLHttpRequest();
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.onprogress = function(){
        console.log("Operation in progress");
    }
    xhr.getResponseHeader('Content-type', 'application/json');
    xhr.onreadystatechange = function(){
        if(this.readyState==0){
            console.log("request not initialized");
        }
        if(this.readyState==1){
            console.log("server connection established");
        }
        if(this.readyState==2){
            console.log("request received");
        }
        if(this.readyState==3){
            console.log("processing request");
        }
        if(this.readyState==4){
            if(this.status==200){
                document.getElementById("first-cont").innerHTML = this.responseText;
                //console.log(this.response.statusText);
            }
            else
                console.log("Error!");
        }
    }
    // console.log(this.statusText);
    let params = {"name":"arju","salary":"0","age":"23"};
    xhr.send(params);
}