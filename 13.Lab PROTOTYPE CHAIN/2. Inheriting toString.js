function personAndTeacherStudent() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }
    class Teacher extends Person {

        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let parentString = super.toString().slice(0,-1);
            return parentString + `, subject: ${this.subject})`;
        }

    }

    class Student extends Person {

        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let parentStr = super.toString().slice(0,-1);
            return parentStr + `, course: ${this.course})`
        }
    }
    return {Person, Teacher, Student};
}
let classes = personAndTeacherStudent();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let p = new Person("Pesho",'Pesho@pesh.com');
console.log(p.toString());


let t = new Teacher("Gosho",'gosh@gosh.com',"Graphics");
console.log(t.toString());

let s = new Student("Stamat",'stamcho@stamishteto.bg',666);
console.log(s.toString());