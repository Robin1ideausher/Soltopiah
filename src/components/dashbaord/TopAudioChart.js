"use client"
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TopAudioChart() {
  const [data,setData] = useState({
      options: {
          chart: {
            id: "basic-bar"
          },
          colors:[
            '#AE445A',
            '#BE697B',
            '#CE8F9C',
            '#DFB4BD',
            '#A37C92',
            // '#E9EBF7'
          ],
          title:{
            style: {
              fontSize:  '16px',
              fontWeight:  '700',
              fontFamily:  '',
              color:  '#2A2D3E'
            },
          },
          dataLabels:{
            enabled:false
          },
        },
        
        series: [44, 55, 41, 17, 15],         
  })
  return (
    <div className='w-full bg-white rounded-xl p-3'>
      <Chart
        options={data.options}
        series={data.series}
        type="donut"
        width="98%"
      />
    </div>
  )
}
