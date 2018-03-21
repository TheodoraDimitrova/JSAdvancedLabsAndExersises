let expect = require('chai').expect;
let createCalculator = require("../7. Add Subtract").createCalculator;
// create; get  0
// create; add(2); add(3); get  5
// create; subtract(3); subtract(2); get  -5
// create; add(5.3); subtract(1.1); get  4.2
// create; add(10); subtract('7'); add('-2'); subtract(-1); get  2
// create; add('hello'); get  NaN
// create; subtract('hello'); get  NaN


describe("createCalculator()", function () {
    let calc;
    beforeEach(function () {//---------->before all tests make again and again calc
        calc = createCalculator();
    });
    it('isCreateCalculatorObject', function () {
        expect(typeof calc).to.be.equal('object');
    });
    it('should have 0 value when is created', function () {
        let value = calc.get();
        expect(value).to.be.equal(0);
    });
    it("should return 5 after {add 3; add 2}", function () {
        calc.add(3);
        calc.add(2);
        let value = calc.get();
        expect(value).to.be.equal(5);
    });
    it("should return subtract(3); subtract(2); get  -5", function () {
        calc.subtract(3);
        calc.subtract(2);
        let value = calc.get();
        expect(value).to.be.equal(-5);
    });
    it("should return add(5.3); subtract(1.1); get  4.2 ", function () {
        calc.add(5.3);
        calc.subtract(1.1);
        let value = calc.get();
        expect(value).to.be.closeTo(4.2,0.001);  //AssertionError: expected 4.199999999999999 to equal 4.2
                                        // Expected :4.2
                                        //Actual   :4.199999999999999
    });
    it("should return 2 after add(10); subtract('7'); add('-2'); subtract(-1) ", function () {
        calc.add(10);
        calc.subtract('7');
        calc.add('-2');
        calc.subtract(-1);
        let value = calc.get();
        expect(value).to.be.equal(2);
    });
    it("should not add NaNs ", function () {
        calc.add('hello');
        let value = calc.get();
        expect(value).to.be.NaN;//----------->to.be.NaN
    });
    it("should not subtract NaNs ", function () {
        calc.subtract('hello');
        let value = calc.get();
        expect(value).to.be.NaN;//----------->to.be.NaN
    });

});
