class Person {
	constructor(full_name, fav_color) {
		this.name = full_name;
		this.color = fav_color;
	}

	greet() {
		console.log('Hi there, my name is ' + this.name + ' and my favor color is ' + this.color + '.');
	}
}


export default Person;