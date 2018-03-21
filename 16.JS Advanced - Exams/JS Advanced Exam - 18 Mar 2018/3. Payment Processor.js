class PaymentProcessor {

    constructor(object) {//optional object parameter
        this.register = [];
        this.balance = 0;
        if (object) {
            if (object.types) {
                this.types = object.types;

            } else {
                this.types = ["service", "product", "other"];
            }
            if (object.precision) {
                this.precision = object.precision;

            } else {
                this.precision = 2;
            }
        }
        else {
            this.types = ["service", "product", "other"];
            this.precision = 2;
        }


    }

    registerPayment(id, name, type, value) {

        if (id !== '' && name !== '' && typeof value === "number" && this.types.includes(type)) {
            let obj = {
                id: id,
                name: name,
                value: value,
                type: type
            };
            if (!this.register.find(x => x.id === obj.id)) {
                this.register.push(obj);
                this.balance += obj.value;
            } else {
                throw new Error("invalid type");
            }
        } else {
            throw new Error("invalid type");
        }
    }

    deletePayment(id) {
        //removes the requested payment; throw an error if it’s not found
        if (!this.register.find(x => x.id === id)) {
            throw new Error("ID not found");
        } else {

            for (let i = 0; i < this.register.length; i++) {

                if (this.register[i].id === id) {
                    let index = this.register.indexOf(this.register[i]);
                    if (index !== -1) {
                        this.balance -= this.register[i].value;
                        this.register.splice(index, 1);

                    }
                    break;
                }
            }

        }

    }

    get(id) {
        // returns a string, containing information about the requested payment
        // (see examples for formatting details); throw an error if it’s not found
        if (!this.register.find(x => x.id === id)) {
            throw new Error("ID not found");
        } else {
            let x = this.register.find(x => x.id === id);
            return `Details about payment ID: ${x.id}\n- Name: ${x.name}\n- Type: ${x.type}\n- Value: ${x.value.toFixed(2)}`;
        }

    }

    setOptions(options) {
        if (options.types && options.precision) {
            this.types = options.types;
            this.precision = options.precision;
        }
        else {
            if (options.types) {
                this.types = options.types;

            }
            if (options.precision) {
                this.precision = options.precision;

            }
        }


    }

    toString() {
        //return a string, containing a summary about all recorded payments (see examples for formatting details)
        if (this.balance < 0) {
            return `Summary:\n- Payments: ${this.register.length}\n- Balance: ${this.balance.toFixed(Number(this.precision))}`;
        }
        return `Summary:\n- Payments: ${this.register.length}\n- Balance: ${this.balance.toFixed(Number(this.precision))}`;
    }
}


// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
// console.log(generalPayments.toString());

//Should throw an error (invalid type)
 //generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

// generalPayments.setOptions({types: ['product', 'material']});
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
// console.log(generalPayments.get('E028'));
// generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
//generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
//generalPayments.get('E027');
//
generalPayments.deletePayment('E028');
console.log(generalPayments.toString());
//
// // Initialize processor with custom types
// const servicePyaments = new PaymentProcessor({types: ['service']});
// servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
// servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
// console.log(servicePyaments.toString());
//
// // Initialize processor with custom precision
// const transactionLog = new PaymentProcessor({precision: 5});
// transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
// console.log(transactionLog.toString());






