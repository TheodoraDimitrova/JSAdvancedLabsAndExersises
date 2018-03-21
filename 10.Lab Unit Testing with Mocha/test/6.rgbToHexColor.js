let expect = require('chai').expect;
let rgbToHexColor = require("../6. RGB to Hex").rgbToHexColor;


describe("rgbToHexColor(red,green,blue", function () {
    describe("Normal Cases",function () {
        it('should return (255, 158, 170)  #FF9EAA', function () {
            expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
        });
        it('should work with upper limit', function () {
            expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF')
        });
        it('should return #000000 for (0, 0, 0)', function () {
            expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
        });
        it("should return #0C0D0E for (12, 13, 14)", function () {
            expect(rgbToHexColor(12, 13, 14)).to.be.equal("#0C0D0E");
        });
    });
    describe('Spacial Cases',function () {
        it('should no be negative values', function () {
            expect(rgbToHexColor(-1, 0, 0)).to.be.equal(undefined);
        });
        it('should no be negative values', function () {
            expect(rgbToHexColor(0, -1, 0)).to.be.equal(undefined);
        });
        it('should no be negative valuess', function () {
            expect(rgbToHexColor(0, 0, -1)).to.be.equal(undefined);
        });
        it('should not be greater than 255', function () {
            expect(rgbToHexColor(256, 0, 0)).to.be.equal(undefined);
        });
        it('should not be greater than 255', function () {
            expect(rgbToHexColor(0, 0, 256)).to.be.equal(undefined);
        });
        it('should not be greater than 255', function () {
            expect(rgbToHexColor(0, 256, 0)).to.be.equal(undefined);
        });
        it('should not be fractions',function () {
            expect(rgbToHexColor(3.14,0,0)).to.be.equal(undefined);
        });
        it('should not be fractions',function () {
            expect(rgbToHexColor(0,3.14,0)).to.be.equal(undefined);
        });
        it('should not be fractions',function () {
            expect(rgbToHexColor(0,0,3.14)).to.be.equal(undefined);
        });
        //("5", [3], {8:9})
        it('invalid input',function () {
            expect(rgbToHexColor("5", [3], {8:9})).to.be.equal(undefined);
        });
        it("should return undefined for empty input", function () {
            expect(rgbToHexColor()).to.be.equal(undefined);
        });
    });



});