const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                let article = document.createElement('article');
                let text = document.createElement('section');
                let h3 = document.createElement('h3');
                let h4 = document.createElement('h4');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let image = document.createElement('img');

                h3.textContent = towns[i].name;
                h4.textContent = towns[i].motto;
                h4.className = "italic"
                p1.textContent = "Year Founded: " + towns[i].yearFounded;
                p2.textContent = "Population: " + towns[i].currentPopulation;
                p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall + "in.";
                image.setAttribute('src', "images/" + towns[i].photo);
                image.setAttribute('alt', "Image of " + towns[i].name + ", Idaho");


                text.appendChild(h3);
                text.appendChild(h4);
                text.appendChild(p1);
                text.appendChild(p2);
                text.appendChild(p3);
                text.classList.add("center");
                image.classList.add("homepic")
                article.appendChild(text);
                article.appendChild(image);
                article.classList.add("contentbox", "homecontent")
                document.querySelector('div.towns').appendChild(article)
            }
        }
    });