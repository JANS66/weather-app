export const renderWeather = (weatherData) => {
  const mountPoint = document.querySelector('#weather-container');
  const template = document.querySelector('#weather-card-template');

  // 1. Clear previous weather if it exists
  mountPoint.innerHTML = '';

  // 2. Clone the template content
  // 'true' means a deep clone (includes all nested elements)
  const clone = template.content.cloneNode(true);

  console.log(weatherData);

  // 3. Fill the clone with data
  clone.querySelector('.display-city').textContent = weatherData.location;
  clone.querySelector('.display-conditions').textContent =
    weatherData.conditions;
  clone.querySelector('.display-temp').textContent = weatherData.temp;
  clone.querySelector('.display-description').textContent =
    weatherData.description;

  mountPoint.appendChild(clone);
};
