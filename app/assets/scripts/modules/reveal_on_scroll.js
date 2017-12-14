import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {

	constructor(el_div, off_set) {
		this.items_reveal = el_div;
		this.offset_percentage = off_set;
		this.hide_initially();
		this.create_waypoints();

		console.log(this.items_reveal);
	}

	hide_initially () {
		this.items_reveal.addClass('reveal-item');
	}

	create_waypoints() {
		var this_obj	= this;
		this.items_reveal.each(function() {
			var current_item = this;
			 new Waypoint({
			 	element: current_item,
			 	handler: function() {
			 		$(current_item).addClass('reveal-item--is-visible');
			 	},
			 	offset: this_obj.offset_percentage
			 });
		});
	}
}

export default RevealOnScroll;