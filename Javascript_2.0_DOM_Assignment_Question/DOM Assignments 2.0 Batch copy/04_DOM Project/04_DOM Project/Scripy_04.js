// Changing the background of all div with classname "clash-card__unit-stats"

//It select the class ".clash-card__unit-stats--barbarian" and give it to a background color
let card1=document.querySelector(".clash-card__unit-stats--barbarian");
card1.style.background="#bd7c2f";

let card2=document.querySelector(".clash-card__unit-stats--archer");
card2.style.background="#d04976"

let card3=document.querySelector(".clash-card__unit-stats--giant");
card3.style.background="#de7b09";

let card4=document.querySelector(".clash-card__unit-stats--goblin");
card4.style.background="#71a32a";

let card5=document.querySelector(".clash-card__unit-stats--wizard");
card5.style.background="#309eff";

// Now we have to change the color of text also

function textcolor(){
    let stat =document.querySelectorAll(".stat,.stat-value");
    stat.forEach(element => {
        element.style.color="white"
    });
}
textcolor()