import React from 'react'
import ReactECharts from 'echarts-for-react'
import {Data} from "../../Utills/WineData"



  




export default function BarChart() {
let arr1=[];
let arr2=[];
let arr3=[];
let arr=[];



for(let i=0;i<Data.length;i++){

  Data[i].Alcohol===1 ? arr1.push(Data[i].Malic_Acid) :arr.pop()
  Data[i].Alcohol===2 ? arr2.push(Data[i].Malic_Acid) :arr.pop()
  Data[i].Alcohol===3 ? arr3.push(Data[i].Malic_Acid) :arr.pop()

}
function getAvg(Values) {
  const total = Values.reduce((acc, c) => acc + c, 0);
  return total / Values.length;
}

const average1 = getAvg(arr1).toFixed(2);
const average2= getAvg(arr2).toFixed(2);
const average3= getAvg(arr3).toFixed(2);





    const option = {
   
        // title: {
          
        //   text: 'Average-content'
        // },
        tooltip: {},
        legend: {
          data:['Average-content']
        },
        xAxis: { name:"Alcohal",
          data: ['Alcohal-1', 'Alcohal-2', 'Alcohal-3']
        },
        yAxis: {name:"Malic_Acid"},
        series: [{
          name: 'Average-content',
          type: 'bar',
          data: [average1, average2, average3]
        }]
      };
  return (
    <div>
    <h1 className='chart-heading'>Bar Chart</h1>
    <ReactECharts
    option={option}
    style={{ height: 400 }}
    opts={{ renderer: 'svg' }}
  />;
      
    </div>
  )
}
