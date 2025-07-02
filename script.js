


const input = document.querySelector("input[type='text']");

const button = document.querySelector("#search");
async function checkWeather() {
    try {
        let cityName = input.value.trim();
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}%20&units=metric`;


        const response = await fetch(apiURL + `&appid=${apiKey}`);
        if (response.status == '404') {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            document.querySelector(".FiveDayWeather").style.display = "none";

        }
        else {
            var data = await response.json();

            console.log(data);

            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

            document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

            document.querySelector(".weather-video source").src = `images\\${data.weather[0].main.toLowerCase()}.webm`
            document.querySelector(".weather-video").load();

            FiveDayForecast(cityName);
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".FiveDayWeather").style.display = "flex";
            document.querySelector(".error").style.display = "none";


        }


    }
    catch (e) {
        console.log(e);

    }


}
//checkWeather();
let dailyForecast;
async function FiveDayForecast(cityName) {

    const FiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;
    const res = await fetch(FiveDayURL);
    let fiveDayData = await res.json();
    console.log(fiveDayData);
    dailyForecast = [];



    for (let entry of fiveDayData.list) {
        let dateTime = entry.dt_txt;
        let [data, time] = dateTime.split(" ");

        if (time === "12:00:00") {
            dailyForecast.push(entry);
        }
    }

    fillFiveDay();



}


function fillFiveDay() {
    const FiveDay = document.querySelector(".FiveDayWeather");

    for (let i = 0; i < 5; i++) {
        let day = FiveDay.querySelector(`.day${i}`);
        let [date, time] = dailyForecast[i].dt_txt.split(" ");
        day.querySelector(".date").innerHTML = date;

        const video = day.querySelector("video");
        const source = video.querySelector("source");

        source.src = `images/${dailyForecast[i].weather[0].main.toLowerCase()}.webm`;
        day.querySelector(".daily-weather-video").load();
        day.querySelector(".t").innerHTML = Math.round(dailyForecast[i].main.temp) + "°C";
        day.querySelector(".h").innerHTML = dailyForecast[i].main.humidity + "%";
        day.querySelector(".w").innerHTML = dailyForecast[i].wind.speed + "km/hr";
    }
}

button.addEventListener('click', checkWeather);
const geoButton = document.querySelector("#location");

geoButton.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showGeoWeather, handleGeoError);
    } else {
        alert("Geolocation is not supported by your browser.");
    }
});

async function showGeoWeather(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
        document.querySelector(".weather-video source").src = `images\\${data.weather[0].main.toLowerCase()}.webm`
        document.querySelector(".weather-video").load();

        await FiveDayForecast(data.name);

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".FiveDayWeather").style.display = "flex";
        document.querySelector(".error").style.display = "none";

    } catch (e) {
        console.log("Error fetching geo weather: ", e);
    }
}

function handleGeoError(error) {
    alert("Location access denied or failed.");
    console.warn("Geolocation error:", error);
}


