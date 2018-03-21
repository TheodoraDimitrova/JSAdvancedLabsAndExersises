function sortedList() {
     obj =(function () {
        let arr = [];

        let add = function (element) {
            arr.push(element);
            arr.sort(function (a,b) {
                return a-b;
            });
            this.size++;
            return arr;
        };
        let remove = function (index) {
            if(index >=0 && index< arr.length) {
                arr.splice(index, 1);//prezapisva splice, ne vrushta nov masiv
                this.size--;
                return arr;
            }
        };
        let get = function (index) {
            if(index >= 0 && index< arr.length){
                return arr[index];
            }
        };

        let size = 0;
        return {add, remove, get, size}
    } ());



    return obj;
}
let a=sortedList();
console.log(a.add(1));
console.log(a.add(2));
console.log(a.add(3));
console.log(a.add(4));
console.log(a.add(5));
console.log(a.remove(1));
console.log(a.remove(2));
console.log(a.remove(1));
console.log(a.remove(1));
console.log(a.remove(0));