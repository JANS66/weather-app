import Weather from '../models/Weather.js';

// Internal state of the app
let units = 'metric';
let currentWeather = null;

export const setCurrentWeather = (rawData) => {
  if (!rawData) return null;

  try {
    currentWeather = new Weather(rawData);
    return currentWeather;
  } catch (error) {
    console.error('State Error: Failed to create Weather instance', error);
    return null;
  }
};

export const getCurrentWeather = () => {
  // Return a shallow copy to prevent accidental direct mutation
  return currentWeather ? { ...currentWeather } : null;
};

export const setUnits = (newUnits) => {
  if (newUnits !== 'metric' && newUnits !== 'us') return;
  units = newUnits;
};

export const getUnits = () => units;
