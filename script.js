


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

        }
        else {
            var data = await response.json();

            console.log(data);

            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

            document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

            document.querySelector(".weather-icon").src = `images\\${data.weather[0].main.toLowerCase()}.png`

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

        }
    }
    catch (e) {
        console.log(e);

    }


}
//checkWeather();

button.addEventListener('click', checkWeather);

