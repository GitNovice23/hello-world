var s = "Hello, my name is james, james borne";

let ary = s.split(' ', 4);
console.log(5);
console.log(ary);

console.log(ary);

let num = [1,2,3,4,5,6,7,8];
let new1 = num.map((nom, index) =>  nom*index);

console.log(new1);
// here is an example on how to use the foreach method, it uses an arrow function to verify  a specific condition for each element of the array

// function parity(n1, inx){
//    let result =  n%2 === 0 ? `${n1} is an even number at index ${inx}` : `${n} is odd, index: ${index}`;
//    console.log(result);

// }

// num.forEach(parity(n, index));
num.forEach( (n,index) => {
    n%2 === 0 ? console.log(n," is an even number and occured at index", index) : console.log(n," is odd, index: ",index);
}
);
let sum = 0;
let avg;

// i don't know what is wrong, will check it later
// let avgOdd = num.reduce((prev,crt, cind) => {
//     console.log(cind);
//     if(cind  === 1){
//         sum += prev;
//     }
//     if(crt%2 != 0){
//         sum += crt;
//         console.log("the number ", crt," is at index: ", cind);

//         if(cind === num.length -1){
//             avg = sum/num.length;
           
//         }
//     }
  
// }, init)

let sumOdd = num.reduce((prev,crn, crni) => {
    if(crn%2 != 0){
        sum += crn;
    }
} );

console.log("Average of odd: ", sumOdd);


function addnum(num1, num2){ return num1 + num2;}
function substract(num1, num2 ){ return num1 - num2;}
function multi(num1, n2) {return num1*n2;}
function division(n1, n2){  return n2 === 0 ? NaN :  n1/n2;  }
function modulus(n1,n2) {return n2 === 0 ? NaN: n1%n2 }

let rst;
let op = "/";
let a = 12;
let b = 2;
switch(op) {
    case "+":
        rst = addnum(a,b);
        break;
    case "-":
        rst = substract(a,b);
        break;
    case "*":
        rst = multi(a,b);
        break;
    case "/":
        rst = division(a,b);
        break;
    case "%":
        rst = modulus(a,b);
        break;
    default :
        console.log("INvalid operator, or input data");             
}

if(!Number.isNaN(rst)){
    console.log('result is : ', rst);
}else{
    console.log("math error");
}


















