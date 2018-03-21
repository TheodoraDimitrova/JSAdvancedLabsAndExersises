let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let lookupChar = require('../3. Char Lookup').lookupChar;


describe("lookupChar",function () {
    it("should be string first param",function () {
        expect(lookupChar(13,2)).to.equal(undefined,"First param must be string");
    });
    it("should be number second param",function () {
        expect(lookupChar("banana",'a')).to.equal(undefined,"Second param must be number");
    });
    it("should be integer second param",function () {
        expect(lookupChar("banana",3.14)).to.equal(undefined,"The function did not return the correct message");
    });
    it("0 index",function () {
        expect(lookupChar("banana",13)).to.equal("Incorrect index","The function did not return the correct value");
    });
    it("smallest index than length of string",function () {
        expect(lookupChar("banana",-1)).to.equal("Incorrect index","The function did not return the correct value");
    });
    it("correct index correct value",function () {
        expect(lookupChar("banana",0)).to.equal("b","The function did not return the correct value");
    });
    it("correct index correct value",function () {
        expect(lookupChar("banana",3)).to.equal("a","The function did not return the correct value");
    })
});