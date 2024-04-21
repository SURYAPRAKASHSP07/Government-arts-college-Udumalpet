const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector("ul");
const close = document.querySelector(".close");

hamburger.addEventListener("click", ()=>{
    navBar.classList.add('slide');
    console.log("cliked...");
});

close.addEventListener("click", ()=>{
    navBar.classList.toggle("slide");
    console.log("cliked...");
});


const clock = document.querySelector(".clock");


const currentDate = new Date();
const liveTime = currentDate.getDate()+"/"+currentDate.getMonth()+1,"/"+currentDate.getFullYear()+", ";

const daysnum = currentDate.getDay();
console.log(daysnum);
let days;

switch(daysnum){
case 0:
    days = "Sunday";
    break;
case 1:
    days = "Monday";
    break;
case 2:
    days = "Tuesday";
    break;
case 3:
    days = "Wednesday";
    break;
case 4:
    days = "Thursday";
    break;
case 5:
    days = "Friday";
    break;
case 6:
    days = "Saturday";
    break;
}

clock.textContent = liveTime;
const day = document.querySelector(".day");
day.innerHTML = days;


