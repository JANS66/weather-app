import * as Controller from './controller.js';

export const setupEventListeners = () => {
  const searchForm = document.querySelector('#search-form');
  const unitToggle = document.querySelector('#unit-toggle');

  // 1. Safety Check: Only attach listeners if elements exist
  if (searchForm) {
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(searchForm);
      const location = formData.get('search-input')?.trim();

      if (location) {
        Controller.handleLocationSubmit(location);
        searchForm.reset();
      }
    });
  }

  if (unitToggle) {
    unitToggle.addEventListener('click', () => {
      Controller.handleUnitToggle();
    });
  }
};
