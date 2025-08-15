let btn1 = document.getElementById("btn1");
let ul = document.getElementsByTagName("ul");

window.onclick = function(e) {
    if(e.target.id === "btn1"){
        let text = prompt("enter your item");
        ul.innerHTML += `<li>${text}</li>`;
        console.log("Button one has been clicked");
    }else{
        console.log("Unkown element was clicked")
    }
}