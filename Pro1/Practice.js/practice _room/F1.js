console.log("hi, how are you doing");

// alert("No report yet, no order placed yet");

// prompt("hi there, do you wish to be notified for noew messages");

/* console.log(math.floor(math.random()*10));

var name = prompt("Enter your name");
var message = ' ${name} I\'ll be greatful if you learn you learn Javascript';
console.log(message); */

/*let terribleThingToDo = undefined;
let lastName;
console.log("Same undefined:", lastName === terribleThingToDo);


let betterOption = null;
console.log("Same null:", lastName === betterOption);
console.log("Same null:", lastName == betterOption);

let ary1 = new Array(20);
ary1 = ["hello", 1,2,3,4,5,6,"World"];
ary1.push("neon");
console.log(ary1);
console.log(ary1.length);
console.log(ary1[ary1.length-2]);
;
console.log(ary1);
ary1.splice(2,4,"start");

console.log(ary1);
/* 
console.log(ary1.shift());
console.log(ary1.shift("ELM"));

 */

/* let grade = "E";
switch(grade) {
    case "F" :
    case "D" :
        console.log("sorry, but you failed");
        break;
    case "C" :
    case "B" :
        console.log("you have passed");
        break;
    case "A" :
    case "A+" :
        console.log("congratulations, you passed with honor");
        break;
    default :
    console.log("no grade is matching");
}

 function calulator(a, b, op) { // recieves 2 numbers as integers, an operator and perform the right operation base on the operator entered by user
    switch(op){
        case "+" :
            console.log("Result :",a + b);
            break;
        case "-" :
            console.log("Result :",a -b);
            break;
        case "/" :
            console.log("Result :",a/b);
            break;
        case "*" :
            console.log("Result :",a -b);
            break;
        case "%" :
            console.log("Result :",a%b);
            break;
        default : // this is to handle the case where the user enters and invalide operator, or an operattor not supported by this program
        console.log(" the default operation for invalide operator is addition, so Result :",a + b);

    }

}

let p = parseInt(prompt("Enter the first integer of the operation : "));
let q = parseInt(prompt("Enter the second integer of the operation : "));
let opt = prompt("Enter the operator for this arithmetic operation : ");

while(isNaN(p) || isNaN(q)) { // verifies if value of p & q is numeric
    if(isNaN(p)){
        p = parseInt(prompt(" please the  first value you entered is not a number, Enter the first integer of the operation : "));
    }
    if(isNaN(q)){
        q = parseInt(prompt(" Please the second value  you entered is not a number, Enter the second integer of the operation : "));
        
        
    }
}
calulator(p, q, opt); */

// var main = () => {
//     let Uname = prompt("Enteryour name : ");
//     message = `HI, YOUR Name is : ${Uname} am happy to meet you `;
//     console.log(message);
// }
// main();

// function getRecursive(nr) {
//     console.log(nr);
    
//     getRecursive(--nr);

//     }
//     getRecursive(3);


/* this is the rock paper scissors game proposed by the book, the code realyy look impressive but i love the one i did*/
const myArr = ["Rock", "Paper", "Scissors"];
let computer = Math.floor(Math.random() * 3);
let player = Math.floor(Math.random() * 3);
let message = "player " + myArr[player] + " vs computer " +
myArr[computer] + " ";
if (player === computer) {
    message += "it's a tie";
} else if (player > computer) {
    if (computer == 0 && player == 2) {
    message += "Computer Wins";
} else {
    message += "Player Wins";
}
} else {
    if (computer == 2 && player == 0) {
    message += "Player Wins";
} else {
    message += "Computer Wins";
}
}
console.log(message);
