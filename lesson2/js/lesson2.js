function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

let daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let d = new Date(document.lastModified);
let day = d.getDate()
let month = d.getMonth() + 1
let year = d.getFullYear()
let hour = addZero(d.getHours());
let minute = addZero(d.getMinutes());
let second = addZero(d.getSeconds());

let lastUpdated = month + "/" + day + "/" + year + " " + hour + ":" + minute + ":" + second;


document.getElementById("l2updated").textContent = "Last Updated: " + lastUpdated;

document.getElementById("l2copyright").textContent = d.getFullYear()