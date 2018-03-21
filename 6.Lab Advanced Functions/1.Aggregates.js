// function reducer(arr) {
//     console.log("Sum = "+arr.reduce((a, b) => a + b));
//     console.log("Min = "+arr.reduce((a,b)=>Math.max(a,b)));
//     console.log("Max = "+arr.reduce((a,b)=>Math.min(a,b)));
//     console.log("Product = "+arr.reduce((a, b) => a*b));
//     console.log("Join = "+arr.reduce((a, b) => a+""+b));
// }
// reducer([5, -3, 20, 7, 0.5]);
function aggregates(arr) {
    function reduce(arr, func) {
        let result = arr[0];

        for(let element of arr.slice(1)){
            result = func(result, element);
        }

        return result;
    }

    console.log(`Sum = ${reduce(arr, (a, b) => a + b)}`);
    console.log(`Min = ${reduce(arr, (a, b) => Math.min(a, b))}`);
    console.log(`Max = ${reduce(arr, (a, b) => Math.max(a, b))}`);
    console.log(`Product = ${reduce(arr, (a, b) => a * b)}`);
    console.log(`Join = ${reduce(arr, (a, b) => "" + a + b)}`);
}