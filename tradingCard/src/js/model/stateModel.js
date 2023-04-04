import { cardList } from "./cardModel";
import * as helper from '../helpers'

const state = {
    sortMethod: 'Oldest Arrivals',
    cards: cardList,
    searchResults: [],
    page: 1,
    resultsPerPage: 4,
};

export let workingState = {};

export const freshState = () => { workingState = structuredClone(state); };

export const findCards = function (query) {
    workingState = structuredClone(state);
    const searchResults = [];
    workingState.cards.forEach(card => {
        if (card.animalName.toLowerCase().includes(query)) {
            searchResults.push(card);
        };
        workingState.cards = searchResults;
    });
};

export const sortCards = function (choice) {
    workingState.sortMethod = choice
    switch (choice) {
        case 'Oldest Arrivals':
            return workingState.cards;
        case 'Newest Arrivals':
            return workingState.cards.reverse();
        case 'A-Z':
            return workingState.cards.sort(helper.alphaSort);
        case 'Z-A':
            return workingState.cards.sort(helper.alphaSortReverse);
        case 'Scientific Name A-Z':
            return workingState.cards.sort(helper.scientificSort);
        case 'Scientific name Z-A':
            return workingState.cards.sort(helper.scientificSortReverse);
        case 'Color':
            return workingState.cards.sort(helper.colorSort);
    };
};

// Pagination logic

export const getPageCards = function (cardList, page = workingState.page) {
    workingState.page = page;

    const start = (page - 1) * workingState.resultsPerPage;
    const end = page * workingState.resultsPerPage;

    return cardList.slice(start, end)
}