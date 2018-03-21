function solve(arr, sortMethod) {
    let asc = function (a, b) {
        return a - b;
    };
    let desc = function (a, b) {
        return b - a;
    };
    let obj={
        'asc':asc,
        'desc':desc
    };
    return  arr.sort(obj[sortMethod]);

}
console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));