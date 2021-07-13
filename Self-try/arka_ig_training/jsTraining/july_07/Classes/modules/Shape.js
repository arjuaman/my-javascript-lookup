export class Shape{
    constructor(type, sides)  {
        this.type= type;
        this.sides = sides;
    }
    toString () { return `[Shape(${this.type})]`;}
    area () { return 0;}
}