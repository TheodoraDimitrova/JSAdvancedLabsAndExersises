class Request {
    constructor(method, uri, version, message) {
        [this.method, this.uri, this.version, this.message, this.response, this.fulfilled]
            = [method, uri, version, message, undefined, false];
    }


}
let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);