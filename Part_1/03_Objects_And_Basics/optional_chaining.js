/* let user = {};
alert(user.address ? user.address.street : undefined);
In many practical cases we’d prefer to get undefined instead of an error here (meaning “no street”). 
let html = document.querySelector('.elem').innerHTML; */

// Optional chaining
let user = {};
console.log(user?.adress?.stree);
// with document.querySelector
let html = document.querySelector('elem')?.innerHTML;

// reading the option works even if user obj dosent exiest;

// short-circuiting

let user01 = null;
let x = 0 ;
user01?.sayHi(x++);
alert(x);


// OC other varients --- ?.(),,, ?.[]
 // ?.()
let userAdmin = {
    admin() {
        alert(" I am admin ");
    }
}

let userGuest = {};

console.log(userAdmin.admin?.());
userGuest.admin?.();
// ?.();
let key = "firstName";
let user1 = {
    firstName : "john",
};
let user2 = null;
console.log( user1?.[key]);
console.log(user2?.[key]);




