const searchInput = document.querySelector('#search');
const searchForm = document.querySelector('#search-form');
const homeButton = document.querySelector('.logo');

export const handleSearchQuery = function (handler) {
    searchForm.addEventListener('submit', e => {
        e.preventDefault();
        handler();
    });
};

export const handleHomeBtn = function (handler) {
    homeButton.addEventListener('click', handler);
};

export const getQuery = function () {
    const query = searchInput.value.toLowerCase();
    searchInput.value = '';
    return query
};

// homeButton.addEventListener('click', e => displayCards(cards));