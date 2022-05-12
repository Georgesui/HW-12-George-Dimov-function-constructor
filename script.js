// Есть два вариант решения.
// Вариант № 1

function Hamburger(sandwich) {
	this.sandwich = sandwich;
	this.modifiers = [];
	this.getPrice = () => {
		return this.sandwich.price;
	}
	this.getCalories = () => {
		return this.sandwich.calories;
	}
	this.addModifier = (modification) => {
		this.sandwich.price += modification.price;
		this.sandwich.calories += modification.calories;
		this.modifiers.push(modification);
	}
};

const SIZE_SMALL = {
	price: 50,
	calories: 20
};
const SIZE_MEDIUM = {
	price: 75,
	calories: 30
};
const SIZE_LARGE = {
	price: 100,
	calories: 40
};

const CHEESE = {
	price: 10,
	calories: 20
};
const SALAD = {
	price: 20,
	calories: 5
};
const POTATO = {
	price: 15,
	calories: 10
};
const SPICE = {
	price: 15,
	calories: 0
};
const MAYONEZ = {
	price: 20,
	calories: 5
};

const hamburger = new Hamburger(SIZE_SMALL);

hamburger.addModifier(MAYONEZ);
hamburger.addModifier(SALAD);
hamburger.addModifier(CHEESE);
hamburger.addModifier(POTATO);
hamburger.addModifier(SPICE);

console.log("Price with sauce: " + hamburger.getPrice())
console.log("Calories with sauce: " + hamburger.getCalories())

// Второй вариант. Мне он нравится больше, тк можно выбирать количество начинок 1 строкой и не добавлять модификаторы
// каждый раз, либо не вводить совсем. 

function Burger(burger, ...modifiers) {
	this.burger_size = burger;
	this.modification = modifiers;
	if (this.modification.length === 0) {
		this.getAnotherPrice = function () {
			return this.burger_size.price;
		}
		this.getAnotherCalories = function () {
			return this.burger_size.calories;
		}
	}
	else {
		let newSumOfCalories = this.modification.map((modifiers) => {
			return modifiers.price;
		}).reduce((acc, num) => acc + num)
		let newCaloriesCount = this.modification.map((modifiers) => {
			return modifiers.calories;
		}).reduce((acc, num) => acc + num)
		this.getAnotherPrice = function () {
			return this.burger_size.price + newSumOfCalories;
		}
		this.getAnotherCalories = function () {
			return this.burger_size.calories + newCaloriesCount;
		}
	}
}

const burger = new Burger(SIZE_LARGE, CHEESE, MAYONEZ, SPICE, POTATO, SALAD);

console.log("Price with sauce: " + burger.getAnotherPrice());
console.log("Calories with sauce: " + burger.getAnotherCalories());