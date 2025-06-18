import Alpine from 'alpinejs';
import './componentLoader';
import { menu } from './menu';
import {
  barChart1,
  barChart2,
  barChart3,
  lineChart1,
  lineChart2
} from './charts';


window.Alpine = Alpine;

//Side Bar Menu
Alpine.data('menu', menu);


//Charts
Alpine.data('barChart1', barChart1);
Alpine.data('barChart2', barChart2);
Alpine.data('barChart3', barChart3);
Alpine.data('lineChart1', lineChart1);
Alpine.data('lineChart2', lineChart2);

Alpine.start();