function Person(full_name, fav_color) {
	this.name = full_name;
	this.color = fav_color;
	this.greet = function() {
		console.log('Hello, my name is ' + this.name + ' and my favor color is ' + this.color + '.');
	}
}


module.exports = Person;