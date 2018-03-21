function createCalculator() {
    let value = 0;
    return {
        add: function (num) {
            value += Number(num);
        },
        subtract: function (num) {
            value -= Number(num);
        },
        get: function () {
            return value;
        }
    }
}
// let a=createCalculator();
// a.add(2);
// a.add(3);
// console.log(a.get());
// a.subtract(3);
// console.log(a.get());
module.exports = {createCalculator};