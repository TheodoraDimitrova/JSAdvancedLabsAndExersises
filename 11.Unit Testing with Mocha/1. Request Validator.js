function validateRequest(obj) {
    let methods = ["GET", "POST", "DELETE", "CONNECT"];
    let versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];



    let validate = {
        method: function checkMethod(method) {
            if (!obj.hasOwnProperty('method')) {
                return false;
            }
            if (!methods.includes(method)) {
                return false
            }
            return true
        },
        version: function checkVersion(version) {
            if (!obj.hasOwnProperty('version')) {
                return false;
            }
            if (!versions.includes(version)) {
                return false;
            }
            return true;
        },
        uri: function ValidURL(str) {
            if (!obj.hasOwnProperty('uri')) {
                return false;
            }
            let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
            if (pattern.test(str)) {
                return true;
            }
            return false
        },
        message: function checkMassage(msg) {
            if (!obj.hasOwnProperty('message')) {
                return false;
            }
            if (!(msg.includes("<") || msg.includes(">") || msg.includes("\\") || msg.includes("&") || msg.includes("\"") || msg.includes("\'"))) {
                return true;
            }

        }
    };
    try {
        for (let property in validate) {

            if (!validate[property](obj[property])) {
                property = property.charAt(0).toUpperCase() + property.slice(1);
                throw  Error(`Invalid request header: Invalid ${property}`)
            }

        }

    } catch (e) {
        console.log(e.message)
    }

return obj;

}


validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
validateRequest({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});
validateRequest({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
});

