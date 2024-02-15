// let message = "hello";
// let phrae = message;
// /*  A variable assigned to an object stores not the object itself, but its " address in memory" - 
// in other words "a reference" to interpolate.
// /*  */
// let user = {
//     name : "john"
// };

// let admin = user; //copy the referance 

// admin.name = "patee"; // changed by the admin referance 
// console.log(user.name);

// // comparison by referance
// // two objects are equal only if they are the same object.
// let a = {};
// let b = a; // true

// console.log(a==b, a===b); // true

// let x = {};
// let y = {};

// console.log(x == y);//false

// // cloning and merging object ,, object.assign
// let user_two = {
//     name : "nidhi",
//     age : 30,
// };
// let clone_of_user_two = {}; // the empty new object
// //lets copy all user properities into it
// for(let key in user_two){
//     clone_of_user_two[key] = user_two[key];
// }

// clone_of_user_two.name = "guddu thakur";
// console.log("clone_of_user_two.name :-->" + clone_of_user_two.name);
// console.log("user tow ka name --> " + user_two.name);

// // Object.assign() method

// let user_three = {name: "veena"};

// let permissions_one = { canView: true};
// let permissions_two = { canEdit: true};

// // copies all properties into user_three
// Object.assign(user_three, permissions_one,permissions_two);

// console.log("user_three--->" + user_three.name);
// console.log(user_three.canEdit);
// console.log(user_three.canView);


// //Object.assign to perform a simple object cloning:

// let student = {
//     name: "sakshi",
//     age:15,
// }
// let clone_of_Object = Object.assign({},student);

// console.log(clone_of_Object.name);
// console.log(clone_of_Object.age);
//  // Nested cloning
//  let nested_user = {
//     name : " nishant",
//     sizes: {
//         height: 5.8,
//         weight:65,
//     }
//  };
// let clone_nested_user =Object.assign({}, nested_user);  
// //  let clone_nested_user = {}
// //  for(let key in nested_user) {
// //     clone_nested_user[key] = nested_user[key];
// //  }
// console.log("55555==>" + clone_nested_user.name);
//  console.log(nested_user.sizes === clone_nested_user.sizes);
//  nested_user.sizes.height = 6;
//  console.log( "nested_user.sizes.height--->" + nested_user.sizes.height);
//  console.log("clone of nested object size -->" +clone_nested_user.sizes.height)

// ----- Deep cloning or Structured cloning byy structuredClone()

/* let user = {
    name : 'alice',
    sizes: {
        height: 185,
        weight:50,
    }
};

let clone = structuredClone(user);
console.log(user.sizes === clone.sizes);
user.sizes.weight = 100;
console.log(clone.sizes.weight); */

// structuredClone also supports cirular referances, when obj properties refers to obj itself

/* let circular_user = {
    
    // circular referancs 
   circular_user.me = user,
} */

/* let clone_circular_user = structuredClone(circular_user);
console.log(clone_circular_user.me === clone_circular_user);
 */
/// structureClone() fails when the object has a function property

/* structuredClone({
    f: function() {}
}); */


/* Objects are assigned and copied by reference. In other words, 
a variable stores not the “object value”, but a “reference” (address in memory) for the value.
 So copying such a variable or passing it as a function argument copies that reference, 
 not the object itself.
All operations via copied references (like adding/removing properties) are performed on the same single object.
To make a “real copy” (a clone) we can use Object.assign for the so-called “shallow copy”
 (nested objects are copied by reference) or a “deep cloning” function structuredClone or use a custom 
 cloning implementation, such as _.cloneDeep(obj). */


 //----- Deep and shalow copy

 const originalObject = {
    name : 'john',
    age : 25,
    hobbies: ['rendering', 'swimming']
 };
 //( 1 ) Deep copy
 function deepCopy(obj) {
    if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
            return obj.map(item => deepCopy(item));
        } else {
            const copy = {};
            for (let key in obj){
                copy[key] = deepCopy(obj[key]);
            }
            return copy;
        }
    }
    return obj;
 }

 const deepCopyObject = deepCopy(originalObject);
 // modifying the deep copy

 deepCopyObject.name = 'jane';
 deepCopyObject.hobbies.push('painting');

 console.log(originalObject);
 console.log(deepCopyObject);

 //-- ShalloeCopy 
 const shallowCopy = Object.assign({}, originalObject);
 // Modiying the shallow copy
 shallowCopy.name = 'jane';
 shallowCopy.hobbies.push('painting');

 console.log(originalObject);
 console.log(shallowCopy);

