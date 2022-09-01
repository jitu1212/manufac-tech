import React from 'react'
import ReactECharts from 'echarts-for-react';
import {Data} from '../../Utills/WineData'





export default function Scatter() {
  let arr1=[];
 
  
  for(let i=0;i<Data.length;i++){
   arr1.push([Data[i].Color_intensity,Data[i].Hue]) 
    
  }
    const options = {
        xAxis: {name:"Color_intensity"},
        yAxis: {name:"Hue"},
       
        series: [
          {
            symbolSize: 8,
            data: arr1,
            
            type: 'scatter'
          }
        ]
      };
  return (
    <div>
    <h1 className='chart-heading'> Scatter plot</h1>
      <ReactECharts option={options} />
    </div>
  )
}
