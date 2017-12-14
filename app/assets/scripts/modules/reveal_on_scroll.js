import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {

	constructor() {
		this.items_reveal = $('.feature-item');
		this.hide_initially();
		this.create_waypoints();

		console.log(this.items_reveal);
	}

	hide_initially () {
		this.items_reveal.addClass('reveal-item');
	}

	create_waypoints () {
		this.items_reveal.each(function() {
			var current_item = this;
			 new Waypoint({
			 	element: current_item,
			 	handler: function() {
			 		$(current_item).addClass('reveal-item--is-visible');
			 	},
			 	offset: '85%'
			 });
		});
	}
}

export default RevealOnScroll;