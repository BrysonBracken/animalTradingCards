'use strict';

// elements

const cardsContainer = document.querySelector('.cards-container');
const sortContainer = document.querySelector('.sort-modal');
const overlay = document.querySelector('.overlay');
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('.search-button');
const homeButton = document.querySelector('.home');
const sortButton = document.querySelector('#sort');
const sortOptions = document.querySelector('.sort-options');
const sortItems = document.querySelectorAll('.sort-item');

// variables

let searchText = '';
let sortChosen = 'Oldest Arrivals'


// Sort Functions



// sort by name
const alphaSort = function (a, b) {
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

const alphaSortReverse = function (a, b) {
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
const scientificSort = function (a, b) {
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

const scientificSortReverse = function (a, b) {
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
const colorSort = function (a, b) {
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

// Card Object

class Card {
    constructor(animalName, facts, scientificName, height,
        lifespan, habitat, description, imgSrc, imgAlt, habitatColor) {
        this.animalName = animalName;
        this.facts = facts;
        this.scientificName = scientificName;
        this.height = height;
        this.lifespan = lifespan;
        this.habitat = habitat;
        this.description = description;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
        this.habitatColor = habitatColor;
    }
}

// Dynamically creating card
const cards = [
    new Card('Spider Monkey',
        'Spider monkeys are named after their spider-like appearance as they hang upside down by their tails.',
        'Ateles',
        '2 feet',
        '25 years',
        'Tropical rainforests',
        'They are found in tropical forests of Central and South America, from the south of Mexico to Brazil. Spider monkeys have long dexterous tails that they use as a fifth limb to hold on to tree branches. The genus is made up of seven species.',
        'makm-photography-Glm8xUm8Am4-unsplash.jpg',
        'Spider Monkey',
        'green'
    ),
    new Card('Mantis Shrimp',
        'The mantis shrimp is well known for its striking force/speed that can boil water.',
        'Stomatopod',
        '4-8 in.',
        '3-6 years',
        'Indian & Pacific Oceans',
        'A small, aggressive marine Crustacean found in tropical and subtropical oceans. They sport vibrant colors and can club prey with the force of a bullet.',
        'mantis.jpg',
        'Mantis Shrimp',
        'blue'
    ),
    new Card('Olm Salamander',
        'Generations in the dark have caused this salamander to grow skin over its eyes and become blind.',
        'Proteus anguinus',
        '40 cm',
        '58 years',
        'Well oxygenated underground water',
        'The olm salamander is blind and "sees" through weak electromagnetic pulses, sounds, and smells. Locals believe it to be babies of cave dragons.',
        'salamander.jpeg',
        'Olm Salamander',
        'grey'
    ),
    new Card('Emperor Scorpion',
        'The Emperor scorpion is the largest scorpion in the world and glow green or blue under ultraviolet light.',
        'Proteus anguinus',
        '8 in.',
        '6–8 years',
        'West Africa',
        "The Emperor scorpion has sensory hairs to detect vibrations in the air and ground so that they can sense prey. The Emperor scorpion's sting is normally not lethal.",
        'Scorpion.jpeg',
        'Emperor Scropion',
        'brown'
    ),
    new Card('Puma',
        'The puma is the fourth largest cat in the world.',
        'Puma concolor',
        '24 – 35 in.',
        '8 – 13 years',
        'Americas',
        "Pumas hold the world record for animal with the most names, being referred to as puma, cougar, mountain lion, and the list continues with many more names!",
        'puma.jpeg',
        'Puma',
        'brown'
    ),
    new Card('Pompeii worm',
        "Normally the pompeii worm's tail can be found resting in water up to 200 degrees farenheit!",
        'Alvinella pompejanaconcolor',
        '5 in.',
        'unknown',
        'Hydrothermal vents',
        "The pompeii worm is known as an extremophile, meaning that it thrives in extreme conditions.",
        'pompeii_worm.jpeg',
        'Pompeii worm',
        'red'
    ),
    new Card('Canary',
        "A common pet bird of the finch family.",
        'Serinus canaria domestica',
        '4.7 – 7.9 in.',
        '10 – 12 years',
        'Originated in Macaronesian Islands',
        "The male canary is the better singer compared to its counter part. This is due to the male's song being a method of attracting a female and marking their territory.",
        'canary.jpeg',
        'Canary',
        'yellow'
    ),
    new Card('Leafcutter Ant',
        "Leafcutter ants have specialized jaws that saw off pieces of leaves.",
        ' Atta cephalotes',
        '2 mm',
        '3-5 weeks',
        'Latin American and Caribbean forest floors',
        "Leafcutter ant is a generic name that encompasses 40+ ant species that chew leaves. They can carry up to 50 times their weight!",
        'leaf_cutter_ant.jpeg',
        'Leafcutter Ant',
        'green'
    ),
    new Card('Great White Shark',
        "The Great White Shark is an apex predator found coastal waters of every ocean!",
        'Carcharodon carcharias',
        '15 – 16 ft',
        'est. 30 to 70 years',
        'Coastal waters',
        "Despite the ferocious man-eating depiction made by the Steven Spielberg movie 'Jaws,' Great White Shark attacks are actually rare!",
        'great_white_shark.jpeg',
        'Great White Shark',
        'blue'
    ),
    new Card('Toucan',
        "There are more that 40 different species of Toucan!",
        'Ramphastidae',
        'Up to 24 in.',
        '12 - 20 years',
        'Central and South America',
        "The bright colors of the Toucan are actually a clever means of camouflage! Their bright colors alongside the black makes them blend in to the colorful forest plants.",
        'toucan.jpeg',
        'Toucan',
        'yellow'
    ),
    new Card('Mountain Goat',
        'The Mountain Goat, also known as the Rocky Mountain Goat, is a sure footed animal that lives on steep mountains.',
        'Oreamnos americanus',
        '40 cm',
        '12 - 18 years',
        'Northwestern North America',
        'The Mountain Goat can jump up to 12 ft to aid in traversing the steep, treacherous mountain sides!',
        'mountain_goat.jpeg',
        'Mountain Goat',
        'grey'
    ),
    new Card('Greater Bilby',
        'The Greater Bilby is a rabbit-like nocturnal marsupial that lives in burrows.',
        'Macrotis lagotis',
        '11 to 22 in.',
        '6 - 7 years',
        'Range of Australian habitats',
        'The Greater Bilby copes with the extreme Australian heat by sleeping during the day and feeding at night. The obtain all of their water from the plants and insects that they feed on.',
        'bilby.jpeg',
        'Bilby',
        'red'
    ),
];

const displayCards = function (cardList) {
    let html = '';
    cardsContainer.innerHTML = html;
    if (cardList.length) {
        cardList.forEach(function (card, i) {
            html = `
                <div class="card-outline habitat-${card.habitatColor}">
                    
                    <!-- Card animal name -->
                    <h2 class="title">${card.animalName}</h2>
                    <div class="card-inner">
                        <!-- Card animal picture -->
                        <img class="animal-image" src="images/${card.imgSrc}" alt="${card.imgAlt}">
                        <div class="info-outline">
                            <!-- Card animal facts -->
                            <p class="fact">${card.facts}</p>
                            <hr>
                            <ul>
                                <!-- Card animal data points -->
                                <li><span>Scientific Name</span>: ${card.scientificName}</li>
                                <li><span>Average Height</span>: ${card.height}</li>
                                <li><span>Average Lifespan</span>: ${card.lifespan}</li>
                                <li><span>Habitat</span>: ${card.habitat}</li>
                            </ul>
                            <hr>
                            <!-- Card animal description -->
                            <p class="description">${card.description}</p>
                        </div>
                    </div>
                </div>`;

            cardsContainer.insertAdjacentHTML('beforeend', html);
        });
    } else {
        html = '<p>No cards found</p>';
        cardsContainer.insertAdjacentHTML('beforeend', html);
    }
};

displayCards(cards);

// Searchbar
function searchEnter(e) {
    if (e.keyCode === 13) {
        searchFunc();
    }
};

const searchFunc = function () {
    const cardList = [];
    searchText = searchInput.value.toLowerCase();
    cards.forEach(function (card, i) {
        if (card.animalName.toLowerCase().includes(searchText)) {
            console.log(card.animalName);
            cardList.push(card)
        }
    })
    displayCards(cardList);
};

// Sort Feature

const openSortModal = function () {
    sortContainer.classList.remove('hidden');
    overlay.classList.remove('hidden');
    overlay.classList.add('sort-overlay');

    sortItems.forEach(item => {
        item.classList.remove('chosen');
        if (item.textContent === sortChosen) item.classList.add('chosen');
    });

};

const closeSortModal = function () {
    sortContainer.classList.add('hidden');
    overlay.classList.add('hidden');
    overlay.classList.remove('sort-overlay');
};

const sortFunc = function (item) {
    const cardsClone = structuredClone(cards);
    sortChosen = item.textContent;
    switch (sortChosen) {
        case 'Oldest Arrivals':
            displayCards(cards);
            break;
        case 'Newest Arrivals':
            displayCards(cardsClone.reverse());
            break;
        case 'A-Z':
            displayCards(cardsClone.sort(alphaSort));
            break;
        case 'Z-A':
            displayCards(cardsClone.sort(alphaSortReverse));
            break;
        case 'Scientific Name A-Z':
            displayCards(cardsClone.sort(scientificSort));
            break;
        case 'Scientific name Z-A':
            displayCards(cardsClone.sort(scientificSortReverse));
            break;
        case 'Color':
            displayCards(cardsClone.sort(colorSort));
    }
    closeSortModal();
};

// Event Listeners

searchButton.addEventListener('click', searchFunc);
homeButton.addEventListener('click', e => displayCards(cards));
sortButton.addEventListener('click', openSortModal);
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSortModal() });
sortOptions.addEventListener('click', (e) => sortFunc(e.target));
overlay.addEventListener('click', (e) => {
    if (overlay.classList.contains('sort-overlay')) closeSortModal();
});