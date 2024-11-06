const month = document.querySelector(".date h1");
const fullDate = document.querySelector(".date p");
const allDates = document.querySelector(".dates");


// gets an index of the current month
const monthIndex = new Date().getMonth();

const lastDate = new Date(new Date().getFullYear(), monthIndex+1,0).getDate();
const firstDate = new Date(new Date().getFullYear(), monthIndex,1).getDay();


const months = ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", 
                    "Thursay", "Friday", "Saturday"];

//sets inner text of month const to the month with the given index
month.innerText = months[monthIndex];

const newDate = new Date();

//prints full date: Day of week, day of month, month, year
fullDate.innerText = days[newDate.getDay()] + ", " 
                        + newDate.getDate() + " "
                        + months[monthIndex] + " "
                        + newDate.getFullYear();


let dates = "";

for(i = firstDate; i>0; i--) {
    //plots empty blocks on calendar
    dates += `<div class="empty"></div>`;
}

//displays each month number
for(i=1; i<=lastDate; i++) {
    if (i === new Date().getDate()) {
        //highlights current day
        dates += `<div class="today">${i}</div>`;
    } else {
        //plots the day of the month on calendar
        dates += `<div>${i}</div>`;
    }

}

allDates.innerHTML = dates;