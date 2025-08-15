let num = prompt("please Enter a number : ");
let img =0;
let rem;
while(num > 0){
    rem = num % 10;
    img = img*10 + rem;
    num = num/10;
};

console.log(`the image of the number entered is ${img}`);