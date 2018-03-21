let StringBuilder = require('../2. String Builder');
let expect = require('chai').expect;


describe("StringBuilder Tests", function () {
    let stringBuilder;
    beforeEach(function () {
        stringBuilder = new StringBuilder();
    });
    describe("check all functions in class", function () {
        it("It should have append ", function () {
            expect(StringBuilder.prototype.hasOwnProperty('append')).to.be.equal(true);
        });
        it("It should have prepend ", function () {
            expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.be.equal(true);
        });
        it("It should have insertAt ", function () {
            expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.be.equal(true);
        });
        it("It should have remove ", function () {
            expect(StringBuilder.prototype.hasOwnProperty('remove')).to.be.equal(true);
        });
        it("It should have toString ", function () {
            expect(StringBuilder.prototype.hasOwnProperty('toString')).to.be.equal(true);
        });

    });
    describe("check input", function () {
        it("instantiated with a string ", function () {
            stringBuilder = new StringBuilder("test");
            expect(stringBuilder.toString()).to.be.equal("test");
        });
        it("instantiated with noting", function () {
            expect(stringBuilder.toString()).to.be.equal("");
        });
        it("instantiated with number", function () {
            expect(() => {
                stringBuilder = new StringBuilder(4)
            }).to.throw();
        });
    });
    describe("check append", function () {
        it("append word", function () {
            stringBuilder.append("word");
            expect(stringBuilder.toString()).to.be.equal("word");
        });
        it("append word check stringArray", function () {
            stringBuilder.append("word");
            expect(stringBuilder._stringArray.length).to.be.equal(4);
        });
        it("append with number", function () {
            expect(() => {
                stringBuilder.append(4)
            }).to.throw();
        });
        it("append with array", function () {
            expect(() => {
                stringBuilder.append(["a", "s"])
            }).to.throw();
        })
    });
    describe("check prepend", function () {
        it("append word", function () {
            stringBuilder.prepend("word");
            expect(stringBuilder.toString()).to.be.equal("word");
        });
        it("append word check stringArray", function () {
            stringBuilder.prepend("word");
            expect(stringBuilder._stringArray.length).to.be.equal(4);
        });
        it("append with number", function () {
            expect(() => {
                stringBuilder.prepend(4)
            }).to.throw();
        });
        it("append with array", function () {
            expect(() => {
                stringBuilder.repend(["a", "s"])
            }).to.throw();
        })
    });
    describe("check insertAt", function () {
        it("insertAt char", function () {
            stringBuilder = new StringBuilder("word");
            stringBuilder.insertAt("a", 2);
            expect(stringBuilder._stringArray.length).to.be.equal(5);
            expect(stringBuilder.toString()).to.be.equal("woard");
        });
        it("insertAt word", function () {
            stringBuilder = new StringBuilder("word");
            stringBuilder.insertAt("word", 3);
            expect(stringBuilder._stringArray.length).to.be.equal(8);
            expect(stringBuilder.toString()).to.be.equal("worwordd");
        });
        it("insertAt number", function () {
            expect(()=>{stringBuilder.insertAt(3, 3)}).to.throw();
        });
        it("insertAt array", function () {
            expect(()=>{stringBuilder.insertAt([3,4], 3)}).to.throw();
        });



    });
    describe("check remove", function () {
        it("remove char", function () {
            stringBuilder = new StringBuilder("word");
            stringBuilder.remove(1, 2);
            expect(stringBuilder._stringArray.length).to.be.equal(2);
            expect(stringBuilder.toString()).to.be.equal("wd");
        });
        it("remove chars", function () {
            stringBuilder = new StringBuilder("word");
            stringBuilder.remove(0, 3);
            expect(stringBuilder._stringArray.length).to.be.equal(1);
            expect(stringBuilder.toString()).to.be.equal("d");
        });

    });
});