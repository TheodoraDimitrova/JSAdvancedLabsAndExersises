function processCommands(arr) {
    let processor = (function () {//obj
        let list = [];//private

        function add(string) {
            list.push(string);
        }

        function remove(string) {
            list = list.filter(el => el !== string);
        }

        function print() {
            console.log(list.toString());
        }

        return {add, remove, print};//public
    })();

    for (let command of arr) {
        let tokens=command.split(' ');
        let com=tokens[0];
        let val=tokens[1];
        processor[com](val);
    }
}
processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);

