const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        //console.log(page)
        for (let i = 0; i < towns.length; i++) {


            if (towns[i].name == page) {
                let article = document.createElement('article');
                let text = document.createElement('section');
                let h3 = document.createElement('h3');
                h3.textContent = "Local events around " + towns[i].name;
                text.appendChild(h3);

                for (x = 0; x < towns[i].events.length; x++) {
                    //console.log(towns[i].events[x])
                    let p = document.createElement('p');
                    p.textContent = towns[i].events[x];
                    text.appendChild(p)
                }
                article.appendChild(text);
                document.querySelector('div.local-events').appendChild(article)
            }
        }
    });