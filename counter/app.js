//variables representing buttons 
//uses button classes to select
const prevNum = document.querySelector(".decrease");
const nextNum = document.querySelector(".increase");
const resetNum = document.querySelector(".reset");
const buttons = document.querySelector(".button");

let countNum = document.querySelector(".count");
let counter = 0;

//adds event listener to buttons
//assigns functions: increase, decrease, reset
prevNum.addEventListener("click", decrease);
nextNum.addEventListener("click", increase);
resetNum.addEventListener("click", reset);

function increase() {
    counter++;
    
    //sets inner html of var countNum to counter value
    countNum.innerHTML = counter;
    if (counter > 0) {
        countNum.style.color = "green";
    } else if (counter == 0) {
        countNum.style.color = "black";
    }
}

function decrease() {
    counter--;
    countNum.innerHTML = counter;
    if(counter < 0) {
        countNum.style.color = "red";
    } else if (counter == 0 ) {
        countNum.style.color = "black";
    }
}

function reset() {
    counter=0;
    countNum.innerHTML = counter;
    countNum.style.color = "black";
}