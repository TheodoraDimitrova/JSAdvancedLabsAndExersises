function solve () {

    class Employee {

        constructor(name, age) {
            if (this.constructor === Employee) {
                throw new Error("Can't instantiate abstract class!");
            }
            this.name = name;
            this.age = Number(age);
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currentTask=this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`)
        }
        getSalary(){
            return this.salary;
        }
    }
    class Junior extends Employee {

        constructor(name, age) {
            super(name, age);
            this.tasks.push(` is working on a simple task.`)
        }
    }
    class Senior extends Employee {

        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');

        }
    }
    class Manager extends Employee {

        constructor(name, age) {
            super(name, age);
            this.dividend=0;
            this.tasks=[` scheduled a meeting.`,
                ` is preparing a quarterly report.`]
        }
        getSalary(){
            return this.salary+this.dividend;
        }
    }
    return{Employee,Junior,Senior,Manager}
}


let result =solve();

let guy1 = new result.Junior('dragan', 23);
let guy1parent = Object.getPrototypeOf(Object.getPrototypeOf(guy1));

let guy2 = new result.Senior('petkan', 24);
console.log(guy2);
guy2.work();

let guy2parent = Object.getPrototypeOf(Object.getPrototypeOf(guy2));
let guy3 = new result.Manager('bojan', 25);
let guy3parent = Object.getPrototypeOf(Object.getPrototypeOf(guy3));
