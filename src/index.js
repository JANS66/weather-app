import './style.css';
import * as Events from './modules/events.js';
import * as Controller from './modules/controller.js';

// App Initialization
const init = () => {
  Events.setupEventListeners();
  Controller.handleLocationSubmit('Vilnius');
};

// Ensure the DOM is ready before running init
document.addEventListener('DOMContentLoaded', init);
