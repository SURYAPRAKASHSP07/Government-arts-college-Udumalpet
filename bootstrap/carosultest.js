const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector("ul");

hamburger.addEventListener("click", ()=>{
    navBar.classList.toggle('slide');
    console.log("cliked...");
});