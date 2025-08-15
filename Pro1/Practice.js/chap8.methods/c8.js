// let s = "Shunwikong";

// console.log(s);
// console.log(s.concat(" hello").replace("Shunwikong", "Mark").toUpperCase()
// )

// Array methods

let ary = ['tomato','cheese','mango','orange',56, new Date(), true, '123'];
ary.forEach(function(fruit){
    console.log(fruit)
}); // iterate over the ary ans display its content

let filteredary = ary.filter(function(item,index){
    if(index%2 === 0){
        return item;
    }
})
console.log(filteredary) // display the elements in a new array base on the condition from the function

let result = ary.copyWithin(0,3,9);
console.log(result);


let arr = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index) {
return (typeof element === "string");
}
let filterArr = arr.filter(checkString);
console.log(filterArr);