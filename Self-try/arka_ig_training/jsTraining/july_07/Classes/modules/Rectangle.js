import {Shape} from "./Shape.js";

export class Rectangle extends Shape {
    constructor(width, height) {
        super('Rectangle', 4);
        this.width = width;
        this.height = height;
    }
    area (){
        return this.width * this.height;
    }
}