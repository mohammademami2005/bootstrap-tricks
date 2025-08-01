import './style/accordion.css';
import './style/alert.css';
import './style/master.css';
import './style/carousel.css';
import './style/offcanvas.css';

import { alert } from './js/alert.js';
import { carousel } from './js/carousel.js';
import { accordion } from './js/accordion.js';
import { offcanvas } from './js/offcanvas.js';

document.addEventListener("DOMContentLoaded", () => {
  alert();
  carousel();
  accordion();
  offcanvas();
});
