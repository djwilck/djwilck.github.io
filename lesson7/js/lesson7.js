function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

let daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let d = new Date();
let day = d.getDate()
let dayname = daynames[d.getDay()]
let month = months[d.getMonth()]
let year = d.getFullYear()
let hour = addZero(d.getHours());
let minute = addZero(d.getMinutes());
let second = addZero(d.getSeconds());

let today = dayname + ", " + day + " " + month + " " + year;

let n = new Date();

document.getElementById("updated").textContent = today;

document.getElementById("copyright").textContent = n.getFullYear();

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}