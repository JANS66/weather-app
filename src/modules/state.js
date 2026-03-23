import Weather from '../models/Weather.js';

// Internal state of the app
let units = 'metric';
let currentWeather = null;

export const setCurrentWeather = (rawData) => {
  currentWeather = new Weather(rawData);
  return currentWeather;
};

export const getCurrentWeather = () => currentWeather;

export const setUnits = (newUnits) => {
  units = newUnits;
};

export const getUnits = () => units;
