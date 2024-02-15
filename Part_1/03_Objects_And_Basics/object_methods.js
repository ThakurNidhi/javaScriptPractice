// // Method Example
// let user = {
//     name : "nidhi",
//     age: 30,
// }

// user.sayHi = function() {
//     console.log("hello");
// };

// user.sayHi();

//----- Pre declared function as a method like 
// let user = {
//     name : "alice",
//     age : 66,
//     address : "panvel",

// };
// function sayHi() {
//     console.log("hello");
// }
// user.sayHi = sayHi;
// user.sayHi;

// //-----Method shorthand

// user ={
//     Greet : function() {
//         console.log(" hello how are you?? ");
//     }
// }

// user = {
//     Greeting() {
//         console.log("hey there !!")
//     }
// };

// //------------- This keywords in method ----

// let emp ={
//     name : 'nidhi',
//     age : 30,
//     address : "kalamboli",
    
//     sayHello() {
//         console.log("Employee details  : " + this.address,this.name)
//     }

// };
// console.log(emp.address);
// emp.sayHello();

// //------- "this" keyword is not bound
// function Not_bound_SayHi() {
//     console.log(this.name);
// }

// // 2 different object to same function()

// let user = {
//     name : "john"
// }
// let admin = {
//     name : "Admin_name"
// }

// function sayHi() {
//     console.log(this.name);
// }
// user.f = sayHi;
// admin.f =sayHi;
// user.f();
// admin.f();

// admin['f']();

// function sayHi(){
//     console.log(this);
// }
// sayHi();

//--- Arrow functions have no "this"

/* let user = {
    firstName : "RAM",
    sayHi(){
        let arrow = () => console.log(this.firstName);
        arrow();
    }
}
user.sayHi();
*/


// calculator
/* let calculator = {
    read(){ 
        this.a = +blurt('a?', 0);
        this.b = +blurt('b?', 0 );

    },
    sum() {
        return this.a + this.b;

    },
    null(){
        return this.a * this.b;

    }
}
calculator.read();
console.log(calculator.sum() );
console.log( calculator.null() ); */

let ladder = {
    step : 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function() {
        console.log(this.step);
    }
}