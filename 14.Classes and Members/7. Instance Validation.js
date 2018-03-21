class CheckingAccount {

    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.Email = email;
        this.Name = firstName;
        this.LastName = lastName;
        this._firstName = firstName;

    }




    set clientId(value) {
        if (/[\d]{6}/.test(value) && value.length===6) {
            this._clientId = value;
        } else {
            throw new TypeError("Client ID must be a 6-digit number");
        }

    }

    set Email(email) {
        if (email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            this.email = email;
        } else {
            throw new TypeError("Invalid e-mail");
        }
    }

    set Name(firstName) {
        if (firstName.length >= 3 && firstName.length <= 20) {
            if (firstName.match(/^[a-zA-Z]+$/)) {
                this.fName = firstName;
            } else {
                throw new TypeError("First name must contain only Latin characters")
            }

        } else {
            throw  new TypeError("First name must be between 3 and 20 characters long");
        }

    }

    set LastName(lastName) {
        if (lastName.length >= 3 && lastName.length <= 20) {
            if (lastName.match(/^[a-zA-Z]+$/)) {
                this.lName = lastName;
            } else {
                throw new TypeError("Last name must contain only Latin characters")
            }

        } else {
            throw  new TypeError("Last name must be between 3 and 20 characters long");
        }

    }
}
try {
     let ac = new CheckingAccount('423414', 'petkan@another.co.uk', 'Петкан', 'Draganov');
    //let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
    // let a = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
   // let accc = new CheckingAccount('4234145', 'petkan@another.co.uk', 'Petkan', 'Draganov');

} catch (e) {
    console.log(`${e.name}: ${e.message}`);
}
