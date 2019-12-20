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

function toggleMenu(part) {
    /*if(part=='menu'){
        console.log("menu");
    } else if(part=='details0') {
        console.log("details0")
    }*/
    switch (part) {
        case 'menu':
            document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
            //console.log(part);
            break;

        case 'details0':
            //console.log(part);
            document.getElementsByClassName("details0")[0].classList.toggle("hide");
            break;

        case 'ordinance0':
            //console.log(part);
            document.getElementsByClassName("ordinance0")[0].classList.toggle("hide");
            break;

        case 'closure0':
            //console.log(part);
            document.getElementsByClassName("closure0")[0].classList.toggle("hide");
            break;

        case 'details1':
            //console.log(part);
            document.getElementsByClassName("details1")[0].classList.toggle("hide");
            break;

        case 'ordinance1':
            //console.log(part);
            document.getElementsByClassName("ordinance1")[0].classList.toggle("hide");
            break;

        case 'closure1':
            //console.log(part);
            document.getElementsByClassName("closure1")[0].classList.toggle("hide");
            break;

        case 'details2':
            //console.log(part);
            document.getElementsByClassName("details2")[0].classList.toggle("hide");
            break;

        case 'ordinance2':
            //console.log(part);
            document.getElementsByClassName("ordinance2")[0].classList.toggle("hide");
            break;
        case 'closure2':
            //console.log(part);
            document.getElementsByClassName("closure2")[0].classList.toggle("hide");
            break;

        case 'details3':
            //console.log(part);
            document.getElementsByClassName("details3")[0].classList.toggle("hide");
            break;

        case 'ordinance3':
            //console.log(part);
            document.getElementsByClassName("ordinance3")[0].classList.toggle("hide");
            break;
        case 'closure3':
            //console.log(part);
            document.getElementsByClassName("closure3")[0].classList.toggle("hide");
            break;
        case 'close':
            for(z=0; z<document.getElementsByTagName('section').length;z++){
                document.getElementsByTagName('section')[z].classList.add("hide");
                ;
            }
            break;
        default:
            console.log("error")
            break;

    }

}

let y = true;

function disable() {
    let x = document.getElementById("default");
    if (y == true) {
        x.setAttribute("disabled", "");
        y = false;
    }
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}