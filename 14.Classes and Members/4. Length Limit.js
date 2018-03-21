class Stringer {
    constructor(str, len) {
        this.innerString = str;//Test
        this.innerLength = len;//5
        this.str = str;
    }

    decrease(num) {
        if (num <= this.innerLength) {
            this.str = this.str.slice(0, -(this.innerLength - num));
            this.innerLength = this.innerLength - num;
        } else {
            this.str = "";
            this.innerLength = 0;
        }
    }

    increase(num) {
        this.str = this.innerString.substr(0, num);
        this.innerLength += num;

    }

    toString() {
        if (this.str !== this.innerString) {
            return this.str + ".".repeat(3);
        }
        return this.str;

    }
}

let s = new Stringer("Viktor", 6);
s.increase(3);
console.log(s.toString());
console.log(s.innerLength);