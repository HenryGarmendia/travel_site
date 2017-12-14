import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import reveal_on_scroll from './modules/reveal_on_scroll';


// dynamically add current yeqar
var new_date = new Date();
var current_year = new_date.getFullYear();
$('.stite-footer__year').html(current_year);

var mobile_menu = new MobileMenu(); 
var revealOnScroll = new reveal_on_scroll();