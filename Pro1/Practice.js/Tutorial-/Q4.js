var num1 = Number.parseInt(prompt("Enter your first  integer"));
var num2 = Number.parseInt(prompt("ENter your second integer"));

if(isNaN.num1 || isNaN.num2){
    alert("Error, invalid input !, Refresh the page to start all over");
}else{
    if(num1 > num2){
        alert(`the larger number is ${num1}`);
    }else if(num1 < num2){
        alert(`the larger number is ${num2}`);
    }else{
        alert(`both are Equal`);
    }
}
