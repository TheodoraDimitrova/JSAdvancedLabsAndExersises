let fatherCar = { brand: 'BMW',
    model: 'X5', color: 'blue',
    toString: function() { return `[brand: ${this.brand}, model: ${this.model}, color: ${this.color}]`; }
};
//console.log('' + fatherCar);
let myCar = Object.create(fatherCar);
myCar.model = 'M4';
myCar.color = 'red';
myCar.doors=5;
myCar.toString=function () {
    return`[brand: ${this.brand}, model: ${this.model}, color: ${this.color}, doors: ${this.doors}]`;
};
//console.log('' + myCar);
let workCar = Object.create(fatherCar);
workCar.brand='Honda';
workCar.model="Civic";
workCar.type = 'electric';
workCar.doors=4;
workCar.toString = function() {
    return `[brand: ${this.brand}, model: ${this.model}, color: ${this.color}, type: ${this.type}, doors: ${this.doors}]`;
};
//console.log(" "+workCar);
console.log(workCar.__proto__=== myCar.__proto__);
console.log(Object.getPrototypeOf(myCar));
console.log(fatherCar.doors);
console.log(myCar.doors);
console.log(workCar.doors);
