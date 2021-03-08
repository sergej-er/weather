import React from 'react';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';

export default function WeatherChart({ forecast }) {
  function getWeekday(date) {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'short',
    });
  }

  const data = {
    labels: forecast.map((o) => getWeekday(o.date)),
    datasets: [
      {
        label: 'Maximum temperature',
        data: forecast.map((o) => o.max),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Minimum temperature',
        data: forecast.map((o) => o.min),
        fill: false,
        backgroundColor: 'rgb(132, 99, 255)',
        borderColor: 'rgba(132, 99, 255, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            autoSkip: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            autoSkip: false,
          },
        },
      ],
    },
    maintainAspectRatio: false,
    responsive: true,
  };
  return (
    <div className='w-full pt-16 pb-2 h-1/2'>
      <div className='header'>
        <h1 className='text-xl text-center md:text-2xl lg:text-3xl title dark:text-primary text-primary-dark'>
          Forecast
        </h1>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}
