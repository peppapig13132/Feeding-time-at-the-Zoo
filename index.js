const fs = require('fs');

const foodMapping = {
	cat: 'fish',
	dog: 'dogfood',
	tiger: 'deer',
	rabbit: 'carrot',
	donkey: 'hay',
};

function getLeftoverFood(animalsFilePath, foodFilePath) {
	const animals = fs.readFileSync(animalsFilePath, 'utf-8').trim().split('\n');
	const food = fs.readFileSync(foodFilePath, 'utf-8').trim().split('\n');

	// Initialize a map to keep track of food items
	const foodCount = {};
	for (const item of food) {
		if (!foodCount[item]) {
			foodCount[item] = 0;
		}
		foodCount[item]++;
	}
  console.log(foodCount);

  const animalCount = {};
	for (const animal of animals) {
		if (!animalCount[animal]) {
			animalCount[animal] = 0;
		}
		animalCount[animal]++;
	}
  console.log(animalCount);

	// Feed the animals
	for (const animal of animals) {
		const requiredFood = foodMapping[animal];
		if (foodCount[requiredFood] > 0) {
			foodCount[requiredFood]--;
		}
	}

	// Collect remaining food items
	const leftovers = [];
	for (const [item, count] of Object.entries(foodCount)) {
		for (let i = 0; i < count; i++) {
			leftovers.push(item);
		}
	}

	return leftovers.join('-');
}

// Example usage
const leftoverFoodString = getLeftoverFood('animals.txt', 'food.txt');
console.log(leftoverFoodString);
