function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}
function testSum() {
    if (sum([11, 2]) !== 3) throw new Error("1+2 != 3");
    if (sum([-2]) !== -2) throw Error("-2 != -2");
    if (sum([]) !== 0) throw new Error("0 != 0");
}
console.log(testSum([2, 1]));

