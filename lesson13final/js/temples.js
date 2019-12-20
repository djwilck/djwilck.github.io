const templeJSON = "js/temples.json";

fetch(templeJSON)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const temples = jsonObject['temples'];
        for (let i = 0; i < temples.length; i++) {
            //address, telephone, email, services, history, ordinance schedule
            //session schedule, temple closure schedule (from a JSON source), and summary

            let article = document.createElement('article');
            let details = document.createElement('section');
            let ordinance = document.createElement('section');
            let closure = document.createElement('section');
            let name = document.createElement('h3');
            let h4Det = document.createElement('h4');
            let aDet = document.createElement('a');
            let h4Ord = document.createElement('h4');
            let aOrd = document.createElement('a');
            let h4Clo = document.createElement('h4');
            let aClo = document.createElement('a');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let p5 = document.createElement('p');
            let p6 = document.createElement('p');
            let p7 = document.createElement('p');
            let p8 = document.createElement('p');
            let image = document.createElement('img');
            let summary = document.createElement('section');
            let sumText = document.createElement('p');
            let weather = document.createElement('span');
            let temp = document.createElement('span');
            let humidity = document.createElement('span');
            let speed = document.createElement('span');


            name.textContent = temples[i].name;

            h4Det.appendChild(aDet);
            h4Det.classList.add("button");
            aDet.setAttribute('onclick', "toggleMenu('details" + i + "')")
            aDet.innerHTML = "Show Temple Details";

            p1.innerHTML = "<span class='bold'>Address:</span> " + temples[i].address + "<br>" +
                "<span class='bold'>Telephone:</span> " + temples[i].telephone + "<br>" +
                "<span class='bold'>Email:</span> " + temples[i].email + "<br>";
            p2.innerHTML = "<span class='bold'>Services:<span>"
            for (x = 0; x < temples[i].services.length; x++) {
                p2.innerHTML += "<br>" + temples[i].services[x];
            }
            p3.innerHTML = "<span class='bold'>History:<span>"
            for (x = 0; x < temples[i].history.length; x++) {
                p3.innerHTML += "<br>" + temples[i].history[x];
            };

            h4Ord.appendChild(aOrd);
            h4Ord.classList.add("button");
            aOrd.setAttribute('onclick', "toggleMenu('ordinance" + i + "')")
            aOrd.innerHTML = "Show Ordinance Schedules";

            p4.innerHTML = "<span class='bold'>Baptism Schedule:<span>"
            for (x = 0; x < temples[i].baptism.length; x++) {
                p4.innerHTML += "<br>" + temples[i].baptism[x];
            };
            p5.innerHTML = "<span class='bold'>Initiatory Schedule:<span>"
            for (x = 0; x < temples[i].initiatory.length; x++) {
                p5.innerHTML += "<br>" + temples[i].initiatory[x];
            };
            p6.innerHTML = "<span class='bold'>Endowment Session Schedule:<span>"
            for (x = 0; x < temples[i].endowment.length; x++) {
                p6.innerHTML += "<br>" + temples[i].endowment[x];
            };
            p7.innerHTML = "<span class='bold'>Sealing Schedule:<span>"
            for (x = 0; x < temples[i].sealing.length; x++) {
                p7.innerHTML += "<br>" + temples[i].sealing[x];
            };

            h4Clo.appendChild(aClo);
            h4Clo.classList.add("button");
            aClo.setAttribute('onclick', "toggleMenu('closure" + i + "')")
            aClo.innerHTML = "Show Temple Closure";

            p8.innerHTML = "<span class='bold'>Temple Closure Dates:<span>"
            for (x = 0; x < temples[i].closure.length; x++) {
                p8.innerHTML += "<br>" + temples[i].closure[x];
            };

            image.setAttribute('src', "images/" + temples[i].photo);
            image.setAttribute('alt', temples[i].name);

            details.appendChild(p1);
            details.appendChild(p2);
            details.appendChild(p3);
            details.classList.add("details" + i, "hide");
            ordinance.appendChild(p4);
            ordinance.appendChild(p5);
            ordinance.appendChild(p6);
            ordinance.appendChild(p7);
            ordinance.classList.add("ordinance" + i, "hide");
            closure.appendChild(p8);
            closure.classList.add("closure" + i, "hide");
//*********************** weather summary ********************//
            const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=" + temples[i].weather + "&units=imperial&APPID=d5f1021d3163cfe9a1e198a68d199dcf";
            fetch(weatherAPI)
                .then((response) => response.json())
                .then((jsObject) => {
                    //console.log(jsObject);

                    weather.innerHTML = "Current Weather: " + jsObject.weather[0].description + "<br>";
                    temp.innerHTML = "Current Temperature: " + jsObject.main.temp + "&#176;F <br>";
                    humidity.innerHTML = "Humidity: " + jsObject.main.humidity + "% <br>";
                    speed.innerHTML = "Wind Speed: " + jsObject.wind.speed + "mph" + "<br>";

                });
            sumText.innerHTML = "<span class='bold'>Local Weather</span><br>"
            summary.appendChild(sumText);
            sumText.appendChild(weather);
            sumText.appendChild(temp);
            sumText.appendChild(humidity);
            sumText.appendChild(speed);
            summary.classList.add("summary" + i);

            image.classList.add("homepic", "right");

            article.appendChild(image);
            article.appendChild(name);
            article.appendChild(h4Det);
            article.appendChild(details);
            article.appendChild(h4Ord);
            article.appendChild(ordinance);
            article.appendChild(h4Clo);
            article.appendChild(closure);
            article.appendChild(summary);

            article.classList.add("contentbox", "homecontent")
            document.querySelector('div.temples').appendChild(article)

        }
    });

