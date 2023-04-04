import * as cardView from './views/cardView'
import * as navBarItemsView from './views/navbarItemsView'
import * as sortView from './views/sortView'
import * as model from './model/stateModel'
import * as paginationView from './views/paginationView'

// rendercards needs to get card list from model and same for pagonation

const cardPaginationRender = function (cardList = model.workingState.cards, goToPage = model.workingState.page) {
    const numOfPages = Math.ceil(cardList.length / model.workingState.resultsPerPage);
    cardView.renderCards(model.getPageCards(cardList, goToPage))
    paginationView.renderPagination(goToPage, numOfPages)
};

// Navbar Controllers

const controlHomeBtn = function () {
    model.freshState()
    cardPaginationRender()
};

const controlSearchQuery = function () {
    model.findCards(navBarItemsView.getQuery());
    cardPaginationRender()
};

// Sort controllers

const controlSortBtn = function () {
    sortView.openSortModal(model.workingState.sortMethod);
};

const controlModalClose = function () {
    sortView.closeSortModal()
};

const controlSortChoice = function (choice) {
    sortView.closeSortModal();
    cardPaginationRender(model.sortCards(choice))
};

// Pagination controller

const controlPagination = function (goToPage) {
    cardPaginationRender(model.workingState.cards, goToPage)
};

// Event Subsrcibers

const init = function () {
    model.freshState()
    cardPaginationRender()
    navBarItemsView.handleHomeBtn(controlHomeBtn);
    navBarItemsView.handleSearchQuery(controlSearchQuery);
    sortView.handleSortBtn(controlSortBtn);
    sortView.handleModalClose(controlModalClose);
    sortView.handleSortChoice(controlSortChoice);
    paginationView.handlePageBtn(controlPagination)
};
init();