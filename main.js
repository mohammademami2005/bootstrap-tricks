import './style/accordion.css';
import './style/alert.css';
import './style/master.css';
import './style/carousel.css';
import './style/offcanvas.css';

import { alert } from './src/alert.js';
import { carousel } from './src/carousel.js';
import { accordion } from './src/accordion.js';
import { offcanvas } from './src/offcanvas.js';

document.addEventListener("DOMContentLoaded", () => {
  alert();
  carousel();
  accordion();
  offcanvas();
});
