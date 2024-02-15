
console.log("All About conditional branching");
// let year = prompt('In which year was ECMAScript-2015 specification published?', '');

//if(year == 2015) alert("'you r rght '");

// if (year == 2015){
//     alert("thats correct ");
//     alert(" you are so smart ");//more than one statement
// }

// if(0){
//     // 0 is false, 1 is true
// }
//------optional else block
// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
// if(year == 2015) {
//     alert("'You guessed it right!'");
// } else {
//     alert("'How can you be so wrong?'")
// }


// -------------Several conditions: “else if”

// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
// if (year < 2015){
//     alert('Too early...');
// } else if (year > 2015) {
//     alert(' Too late');
// } else {
//     alert( 'Exactly!');
// }

//----- conditional operator
    // let accessAllowed;
    // let age = prompt('How old are you ???', '');
    // if (age > 18){
    //     accessAllowed = true;
    // } else {
    //     accessAllowed = false;
    // }
    // alert(accessAllowed);

// let result = condition ? value1 : value2;

    
//let accessAllowed = (age > 18) ? true : false;
//let accessAllowed = age > 18 ? true : false;


//------- Multiple ?? can return value depending on more then one condition.

// let age = prompt('age?', 18);
// let message = (age < 5 ) ? 'Hi , baby':
// (age < 18) ? "hello teens 111" :
// (age < 100) ? "Gerrtings " :
// 'what an unusual age !';
// alert(message);

//--------in if else

// let Age = prompt( 'Age?', 18);
// if (Age < 5 ){
//     message= "Hello!!! kidoo";
// } else if (Age< 18 ){
//     message = "helloo teeens 222";
// } else if (Age < 100){
//     message = "greetings!!!";
// }

// Non traditional use of "?"
// let company = prompt('which company created js ?','');
// (company == 'Netscape')?
// alert('right!!!!') : alert("wrong....");

// let company = prompt('which company created javascript??', '');
// if(company == 'Netscape') {
//     alert('Right');
// } else {
//     alert("wrong")
// }

// ---- task 2 => problem statement ---
// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

// let languageName = prompt('What is the “official” name of JavaScript?', '');
// if (languageName == 'ECMAScript') {
//     alert("right guess");
// } else {
//     alert('You don’t know? itsss =>ECMAScript!')
// }

/* ----------- task 3 -----------------------
Using if..else, write the code which gets a number via prompt and then shows in alert:
1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.
 */

// let Value = prompt('Enter the number ?', '');
// if( Value > 0 ) {
//     alert( 1 );
// } else if( Value < 0) {
//     alert( -1 );
// } else if(Value == 0 ){
//     alert( 0 );
// } 

let result = ( a + b < 4) ? 'below' : 'over';

let message = (login == 'Employee') ? 'hello' :
 (login == 'Director') ? 'Greetings' :
 (login == '') ? ' No Login':
 '';
 
