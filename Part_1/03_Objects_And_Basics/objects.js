
//// ------- complete all object today 18-01-2024

/* let user = new Object(); // object constructor
let user = {}; //" object literal" */

// -- Literals properties
 /* let user = {
    name: "john",
    age : 30,
    "likes bird" : true,
 }
 console.log(user.name);
 console.log(user.age);
 console.log(user["likes bird"]);

 user["likes dog"] = true;

 user.isAdmin = true;
 delete user.age;
 delete user["likes bird"];


 let key = "likes birds";
user[key] = true; */

/* let user = {
    name :"nidhi",
    age : 30,
};
let key = prompt("whta do you want to know about the user?", "name");

console.log(user[key]);
 */
// let fruit = prompt("which fruit to buy?", "apple");
// let bag = {
//     [fruit]: 5,
// };

// alert(bag.apple)
/* let fruit = " aplle";
let bag = {
    [fruit +'Computer']: 5    
};
console.log(fruit.bag);
console.log(bag); */

/* function makeUser(name , age){
    return {
        name : name ,
        age : age,
    }
}
let user = makeUser("nidhi thakur", 30)
alert(user.name);
 
// by using property value shorthand
function make_User(name , age){
    return {
        name ,
        age,
    };
} */
/* 
let user ={
    name ,
    age : 30,
}; */

// property name limitations

/* let obj = {
    for : 1,
    let: 2,
    return:3,
}
console.log(obj.for + obj.let + obj.return); */

/* let user = {};
console.log(user.noSuchProperty === undefined);
console.log(user.noSuchProperty)
 */
// "key" in Object
/* let student = {
    name : "sita",
    age : 15,
}
console.log("age" in student)
console.log("hjsjgdfhjgsdhj" in student)
console.log(name in student);
*/

/* let user = { age : 30};
let key = "age";
console.log( key in user);
console.log("age" in user); */

/* let obj = {
    //test : undefined,
    test : null,
}
console.log(obj.test);
console.log("test" in obj);
 */

// --- The "for... in" Loop
// for (key in Object){
//     // excutes the body for each key among object properties
// }

//-- output all properties of object

/* let user = {
    name : "nidhi",
    age: 30,
    address : " kalamboli",
    isAdmin : true,
    "likes gardening" : true,
};
//console.log(user);
for(let prop in user){
    console.log(prop);
    console.table(user[prop]);
} */



// console.log(String(Math.trunc(Number("49"))) );
// console.log(String(Math.trunc(Number("+46"))) );
// console.log(String(Math.trunc(Number("1.2"))) );


/* let user = {
    name : "John",
    surname : "smith"
}
user.age = 25;

// non interger properties are listed in creation order

 for(let prop in user) {
    console.log(prop);
   // console.log(prop[user]);
    console.log(user[prop]);
 } */

 // -- make the code non-interger
 /* let codes = { 
    "+56" : " kalamboli",
    "+33" : "panvel",
    "88" : "nerul",
    "+1": "USA",
 }

 for(let code in codes) {
    console.log( +code)
 } */

