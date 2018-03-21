let createList = require('../2. AddDelete in List');
let expect = require('chai').expect;

describe("test createList", function () {
    let list;
    beforeEach(function () {
        list = createList();
    });

    describe("check add method", function () {
        it("adding any type", function () {
            list.add(1);
            list.add(1.2);
            list.add('two');
            list.add(['a']);
            list.add(true);
            list.add({name: "teddy"});
            expect(list.toString()).to.be.equal('1, 1.2, two, a, true, [object Object]');
        });

    });
    describe("check shiftLeft", function () {
        it("shifts all elements one position left ", function () {
            list.add("a");
            list.add(1);
            list.add(1.2);
            list.shiftLeft();
            expect(list.toString()).to.be.equal("1, 1.2, a")
        });
        it("shifts empty ", function () {
            list.shiftLeft();
            expect(list.toString()).to.be.equal("")
        });
        it("shifts two elements one position left ", function () {
            list.add("a");
            list.add("b");
            list.shiftLeft();
            expect(list.toString()).to.be.equal("b, a")
        });
    });
    describe("check shiftRight", function () {
        it("shifts all elements one position right ", function () {
            list.add(2);
            list.add(1);
            list.add(3);
            list.shiftRight();
            expect(list.toString()).to.be.equal("3, 2, 1");
        });
        it("shifts all elements one position right ", function () {
            list.add("a");
            list.add("b");
            list.shiftRight();
            expect(list.toString()).to.be.equal("b, a");
        });
        it("shifts all elements one position right ", function () {
            list.shiftRight();
            expect(list.toString()).to.be.equal("");
        });
    });
    describe("check	swap(index1, index2) ", function () {
        it("first index float  ", function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.add(['four']);
            expect(list.swap(3.3, 3)).to.be.equal(false);
        });
        it("second index float ", function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.add(['four']);
            expect(list.swap(0,3.3)).to.be.equal(false);
        });

        it("correct indexes", function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.swap(0, 2);
            expect(list.toString()).to.be.equal("3, two, 1");
        });

        it("correct indexes return true ", function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.add(['four']);
            expect(list.swap(0, 2)).to.be.equal(true);
        });

        it("equal indexes first===second return false ", function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.add(['four']);
            expect(list.swap(2, 2)).to.be.equal(false);
        });
        it("equal indexes first===second  ", function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.add(['four']);
            list.swap(2, 2);
            expect(list.toString()).to.be.equal("1, two, 3, four");
        });


        it("index1 < 0  ", function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.add(['four']);
            expect(list.swap(-1, 2)).to.be.equal(false);
        });
        it("index2 < 0   ", function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.add(['four']);
            expect(list.swap(0, -4)).to.be.equal(false);
        });


        it("index1 > length list  ", function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.add(['four']);
            expect(list.swap(6, 2)).to.be.equal(false);
        });
        it("index2 > length list  ", function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.add(['four']);
            expect(list.swap(0, 5)).to.be.equal(false);
        });

        it("index2 === length list  ", function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.add(['four']);
            expect(list.swap(1, 4)).to.be.equal(false);
        });
        it("index2 === 0  ", function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.add(['four']);
            expect(list.swap(1, 0)).to.be.equal(true);
        });
        it("index2 === 0  ", function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.add(['four']);
            list.swap(1, 0);
            expect(list.toString()).to.be.equal('two, 1, 3, four');
        });
        it("index1 === length list  ", function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.add(['four']);
            expect(list.swap(4, 2)).to.be.equal(false);
        });

    });

        it("check toString", function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.add(['four']);
            expect(list.toString()).to.be.equal("1, two, 3, four")
        });


});