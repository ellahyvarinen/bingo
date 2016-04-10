// Luodaan sekoitettu numerolista
function generateRandomListOfNumbers(rangeStart, rangeEnd) {
    'use strict';
    const randomNumbers = [];

    for (let i = rangeStart; i < rangeEnd; i++) {
        randomNumbers.push(i);
    }
    randomNumbers.sort(function () {
        return 0.5 - Math.random();
    });
    return randomNumbers;
}

// Jaetaan numerolista bingoruudukon muotoon
function generateRandomListOfSize(rangeStart, rangeEnd) {
    'use strict';
    const shuffledListOfNumbers = generateRandomListOfNumbers(rangeStart, rangeEnd);
    const slicedListOfNumbers = shuffledListOfNumbers.slice(0, 25);
    const splicedListOfNumbers = [];
    let splicedArray = [];

    while (slicedListOfNumbers.length > 0) {
        splicedArray = slicedListOfNumbers.splice(0, 5);
        splicedListOfNumbers.push(splicedArray);
        console.log(splicedArray);
    }
    return splicedListOfNumbers;
}

// Luodaan bingoruudukot
function generateGrids(numberOfPlayers, rangeStart, rangeEnd) {
    'use strict';
    const result = [];
    const range = rangeEnd - rangeStart;

    // Syötteiden Virhetarkistus
    if (numberOfPlayers >= 1) {
        if (range >= 25) {
            // Maksimi rangeEnd on nyt 200 koska liian isolla kaatuu selain
            if (rangeStart >= 1 && rangeEnd <= 200) {
                // Jos kaikki on kunnossa => loop
                for (let i = 0; i < numberOfPlayers; i++) {
                    console.log(i);
                    generateRandomListOfNumbers(rangeStart, rangeEnd);
                    result.push(generateRandomListOfSize(rangeStart, rangeEnd));
                }
                return result;
            } else if (rangeStart < 1) {
                console.log('Range Start must be more than 0 now it is ' + rangeStart);
                return false;
            } else if (rangeEnd > 200) {
                console.log('Range End must be less than 200 now it is ' + rangeEnd);
                return false;
            } else {
                console.log('something went wrong');
                return false;
            }
        } else if (rangeStart > rangeEnd) {
            console.log('rangeStart must be less than rangeEnd');
            return false;
        } else if (range < 25) {
            console.log('Not enough range, current range = ' + range + ', must be 25 or more');
            return false;
        } else {
            console.log('something went wrong');
            return false;
        }

    } else {
        return console.log('Number of players must be more than ' + numberOfPlayers);
    }
}


// Aloittaa pelin
// startGame() ehkä selkeämpi funktion nimi kuin generateDefaultGrid()
function startGame() {
    'use strict';
    return generateGrids(1, 1, 75);
}