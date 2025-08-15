let employee = {
    Name: "Jame klack",
    Age : 32,
    YOB : 1995,
    YOE : 12,
    skin_color: 'black',
};

for (let prop in employee){
    console.log(prop  + " : " + employee[prop]);
}

for(let val of Object.values(employee)){
    console.log(val);
}

let ary = [2,4,1,0,5,7,3,2];

// for(let idx in ary){
//     console.log("Index: ", idx);
// } 

// Math multiplication time table

let tables = [];

for(let i = 0; i < 13; i++){
    tables.push([]);

    for( let j = 0; j < 13; j++){
        tables[i].push(i*j);
    }
}

console.table(tables);
