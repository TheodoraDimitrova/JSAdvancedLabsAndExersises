function processCommands(commands) {


    let inheritor = (function () {
        let objects = new Map();//skladirvame


        function create(name,param,parent) {
            if(param){
                inherit(name,parent);
            }else{
                objects.set(name, {});
            }


        }

        function inherit(name, parant) {
            objects.set(name, Object.create(objects.get(parant)));

        }

        function set(objName, propName, value) {
            objects.get(objName)[propName] = value;//'c1' => { color: 'red' }

        }

        function print(name) {
            let current = objects.get(name);
            let arr = [];
            for (let prop in current) {
                arr.push(`${prop}:${current[prop]}`)
            }
            console.log(arr.join(", "));
        }
        return{create,inherit,set,print};
    })();
    for (let arguments of commands) {
        let [command, name, param, value] = arguments.split(" ");
        inheritor[command]( name, param, value);
    }


}
processCommands(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);

