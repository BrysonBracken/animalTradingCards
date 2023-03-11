'use strict';

// elements

const cardsContainer = document.querySelector('.cards-container');

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
        'Found in tropical forests of Central and South America, from the south of Mexico to Brazil. Spider monkeys have long dexterous tails that they use as a fifth limb to hold on to tree branches. The genus is made up of seven species.',
        'makm-photography-Glm8xUm8Am4-unsplash.jpg',
        'Spider Monkey',
        'green'
    ),
    new Card('Mantis Shrimp',
        'The mantis shrimp is well known for their striking force/speed that can boil water.',
        'Stomatopod',
        '4-8 in.',
        '3-6 years',
        'Indian & Pacific Oceans',
        'A small, aggressive marine Crustacean found in tropical and subtropical oceans. They sport vibrant colors and can club prey with the force of a bullet.',
        'mantis.jpg',
        'Mantis Shrimp',
        'blue'
    )
];

cards.forEach(function (card, i) {
    const html = `
        <div class="card-outline habitat-${card.habitatColor}">
            <!-- Card animal name -->
            <h2>${card.animalName}</h2>
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
        </div>`;

    cardsContainer.insertAdjacentHTML('beforeend', html)
})
