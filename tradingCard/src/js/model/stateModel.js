import { cardList } from "./cardModel";
import * as helper from '../helpers'

const state = {
    sortMethod: 'A-Z',
    cards: cardList.map((card, i) => ({ ...card, originalIndex: i })),
    searchResults: [],
    page: 1,
    resultsPerPage: 4,
};

export let workingState = {};

export const freshState = () => {
    workingState = structuredClone(state);
};

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
        case 'Oldest First':
            return workingState.cards.sort(helper.dateSort);
        case 'Newest First':
            return workingState.cards.sort(helper.reverseDateSort);
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
        case 'Most Common First':
            return workingState.cards.sort(helper.raritySort);
        case 'Least Common First':
            return workingState.cards.sort(helper.reverseRaritySort);
    };
};

// Pagination logic

export const getPageCards = function (cardList, page = workingState.page) {
    workingState.page = page;

    const start = (page - 1) * workingState.resultsPerPage;
    const end = page * workingState.resultsPerPage;

    return cardList.slice(start, end)
}