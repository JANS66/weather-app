import * as API from './api.js';

export const handleLocationSubmit = async (location) => {
  try {
    console.log(`Fetching weather for: ${location}...`);

    const data = await API.getWeather(location);

    console.log('Weather data received:', data);
  } catch (error) {
    alert('Could not find that location. Please try again.');
  }
};
