let makeList = require("../2. Add Left  Add Right  Clear");
let expect = require('chai').expect;


describe("test for function makeList", function () {
    let list;
    beforeEach(function () {
        list = makeList();
    });
    describe("test addLeft", function () {
        it("addLeft strings", function () {
            list.addLeft("a");
            list.addLeft("b");
            list.addLeft("c");
            expect(list.toString()).to.be.equal("c, b, a");
        });
        it("addLeft numbers", function () {
            list.addLeft(1);
            list.addLeft(2);
            list.addLeft(3);
            expect(list.toString()).to.be.equal("3, 2, 1");
        });
        it("addLeft floats", function () {
            list.addLeft(1.1);
            list.addLeft(1.2);
            list.addLeft(1.3);
            expect(list.toString()).to.be.equal("1.3, 1.2, 1.1");
        });
    });
    describe("test addRight", function () {
        it("addRight strings", function () {
            list.addRight("a");
            list.addRight("b");
            list.addRight("c");
            expect(list.toString()).to.be.equal("a, b, c");
        });
        it("addRight numbers", function () {
            list.addRight(1);
            list.addRight(2);
            list.addRight(3);
            expect(list.toString()).to.be.equal("1, 2, 3");
        });
        it("addRight floats", function () {
            list.addRight(1.3);
            list.addRight(1.2);
            list.addRight(1.1);
            expect(list.toString()).to.be.equal("1.3, 1.2, 1.1");
        });


    });
    describe("test clear",function () {

       it("should clear data",function () {
           list.addLeft("a");
           list.addRight(1);
           list.clear();
           expect(list.toString()).to.be.equal("")
       }) ;
    });


});