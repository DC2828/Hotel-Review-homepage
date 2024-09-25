// let textEl = document.querySelector(".text");

// const textRect = textEl.getBoundingClientRect()

// textEl.addEventListener("resize",()=>{
// const textRect = textEl.getBoundingClientRect()
// })

// textEl.addEventListener("mousemove",(e)=>{
//     const mouseX = (e.clientX - textRect.left)/textEl.clientWidth-0.5
//     const mouseY = (e.clientY - textRect.top)/textEl.clientHeight-0.5
//     (Y)rotateX rotate upwards when negative degree
//     (X)rotateY rotate left when negative degree
//     textEl.style.transform = `perspective(${1300}px) rotateX(${mouseY * -10}deg) rotateY(${mouseX * 10}deg)`;

// })
// textEl.addEventListener("mouseleave",()=>{
//     textEl.style.transform = "none"
// })

let a1El = document.querySelector("#a1");
let a2El = document.querySelector("#a2");
let a3El = document.querySelector("#a3");
let a4El = document.querySelector("#a4");

let aEl =  document.querySelector(".2ndA");

function a1click(event){
    event.preventDefault();
    a1El.click();
}
function a2click(event){
    event.preventDefault();
    a2El.click();
}
function a3click(event){
    event.preventDefault();
    a3El.click();
}
function a4click(event){
    event.preventDefault();
    a4El.click();
}



