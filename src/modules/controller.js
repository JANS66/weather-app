import * as API from './api.js';
import * as State from './state.js';
import * as UI from './ui.js';

export const handleLocationSubmit = async (location) => {
  if (!location) return;

  try {
    UI.showLoading();

    const units = State.getUnits();
    const rawData = await API.getWeather(location, units);

    const weatherInstance = State.setCurrentWeather(rawData);

    const unitSuffix = units === 'metric' ? '°C' : '°F';
    UI.renderWeather(weatherInstance, unitSuffix);
  } catch (error) {
    UI.clearStatus();
    console.error('Weather Fetch Error:', error);
  }
};

export const handleUnitToggle = async () => {
  const weather = State.getCurrentWeather();
  if (!weather) return;

  const newUnit = State.getUnits() === 'metric' ? 'us' : 'metric';
  State.setUnits(newUnit);

  UI.updateToggleButtonText(newUnit);

  await handleLocationSubmit(weather.location);
};
