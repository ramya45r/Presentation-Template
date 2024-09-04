import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import 'chart.js/auto';
import '../App.css';
import logo from '../images/1724751059275004_2007895434.png'
import Slide from './Slide';

Chart.register(...registerables);

const ChartSlide = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 10, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); 
      }
    };
  }, []);

  return <>
<Slide className="chartslide">

  <canvas ref={chartRef}  className="chart-canvas" />
       <img src={logo} alt="Demo Logo" className="demo-logo" />
  <img src={logo} alt="Watermark" className="watermark" />
</Slide>

  </>
};

export default ChartSlide;
