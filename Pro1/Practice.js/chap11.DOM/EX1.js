const msg = document.getElementById('messages');
const btn =  document.getElementById('btn');
// lets see various events with the mouse Event handlers 
// on double click event handler  (ondblclick)                                                                                                                          
btn.ondblclick = function() {
    msg.innerHTML = "Welcome to my javascript Course";
    btn.innerHTML = "Ondblclick event triggered"
    btn.classList.add("contenteditable");

}
// on mouse down event handler
btn.onmousedown = function() {
    btn.style.cursor = " pointers"
    btn.style.border = "none"
    btn.style.padding = "3em"
    btn.style.fontSize = "22px"
    btn.style.backgroundColor ="red"
    btn.innerHTML = "Onmousedown event triggered"
}

btn.addEventListener("mouseup", () => {
    btn.style.cursor = " pointers"
    btn.style.border = "none"
    btn.style.padding = "3em"
    btn.style.fontSize = "25px"
    btn.style.backgroundColor ="yellow" 
    btn.innerHTML = "Onmouseup event triggered"
});

btn.addEventListener("mouseenter", function () {
    btn.style.cursor = " pointers"
    btn.style.border = "none"
    btn.style.padding = "5em"
    btn.style.color = "white"
    btn.style.fontSize = "25px"
    btn.style.backgroundColor ="lightblue" 
    btn.innerHTML = "OnmouseEnter event triggered"
})

btn.addEventListener("mouseleave", function () {
    btn.style.cursor = " pointers"
    btn.style.border = "1px solid black"
    btn.style.padding = "5em"
    btn.style.color = "white"
    btn.style.fontSize = "25px"
    btn.style.backgroundColor ="brown" 
    btn.innerHTML = "OnmouseLeave event triggered"
})
