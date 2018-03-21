function extensibleObject() {//function returning object
    let resObj = {// inside the object has one function extend
        extend: function extend(otherObj) {// this function take other object
            for (let prop in otherObj) {// pass to all of props he has(otherObject)
                if (otherObj.hasOwnProperty(prop)) {
                    let element = otherObj[prop];
                    if (typeof element === "function") {//if the prop is a function
                        resObj.__proto__[prop] = element;//we put this function to prototype of our object
                    } else {//or
                        resObj[prop] = element;//we put the property to our object (resObj)
                    }
                }
            }
        },
    };
    return resObj;

}
let myObj = extensibleObject();
let template = {
    method: function () {
        console.log("function");
    },
    prop: "Just Prop"
};
myObj.extend(template);
console.log(myObj);
console.log(myObj.__proto__);