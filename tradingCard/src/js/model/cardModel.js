class Card {
    constructor(animalName, facts, scientificName, height,
        lifespan, habitat, description, imgSrc, habitatColor) {
        this.animalName = animalName;
        this.facts = facts;
        this.scientificName = scientificName;
        this.height = height;
        this.lifespan = lifespan;
        this.habitat = habitat;
        this.description = description;
        this.imgSrc = imgSrc
        this.imgAlt = animalName;
        this.habitatColor = habitatColor;
    }
};

const common = [
    new Card('Spider Monkey',
        'Spider monkeys are named after their spider-like appearance as they hang upside down by their tails.',
        'Ateles',
        '2 feet',
        '25 years',
        'Tropical Rainforests',
        'They are found in tropical forests of Central and South America, from the south of Mexico to Brazil. Spider monkeys have long dexterous tails that they use as a fifth limb to hold on to tree branches. The genus is made up of seven species.',
        'makm-photography-Glm8xUm8Am4-unsplash.jpg',
        'green'
    ),
    new Card('Puma',
        'The puma is the fourth largest cat in the world.',
        'Puma concolor',
        '24 – 35 in.',
        '8 – 13 years',
        'Americas',
        "Pumas hold the world record for animal with the most names, being referred to as puma, cougar, mountain lion, and the list continues with many more names!",
        'puma.jpeg',
        'brown'
    ),
    new Card('Canary',
        "A common pet bird of the finch family.",
        'Serinus canaria domestica',
        '4.7 – 7.9 in.',
        '10 – 12 years',
        'Originated in Macaronesian Islands',
        "The male canary is the better singer compared to its counter part. This is due to the male's song being a method of attracting a female and marking their territory.",
        'canary.jpeg',
        'yellow'
    ),
    new Card('Toucan',
        "There are more that 40 different species of toucan!",
        'Ramphastidae',
        'Up to 24 in.',
        '12 - 20 years',
        'Central and South America',
        "The bright colors of the toucan are actually a clever means of camouflage! Their bright colors alongside the black makes them blend in to the colorful forest plants.",
        'toucan.jpeg',
        'yellow'
    ),
    new Card('Mountain Goat',
        'The mountain goat, also known as the Rocky Mountain Goat, is a sure footed animal that lives on steep mountains.',
        'Oreamnos americanus',
        '40 cm',
        '12 - 18 years',
        'Northwestern North America',
        'The mountain goat can jump up to 12 ft to aid in traversing the steep, treacherous mountain sides!',
        'mountain_goat.jpeg',
        'grey'
    ),
    new Card('Cat',
        'The cat is a small, furry, carnivorous mammal that was domesticated by early humans.',
        'Felis catus',
        '10 in.',
        '12 - 18 years',
        'Worldwide',
        'The cat started being domesticated 10,000 - 12,000 years ago! The cat has an extra organ that allows it taste scent in the air.',
        'cat.jpg',
        'green'
    ),
    new Card('Crow',
        'The crow is an intelligent, medium to large sized, darkly colored bird.',
        'Corvus',
        '16 - 20 in.',
        '10 - 15 years',
        'Worldwide excluding South America',
        'The crow is actually quite intelligent, it has been observed using traffic to crack open nuts to eat! The crow can remember faces and they even mate for life!',
        'crow.jpeg',
        'yellow'
    ),
    new Card('Coyote',
        'The coyote is a medium sized member of the canine family, similar to a wolf.',
        'Canis latrans',
        '24 in.',
        '10 years',
        'Central and North America',
        'The coyote was originally only found in the southwest and the plains of North America, but due to humans killing and reducing the population size of large predators, the coyote has expanded its habitat.',
        'coyote.jpeg',
        'brown'
    ),
    new Card('Bottlenose Dolphin',
        'The bottlenose dolphin is an aquatic mammal that is known for its intelligence.',
        'Tursiops',
        '13 ft.',
        '60 years',
        'Temperate and Tropical Ocean Waters',
        'Since the bottlenose dolphin is a mammal, it is born with fine hair, called lanugo, that falls off soon after birth!',
        'bottlenose_dolphin.jpeg',
        'blue'
    ),
    new Card('Bighorn Sheep',
        'A North American species of sheep known for their large curled horns.',
        'Ovis canadensis',
        '40 in.',
        '15 years',
        'Rocky Mountain slopes and meadows',
        "The bighorn sheep's horn size is a symbol of rank. The bighorn sheep's horns can weigh up to 30 lbs! Male and female bighorn sheep do not live in separate herds.",
        'bighorn_sheep.jpeg',
        'grey'
    ),
];

