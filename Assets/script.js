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

//search.addEventListener("click", function () {
//    var input = document.getElementById("input").value;
//    console.log(input);
//    ultraViolet(input)
//})

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

    fetch(url)
        .then(function (response) {
            return response.json();
    })
        
    .then(function (data) {
        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temp").textContent = "Temperature: " + data.main.temp + " F";
        document.getElementById("humidity").textContent = "Humidity: " + data.main.humidity + "%";
        document.getElementById("windSpeed").textContent = "Wind Speed: " + data.wind.speed + "mph";
    })   
}

//function ultraViolet(city) {
//    let lat = response.data.coord.lat;
//    let lon = response.data.coord.lon;
//    var url = "http://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&cnt=1"
//    console.log(url)
//    fetch(url)
//    .then(function (data) {
//        return data.json();
//    })
//}

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
    })

    $.ajax({
        url
      }).then(function (response){

    console.log(response)
    console.log(response.dt)
    $('#forecast').empty();


    let results = response.list;
    console.log(results)

    for (let i = 0; i < results.length; i++) {

        let day = Number(results[i].dt_txt.split('-')[2].split(' ')[0]);
        let hour = results[i].dt_txt.split('-')[2].split(' ')[1];
        console.log(day);
        console.log(hour);

        if(results[i].dt_txt.indexOf("12:00:00") !== -1){

            const card = $("<div>").addClass("card col-md-2 ml-4 bg-primary text-white");
            const cardBody = $("<div>").addClass("card-body p-3 forecast")
            const cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
            const temperature = $("<p>").addClass("card-text forecastTemp").text("Temperature: " + " °F");
            const humidity = $("<p>").addClass("card-text forecastHumidity").text("Humidity: " + data[i].main.humidity + "%");
        
        cardBody.append(cityDate, image, temperature, humidity);
        card.append(cardBody);
        $("#forecast").append(card);
        }
    }
}