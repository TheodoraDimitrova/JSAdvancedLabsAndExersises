class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }
}


Animal.prototype.age=12;
Animal.prototype.run = function(speed) {
    this.speed += speed;
   console.log( this.name + ' run whit speed ' + this.speed);
};

Animal.prototype.stop = function() {
    this.speed = 0;
   console.log(this.name + ' stop' );
};
let dog=new Animal("Sharo");
dog.run(20);
dog.stop();
console.log(dog.age);
console.log(Object.getOwnPropertyNames(dog));
console.log(Object.getPrototypeOf(dog));
class Rabbit extends Animal {
    constructor(name) {
        super(name);
    }
}

Rabbit.prototype.jump = function() {
    this.speed++;
    console.log(this.name + ' jump' );
};

let rabbit = new Rabbit('Peter');
rabbit.jump();
rabbit.run(10);
rabbit.stop();

console.log(rabbit.age);
console.log(rabbit instanceof Animal);