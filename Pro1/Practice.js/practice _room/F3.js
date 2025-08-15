let ary = ["james", "anita", "Wilson", "aron", "Gloria", "Beldwin", "emmanuela", "solomon", "Gen", "Brandon"];

var n = 0;
let vowel = ["a","e","i","o", "u"];
let trash = new Array(5);

console.log("hello");
let result = ary.filter( (name) => {
    

    for(let i = 0; i < name.length; i++){

        for(let j = 0; j < vowel.length; j++){

            if(name.charAt(i) === vowel[j]){
                n++;
                trash[n -1] = vowel.splice(j, 1);
            }
        }
    }
    console.log(trash);
    count = n;
    n = 0;
    console.log( name, count);

    if(count >= 3){
        vowel = vowel.concat(trash);
        trash.splice(0,5);
        return name;
    }

    vowel = vowel.concat(trash);
    trash.splice(0,5);

    
})


console.log(result);


// class Calculator {
//     Operator
//     op1
//     op2

//     constructor(str, n1, n2){
//         this.Operator = str;
//         this.op1 = n1;
//         this.op2 = n2;
//     }

//     operation(){

//         switch(this.Operator){
//             case "+" :
//                 console.log(this.op1 + this.op2);
//                 break;
//             case "-" :
//                 console.log(this.op1 - this.op2);
//                 break;
//             case "*" :
//                 console.log(this.op1*this.op2);
//                 break;
//             case "/" :
//                 if(this.op2 == 0){
//                     console.log("division by zero is not posssible");
//                 }else{
//                     console.log(this.op1/this.op2);
//                 }
//                 break;
//             case "%" :
//                 if(this.op2 == 0){
//                     console.log("modulos of a mumber by zero is not possible");
//                 }else{
//                     console.log(this.op1%this.op2);
//                 }
//                 break;
//             default : 
//             console.log("Invalid input");
//         }
//     }

//     addnum(){ return this.op1 + this.op2;};

//     subnum(){ return this.op1 + this.op2; }

//     multinum(){ return this.op1*this.op2;}

//     divinum(){

//         if(this.op2 == 0){
//             return null;
//         }else{
//             return this.op1 / this.op2;
//         }
//     }

//     modnum(){
//         if(this.op2 == 0){
//             return null;
//         }else{
//             return this.op1 % this.op2;
//         }   
//     }

//     dotask(){
//         let r;

//         switch(this.Operator){
//             case "+":
//                 r = this.addnum();
//                 break;
//             case "-":
//                 r = this.subnum();
//                 break;
//             case "*":
//                 r = this.multinum();
//                 break;

//             case "/":
//                 r = this.divinum();
//                 if(r == null){
//                     r = "the division of a number by zero doesn't exits";
//                     break;
//                 }
//             case "%" :
//                 r = this.modnum();
//                 if(r == null){
//                     r = "Math error, a number modulose zero doesn't exits";
//                     break;
//                 }
//             default:
//                 r = "Invalid Operator";
//                 break;
//         }
//         return r;
//     }

// }
// let opr =  new Calculator("%", 1, 0);

// opr.operation();

// var opr2 = new Calculator("%", 10, 0);

// var result = opr2.dotask();
// console.log(result);