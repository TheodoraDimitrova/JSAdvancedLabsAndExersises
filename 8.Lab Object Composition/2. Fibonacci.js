function getFibonator() {
    let first = 0, second = 1;
    return function() {
        let next = first + second;
        first = second ;
        second = next;
        return first;
    };

}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
