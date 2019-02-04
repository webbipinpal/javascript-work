/*class Myfirstes6 {
    bipin(){
        alert('My First class in ES6');
    }
}
let test = "test in console";
alert(test);
*/

/*let num = 10 
function test() { 
   let num = 100 
   console.log("value of num in test() "+num) 
} 
console.log("value of num outside test() "+num) 
test()*/

/*"use strict" 
function test() { 
   var num = 100 
   console.log("value of num in test() "+ num );{ 
      console.log("Inner Block begins") 
      let num = 200 
      console.log("value of num : "+num);  
   } 
} 
test();
*/

/*
let no = 10;
let no = 20;
console.log(no);
*/

/*-------------const ------------- */
//const a = 12;
//a = 10;

//console.log(a);

/* ------- Example: Variable Hoisting ------- */
var main = function(){
    for(var x = 0; x < 10; x++){
        console.log(x);
    }
    console.log("x can be accessed outside the block scope x value is :" + x);
    console.log('x is hoisted to the function scope');
}
main();