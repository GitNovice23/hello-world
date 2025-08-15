// Anonymous function

let funcVar = function (x,y) { return (x*y)**(0.5);}

let v1 = prompt("Enter the first input: ");
let v2 = prompt("Enter the second input: ");

// calling the anonymous function through the varaible storing it.

// var val = funcVar(prompt("Enter the first number"), prompt("Enter the second number")); or
var val = funcVar(v1,v2);

// immediately invoked function:
// notice that it is thanks to (); at the end that the function gets invoked, so it like calling the IIFE and passing any argument is done in that last parenthesis
(function (x,y) {
    console.log("Result: ", x*y);
})(v1,v2);

(function (){
    console.log("i'm a self-calling function");
    console.log("the result : ", v1*v1 + v2*v2);
})();


console.log("square root of x and y :", val);

// note that IIFE can either  anonymous or arrow functions or even non-anonymous functions like below
(function sortstr(ary) {
    ary = ary.split('').reverse().join('');
    console.log(ary);
})("Madam");