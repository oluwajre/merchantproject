import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables);

export const barChart1 = () => {
  return {
    chart: null,
    initChart() {
      const ctx = document.getElementById('barChart1').getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['2 days ago', 'Yesterday', 'Today'],
          datasets: [{
            label: 'Sales',
            data: [0, 5, 0],
            backgroundColor: '#92bfe9',
            barPercentage: 0.4,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              categoryPercentage: 0.2,
              barPercentage: 0.3,
              ticks: {
                color: '#f5f5f5',
                maxRotation: 0,
                minRotation: 0,
              },
              grid: {
                color: '',
            }
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#f5f5f5',
              },
              grid: {
                color: 'rgba(245, 245, 245, 0.3)',
              }
            }
          },
          plugins: {
            legend: {
              display: false,
            }
          }
        }
      });
    }
  }
};

export const lineChart1 = () => {
  return {
    chart: null,
    initChart() {
      const ctx = document.getElementById('lineChart1').getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2 days ago', 'Yesterday', 'Today'],
          datasets: [{
            label: 'Profit',
            data: [0, 0, 0],
            fill: false,
            borderColor: '#e7c583',
            tension: 0.3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
              min: -1,
              max: 1,
              ticks: {
                color: '#f5f5f5',
                stepSize: 0.2
              },
              grid: {
                color: 'rgba(0, 0, 0, 0.1)'
              }
            },
            x: {
              ticks: {
                color: '#f5f5f5'
              },
              grid: {
                color: ''
              }
            }
          },
          plugins: {
            legend: {
              display: false,
            }
          }
        }
      });
    }
  };
};

export const barChart2 = () => {
  return {
    chart: null,
    initChart() {
      const ctx = document.getElementById('barChart2').getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Hec', 'Cable', 'Airtime', 'Data'],
          datasets: [
            {
                label: 'Sales A',
                data: [30000, 120000, 0, 5000],
                backgroundColor: 'rgba(211,208,216,255)',
                barPercentage: 1.0,
            },
            {
                label: 'Sales B',
                data: [27000, 117000, 0, 5000],
                backgroundColor: '#92bfe9',
                barPercentage: 1.0,
            },
        ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              categoryPercentage: 0.6,
              barPercentage: 0.5,
              ticks: {
                color: '#f5f5f5',
                maxRotation: 0,
                minRotation: 0,
              },
              grid: {
                color: '',
            }
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#f5f5f5',
              },
              grid: {
                color: 'rgba(245, 245, 245, 0.3)',
              }
            }
          },
          plugins: {
            legend: {
              display: false,
            }
          }
        }
      });
    }
  }
};

export const lineChart2 = () => {
  return {
    chart: null,
    initChart() {
      const ctx = document.getElementById('lineChart2').getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11],
          datasets: [{
            label: 'Profit',
            data: [0, 600, 400, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            fill: false,
            borderColor: '#92bfe9',
            tension: 0.3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              title: {
                    display: true,
                    text: 'Sale Reports',
                    color: '#0d0c22',
                    font: {
                    size: 12,
                    weight: 'normal'
                    },
                    padding: {
                        bottom: 5
                    }
                },
              beginAtZero: true,
              ticks: {
                color: '#0d0c22',
              },
              grid: {
                color: 'rgba(0, 0, 0, 0.1)'
              }
            },
            x: {
                title: {
                    display: true,
                    text: 'Days of the Month',
                    color: '#0d0c22',
                    font: {
                    size: 12,
                    weight: 'normal'
                    },
                    padding: {
                        top: 5
                    }
                },
              ticks: {
                color: '#0d0c22'
              },
              grid: {
                color: ''
              }
            }
          },
          plugins: {
            legend: {
              display: false,
            }
          }
        }
      });
    }
  };
};

export const barChart3 = () => {
  return {
    chart: null,
    initChart() {
      const ctx = document.getElementById('barChart3').getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['January', 'Febuary', 'March', 'April', 'May', 'June'],
          datasets: [
            {
                label: 'Sales A',
                data: [0, 0, 100, 0, 2100, 1000],
                backgroundColor: '#92bfe9',
                barPercentage: 1.0,
            },
            {
                label: 'Sales B',
                data: [0, 0, 120, 300, 250, 50],
                backgroundColor: 'rgb(251, 141, 7, 0.65)',
                barPercentage: 1.0,
            },
            {
                label: 'Sales C',
                data: [200, 0, 0, 0, 1100, 0],
                backgroundColor: '#ec93b7',
                barPercentage: 1.0,
            },
        ]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
                title: {
                    display: true,
                    text: 'Sales (₦)',
                    color: '#0d0c22',
                    font: {
                    size: 12,
                    weight: 'normal'
                    },
                    padding: {
                        top: 5
                    }
                },
              categoryPercentage: 0.6,
              barPercentage: 0.5,
              ticks: {
                color: '#0d0c22',
                maxRotation: 0,
                minRotation: 0,
              },
              grid: {
                color: '#f5f5f5',
            }
            },
            y: {
                title: {
                    display: true,
                    text: 'Month',
                    color: '#0d0c22',
                    font: {
                    size: 12,
                    weight: 'normal'
                    },
                    padding: {
                        bottom: 5
                    }
                },
              beginAtZero: true,
              ticks: {
                color: '#0d0c22',
              },
              grid: {
                color: '#f5f5f5',
              }
            }
          },
          plugins: {
            legend: {
              display: false,
            }
          }
        }
      });
    }
  }
};

export const totalPinPieChart = () => {
  return {
    chart: null,
    initChart() {
      const ctx = document.getElementById('totalPinPieChart').getContext('2d');

      this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Used'],
          datasets: [{
            data: [7805], // total pins used
            backgroundColor: ['#5BC0DE'],
            borderWidth: 0,
          }]
        },
        options: {
          cutout: '40%',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              enabled: true,
              callbacks: {
                label: (context) => {
                  const value = context.raw;
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = ((value / total) * 100).toFixed(1);
                  return `${value.toLocaleString()} (${percentage}%)`;
                }
              }
            },
            legend: {
              display: true,
              position: 'right',
              labels: {
                usePointStyle: true,
                pointStyle: 'circle',
              }
            },
            datalabels: {
              display: true,
              color: '#fff',
              font: {
                weight: 'bold',
                size: 18
              },
              formatter: () => '100%'
            }
          }
        },
        plugins: [
          ChartDataLabels,
          {
            id: 'shadowPlugin',
            beforeDraw(chart) {
              const ctx = chart.ctx;
              ctx.save();
              ctx.shadowColor = '#2c7a94';
              ctx.shadowBlur = 15;
              ctx.shadowOffsetY = 15;
              ctx.fill();
              ctx.restore();
            }
          }
        ]
      });

      // Title element
      const titleEl = document.getElementById('totalPinPieChart-title');
      if (titleEl) {
        titleEl.innerHTML = `<strong>Total number of pins in the database:</strong> 7,805`;
      }
    }
  };
};



