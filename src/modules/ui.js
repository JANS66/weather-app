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
const bgOverlay = document.querySelector('#bg-overlay');
const weatherTemplate = document.querySelector('#weather-card-template');
const loadingTemplate = document.querySelector('#loading-template');

// Icons configuration object
const LUCIDE_CONFIG = {
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
};

const gifMap = {
  rain: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2x4eDNiZ2tyNjlnZHR6cDVuZmY1dWd6ZTdsYmtvMmpoZWhvaHhyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hWvk9iUU4uBBeyBq0k/giphy.gif',
  'clear-day':
    'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG81ejF2cHBpcDE4OXc4dmloYmtteHR4d2g4dGdtMWo4OGh4OHVsOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MtwuqkJK4MYGkEjNgg/giphy.gif',
  thunderstorm:
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTJiYjZ0NHdqdGt1ZmszNnJ4dHFibmZyczF3MDd0d2licW83a2tnMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xaZCqV4weJwHu/giphy.gif',
  cloudy:
    'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHgxanp3MXl6bTk0Yzh6ZHkyMmJ1aXg3MmF2enNhcW8yazQ0YnVyMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7rc6sa2RvKo8K5EI/giphy.gif',
  'clear-night':
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW90eDFpbnRoNmVpN29lMnV4dXM1MzdsYnR6bnBrZ28wMjFrYXp2aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FlodpfQUBSp20/giphy.gif',
};

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

export const renderError = (message) => {
  weatherContainer.innerHTML = '';
  statusContainer.innerHTML = `
    <div class="error-message" role="alert">
      <p>⚠️ ${message}</p>
    </div>
  `;
};

export const showLoading = () => {
  const clone = loadingTemplate.content.cloneNode(true);
  weatherContainer.innerHTML = '';
  statusContainer.innerHTML = '';
  statusContainer.appendChild(clone);
};

export const clearStatus = () => {
  statusContainer.innerHTML = '';
};

export const renderWeather = (weatherData, unitSuffix) => {
  clearStatus();
  weatherContainer.innerHTML = '';

  const clone = weatherTemplate.content.cloneNode(true);
  const gifUrl = gifMap[weatherData.icon] || gifMap['cloudy'];
  const lucidName = iconMap[weatherData.icon] || 'help-circle';

  if (bgOverlay) {
    bgOverlay.style.backgroundImage = `url(${gifUrl})`;
  }

  const iconEl = clone.querySelector('.weather-icon');
  const tempEl = clone.querySelector('.temp-container');

  iconEl.setAttribute('data-lucide', lucidName);

  clone.querySelector('.display-city').textContent = weatherData.location;
  clone.querySelector('.display-conditions').textContent =
    weatherData.conditions;
  clone.querySelector('.display-description').textContent =
    weatherData.description;

  tempEl.innerHTML = `<span class="display-temp">${weatherData.temp}</span>${unitSuffix}`;

  weatherContainer.appendChild(clone);

  createIcons(LUCIDE_CONFIG);
};

export const updateToggleButtonText = (newUnit) => {
  const toggleButton = document.querySelector('#unit-toggle');
  if (toggleButton) {
    toggleButton.textContent =
      newUnit === 'metric' ? 'Display °F' : 'Display °C';
  }
};
