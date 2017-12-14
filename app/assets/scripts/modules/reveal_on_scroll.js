import $ from 'jquery';

class RevealOnScroll {

	constructor() {
		this.items_reveal = $('.feature-item');
		this.hide_initially();

		console.log(this.items_reveal);
	}

	hide_initially () {
		this.items_reveal.addClass('reveal-item');
	}
}

export default RevealOnScroll;