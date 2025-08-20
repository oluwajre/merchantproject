import Alpine from 'alpinejs';
import './componentLoader';
import { menu } from './menu';
import { drawTotalPinPieChart } from './charts';


window.Alpine = Alpine;

//Side Bar Menu
Alpine.data('menu', menu);


//Charts
Alpine.data('totalPinPieChart', drawTotalPinPieChart);

Alpine.start();