 console.log("Logical operator kalogic");
//-------- Task ---> Check the range between

// if (age >= 14 && age <= 99){
// }

// --> Task -- check if age is not between specific range 
//  if(!(age >= 14 && age <= 90)){
//  }

 //-------

// let UserName = prompt("Whoes there ???", '');
// let userPassword = prompt('Password???','');

// if (UserName =='nidhi' && userPassword =='master' ){
//     alert("Your Welcome");
// } else {
//     alert( "wrong password");
// }
let UserName = prompt("Whoes there ???", '');

if ( UserName == 'nidhi'){
    let userPassword = prompt('Password???','');   
    if(userPassword = 'master'){
        alert('welcome!!!');
    } else if (userPassword === '' || userPassword === null){
        alert('Cancled');
    } else {
        alert('wrong password');
    }

} else if (UserName === '' || UserName === null){
    alert("cancled")
} else {
    alert("I dont know u !!!");
}
