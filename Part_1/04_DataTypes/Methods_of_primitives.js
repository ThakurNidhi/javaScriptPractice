"use strict"
console.log("A primitives as an Object");
let john = {
    name : "john",
    sayHi : function() {
        console.log("helllooooo jssssss ");
    }

}
let str = "hellowwee";
console.log(str.toUpperCase());

console.log("to add string properties");

let str_one = "hello";
str_one.test = 5 ;
console.log(str_one.test);
console.log(str_one)