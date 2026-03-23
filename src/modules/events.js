import * as Controller from './controller.js';

export const setupEventListeners = () => {
  const uiElements = {
    searchForm: document.querySelector('#search-form'),
  };

  uiElements.searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchInput = uiElements.searchForm.querySelector('#search-input');

    if (searchInput.value) {
      Controller.handleLocationSubmit(searchInput.value);
      searchInput.value = '';
    }
  });
};
