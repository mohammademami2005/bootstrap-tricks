import './style/accordion.css';
import './style/alert.css';
import './style/master.css';
import './style/carousel.css';
import './style/offcanvas.css';

import { alert } from './alert.js';
import { carousel } from './carousel.js';
import { accordion } from './accordion.js';
import { offcanvas } from './offcanvas.js';

export function app() {
  alert()
  carousel()
  accordion()
  offcanvas()
}
app()