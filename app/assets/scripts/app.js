import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/reveal_on_scroll';
import StickyHeader from './modules/sticky_header';
import Modal from './modules/modal';


// dynamically add current yeqar
var new_date = new Date();
var current_year = new_date.getFullYear();
$('.stite-footer__year').html(current_year);

var mobile_menu = new MobileMenu(); 
new RevealOnScroll($('.feature-item'), '35%');
new RevealOnScroll($('.testimonial'), '30%');
var sticky_header = new StickyHeader();
var modal = new Modal();