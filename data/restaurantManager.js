class Restaurant {
	constructor(name, type, description, price, cool) {
		this.name = name
		this.type = type
		this.description = description
		this.price = price
		this.cool = cool
	}
}


class RestaurantManager {
	constructor() {
		this.restaurants = [
			new Restaurant("Joe's Diner", "Vegan", "Food for the family.", -10, 0),
			new Restaurant("McDonalds", "Vegan", "Ronald's home.", -5, -5),
			new Restaurant("Burger King", "Vegan", "BK yo belly.", -5, -5),
			new Restaurant("Old Town Bakery", "Vegan", "Old fashioned sweets.", -15, 10),
			new Restaurant("Monumental Fried Chicken", "Vegan", "Bwuk bwuk", -10, 0),
			new Restaurant("Cheap n' Chillies", "Vegan", "Veganism", -25, 5),
			new Restaurant("Rabbit Food Source", "Gluten", "Your favorite garden food.", -40, 20),
			new Restaurant("Willy Billies", "Vegan", "Willy your Billy.", -15, 5),
			new Restaurant("Chilli Billies", "Vegan", "Chilli your Dilly.", -20, 5),
			new Restaurant("Dilli Billies", "Vegan", "Dilly your Zilli.", -20, 5),
			new Restaurant("Vegan Cookie Doughhouse", "Gluten", "Gluten free too.", -35, 15),
		]
	}

	getRandomRestaurants() {
		var restaurantArray = [];
		while (restaurantArray.length < 3){
	    var restaurant = this.restaurants[Math.floor(Math.random()* this.restaurants.length)];
			if(!(restaurantArray.includes(restaurant))){
				restaurantArray.push(restaurant)
			}
		}

		return restaurantArray;
	}
}
