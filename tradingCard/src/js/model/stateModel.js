import { cardList } from "./cardModel";
import * as helper from '../helpers'

export const state = {
    sortMethod: 'Oldest Arrivals',
    cards: cardList,
};

export const findCards = function (query) {
    const cardResults = [];
    state.cards.forEach(card => {
        if (card.animalName.toLowerCase().includes(query)) {
            cardResults.push(card);
        };
    });
    return cardResults;
};

export const sortCards = function (choice) {
    state.sortMethod = choice
    const cardsClone = structuredClone(state.cards);
    switch (choice) {
        case 'Oldest Arrivals':
            return cardsClone;
        case 'Newest Arrivals':
            return cardsClone.reverse();
        case 'A-Z':
            return cardsClone.sort(helper.alphaSort);
        case 'Z-A':
            return cardsClone.sort(helper.alphaSortReverse);
        case 'Scientific Name A-Z':
            return cardsClone.sort(helper.scientificSort);
        case 'Scientific name Z-A':
            return cardsClone.sort(helper.scientificSortReverse);
        case 'Color':
            return cardsClone.sort(helper.colorSort);
    };
};