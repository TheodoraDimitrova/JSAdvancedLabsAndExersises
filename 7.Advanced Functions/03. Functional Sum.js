let add=(function functionalSum() {
    let sum = 0;

    function add(num) {
        sum += num;
        return add;
}

add.toString =function () {//overwrite the method to string--->функцията презаписва toString
    return sum;
};
return add;
}());
// console.log(add(1)(6)(-3)+"");
// console.log(add(1)(6)(-3)+"");
//console.log(add(1)(5)(-3)+"");
console.log(add(1)(5)+"");//тоест викаш квото викаш, и като му речеше стрингосай се то вика tostring и връща резултаа на изпълнението () => sum