function showBanner() {
    let n = new Date();
    let daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayname = daynames[n.getDay()];
    
    
    if(dayname == "Friday"){
        document.getElementById("banner").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion."
        
    } else {
        document.getElementById("banner").style.display = "none";
    }
    
}

showBanner()