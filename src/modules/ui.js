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

const gifMap = {
  rain: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2x4eDNiZ2tyNjlnZHR6cDVuZmY1dWd6ZTdsYmtvMmpoZWhvaHhyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hWvk9iUU4uBBeyBq0k/giphy.gif',
  'clear-day':
    'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG81ejF2cHBpcDE4OXc4dmloYmtteHR4d2g4dGdtMWo4OGh4OHVsOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MtwuqkJK4MYGkEjNgg/giphy.gif',
  thunderstorm:
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTJiYjZ0NHdqdGt1ZmszNnJ4dHFibmZyczF3MDd0d2licW83a2tnMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xaZCqV4weJwHu/giphy.gif',
  cloudy:
    'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHgxanp3MXl6bTk0Yzh6ZHkyMmJ1aXg3MmF2enNhcW8yazQ0YnVyMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7rc6sa2RvKo8K5EI/giphy.gif',
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
  const clone = template.content.cloneNode(true);
  const gifUrl = gifMap[weatherData.icon] || gifMap['cloudy'];
  const lucidName = iconMap[weatherData.icon] || 'help-circle';

  bgOverlay.style.backgroundImage = `url('${gifUrl}')`;

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
