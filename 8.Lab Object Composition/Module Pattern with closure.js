let moduleObj = {
    count: 0, // public
    increase: function(num) { return this.count += num },//public
    decrease: function(num) { return this.count -= num },//public
    value: function() { return this.count }//public
};
moduleObj.count=10;
moduleObj.increase(4);
moduleObj.decrease(2);
console.log(moduleObj.value());
let myModule = (function() {
    let count = 0; // private
    return {//public
        increase: (num) => count += num,
        decrease: (num) => count -= num,
        value: () => count,
    };
})();
console.log(myModule.value()); // 0
console.log(myModule.increase(5)); // 5
console.log(myModule.decrease(2)); // 3
console.log(myModule.count); // undefined (not accessible)
console.log(myModule);
