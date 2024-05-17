"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function HorizontalBarChart() {
  const [data, setData] = useState({
    options: {
      chart: {
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '50%',
          dataLabels: {
            position: 'top'
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ["Courses", "Feed", "Soul Talk", "Group", "Messages"]
      },
      grid: {
        show: false // Disable grid lines
      },
      title: {
        style: {
          fontSize: '16px',
          fontWeight: '700',
          color: '#2A2D3E'
        }
      },
      colors: ["#80CBFF"]
    },
    series: [
      {
        name: "Content",
        data: [30, 40, 45, 50, 49]
      }
    ]
  });

  return (
    <div className='w-full bg-white rounded-xl p-3'>
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        width="100%"
        height={200}
      />
    </div>
  );
}
