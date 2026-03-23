const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

export const getWeather = async (location) => {
  try {
    const response = await fetch(
      `${BASE_URL}${location}?unitGroup=metric&key=${API_KEY}&contentType=json`,
      { mode: 'cors' }
    );

    if (!response.ok) {
      throw new Error(`City not found (${response.status})`);
    }

    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
