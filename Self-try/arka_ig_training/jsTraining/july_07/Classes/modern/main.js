class Shape{
    constructor(type, sides)  {
        this.type= type;
        this.sides = sides;
    }
    toString () { return `[Shape(${this.type})]`;}
    area () { return 0;}
}
let shape = new Shape('generic', 0);
console.log("shape" + shape, shape);
console.log("area" , shape.area());

class Rectangle extends Shape {
    constructor(width, height) {
        super('Rectangle', 4);
        this.width = width;
        this.height = height;
    }
    area (){
        return this.width * this.height;
    }
}
let rect = new Rectangle(10,20);
console.log('Rectangle '+rect, rect);
console.log('area ', rect.area());

class  Circle extends Shape {
    constructor(radius) {
        super('Circle', 0);
        this.radius = radius;
    }
    area (){
        return Math.PI * Math.pow(this.radius,2);
    }
}
let circ = new Circle(10);
console.log('Circle '+circ, circ);
console.log('area ', circ.area());