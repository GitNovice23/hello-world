
let names = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", 
"Mike","Laurence", "Mike", "Laurence", "Mike"];
// use to reduce dublicates in an array 
let uniqueNames = names.filter( (name,index) => {
    if(names.indexOf(name) === index){
        return name;
    }
})


console.log(uniqueNames);

let ranNums = [3,4,6,Math.ceil(Math.random()*10),Math.floor(Math.random()*5),Math.floor(Math.random()*20)];

let multi = ranNums.map(num => num*num);
let multi2 = ranNums.map(function (num){
    return num*2;
})


let letters = ["a","e","i","o","u"];
let str = letters.join(" ");

console.log(multi);
console.log(str);


letters[3] = "y";

console.log(letters);


// lets write a small code that will capitalize a sentence i.e changing the first letter of  each word of the sentence to uppercase and the othres lower case

let str2 = "thIs will be capiTalized for each word into This WiLL Be CaPiTaLiZeD For EACH Word:";

let newSring = str2.split(" ").map( value => value = value.toLowerCase().replace(value[0], value[0].toUpperCase())).join(" ");

console.log(newSring);

