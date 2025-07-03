# Weather App
A simple weather application built using **HTML**, **CSS**, and **JavaScript**, powered by the **OpenWeatherMap API**.  
This app allows you to:

-  Search weather by **city name**
-  Get weather using your **current location**
-  View a **5-day forecast** at 12:00 PM for each day
-  See temperature, humidity, wind speed, and weather icons along with animations

---


## Technologies Used

- **HTML**
- **CSS (Flexbox, gradients, media-friendly layout)**
- **JavaScript**
- **OpenWeatherMap API**
- **Geolocation API**

---

## Project Folder Structure

```plaintext
weather-app/
│
├── index.html             # Main HTML file
├── style.css              # Styling with Flexbox & gradients
├── script.js              # All JS logic (API calls, geolocation, rendering)
├── config.js              # Your personal API key (NOT pushed to GitHub)
├── config-example.js      # Example template for sharing safely
├── images/                # Weather icons (e.g., rain.png, clear.png)
│   ├── rain.png
│   ├── clear.png
│   ├── clouds.png
│   └── ...

```
---
## Getting Started

To run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2. Set up API KEy

This project uses **OpenWeatherMap API**, and for safety, the API key is stored in a separate file.

1. Create a new file `config.js` and copy the contents of `config-example.js` in it
2. Inside `config.js`, paste your API key:

```js
// config.js
const apiKey = "YOUR_API_KEY_HERE";
```

To get the API key, follow the following steps:
- Create a free account at OpenWeatherMap
- Click on the API keys section and get you API key from there
- Put this API key in your config.js file

### 3. Run the App
Simply run the index.html file in your browser.

---

## Geolocation feature
When you click the "check by location" button:
- The browser asks for location access
- If allowed, your current latitude & longitude are used to fetch live weather data from OpenWeatherMap
- City name, temperature, humidity, wind speed, and forecast are displayed

---

##  APIs Used
- OpenWeatherMap Current Weather API
- OpenWeatherMap 5-Day Forecast API
- Geolocation API (Browser)


