var apiKey = "52cd24779947814501b070ebef234141"
var search = document.getElementById("searchCity")

const cityName =document.getElementById("cityName");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const uvIndex = document.getElementById("uvIndex");
const forecast = document.getElementById("forecast");

search.addEventListener("click", function () {
    var input = document.getElementById("input").value;
    console.log(input);
    currentWeather(input);
    fivedayForecast(input)
})

function currentWeather(city) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial"
    console.log(url)
    fetch(url)
        .then(function (data) {
            return data.json();
        })

    .then(function (response) {
        console.log(response);
        ultraViolet(response.coord.lat, response.coord.lon);
        document.getElementById("cityName").textContent = response.name;
        document.getElementById("temp").textContent = "Temperature: " + response.main.temp + " F";
        document.getElementById("humidity").textContent = "Humidity: " + response.main.humidity + "%";
        document.getElementById("windSpeed").textContent = "Wind Speed: " + response.wind.speed + "mph";
    })     
}

function ultraViolet(lat, lon) {
    var url = "http://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey
    console.log(url)
    fetch(url)
    .then(function (data) {
        return data.json();
    })
    .then(function (response) {
        console.log (response)
        document.getElementById("uvIndex").textContent = "UV Index: " + response[0].value
    })
}

function fivedayForecast(city) {
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial"
    console.log(url)
    fetch(url)
    .then(function (data) {
        return data.json();
    })
    .then(function (response) {
        console.log(response);
        const result = response.list.filter(day => {
            return day.dt_txt.includes("12:00:00")
        });
        console.log(result)
        for (var i= 0; i < result.length; i++) {
            var col = document.createElement("div");
            col.setAttribute("class", "col");
            var date = document.createElement("p").textContent = result [i].dt_txt
            console.log(date)
            //create p tags for temp, humidity, etc
            //add new p tags to col append
            //col.append(date, temp, humidity, wind)
            document.getElementById("forecast").append(col)
        }
        // var h6 = document.createElement("h6")
        // h6.textContent = response.name;
        // document.getElementById("forecast").append(h6);
    })

}