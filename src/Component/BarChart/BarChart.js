import React from 'react'
import ReactECharts from 'echarts-for-react'
import {Data} from "../../Utills/WineData"

export default function BarChart() {


let avg=[]

let temp=[];

for(let i=0;i<Data.length;i++){
  if(Data[i].Alcohol in temp){  
  }
  else{
    temp.push([]);
  }
}
Data.map((e)=>{
 temp[e.Alcohol].push(e.Malic_Acid) 
 
})
console.log(temp)
function getAvg(Values) {
  const total = Values.reduce((acc, c) => acc + c, 0);
  return total / Values.length;
}

for(let i=1;i<temp.length;i++){
  avg.push(getAvg(temp[i]).toFixed(2))

}
   const DataNames=temp.map((e,index)=>{
    return(
      `Alcohal-${index}`
     
        
    )
    }).splice(1)
     
     console.log(DataNames)
    const option = {
   
    
        tooltip: {},
        legend: {
          data:['Average-content']
        },
        xAxis: { name:"Alcohal",
          data: DataNames
        },
        yAxis: {name:"Malic_Acid"},
        series: [{
          name: 'Average-content',
          type: 'bar',
          data: avg
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
