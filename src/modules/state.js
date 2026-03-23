import Weather from '../models/Weather.js';

// Internal state of the app
let currentWeather = null;

export const setCurrentWeather = (rawData) => {
  currentWeather = new Weather(rawData);
  return currentWeather;
};
