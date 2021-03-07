var apiKey = "52cd24779947814501b070ebef234141"
var search = document.getElementById("searchCity")


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
        .then(function (response) {
            console.log(response);
            var h2 = document.createElement("h2");
            h2.textContent = response.name;
            document.getElementById("currentInfo").append(h2);
        })
    .then(function (data) {
         
    });    
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
