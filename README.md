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

## API Key Setup

This project uses **OpenWeatherMap API**, and for safety, the API key is stored in a separate file.

### Step-by-step:

1. Create a new file `config.js` and copy the contents of `config-example.js` in it
2. Inside `config.js`, paste your API key:

```js
// config.js
const apiKey = "YOUR_API_KEY_HERE";
```


