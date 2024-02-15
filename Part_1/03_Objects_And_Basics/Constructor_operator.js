// // function User(name) {
// //     this.name = name ;
// //     this.isAdmin = false;
// // }

// // let user = new User("jack");
// // console.log(user.name);
// // console.log(user.isAdmin);


// // function User(name) {
// //     // this = {} (implicitly)
// //     // add properties to this
// //     this.name = name ,
// //     this.isAdmin = false
// // }
// // let user = {
// //     name :"jack",
// //     isAdmin:false
// // }
// // //- to implement resuable creation code 
// // let user = function(){
// //     this.name = "alice",
// //     this.isAdmin = false
// // }


// //--- Returns from Constructor
// // function BigUser() {
// //     this.name = "john";
// //     return { name: "GodZilla"};
// // }
// // console.log( new BigUser().name );

// // function SmallUser() {
// //     this.name = "john";
// //     return;

// // } console.log(new SmallUser().name);

// // Methods in construtor

// function User(name) {
//     this.name = name;

//     this.sayHi = function(){
//         console.log("my name is : " + this.name)
//     };
// }
// let john = new User("John");
// john.sayHi();

// // Task
// //Is it possible to create functions A and B so that new A() == new B()?
 
// // function A() {}
// // function B() {}

// // let a = new A();
// // let b = new B();
// // console.log(a === b);
// // solution

// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// console.log( new A() == new B() );
// // create a calculator
// /* Create a constructor function Calculator that creates objects with 3 methods:

//     read() prompts for two values and saves them as object properties with names a and b respectively.
//     sum() returns the sum of these properties.
//     mul() returns the multiplication product of these properties. */

// function calculator() {
//     this.read = function(){
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0)
//     };
//     this.sum = function() {
//         return this.a * this.b;
//     };

// }
// let calculator = new calculator();
// calculator.read();


var student1 = {
    firstname : "nidhi",
    lastname : "thakur",
    age : 30,
    class : 5,
}
console.log("simple obj op ==>" + student1)
var student2 = {
    firstname : "gudduuu",
    lastname : "thakur",
    age : 29,
    class : 15,
}
console.log("simple obj 2 op ==>" + student2)
//object constructor function
function Student(first,last, age, cls) {
    this.firstName = first;
    this.lastName = last;
    this.age = age ;
    this.class = this.class;
}
var student_one = new Student("nidhi", " kumar",31,5);

student_one.nation = "indiaan";

console.log("cunstroctor fun ka op ===>>>> " + student_one);

student_one.name = function(){

    return this.firstName + " " + this.lastName;
}


