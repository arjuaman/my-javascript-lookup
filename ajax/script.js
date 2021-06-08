console.log("Ajax tutorial in one video");


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    //xhr.open('GET',"arju.txt",true);
    //xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);

    xhr.getResponseHeader('Content-type','application/json');
    
    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }

    // What to do when response is ready
    xhr.onload = function () {
        console.log(this.responseText);
    }

    // send the request
    params = `{"name":"arju","salary":"25000","age":"23"}`;
    xhr.send(params);

    console.log("We are done!");

}

let f1 = document.getElementById('popBtn');
f1.addEventListener('click',popHandler)

function popHandler() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://dummyapi.io/data/api/user?limit=10',true);

    xhr.onload = function () {
        if(this.status===200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
        }
        else{
            console.log("Error!");
        }
    }

    xhr.send();
}