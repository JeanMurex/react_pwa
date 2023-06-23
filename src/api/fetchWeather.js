import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "dced54672e6c9632b8c0e34942db745a"

export const fetchWeather = async (query) => {
    try {
        const { data } = await axios.get(URL, {
            params: {
                q: query,
                units: 'metric',
                APPID: API_KEY
            }
        })
        return data;
    } catch {
        throw new Error('Failed to fetch weather data');
    }
}