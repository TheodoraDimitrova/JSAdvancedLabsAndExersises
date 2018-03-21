let expect = require('chai').expect;

let mathEnforcer = require('../4. Math Enforcer').mathEnforcer;


describe("mathEnforcer()", function () {

    describe("addFiveTests", function () {
        it('should return correct result for positive integer parameter',function () {
                expect(mathEnforcer.addFive(5)).equal(10);
            });
        it('should return correct result for negative integer parameter',function () {
            expect(mathEnforcer.addFive(-5)).equal(0);
        });
        it('should return undefined for non-number parameter',function () {
            expect(mathEnforcer.addFive("5")).to.be.undefined;
        });
        it('should return correct result for floating point parameter',function () {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14,0.01);
        });

    });
    describe("subtractTenTests", function () {
        it('should be work positive number',function () {
            expect(mathEnforcer.subtractTen(14)).equal(4);
        });
        it('should return correct result for negative integer parameter',function () {
            expect(mathEnforcer.subtractTen(-5)).equal(-15);
        });
        it('should not work with strings',function () {
            expect(mathEnforcer.subtractTen("10")).to.be.undefined;
        });
        it('should be work with floats numbers',function () {
            expect(mathEnforcer.subtractTen(15.14)).to.be.closeTo(5.14,0.01);
        });



    });
    describe("sumTests", function () {
        it('should be work positive number',function () {
            expect(mathEnforcer.sum("1",2)).to.be.undefined;
        });
        it('should be work positive number',function () {
            expect(mathEnforcer.sum(1,"2")).to.be.undefined;
        });
        it('should be work positive number',function () {
            expect(mathEnforcer.sum(1,2)).to.be.equal(3);
        });
        it('should be work positive number',function () {
            expect(mathEnforcer.sum(-1,-2)).to.be.equal(-3);
        });
        it('should be work positive number',function () {
            expect(mathEnforcer.sum(1.3,2.5)).to.be.equal(3.8);
        });

    });
});