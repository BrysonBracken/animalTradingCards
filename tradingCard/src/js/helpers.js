// Sort Functions

// sort by name
export const alphaSort = function (a, b) {
    const nameA = a.animalName.toUpperCase();
    const nameB = b.animalName.toUpperCase();
    if (nameA > nameB) {
        return 1;
    }
    if (nameB > nameA) {
        return -1;
    }
    return 0;
};

export const alphaSortReverse = function (a, b) {
    const nameA = a.animalName.toUpperCase();
    const nameB = b.animalName.toUpperCase();
    if (nameA < nameB) {
        return 1;
    }
    if (nameB < nameA) {
        return -1;
    }
    return 0;
};

// sort by scientific name
export const scientificSort = function (a, b) {
    const nameA = a.scientificName.toUpperCase();
    const nameB = b.scientificName.toUpperCase();
    if (nameA > nameB) {
        return 1;
    }
    if (nameB > nameA) {
        return -1;
    }
    return 0;
};

export const scientificSortReverse = function (a, b) {
    const nameA = a.scientificName.toUpperCase();
    const nameB = b.scientificName.toUpperCase();
    if (nameA < nameB) {
        return 1;
    }
    if (nameB < nameA) {
        return -1;
    }
    return 0;
};

// sort by color
export const colorSort = function (a, b) {
    const nameA = a.habitatColor.toUpperCase();
    const nameB = b.habitatColor.toUpperCase();
    if (nameA > nameB) {
        return 1;
    }
    if (nameB > nameA) {
        return -1;
    }
    return 0;
};

export const dateSort = function (a, b) {
    const numA = a.originalIndex;
    const numB = b.originalIndex;
    if (numA > numB) {
        return 1;
    }
    if (numB > numA) {
        return -1;
    }
    return 0;
};

export const reverseDateSort = function (a, b) {
    const numA = a.originalIndex;
    const numB = b.originalIndex;
    if (numA < numB) {
        return 1;
    }
    if (numB < numA) {
        return -1;
    }
    return 0;
};

const rarityEnum = function (rarityString) {
    switch (rarityString.toLowerCase()) {
        case 'common':
            return 1;
        case 'uncommon':
            return 2;
        case 'rare':
            return 3;
        case 'epic':
            return 4;
    }
};

export const raritySort = function (a, b) {
    const numA = rarityEnum(a.rarity);
    const numB = rarityEnum(b.rarity);
    if (numA > numB) {
        return 1;
    }
    if (numB > numA) {
        return -1;
    }
    return 0;
};

export const reverseRaritySort = function (a, b) {
    const numA = rarityEnum(a.rarity);
    const numB = rarityEnum(b.rarity);
    if (numA < numB) {
        return 1;
    }
    if (numB < numA) {
        return -1;
    }
    return 0;
};