import * as API from './api.js';
import * as State from './state.js';
import * as UI from './ui.js';

export const handleLocationSubmit = async (location) => {
  try {
    UI.showLoading();

    const units = State.getUnits();
    const rawData = await API.getWeather(location, units);
    const weatherInstance = State.setCurrentWeather(rawData);
    const unitSuffix = units === 'metric' ? '°C' : '°F';

    UI.renderWeather(weatherInstance, unitSuffix);
  } catch (error) {
    UI.clearStatus();
    alert('City not found.');
    console.log(error);
  }
};

export const handleUnitToggle = async () => {
  const currentCity = State.getCurrentWeather()?.location;
  if (!currentCity) return; // Don't toggle if no weather is loaded

  // 1. Switch the state
  const newUnit = State.getUnits() === 'metric' ? 'us' : 'metric';
  State.setUnits(newUnit);

  // 2. Update toggle button text
  UI.updateToggleButtonText(newUnit);

  await handleLocationSubmit(currentCity);
};
