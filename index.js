

const weekContainer = document.querySelector('.wrap-week');
const watch = document.querySelector('.wrap-watch');

const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
const d = new Date();
const currentWeekIndex = d.getDay()
console.log(currentWeekIndex, '-index week');

weekContainer.innerHTML = week.map( (w , index) =>{
    if (currentWeekIndex === index ){
        klass = "active";
    }else {
        klass = "";
    }
    return `<h4 class="${klass}">${w}</h4>`
}).join("");

setInterval(snowWatch, 1000)

function snowWatch() {
    const d = new Date();
    watch.innerHTML = "<h2>" + d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds() + "</h2>"
}

