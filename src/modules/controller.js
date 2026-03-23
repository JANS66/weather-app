import * as API from './api.js';
import * as State from './state.js';
import * as UI from './ui.js';

export const handleLocationSubmit = async (location) => {
  try {
    const rawData = await API.getWeather(location);
    const weatherInstance = State.setCurrentWeather(rawData);
    UI.renderWeather(weatherInstance);
  } catch (error) {
    console.error(error);
    alert('Search failed. Check city name or API key.');
  }
};
