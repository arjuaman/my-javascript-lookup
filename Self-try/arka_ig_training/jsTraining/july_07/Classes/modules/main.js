// import {Shape} from './Shape.js';
import {Rectangle} from "./Rectangle.js";
import {Circle} from "./Circle.js";
import {Pentagon} from "./Pentagon.js";

// let shape = new Shape('generic', 0);
// console.log("shape" + shape, shape);
// console.log("area" , shape.area());

let rect = new Rectangle(10,20);
console.log('Rectangle '+rect, rect);
console.log('area ', rect.area());

let circ = new Circle(10);
console.log('Circle '+circ, circ);
console.log('area ', circ.area());

let pent = new Pentagon();
console.log("Pentagon", pent);
