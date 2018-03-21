class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    set diameter(value){
        this.radius=value/2;
    }

    get diameter() {
        return 2 * this.radius;
    }

    get  area() {
        return this.calcArea();
    }

    calcArea() {
        return Math.PI * this.radius * this.radius;
    }
}
let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
