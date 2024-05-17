"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function GuidesPieChart() {
  const [data, setData] = useState({
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['Jane Cooper', 'Wade Warren', 'Esther Howard','Jenny Wilson','Brooklyn Simmons'],
      responsive: [{
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      colors: ["#AE445A", "#BE697B", "#CE8F9C",'#CE8F9C','#A37C92'],
      dataLabels: {
        enabled: false 
      }
    },
    series: [25, 30, 10,15,20] // Example data, update it as per your requirements
  });

  return (
    <div className='w-full bg-white rounded-xl p-3'>
      <Chart
        options={data.options}
        series={data.series}
        type="pie"
        width="100%"
        height="500"
      />
    </div>
  );
}
