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

## Project Structure
weather-app/
├── index.html
├── style.css
├── script.js
├── config.js (ignored in git)
├── config-example.js 
├── images/
│ ├── rain.png
│ ├── clear.png
│ ├── clouds.png
│ └── ...etc.


---

## 🔑 API Key Setup

This project uses **OpenWeatherMap API**, and for safety, the API key is stored in a separate file.

### Step-by-step:

1. Create a new file `config.js` and copy the contents of `config-example.js` in it
2. Inside `config.js`, paste your API key:

```js
// config.js
const apiKey = "YOUR_API_KEY_HERE";

