const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

export const getWeather = async (location, units) => {
  try {
    const response = await fetch(
      `${BASE_URL}${location}?unitGroup=${units}&key=${API_KEY}&contentType=json`,
      { mode: 'cors' }
    );

    if (!response.ok) {
      throw new Error(`City not found (${response.status})`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
