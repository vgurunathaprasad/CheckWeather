

function getCountries(){
    fetch('https://restcountries.eu/rest/v2/all').then((response) => {
        return response.json();
    }).then((obj) => {
        console.log(obj);
        countries = document.getElementById("countries");
        for(let i of obj){
            var col4 = document.createElement("div");
            col4.classList.add("col-4");
            var c = document.createElement("div");
            c.classList.add("card");
            var img = document.createElement("img");
            img.src = i.flag;
            img.classList.add("card-img-top")
            var cb = document.createElement("div");
            cb.classList.add("card-body");
            var ct = document.createElement("h5");
            ct.classList.add("card-title");
            ct.innerText = i.name;
            var capital = document.createElement("div");
            capital.innerText = "Capital : "+i.capital;
            var region = document.createElement("div");
            region.innerText = "Region : "+i.region;
            var countryCode = document.createElement("div");
            countryCode.innerText = "Country Code : "+i.alpha3Code;
            var weather = document.createElement("div");
            weather.id = "w"+i.name;


            var button = document.createElement("button");
            button.classList.add("btn");
            button.classList.add("btn-primary");
            button.innerText = "Check Weather";
            button.onclick = function(event){
                url = "https://api.openweathermap.org/data/2.5/weather?q="+i.capital+","+i.alpha3Code+"&appid=d282da8e2d9dab725a4430c5e3460cd1&units=metric";
                fetch(url).then((response) =>{
                    return response.json();
                }).then((obj) => {
                    console.log(obj.main.temp);
                    var ele = document.getElementById("w"+i.name);
                    ele.innerHTML = "Curr Weather : "+obj.main.temp +"<sup>o</sup> C";

                }).catch((err) => {
                    console.log("Something went wrong while fetching weather");
                });

            }

            cb.appendChild(ct);
            cb.appendChild(capital);
            cb.appendChild(region);
            cb.appendChild(countryCode);
            cb.appendChild(weather);
            
            c.append(img);
            c.appendChild(cb);
            c.appendChild(button);
            col4.appendChild(c);
            countries.appendChild(col4);
        }
    }).catch((err) =>{
        console.error("something went wrong: "+err);
    });

    

}