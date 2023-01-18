const express = require("express");

const https = require("https");
const app = express();



app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=1dd40e75f4146ccb97c237a41502ac20"
    https.get(url, function(response) {
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const oneData = weatherData.main.temp;
            console.log(weatherData);
            console.log(oneData);
            const weatherDes = weatherData.weather[0].description;
            console.log(weatherDes);
            res.write("<p>The weather description of the area is :" +weatherDes +"</p>")
            res.write("<h1>The tempreture of your area is " + oneData + " degrees Celcius</h1>");
            res.send();
        })
    })
});

app.listen(3000, function(req, res) {
    console.log("Server started at port 3000!");
})