let page = document.getElementById('page').innerHTML
let townID = ""
switch (page) {
    case "Preston":
        townID = "5604473";
        break;

    case "Soda Springs":
        townID = "5607916"
        break;

    case "Fish Haven":
        townID = "5585010"
        break;

    default:
        console.log("Error")
        break;
}

const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=" + townID + "&units=imperial&APPID=d5f1021d3163cfe9a1e198a68d199dcf";
fetch(weatherAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        let temp = document.getElementById('temp');
        let speed = document.getElementById('speed');
        temp.textContent = jsObject.main.temp;
        speed.textContent = jsObject.wind.speed;
        document.getElementById('hightemp').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('desc').textContent = jsObject.weather[0].description;

        windchill(temp.textContent, speed.textContent);

    });

const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=" + townID + "&units=imperial&APPID=d5f1021d3163cfe9a1e198a68d199dcf";
fetch(forecastAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);

        let tablerow = document.getElementsByClassName('tablerow');
        let tablehead = document.getElementsByClassName('forehead');
        let x = 0
        for (i = 0; i < jsObject.list.length; i++) {
            if (jsObject.list[i].dt_txt.substring(11, 19) == "18:00:00" && x < tablerow.length) {
                
                //Temperature
                let text = document.createElement('p')
                    text.innerHTML = jsObject.list[i].main.temp + " &#176;F";
                //Weather Icon
                let icon = jsObject.list[i].weather[0].icon;
                let image = document.createElement('img');
                let desc = jsObject.list[i].weather[0].description
                image.setAttribute('src', "https://openweathermap.org/img/wn/" + icon + ".png");
                image.setAttribute('alt', desc);
                //fill table            
                tablerow[x].appendChild(image);
                tablerow[x].appendChild(text);
                //Table header
                let day = new Date(jsObject.list[i].dt_txt.substring(0, 11));
                day = day.getDay();
                tablehead[x].innerHTML = daynames[day];
                x++
            }
        }
    });