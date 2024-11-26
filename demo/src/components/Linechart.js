import React from 'react'
import ReactApexChart from "react-apexcharts";
import CountTable from './CountTable';

export default function Linechart() {
  const bar_state = {
          
    series: [{
      name:"Number of Exposures",
      data: [44, 55, 41, 64, 22, 43, 21]
    }, {
      name:"Number of Services",
      data: [53, 32, 33, 52, 13, 44, 32]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 430
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
      },
      tooltip: {
        shared: true,
        intersect: false
      },
      xaxis: {
        categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      },
      // yaxis:{
      //   min:0,
      //   max:80,
      //   tickamount:20,
      // }
    },
  
  
  };
  return (
    <div style={{display:'flex',marginTop:'1vw'}}>
    <CountTable/>
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{marginLeft:"0.5rem",width:'70vw'}}>
    <div id="chart" style={{paddingTop:"3%"}}>
                <ReactApexChart options={bar_state.options} series={bar_state.series} type="bar" height={430} />
              </div>
              <div id="html-dist"></div>
    </div>
    </div>
  )
}
