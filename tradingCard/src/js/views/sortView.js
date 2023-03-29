const sortButton = document.querySelector('#sort');
const sortOptions = document.querySelector('.sort-options');
const sortItems = document.querySelectorAll('.sort-item');
const sortContainer = document.querySelector('.sort-modal');
const overlay = document.querySelector('.overlay');

export const openSortModal = function (sortMethod) {
    sortContainer.classList.remove('hidden');
    overlay.classList.remove('hidden');
    overlay.classList.add('sort-overlay');

    sortItems.forEach(item => {
        item.classList.remove('chosen');
        if (item.textContent === sortMethod) item.classList.add('chosen');
    });

};

export const closeSortModal = function () {
    sortContainer.classList.add('hidden');
    overlay.classList.add('hidden');
    overlay.classList.remove('sort-overlay');
};

export const handleSortBtn = function (handler) {
    sortButton.addEventListener('click', handler);
};

export const handleModalClose = function (handler) {
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') handler();
    });
    overlay.addEventListener('click', e => {
        if (overlay.classList.contains('sort-overlay')) handler();
    });
};

export const handleSortChoice = function (handler) {
    sortOptions.addEventListener('click', (e) => handler(e.target.textContent));
};