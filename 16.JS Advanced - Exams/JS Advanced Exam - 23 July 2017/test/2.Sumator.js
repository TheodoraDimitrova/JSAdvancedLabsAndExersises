let Sumator = require('../2. Sumator Class');
let expect = require('chai').expect;
describe("Sumator Unit Tests", function () {
    let sumator;
    beforeEach(function () {//predi vseki test shte se izpulni tova i shte e prazen masiva v konstructura
        sumator = new Sumator();
    });
    describe("test if functions exists", function () {
        it("if array is defined", function () {
            expect(sumator.data !== undefined).to.equal(true);
        });
        it("if array is empty", function () {
            expect(sumator.data.length).to.be.equal(0);
        });
        it('add func exist', function () {
            expect(Sumator.prototype.hasOwnProperty("add")).to.be.equal(true);
        });
        it('sumNums func exist', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true);
        });
        it('removeByFilter func exist', function () {
            expect(Sumator.prototype.hasOwnProperty("removeByFilter")).to.be.equal(true);
        });
        it('toString func exist', function () {
            expect(Sumator.prototype.hasOwnProperty("toString")).to.be.equal(true);
        });
    });
    describe("add function tests", function () {
        it("add only numbers", function () {
            sumator.add(5);
            sumator.add(4);
            sumator.add(3);
            expect(sumator.toString()).to.be.equal('5, 4, 3');
        });
        it("add only strings", function () {
            sumator.add("String 1");
            sumator.add("String 1");
            sumator.add("String 1");
            expect(sumator.data.join(', ')).to.be.equal("String 1, String 1, String 1");
        });
        it("add only objects", function () {
            sumator.add({});
            sumator.add({});
            sumator.add({});
            expect(sumator.data.join(', ')).to.be.equal("[object Object], [object Object], [object Object]");
        });
        it("add mixed types", function () {
            sumator.add(5);
            sumator.add('4');
            sumator.add({});
            expect(sumator.sumNums()).to.be.equal(5);
        });
    });
    describe("sumNums function test", function () {
        it("sum with  numbers", function () {
            sumator.add(5);
            sumator.add(4);
            sumator.add(3);
            expect(sumator.sumNums()).to.be.equal(12);
        });
        it("sum with  strings", function () {
            sumator.add("5");
            sumator.add("4");
            sumator.add("3");
            expect(sumator.sumNums()).to.be.equal(0);
        });
        it("sum with objects", function () {
            sumator.add({});
            sumator.add({});
            sumator.add({});
            expect(sumator.sumNums()).to.be.equal(0);
        });
        it("sum with mixed types", function () {
            sumator.add("5");
            sumator.add({});
            sumator.add(3);
            expect(sumator.sumNums()).to.be.equal(3);
        });
    });
    describe('removeByFilter function test', function () {
        it("removes all odd numbers", function () {
            for (let i = 0; i <= 10; i++) {
                sumator.add(i);
            }
            sumator.removeByFilter((x) => x % 2 !== 0);
            expect(sumator.data.join(', ')).to.be.equal('0, 2, 4, 6, 8, 10');
        });
        it("we are not filtering ", function () {
            for (let i = 0; i <=5; i++) {
                sumator.add(i);
            }
            sumator.removeByFilter((x) => x > 5);
            expect(sumator.data.join(', ')).to.be.equal('0, 1, 2, 3, 4, 5');
        });
        it("throws  exception ", function () {
            for (let i = 0; i <=5; i++) {
                sumator.add(i);
            }
            expect(()=>sumator.removeByFilter(undefined)).to.throw();
        });
    });
    describe('toString function test', function () {
        it("items in array", function () {
            sumator.add(5);
            sumator.add(4);
            sumator.add(3);
            expect(sumator.toString()).to.be.equal("5, 4, 3");
        });
        it("empty array", function () {
            expect(sumator.toString()).to.be.equal("(empty)");
        });
    });

});