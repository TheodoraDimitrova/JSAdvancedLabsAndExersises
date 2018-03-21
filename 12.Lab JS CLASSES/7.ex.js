class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get area(){
        return this.calcArea();
    }
    calcArea(){
        return this.height*this.width;
    }
}
// let Rectangle = class {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// };
let p=new Rectangle(12,13);
console.log(p.area);
console.log(p);



class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}

let cp = new ColorPoint(25, 8, 'green');
cp.toString(); // '(25, 8) in green'
console.log(cp);
console.log(cp instanceof ColorPoint); // true
console.log(cp instanceof Point); // true
