import $ from 'jquery';
class Modal {

	constructor() {
		this.open_modal_button = $('.open-modal');
		this.modal = $('.modal');
		this.close_modal_button = $('.modal__close');
		this.modal_events();
	}

	modal_events() {
		// clicking the modal button
		this.open_modal_button.click(this.open_modal.bind(this));
		// clicking the x modal button
		this.close_modal_button.click(this.close_modal.bind(this));

		// pushes any key
		$(document).keydown(this.key_press_handler.bind(this));
	}

	key_press_handler(e) {

		if (e.key === "Escape") {
			this.modal.removeClass('modal--is-visible');
		}
	}

	open_modal() {
		this.modal.addClass('modal--is-visible');
		return false; // prevents the browser from scrolling to top
	}

	close_modal() {
		this.modal.removeClass('modal--is-visible');
	}

}

export default Modal;