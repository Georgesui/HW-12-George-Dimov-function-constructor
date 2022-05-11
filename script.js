// const burgerTypesInMenu = [
// 	{
// 		burgerSize: 'size_smaill',
// 		price: 50 + ' UAH',
// 		calories: 20 + ' calories'
// 	},
// 	{
// 		burgerSize: 'size_medium',
// 		price: 75 + ' UAH',
// 		calories: 30 + ' calories'
// 	},
// 	{
// 		burgerSize: 'size_large',
// 		price: 100,
// 		calories: 40
// 	}];

// const findBurgerSize = (sizes) => {
// 	return sizes.map((orderedBurgerSize) => {
// 		console.log(orderedBurgerSize)
// 		return orderedBurgerSize
// 	})
// }


const size_smaill = {
	price: 50 + ' UAH',
	calories: 20 + ' calories'
};
const size_medium = {
	price: 75 + ' UAH',
	calories: 30 + ' calories'
};
const size_large = {
	price: 100,
	calories: 40
}

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

function Hamburger(burger, ...modifiers) {
	this.burger_size = burger;
	this.modification = modifiers;
	console.log(this.modification)
	if (this.modification.length === 0) {
		this.getPrice = function () {
			return this.burger_size.price
		}
		this.getCalories = function () {
			return this.burger_size.calories + this.modification.calories
		}
	}
	else {
		let newSum = this.modification.map((modifiers) => {
			return modifiers.price
		}).reduce((acc, num) => acc + num)
		let newCalories = this.modification.map((modifiers) => {
			return modifiers.calories
		}).reduce((acc, num) => acc + num)
		this.getPrice = function () {
			return this.burger_size.price + newSum
		}
		this.getCalories = function () {
			return this.burger_size.calories + newCalories
		}
	}
}
const hamburger = new Hamburger(size_large, CHEESE, MAYONEZ)
console.log(hamburger.getPrice())
console.log(hamburger.getCalories())