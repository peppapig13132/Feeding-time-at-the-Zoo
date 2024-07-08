const fs = require('fs');

const animalFoodMapping = {
	cat: 'fish',
	dog: 'dogfood',
	tiger: 'deer',
	rabbit: 'carrot',
	donkey: 'hay',
};

const foodAnimalMapping = {
	fish: 'cat',
	dogfood: 'dog',
	deer: 'tiger',
	carrot: 'rabbit',
	hay: 'donkey',
};

function getLeftoverFood(animalsFilePath, foodFilePath) {
	const animals = fs.readFileSync(animalsFilePath, 'utf-8')
                  .split('\n')
                  .map(line => line.trim())
                  .filter(line => line !== '');
	const food = fs.readFileSync(foodFilePath, 'utf-8')
                  .split('\n')
                  .map(line => line.trim())
                  .filter(line => line !== '');

	// Initialize a map to keep track of food items
	const foodCount = {};
	for (const item of food) {
		if (!foodCount[item]) {
			foodCount[item] = 0;
		}
		foodCount[item]++;
	}
  console.log(`Food (${food.length}):`, foodCount);

  const animalCount = {};
	for (const animal of animals) {
		if (!animalCount[animal]) {
			animalCount[animal] = 0;
		}
		animalCount[animal]++;
	}
  console.log(`Animals: (${animals.length}):`, animalCount);

	// animal array based on food
	let animalsBasedOnFood = [];
	for (const item of food) {
		animalsBasedOnFood.push(foodAnimalMapping[item]);
	}

	let remainingAnimalsBasedOnFood = [...animalsBasedOnFood];
	
	animals.forEach(item => {
		let index = remainingAnimalsBasedOnFood.indexOf(item);
		if (index !== -1) {
			remainingAnimalsBasedOnFood.splice(index, 1);
		}
	});

	let remainingFoods = [];
	remainingAnimalsBasedOnFood.map(item => remainingFoods.push(animalFoodMapping[item]));

	return remainingFoods.join('-');
}

const remainingFoods = getLeftoverFood('animals.txt', 'food.txt');
console.log('\nResult:');
console.log(remainingFoods);
