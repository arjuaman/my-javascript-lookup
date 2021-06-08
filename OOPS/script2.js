function Obj(x){
    this.name = x;
}
Obj.prototype.getName = function(){
    return this.name;
}
let o1 = new Obj("Astrid");
//console.log(o1)

function DogObject(name, age) {
    this.name = name;
    this.age = age;
}
DogObject.prototype.speak = function() {
    return "I am a dog";
}
let john = new DogObject("John", 45);

const p={
    slogan:function(){
        console.log("Hoorah!")
    },
    changeName:function(x){
        this.name = x;
    }
};
let arju = Object.create(p);
arju.name = "Arju";
arju.role="Developer";
arju.age=23;
console.log(arju)

const A=Object.create(p,{
    name:{value:"Astrid",writable:true},
    jobRole:{value:"Game Developer",writable:true},
    //age:23
})
A.changeName("Tomato")
console.log(A)