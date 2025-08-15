const salut = ['b','o','n','j','o','u','r'];
const nums = [1,2,3,4,5,6,78,9,0];
console.log(Object.entries(salut));

console.log(nums.toString());

let message = salut.toString();
console.log(message);
let mgs = result = "";

for(let i = 0; i < message.length; i++){
    if(message[i] != ","){
        mgs += message[i];
    }else{
        mgs += "";
    }
}


// // /* short method 
// // for(let i = 0; i < message.split(",").length; i++){
// //     result += message.split(",")[i];
// // }
// // console.log(result);*/


const data = {
    body: "nealine",
    head: {
        face:{
            eye: "red",
            nose: "Big",
        },
        hairs : "Black",
    },
    sigma : {
        1: [2,10,0.5,null,undefined],
        2:{
            arr1:[10,13,"name","15"],
            arr2: [5,-1,"indigo","plasma"],
        },
        Data: {
            data: {
                dictionary :{
                    language:["french"]
                }
            }
        }
    }
}

var num = [];
var str = [];
var typ = [];



function getArrays(object){

    elm1 = Object.entries(object);
    console.log(elm1);
    
    for(let i = 0; i < elm1.length; i++){
       penetrate(elm1[i]);
    }

    // console.log(num);
    // console.log(typ);
    // console.log(str);

}

function penetrate(object2){
    console.log(object2);

    elm2 = Object.values(object2[2]);
    console.log(elm2);

       
}
//         if(elm2[0][0] == 0){
//             for(let j=0; j < object2.length; j++){
//                 if(elm2[j][2] == null || elm2[j][2] == undefined || elm2[j][2] == number || elm2[j][2] == Symbol || elm2[j][2] == BigInt || elm2[j][2] == Boolean || elm2[j][2] == String){
//                     typ += elm2[j][2];
//                 }else if(isNaN(elm2[j][2])){
//                     str += elm2[j][2];
//                 }else{
//                     num += elm2[j][2];
//                 }
//             }
//         }else{
//             for(let obj in elm2 ){
//                 penetrate(obj);
//             }
//         }   
//     }

// }
getArrays(data);