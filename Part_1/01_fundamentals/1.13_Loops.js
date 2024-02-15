console.log("LOOPS--> While and For loop");
// loops are way to repeat same code multple time.
// let i = 0 ;
// while(i < 3) {
//     alert(i);
//     i++;
// }
// let i2 = 3;
// while(i) alert(i--);

// do {

// } while (i) alert(i--);
//  do {
//     // loop body
//  } while(condition);

//  let i = 0 ;
//  do {
//     alert(i);
//     i++;
//  } while(i < 3);


// -------- for loop

// for (begin ; condition ; step){ };
// for (let i =0 ; i< 3; i ++){
//     alert(i);
// }

// let sum = 0;
// while(true){
//     let value = +prompt("enter a number to add ", "");
//     if(!value) break;
//     sum = sum + value;
// }
// alert('Sum : ' + sum);

// for (let i = 0; i <= 10; i++){
//     if(i % 2 == 0 ) continue;
//     alert(i);
// }
// for(value1 =  0 ; value1 <= 10; value1++){
//     if(value1 % 2 ){
//         alert(value1);
//     }
// }

// for (let i = 0; i < 3; i++){
//     for (let j = 0; j <3; j++){
//         let input = prompt(`Value at co-ords (${i}, ${j})`, '');
//     }
//     // console.table(input)
//    console.log(input)
// }
// console.table(input)
// console.log(input)
// alert("DONE!!!!");

// --- print even number
// for( eve_numeber = 2 ; eve_numeber <=10; eve_numeber++){
//     if(eve_numeber % 2 == 0){
//         console.table(eve_numeber)
//     }
// }

/* for (let i = 0; i < 3; i++){
    //alert("number " + i );
    alert(` number ${i}`);
} */

/* let value = 0 ;
while(value < 3){
   alert("value is : "  +value);
    //alert(`value is : ${value}`);
    value++;
} */

//----task -----
/* Write a loop which prompts for a number greater than 100. 
If the visitor enters another number – ask them to input again.
 */
/* let num ;

do {
      num = prompt("Enter a number greter then 100?", 0);
    } while(num <= 100 && num);

    let numbr;
    do {
        numbr = prompt("enter number larger then 100 ??" , 0);
     } while(num <= 100 && numbr);
 */

//-- even number-- 2 4 6 8 10...
// let even_Number;
// for(even_Number = 2 ; even_Number <=10; even_Number++){
//     if(even_Number % 2 == 0){
//         alert("even number : " + even_Number);
//     }
// }

//-- prime number
let values = 10;
nextPrime:
for(let i = 2; i <= values; i++){
    for(let j = 2; j<i; j++){
        if(i % j == 0 ) continue nextPrime;
    } alert(i)
}