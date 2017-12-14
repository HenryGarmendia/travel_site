import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/reveal_on_scroll';
import StickyHeader from './modules/sticky_header';


// dynamically add current yeqar
var new_date = new Date();
var current_year = new_date.getFullYear();
$('.stite-footer__year').html(current_year);

var mobile_menu = new MobileMenu(); 
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '60%');
var sticky_header = new StickyHeader();