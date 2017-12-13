var $ = require('jquery');
var Person = require('./modules/Person');

alert('Testing 123');

var hendogg = new Person ('Hendogg Garmendia', 'Red');

hendogg.greet();

var jane = new Person('Jane', 'Pink');

jane.greet();

$('h1').remove();