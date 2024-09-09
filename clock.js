let numberHours = document.querySelector('.number-hours');
let barSections = document.querySelector('.bar-sections');

let numberElements = [];
let barElements = [];

for(let i = 1; i<= 12;i++){
    numberElements.push(
        `<span style ="--index:${i};" ><p>${i}</p></span>`
    );
}
numberHours.insertAdjacentHTML("afterbegin",numberElements.join(""));

for(let i=1;i<=60;i++){
    barElements.push(
        `<span style="--index:${i}"><p></p></span>`
    );
}
barSections.insertAdjacentHTML("afterbegin",barElements.join(""));

let handHours = document.querySelector('.hand.hours');
let handMinutes = document.querySelector('.hand.minutes');
let handSeconds = document.querySelector('.hand.seconds');

function getCurrentTime(){
    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes/ 2}deg)`;
    handMinutes.style.transform = `rotate(${currentMinutes*6}deg)`;

    handSeconds.style.transform = `rotate(${currentSeconds*6}deg)`;


}

getCurrentTime();

setInterval(getCurrentTime,1000);
