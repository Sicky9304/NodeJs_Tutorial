import readline from 'readline/promises';
import { log } from "console";

const API_KEY = '734cc0ad75a484781830c733774bb9bc';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const getWeather = async (city) => {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('City not found. Please check the city name.');
        }const weatherData =await response.json();
        // log(weatherData)
        log(`\nWeather Information: `);
        log(`City: ${weatherData.name}`);
        log(`Temperature: ${weatherData.main.temp}C`);
        log(`Description: ${weatherData.weather[0].description}`);
        log(`Humidity: ${weatherData.main.humidity}%`);
        log(`Wind Speed: ${weatherData.wind.speed}m/s`);
        log(`Pressure: ${weatherData.main.pressure}\n`);
        
    } catch (error) {
        log(error);
    }
}

const city = await rl.question('Enter the city name to get its weather:');
await getWeather(city);
rl.close();