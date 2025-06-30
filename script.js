
    const apiURL= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=gurgaon";
	
    async function checkWeather() {
        const response = await fetch(apiURL + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);
    }
    checkWeather();