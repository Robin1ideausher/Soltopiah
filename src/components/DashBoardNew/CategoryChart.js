"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function CategoryChart() {
  const [data, setData] = useState({
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['Meditation', 'Yoga', 'Therapy'],
      responsive: [{
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      colors: ["#393E59", "#D4DAF4", "#B8C1EC",],
      dataLabels: {
        enabled: false 
      }
    },
    series: [55, 30, 15] // Example data, update it as per your requirements
  });

  return (
    <div className='w-full bg-white rounded-xl p-3'>
      <Chart
        options={data.options}
        series={data.series}
        type="pie"
        width="100%"
        height="200"
      />
    </div>
  );
}
