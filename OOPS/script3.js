function Ingredients(flour,water,egg,flavor){
    this.flour= flour;
    this.water=water;
    this.egg=egg;
    this.flavor=flavor;
}

Ingredients.prototype.bake = function(time){
    console.log(`baking will go on for ${time} minutes`);
}

let cake = new Ingredients("flour","water","eggs","vanilla");
//console.log(cake)
//cake.bake(50);

function Cake(flour,water,egg,flavor,milk){
    Ingredients.call(this,flour,water,egg,flavor);
    this.milk = milk;
}

Cake.prototype = Object.create(Ingredients.prototype);
Cake.prototype.constructor = Cake;
//console.log(Cake);
let bday = new Cake("flour","water","eggs","vanilla","milk");
console.log(bday);
bday.bake(60);