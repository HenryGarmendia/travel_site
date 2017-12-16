import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {

	constructor() {
		this.lazy_images 		= $('.lazy-load');
		this.site_header 		= $('.site-header');
		this.hero_target 		= $('.large-hero__title');
		this.header_waypoint();
		this.page_sections 	= $('.page-section');
		this.header_links 	= $('.primary-nav a');
		this.page_sections_waypoint();
		this.add_smooth_scrolling();
		this.refresh_waypoint();
	}

	refresh_waypoint() {
		this.lazy_images.on('load', function() {
			Waypoint.refreshAll();
		});
	}

	add_smooth_scrolling() {
		this.header_links.smoothScroll();
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

	page_sections_waypoint() {
		var this_obj = this;
		this.page_sections.each(function() {
			var	current_page_section = this;
			new Waypoint({
				element: current_page_section,
				handler: function(direction) {
					if (direction == "down") {
						var matching_header_link = current_page_section.getAttribute('data-matching-link');
						this_obj.header_links.removeClass('is-current-link');
						$(matching_header_link).addClass('is-current-link');
					}
				},
				offset: "-10%"
			});

			new Waypoint({
				element: current_page_section,
				handler: function(direction) {
					if (direction == "up") {
						var matching_header_link = current_page_section.getAttribute('data-matching-link');
						this_obj.header_links.removeClass('is-current-link');
						$(matching_header_link).addClass('is-current-link');
					}
				},
				offset: "-30%"
			});
		});
	}
}

export default StickyHeader;