import axios from 'axios';

export const currentWeather =  axios.create({
  baseURL:'https://api.openweathermap.org/data/2.5/weather',
  params:{
    appid: process.env.REACT_APP_WEATHER_API_KEY,
    units:'imperial'
  }
});

export const weeklyForecast = axios.create({
  baseURL:'https://api.openweathermap.org/data/2.5/onecall',
  params:{
    appid: process.env.REACT_APP_WEATHER_API_KEY,
    exclude: 'current,minutely,hourly,alerts',
    units:'imperial'
  }
});