function Hamburger(sandwich) {
	this.sandwich = sandwich;
	this.modifiers = [];
};

Hamburger.prototype.getPrice = function () {
	return this.sandwich.price;
}

Hamburger.prototype.getCalories = function () {
	return this.sandwich.calories;
}

Hamburger.prototype.addModifier = function (modification) {
	this.sandwich.price += modification.price;
	this.sandwich.calories += modification.calories;
	this.modifiers.push(modification);
}

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
	name: 'CHEESE',
	price: 10,
	calories: 20
};
const SALAD = {
	name: 'SALAD',
	price: 20,
	calories: 5
};
const POTATO = {
	name: 'POTATO',
	price: 15,
	calories: 10
};
const SPICE = {
	name: 'SPICE',
	price: 15,
	calories: 0
};
const MAYONEZ = {
	name: 'MAYONEZ',
	price: 20,
	calories: 5
};

const hamburger = new Hamburger(SIZE_SMALL);

hamburger.addModifier(MAYONEZ);
hamburger.addModifier(SALAD);
hamburger.addModifier(CHEESE);
hamburger.addModifier(POTATO);
hamburger.addModifier(SPICE);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Calories with sauce: " + hamburger.getCalories());