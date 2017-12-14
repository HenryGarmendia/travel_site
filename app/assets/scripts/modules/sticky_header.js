import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {

	constructor() {
		this.site_header = $('.site-header');
		this.hero_target = $('.large-hero__title');
		this.header_waypoint();

	}

	header_waypoint() {
		var this_obj = this;
		new Waypoint({
			element: this.hero_target[0],
			handler: function(direction) {
				if (direction == 'down') {
					this_obj.site_header.addClass('site-header--dark');
				} else {
					this_obj.site_header.removeClass('site-header--dark');
				}
			}
		});
	}
}

export default StickyHeader;