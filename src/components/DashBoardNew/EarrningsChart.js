"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function EarningsChart() {
  const [data, setData] = useState({
    options: {
      chart: {
        id: "basic-line",
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + "k";
          }
        }
      },
      title: {
        style: {
          fontSize: '16px',
          fontWeight: '700',
          color: '#2A2D3E'
        }
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        line: {
          curve: 'smooth'
        },
        
      },
      stroke: {
        width: [3, 3], // Line widths for both series
        dashArray: [0, 5] // Dash array: solid for first line, dashed for second
      },
      colors: ["#0F75BC", "#0F75BC"], // Colors for the lines
      legend: {
        show: false}
    },
    series: [
      {
        name: "Guides",
        data: [30, 40, 45, 50, 49, 60, 70]
      },
      {
        name: "Users",
        data: [20, 35, 40, 55, 52, 65, 75]
      }
    ]
  });

  return (
    <div className='w-full bg-white rounded-xl p-3'>
      <Chart
        options={data.options}
        series={data.series}
        type="line"
        width="98%"
        height="300px"
      />
    </div>
  );
}
