// Luodaan sekoitettu numerolista
function generateRandomListOfNumbers(rangeStart, rangeEnd) {
	var randomNumbers = [], splicedArray;
	 for (var i = rangeStart; i < rangeEnd; i++) {
		randomNumbers.push(i);
	 }
	 randomNumbers.sort( function() { return 0.5 - Math.random() });
	 return randomNumbers;
}

// Jaetaan numerolista bingoruudukon muotoon
function generateRandomListOfSize(rangeStart, rangeEnd) {
	var shuffledListOfNumbers = generateRandomListOfNumbers(rangeStart, rangeEnd);
	var slicedListOfNumbers = shuffledListOfNumbers.slice(0, 25);
	var splicedListOfNumbers = [];
	while (slicedListOfNumbers.length > 0) {
		splicedArray = slicedListOfNumbers.splice(0, 5);
		splicedListOfNumbers.push(splicedArray);
		console.log(splicedArray);
	}
	return splicedListOfNumbers;
}

// Luodaan bingoruudukot
function generateGrids(numberOfPlayers, rangeStart, rangeEnd) {
	var result = [];
	for(var i = 0; i < numberOfPlayers; i++) {
		console.log(i);
		generateRandomListOfNumbers(rangeStart, rangeEnd);
		generateRandomListOfSize(rangeStart, rangeEnd);
	}
	return result;
}

function generateDefaultGrid(numberOfPlayers, rangeStart, rangeEnd) {
	return generateGrids(4, 1, 75);
}