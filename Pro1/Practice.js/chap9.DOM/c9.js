// const   h2 = document.querySelector(".header")
// console.log(h2);

// const sp = document.querySelector("#span");
// console.log(sp)

// sp.innerHTML = "Hello, we are here for dominance"

// console.log(document.head.children)

// sp.innerText ="welcom back";
//  var content = document.body.children;
//  console.log(content);
//  content[1].innerHTML = "<p>this is a paragraph in a span </P>"

//  let p = document.querySelectorAll("ul");
//  console.log(p);

//  p[4].innerText = "I love JavascriptFOR LOOPS:0+ 0"

// var uname = document.getElementById('M');

// // newName = prompt('Please Enter your name : ');
// function setnewName (newUname){
//     uname.innerText = newUname; 
// }

// identity = document.getElementsByClassName('Gf');
// button = document.getElementsByClassName('btn');

// newname = prompt("please enter Her name : ")
// button.onclick = function () {
//     identity.innerText = newname;
// };

// var Btn1 = document.getElementById("btn1");
// var Btn2 = document.getElementById("btn2");


// Btn1.style.backgroundColor = "orange"
// Btn1.style.border= "none"
// Btn1.style.color = "white"
// Btn1.style.padding ="6px"
// Btn1.style.borderRadius = "10px"
// Btn1.style.fontSize = "20px"
// Btn1.style.fontFamily= "poppins, san-serif"
// Btn1.style.transform= "translate(50%,50%)"

// Btn2.style.backgroundColor = "VIOLET"
// Btn2.style.border= "none"
// Btn2.style.color = "white"
// Btn2.style.padding ="6px"
// Btn2.style.borderRadius = "10px"
// Btn2.style.fontSize = "20px"
// Btn2.style.fontFamily= "poppins, san-serif"

const div = document.getElementsByTagName("div");

console.log(div);
console.log(div[2].id);

;
for(let i =0; i < div.length; i++){
    j = i + 1;
    div[i].style.backgroundColor = div[i].id;
    div[i].innerText = "Box " + j;
    div[i].style.display = "flex";
    div[i].style.alignItems= "center";
    div[i].style.justifyContent = "center";
}

buttons = document.querySelector(".B")

var swap = true;
function applyChanges() {
    
    if (swap === true){
        buttons.classList.toggle("btn1");
        swap  = false;
    }else {
        buttons.classList.toggle("btn2");
        swap = true;
    }
   

};