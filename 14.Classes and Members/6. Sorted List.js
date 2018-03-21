class SortedList {
    constructor() {
        this.arr = [];
        this.size = 0;
    }

    add(element) {
        this.arr.push(element);
        this.arr.sort(function (a, b) {
            return a - b;
        });
        this.size++;
        return this.arr;
    };

    remove(index) {
        if (index >= 0 && index < this.arr.length) {
            this.arr.splice(index, 1);//prezapisva splice, ne vrushta nov masiv
            this.size--;
            return this.arr;
        }
    };

    get(index) {
        if (index >= 0 && index < this. arr.length) {
            return this.arr[index];
        }
    };


}
let myList = new SortedList();
console.log(myList.add(5));
console.log(myList.add(3));
console.log(myList.remove(0));




