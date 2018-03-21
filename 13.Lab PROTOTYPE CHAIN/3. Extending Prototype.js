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
function extendsClass(classToExtends) {
    classToExtends.prototype.species="Human";
    classToExtends.prototype.toSpeciesString=function () {
        return `I am a  ${this.species}. ${this.toString()}`
    };

}
extendsClass(Person);
let p=new Person("Ivan","email");
console.log(p);
console.log(p.species);
console.log(p.toSpeciesString);