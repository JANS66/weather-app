import {
  createIcons,
  Cloud,
  Sun,
  CloudRain,
  Snowflake,
  Wind,
  CloudLightning,
  CloudSun,
  CloudMoon,
  Moon,
  HelpCircle,
} from 'lucide';

const statusContainer = document.querySelector('#status-container');
const weatherContainer = document.querySelector('#weather-container');

const iconMap = {
  snow: 'snowflake',
  rain: 'cloud-rain',
  fog: 'cloud',
  wind: 'wind',
  cloudy: 'cloud',
  'partly-cloudy-day': 'cloud-sun',
  'partly-cloudy-night': 'cloud-moon',
  'clear-day': 'sun',
  'clear-night': 'moon',
  thunderstorm: 'cloud-lightning',
};

export const showLoading = () => {
  const template = document.querySelector('#loading-template');
  const clone = template.content.cloneNode(true);

  weatherContainer.innerHTML = '';
  statusContainer.innerHTML = '';
  statusContainer.appendChild(clone);
};

export const clearStatus = () => {
  statusContainer.innerHTML = '';
};

export const renderWeather = (weatherData, unitSuffix) => {
  clearStatus();

  const template = document.querySelector('#weather-card-template');

  weatherContainer.innerHTML = '';
  const clone = template.content.cloneNode(true);

  const lucidName = iconMap[weatherData.icon] || 'help-circle';

  clone.querySelector('.weather-icon').setAttribute('data-lucide', lucidName);
  clone.querySelector('.temp-container').innerHTML =
    `<span class="display-temp">${weatherData.temp}</span>${unitSuffix}`;
  clone.querySelector('.display-city').textContent = weatherData.location;
  clone.querySelector('.display-conditions').textContent =
    weatherData.conditions;
  clone.querySelector('.display-temp').textContent = weatherData.temp;
  clone.querySelector('.display-description').textContent =
    weatherData.description;

  weatherContainer.appendChild(clone);
  createIcons({
    icons: {
      Cloud,
      Sun,
      CloudRain,
      Snowflake,
      Wind,
      CloudLightning,
      CloudSun,
      CloudMoon,
      Moon,
      HelpCircle,
    },
  });
};

export const updateToggleButtonText = (newUnit) => {
  const toggleButton = document.querySelector('#unit-toggle');
  toggleButton.textContent = newUnit === 'metric' ? 'Display °F' : 'Display °C';
};
