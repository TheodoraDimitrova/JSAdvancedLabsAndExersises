let expect = require('chai').expect;
 let should = require('chai').should;
 let assert = require('chai').assert;
let isOddOrEven = require('../2. Even Or Odd').isOddOrEven;

describe('isOddOrEven',function () {
    describe("wrong input",function () {
        it('with a number parameter should return undefined',function () {
            expect(isOddOrEven(13)).to.equal(undefined,"Function did not return the correct result!");
        });
        it('with a object parameter should return undefined',function () {
           //isOddOrEven({name: "pesho"}).should.equal(undefined,"Function did not return the correct result!");  tuk ne e dobre????????
            expect(isOddOrEven({name:'Pesho'})).to.equal(undefined,"Function did not return the correct result!");
        });
    });

    it('case even',function () {
        assert.equal(isOddOrEven("Anna"),"even","Function did not return the correct result!");
    });
    it('case odd',function () {
        assert.equal(isOddOrEven("Qna"),"odd","Function did not return the correct result!");
    });
    describe("multiple different strings",function () {
        it('odd string ',function () {
            expect(isOddOrEven("Cat")).to.equal("odd");
        });
        it('even string ',function () {
            expect(isOddOrEven("alabala")).to.equal("odd");
        });
        it('more than one word ',function () {
            expect(isOddOrEven("is it even")).to.equal("even");
        });
    });

});