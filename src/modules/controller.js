import * as API from './api.js';
import * as State from './state.js';

export const handleLocationSubmit = async (location) => {
  try {
    const rawData = await API.getWeather(location);
    console.log(rawData);
    const weatherInstance = State.setCurrentWeather(rawData);

    console.log('App State updated with:', weatherInstance);
  } catch (error) {
    console.error(error);
    alert('Search failed. Check city name or API key.');
  }
};
