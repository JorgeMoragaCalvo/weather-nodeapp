require("dotenv").config();

const axios = require("axios");
const apiKey = process.env.API_KEY;
const location = "Auckland";
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

async function getWeather() {
  try {
    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    console.log(`Weather in ${weatherData.location.name}:`);
    console.log(`Temperature: ${weatherData.current.temp_c}C`);
    console.log(`Condition: ${weatherData.current.condition.text}`);
    console.log(`Humidity: ${weatherData.current.humidity}%`);
  } catch (error) {
    console.error(
      "Error in weather: ",
      error.response ? error.response.data : error.message
    );
  }
}

getWeather();
