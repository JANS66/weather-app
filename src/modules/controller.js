import * as API from './api.js';
import * as State from './state.js';
import * as UI from './ui.js';

export const handleLocationSubmit = async (location) => {
  try {
    UI.showLoading();

    const rawData = await API.getWeather(location);
    const weatherInstance = State.setCurrentWeather(rawData);

    UI.renderWeather(weatherInstance);
  } catch (error) {
    UI.clearStatus();
    alert('City not found.');
  }
};
