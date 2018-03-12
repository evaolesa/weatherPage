import axios from 'axios';

const API_KEY = 'ea861d70884160c8347baaab4dd91675';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// To avoid misspelling words
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},es`;
    const request = axios.get(url); // Promise
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}