function Person(name,age,hobby){
    this.name=name;
    this.age=age;
    this.hobby=hobby;
}

var arr = [1,2,3,4,5];
var arr2 = [];

function removefrombeginning(array){
    return new Promise(function(resolve,reject){
        array.shift();
        if(array.length!=0)
            resolve();
        else
            reject();
    })
}

removefrombeginning(arr).then(function(){
    console.log("Success");
}).catch(function(){
    console.log("Failed");
});

removefrombeginning(arr2).then(function(){
    console.log("Success");
}).catch(function(){
    console.log("Failed");
});