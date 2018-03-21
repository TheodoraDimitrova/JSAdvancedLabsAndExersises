function solve() {
    class Figure{//•	should be abstract (cannot be instantiated)
        constructor(){
            if(new.target === Figure){
                throw new TypeError('Figure class is abstract!');
            }
        }
        toString(){
            let  type =this.constructor.name;
            return type;

        }
    }
    class Circle extends Figure{

        constructor(radius) {
            super();
            this.radius=radius;
        }
        get area(){
            return Math.PI*this.radius*this.radius;
        }
        toString(){
            return `${super.toString()} - radius: ${this.radius}`
        }
    }
    class Rectangle extends Figure{

        constructor(width,height) {
            super();
            this.width=width;
            this.height=height;
        }
        get area(){
            return this.height*this.width;
        }
        toString(){
            return `${super.toString()} - width: ${this.width}, height: ${this.height}`
        }
    }

    return{Figure,Rectangle,Circle}
}
let classes=solve();
let Circle=classes.Circle;
let Figure=classes.Figure;
let Rectangle=classes.Rectangle;
//let f = new Figure();       //Error
let c = new Circle(5);
console.log(c.area);        //78.53981633974483
console.log(c.toString());  //Circle - radius: 5
let r = new Rectangle(3,4);
console.log(r.area);        //12
console.log(r.toString());  //Rectangle - width: 3, height: 4
