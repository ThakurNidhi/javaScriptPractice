// console.log("hello strings");
// let single = 'Single-quated';
// let double = "double-quoted";
// let backetics = `backticks`;

const { start } = require("prompt");

//-- backticks allows to emid expression
//  function sum(a, b){
//     return a + b ;
//  }
//  console.log(`1 + 2 = $sum(1 , 2).`);

//  let guestList = `Guests:
//  * john
//  * pate
//  * harry
//  `;
//  console.log(guestList);

//  console.log(`My\n`.length );

//  str = "   hello nidhi thakur   ";
//  console.log(str.length);// will include whitespaces also 
//  trim_result = str.trim();
//  console.log(" 111111 " + trim_result.length);

// Accessing characters
// let Access_str = `hello how r you`;
// console.log( Access_str[0] );
// console.log( Access_str.charAt(0) );
// console.log(Access_str [Access_str.length-1]);
// console.log(Access_str.at(-1) );

// iteration over cahrector by using for of 

// for (let char of "hello"){
//     console.log(char);
// }

/* // strings are immutable
let immutable_str = "Hiel";
immutable_str[0] = 'a';
console.log(immutable_str[3]);

// create new string
let str_update = "Thakur";
str_update = 'N' + str_update[1];
console.log(str_update); */

// searchng of substring

//str.indexOf
/* let str = 'Widget  b with iD';
console.log(str.indexOf('Widget') );
console.log(str.indexOf('with') );
console.log(str.indexOf("iD")); */

/* let str = 'widget with id k liye id me se abcd';
console.log( str.indexOf('id', 3))
 */


/* const Paragraph = "I think Ruth's dog is cuter than your dog! ";
const searchTerm = 'dog';
const indexOfFirst = Paragraph.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);

let indexOfSecond = `The index of scond "${searchTerm} " is ${Paragraph.indexOf(searchTerm, indexOfFirst+1)}`

console.log(indexOfSecond); */


// count occurence of letter in string --indexOf();

/* const str = "To be , or not to be , that is the question.";
let count = 0 ;
let position = str.indexOf("e");
while(position !== -1) {
    count++;
    position = str.indexOf("e", position + 1);
}
console.log(count); */

/* let str = 'Widget with apple ball id';
console.log(str.indexOf('Widget') );
console.log(str.indexOf('widget') );
console.log(str.indexOf('id', 2) ); */

// found all occurences 
/* let para = 'As sly as a fox, as strong as an ox apple mein lox';
let target = 'as';
let pos = 0;
while (true) {
    let foundPos = para.indexOf(target, pos); // as , 0
    if (foundPos == -1) break;
    console.log(`Found at ${foundPos}`);
    pos = foundPos + 1;
}

let para_one = 'As sly as a fox, as strong as an ox apple mein lox';
let target_one = 'ox';
let pos_one = -1;
while((pos_one = para_one.indexOf(target_one, pos_one + 1)) != -1) {
    console.table("Found at index position  " + pos_one);
} */

// indexOf() is not convienent with if(){};

/* let str = 'widget with id ';

if (str.indexOf('widget')) {
    console.log("we found it");
}

let str_test = " Widget with id";
if (str_test.indexOf('Widget') != -1) {
    console.log("we found it !!!")
} */

/* para = "Widget with id";
console.log(para.includes("Widget"));
console.log(para.includes("id", 3))

// startWith() and endWith();

console.log(para.startsWith("Wid") );
console.log("op of end with" + ' : ' + para.endsWith("get")); */


// Getting substrings
// 3 methods --> substring, substr , slice.
//str.slice(start [, end])

/* let Str_method_01 = "amalgmation";
console.log( " slice op for 5 char => " + Str_method_01.slice(0,5));
console.log( " slice op for 1 S-E char => " + Str_method_01.slice(0,1));
console.log("slice for one para ==> " + Str_method_01.slice(2))
console.log( " slice op  => " + Str_method_01.slice(3));
console.log("str.slice (-4,-1) = amalgmation " + Str_method_01.slice(-4, -1));

// substring();
let str_substring = "stringify";
console.log("substring of stringify(2,6) ==> " + str_substring.substring(2, 6)); 
// str.substr(start [, length])
// from start to given length
let test_subStr = "stringfy";
console.log("output foe substr() ===>" + test_subStr.substr(2,4))
 */

// -------- Compairing Strings
//console.log('a' > 'A');

/// Task 

/* Write a function ucFirst(str) that returns the string str with the uppercased first character,
 for instance:ucFirst("john") == "John"; */

/* function ucFirst(str){
    if(!str) return str;
    return str[0].toUpperCase() + str.slice(1)
}
console.log(ucFirst("nidhi") ); */
// check spam
/* Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’,
 otherwise false.
The function must be case-insensitive:
    checkSpam('buy ViAgRA now') == true
    checkSpam('free xxxxx') == true
    checkSpam("innocent rabbit") == false */
/* function checkSpam(str) {
    let lowerStr =  str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
//console.log(checkSpam("NIDHI THAKUR ") );
console.log(checkSpam('buy VIaGrA now '));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit") ); */

// // ----- Truncate text
/* Create a function truncate(str, maxlength) that checks the length of the str and, 
if it exceeds maxlength – replaces the end of str with the ellipsis character "…", 
to make its length equal to maxlength. */

/* function truncate(str, maxlength ) {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '...' : str;
}
console.log(truncate(" tell on this topic is:", 20)) ; */

// //------- Extract money
function extractCurrencyValue(str) {
    return +str.slice(1);
    // return +str.slice(1,3);
}
console.log(extractCurrencyValue('$150'));







 


