class Rectangle {
    constructor(width, height,color) {
        this.width = width;
        this.height = height;
        this.color=color;
    }
    calcArea(){
        return this.height*this.width;
    }
}

//let rect = new Rectangle(4, 5, 'red');
let rect = new Rectangle(20, 30, 'yellow');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

