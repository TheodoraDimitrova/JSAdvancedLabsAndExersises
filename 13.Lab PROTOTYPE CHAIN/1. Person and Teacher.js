function personAndTeacher() {
    class Person{
        constructor(name,email){
            this.name=name;
            this.email=email;
        }
    }
    class Teacher extends Person{
        constructor(name, email,subject) {
            super(name, email);
            this.subject=subject;
        }

    }
    return {Person,Teacher};
}
module.exports =Person;
let classes=personAndTeacher();
let t = new classes.Teacher('mesho','mesho@pesho.com','Meshematika');

let person=new classes.Person("Medina","tedddyyyytyyGmail.com");
console.log(person);