import * as cardView from './views/cardView'
import * as navBarItemsView from './views/navbarItemsView'
import * as sortView from './views/sortView'
import * as model from './model/stateModel'

// Navbar Controllers

const controlHomeBtn = function () {
    cardView.renderCards(model.state.cards);
};

const controlSearchQuery = function () {
    const results = model.findCards(navBarItemsView.getQuery());
    cardView.renderCards(results)
};

// Sort controllers

const controlSortBtn = function () {
    sortView.openSortModal(model.state.sortMethod);
};

const controlModalClose = function () {
    sortView.closeSortModal()
};

const controlSortChoice = function (choice) {
    sortView.closeSortModal();
    cardView.renderCards(model.sortCards(choice));
};

// Event Subsrcibers

const init = function () {
    cardView.renderCards(model.state.cards);
    navBarItemsView.handleHomeBtn(controlHomeBtn);
    navBarItemsView.handleSearchQuery(controlSearchQuery);
    sortView.handleSortBtn(controlSortBtn);
    sortView.handleModalClose(controlModalClose);
    sortView.handleSortChoice(controlSortChoice);
};
init();