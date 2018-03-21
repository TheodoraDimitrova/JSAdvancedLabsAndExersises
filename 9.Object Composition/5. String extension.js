(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if(this.valueOf().startsWith(str)){
            return this.valueOf();
        }
        return str+this.valueOf();

    };
    String.prototype.ensureEnd = function (str) {
        if(this.valueOf().endsWith(str)){
            return this.valueOf()+"";
        }
        return this.valueOf()+str;

    };
    String.prototype.isEmpty = function () {
        if(this.valueOf()===""){
            return true;
        }
        return false;


    };
    String.prototype.truncate= function (n) {
        if(n <= 3){
            return ".".repeat(n);
        }
        if(this.toString().length <= n){
            return this.toString();
        } else {
            let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
            if(lastIndex !== -1){
                return this.toString().substr(0, lastIndex) + "...";
            } else {
                return this.toString().substr(0, n-3) + "...";
            }
        }
    };
    String.format = function (string,...params) {
        for(let i=0; i<params.length; i++){
            let index = string.indexOf("{"+i+"}");
            while (index !== -1) {
                string = string.replace("{"+i+"}", params[i]);
                index = string.indexOf("{"+i+"}");
            }
        }
        return string;

    };

}());



let str = 'my string';
console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = String.format('The {0} {1} fox',
    'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}',
    'dog'));
