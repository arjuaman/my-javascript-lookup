function Shape(type, sides) {
    this.type = type;
    this.sides = sides;
}

Shape.prototype.toString = function() {
    return `[Shape(${this.type})]`;
}

Shape.prototype.area = function() {
    return 0;
}

let shape = new Shape('generic', 0);
console.log("shape" + shape);
console.log("shape" , shape);
console.log("area" , shape.area());

function Rectangle(width, height) {
    Shape.call(this, 'Rectangle', 4);
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function(){
    return this.width * this.height;
}

let rect = new Rectangle(10,20);

console.log('Rectangle '+rect, rect);
console.log('area ', rect.area());

function Circle(radius) {
    Shape.call(this, 'Circle', 0);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function(){
    return Math.PI * Math.pow(this.radius,2);
}
let circ = new Circle(10);

console.log('Circle '+circ, circ);
console.log('area ', circ.area());