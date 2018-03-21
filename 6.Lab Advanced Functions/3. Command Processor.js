function commandProcessor(commands) {
    let commandProcessor = (function () {
        let text = "";
        return {
            append:function (t) {
                text += t;
            }  ,
            removeStart: function (count) {

               text= text.slice(count)
            } ,
            removeEnd: function (count) {

                text=text.slice(0, text.length-count)
            },
            print: function () {
                console.log(text)
            }
        }
    }());
    //console.log(typeof commandProcessor);->>object

    for(let cmd of commands){
        let[cmdName, arg] = cmd.split(' ');
        commandProcessor[cmdName](arg);
    }
}


commandProcessor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);
