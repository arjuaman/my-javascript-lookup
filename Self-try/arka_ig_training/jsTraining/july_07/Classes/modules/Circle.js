import {Shape} from "./Shape.js";

export class Circle extends Shape {
    constructor(radius) {
        super('Circle', 0);
        this.radius = radius;
    }
    area (){
        return Math.PI * Math.pow(this.radius,2);
    }
}