const uncommon = [
    new Card('Leafcutter Ant',
        "Leafcutter ants have specialized jaws that saw off pieces of leaves.",
        ' Atta cephalotes',
        '2 mm',
        '3-5 weeks',
        'Latin American and Caribbean forest floors',
        "Leafcutter ant is a generic name that encompasses 40+ ant species that chew leaves. They can carry up to 50 times their weight!",
        'leaf_cutter_ant.jpeg',
        'green'
    ),
    new Card('Great White Shark',
        "The great white shark is an apex predator found in coastal waters of every ocean!",
        'Carcharodon carcharias',
        '15 – 16 ft',
        'est. 30 to 70 years',
        'Coastal waters',
        "Despite the ferocious man-eating depiction made by the Steven Spielberg movie 'Jaws,' great white shark attacks are actually rare!",
        'great_white_shark.jpeg',
        'blue'
    ),
    new Card('Armadillo',
        "The armadillo is a barrel shaped animal with bony plates along its back.",
        'Dasypodidae',
        '17 in.',
        '15 years',
        'Warm regions of South America to portions of the United States',
        "The armadillo is Spanish for 'little armored one' due to it being covered in natural bony armor!",
        'armadillo.jpeg',
        'green'
    ),
    new Card('Great Horned Owl',
        "The great horned owl is the largest owl native to the Americas.",
        'Bubo virginianus',
        '35 in.',
        '30 years',
        'Most regions of North America',
        "The great horned owl has a terrible sense of smell, but makes up for that disability with its super hearing. The great horned owl can hear sounds up to ten miles away!",
        'great_horned_owl.jpeg',
        'yellow'
    ),
    new Card('Elk',
        "The elk, like a deer but larger, is one one of the largest species of the Cervidae(deer) family.",
        'Cervus canadensis',
        '9 ft.',
        '15 years',
        'Mountains of North/Central America and East Asia',
        "Despite the elk's great size, it is rather quick and agile. It can run up 40 miles per hour and has an eight ft. vertical jump!",
        'elk.jpeg',
        'green'
    ),
];

const rare = [
    new Card('Mantis Shrimp',
        'The mantis shrimp is well known for its striking force/speed that can boil water.',
        'Stomatopod',
        '4-8 in.',
        '3-6 years',
        'Indian & Pacific Oceans',
        'A small, aggressive marine Crustacean found in tropical and subtropical oceans. They sport vibrant colors and can club prey with the force of a bullet.',
        'mantis.jpg',
        'blue'
    ),
    new Card('Emperor Scorpion',
        'The emperor scorpion is the largest scorpion in the world and glow green or blue under ultraviolet light.',
        'Proteus anguinus',
        '8 in.',
        '6–8 years',
        'West Africa',
        "The emperor scorpion has sensory hairs to detect vibrations in the air and ground so that they can sense prey. The emperor scorpion's sting is normally not lethal.",
        'Scorpion.jpeg',
        'brown'
    ),
    new Card('Greater Bilby',
        'The greater bilby is a rabbit-like nocturnal marsupial that lives in burrows.',
        'Macrotis lagotis',
        '11 to 22 in.',
        '6 - 7 years',
        'Range of Australian habitats',
        'The greater bilby copes with the extreme Australian heat by sleeping during the day and feeding at night. The obtain all of their water from the plants and insects that they feed on.',
        'bilby.jpeg',
        'brown'
    ),
    new Card('Vampire Bat',
        'The vampire bat is a leaf-nosed bat whose food source is animal blood.',
        'Desmodontinae',
        '3 in.',
        '9 years',
        'Central and South America',
        'The vampire bat, unlike some other types of bats, can run and jump at fast speeds! It even has a special thumb to help them take off after feeding.',
        'vampire_bat.jpeg',
        'grey'
    ),
];

const epic = [
    new Card('Olm Salamander',
        'Generations in the dark have caused this salamander to grow skin over its eyes and become blind.',
        'Proteus anguinus',
        '40 cm',
        '58 years',
        'Well oxygenated underground water',
        'The olm salamander is blind and "sees" through weak electromagnetic pulses, sounds, and smells. Locals believe it to be babies of cave dragons.',
        'salamander.jpeg',
        'grey'
    ),
    new Card('Pompeii worm',
        "The pompeii worm's tail can be found resting in water up to 200 degrees fahrenheit!",
        'Alvinella pompejanaconcolor',
        '5 in.',
        'unknown',
        'Hydrothermal vents',
        "The pompeii worm is known as an extremophile, meaning that it thrives in extreme conditions.",
        'pompeii_worm.jpeg',
        'blue'
    ),
    new Card('Okapi',
        'The okapi is also known as the forest giraffe, zebra giraffe, and Congolese giraffe.',
        'Okapia johnstoni',
        '5 - 5.5 ft.',
        '15 - 20 years',
        'Ituri Rainforest, Central Africa',
        'The okapi has a tongue that can grow to 14 inches in length! It is so long that they clean their ears and eyes with it, and even swat insects from their necks!',
        'okapi.jpeg',
        'green'
    ),
];

export const cardList = [
    common.map(card => ({ ...card, rarity: 'Common' })),
    uncommon.map(card => ({ ...card, rarity: 'Uncommon' })),
    rare.map(card => ({ ...card, rarity: 'Rare' })),
    epic.map(card => ({ ...card, rarity: 'Epic' }))
];