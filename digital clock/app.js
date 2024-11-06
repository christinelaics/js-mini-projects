
//assigns given html id to variables
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {

    
    //variables for date objects
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    //default time is AM
    let ampm = "AM";

    if (h > 12) {

        //offsets military time format
        h = h-12;

        //sets time to PM 
        ampm = "PM";
    }

    //adds a zero before each number if less than 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    //sets inner text of html item to given variable
    hour.innerText = h;
    minute.innerText = m;
    seconds.innerText = s;
    ampmEl.innerText = ampm;

    setInterval(() => {
        updateClock();
      }, 1000);

}

updateClock();