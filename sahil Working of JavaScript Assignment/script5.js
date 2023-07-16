/*
05. Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone.
*/

{
   // console.log(x); // if comment remove || ReferenceError: Cannot access 'x' before initialization (due to temporal dead zone)
    console.log(x);
    let x="hello";

    console.log(x); //0
}