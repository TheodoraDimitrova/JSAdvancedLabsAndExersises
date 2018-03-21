function result(input) {
    let typeCounts = {};

        for(let arg of arguments){
            console.log(`${typeof(arg)}: ${arg}`);
            if(! typeCounts[typeof(arg)]){
                typeCounts[typeof(arg)] = 1;
            } else {
                typeCounts[typeof(arg)]++;
            }
        }
   // console.log(typeCounts);
   // console.log(Object.keys(typeCounts));-->[ 'string', 'number', 'function' ]
    Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a]).forEach(k => console.log(`${k} = ${typeCounts[k]}`))



}

result('cat','d','b', 42, function () { console.log('Hello world!'); });