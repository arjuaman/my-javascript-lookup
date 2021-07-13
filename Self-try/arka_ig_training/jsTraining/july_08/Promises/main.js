onload = ()=>{
    let res = function() {
        console.log("function resolved");
    }
    let rej = ()=>{
        console.warn("Function rejected!");
    }
    let promise = new Promise(function(resolve, reject){
        if(Math.random() > .5){
            return reject();
        }
        return resolve();
    })
    promise.then(res).catch(rej);
    console.log("promise", promise);

    // fetch
    /*let fetchPromise = fetch('https://jsonplaceholder.typicode.com/todos');
    fetchPromise.then(response => response.json())
        .then(json => console.log('response', json));
     */

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (response){
        return response.json();
    }).then(json => console.log('response', json));

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method:'PUT',
      body: JSON.stringify({
          id: 1,
          title: "delectus aut autem",
          userId: 1,
          body: 'lorem Ipsum'
      }),
        headers: {
          'content-type':'application/json;charset=UTF-8'
        }
    }).then(function (response){
            return response.json();
        }).then(json => console.log('response first', json));


    // async await

    async function postData(url, data={}) {
        const response = await fetch(url, {
            method:'PUT',
            body: JSON.stringify(data),
            headers: {
                'content-type':'application/json;charset=UTF-8'
            }
        });
        console.log("Response inside post data", response);
        return response.json();
    }
    postData('https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: "delectus aut autem",
        userId: 1,
        body: 'lorem Ipsum'
    }).then(data => {
        console.log('Do what ever you want to do this data',data);
    });
    // Promise.all(promise[]).then().catch()
    // Promise.any(promise[]).then().catch()
}