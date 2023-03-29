const cardsContainer = document.querySelector('.cards-container');

export const renderCards = function (cardList) {
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
                        <img class="animal-image" src="src/images/${card.imgSrc}" alt="${card.imgAlt}">
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