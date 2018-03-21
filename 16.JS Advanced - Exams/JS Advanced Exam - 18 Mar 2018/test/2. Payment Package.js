let PaymentPackage = require('../2. Payment Package');
let expect = require('chai').expect;


describe("test PaymentPackage", function () {
    let paymentPackage;
    beforeEach(function () {
        paymentPackage = new PaymentPackage('HR Services', 1500);
    });
    describe("check  name", function () {
        it("empty string", function () {
            expect(() => {paymentPackage = new PaymentPackage("", 3)}).to.throw();
        });
        it("not empty string", function () {
            expect(paymentPackage.name).to.be.equal("HR Services");
        });
        it("to don't be a number", function () {
            expect(() => {
                paymentPackage = new PaymentPackage(3, 3)
            }).to.throw();
        });

    });
    describe("check value", function () {
        it("not a  string", function () {
            expect(() => {
                paymentPackage = new PaymentPackage("HR Services", "3")
            }).to.throw();
        });
        it("not a number type", function () {
            expect(() => {
                paymentPackage = new PaymentPackage("HR Services", [3])
            }).to.throw();
        });
        it("correct", function () {
            expect(paymentPackage.value).to.be.equal(1500);
        });



    });
    describe("check Vat", function () {
        it("correct", function () {
            expect(paymentPackage.VAT).to.be.equal(20);
        });
        it("correct", function () {
            expect(paymentPackage.VAT = 120).to.be.equal(120);
        });
        it("not number", function () {
            expect(() => {
                paymentPackage.VAT = "120"
            }).to.throw();
        });
        it("negative", function () {
            expect(() => {
                paymentPackage.VAT = -10
            }).to.throw();
        })


    });
    describe("check active", function () {
        it("def value check", function () {
            expect(paymentPackage.active).to.be.equal(true)
        });
        it("should be boolen", function () {
            expect(() => {
                paymentPackage.active = "true"
            }).to.throw();
        });
        it("should be boolen", function () {
            expect(() => {
                paymentPackage.active = null;
            }).to.throw();
        });
        it("set  active check", function () {
            expect(paymentPackage.active = false).to.be.equal(false)
        });
    });
    describe("check to string", function () {
        it("working to String", function () {
            paymentPackage.active=false;
            expect(paymentPackage.toString()).to.be.equal("Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800");
        });
        it("working to String", function () {
            paymentPackage.active=true;
            expect(paymentPackage.toString()).to.be.equal("Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800");
        });

    })
});
