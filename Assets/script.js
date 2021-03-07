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
    currentWeather(input)
})

search.addEventListener("click", function () {
    var input = document.getElementById("input").value;
    console.log(input);
    fivedayForecast(input)
})

function currentWeather(city) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial"
    console.log(url)
    fetch(url)
        .then(function (data) {
            return data.json();
        })
    fetch(url)
        .then(function (response) {
            return response.json();
    })
        
    .then(function (data) {
        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temp").textContent = "Temperature: " + data.main.temp + " K";
        document.getElementById("humidity").textContent = "Humidity: " + data.main.humidity + "%";
        document.getElementById("windSpeed").textContent = "Wind Speed: " + data.wind.speed + "mph";
    })
    .then(function (response) {
        console.log(response);
        var h2 = document.createElement("h2");
        h2.textContent = response.name;
        document.getElementById("currentInfo").append(h2);
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
        var h6 = document.createElement("h6")
        h6.textContent = response.name;
        document.getElementById("forecast").append(h6);
    });
}
