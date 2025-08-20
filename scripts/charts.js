import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export const drawTotalPinPieChart = () => ({
  init() {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(() => {
      const chartElement = document.getElementById('totalpinpiechart');
      if (!chartElement) return;

      const data = google.visualization.arrayToDataTable([
        ['Pins', 'Total Pins Used'],
        ['Used', 7806],
      ]);

      const options = {
        title: 'Total number of pins in the database: 7806',
        is3D: true,
        colors: ['#5bc0de'],
      };

      const chart = new google.visualization.PieChart(chartElement);
      chart.draw(data, options);
    });
  }
});






