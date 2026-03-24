# Modern Weather App

A sleek, high-performance weather dashboard built with a focus on clean architecture, accessibility, and modern CSS techniques like Glassmorphism.

## Features

- **Real-Time Weather:** Fetches live data from the Visual Crossing Weather API.
- **Unit Toggling:** Seamlessly switch between Metric (Celsius) and US (Fahrenheit) units.
- **Dynamic Themes:** Animated GIFs change automatically based on current weather conditions (Rain, Sun, Clouds, etc.).
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop using a mobile-first CSS strategy.
- **Accessibility:** Implemented with semantic HTML5, ARIA roles, and support for users with "Reduced Motion" preferences.

## Architecture & Best Practices

This project follows a strict separation of concerns to ensure the codebase is maintainable and scalable:

- **API Layer (`api.js`):** Handles asynchronous fetching.
- **State Management (`state.js`):** Acts as the single source of truth for the application.
- **Controller (`controller.js`):** The "brain" of the app that coordinates data flow between the API, State, and UI.
- **UI Module (`ui.js`):** Manages DOM manipulation using HTML5 Templates, caching selectors for performance, and handling Lucide icon rendering.
- **Data Models (`Weather.js`):** Normalizes raw JSON from the API into a clean, immutable object for the rest of the application to use.

## Technical Stack

- JavaScript (ES6+ Modules)
- CSS3 (Custom Properties, Flexbox, Grid, Backdrop-Filters)
- HTML5 (Semantic Tags & Templates)
- Lucide Icons (Scalable Vector Graphics)
- Webpack (Module Bundling & Asset Management)
- Visual Crossing API (Weather Data Source)

## Getting Started

1. Clone the repository: `git clone https://github.com/JANS66/weather-app`
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory and add your API Key:
   ```
   WEATHER_API_KEY=your_visual_crossing_key_here
   ```
4. Run the development server: `npm start`
5. Build for production: `npm run build`

## Future Improvements

- **7-Day Forecast:** Adding a secondary section to display upcoming weather trends.
- **Search Autocomplete:** Integrating a Geocoding API to suggest cities as the user types.
- **Browser Geolocation:** Automatically detecting the user's location on initial load.
