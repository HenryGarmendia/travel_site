var $ = require('jquery');
// var Person = require('./modules/Person'); // old way or node way
import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes $0 in taxes.");
	}
}

var hendogg = new Person ('Hendogg Garmendia', 'Red');
hendogg.greet();

var jane = new Adult('Jane Smith', 'Pink');
jane.greet();
jane.payTaxes();

$('h1').remove();