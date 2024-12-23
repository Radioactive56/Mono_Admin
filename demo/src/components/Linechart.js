import React, { useEffect, useState } from 'react'
import ReactApexChart from "react-apexcharts";
import CountTable from './CountTable';
import { API_URL } from '../App';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Linechart() {
  const [bar_services,set_bar_services] = useState([100,100,100,100,100]);
  const [bar_exposures,set_bar_exposures] = useState([100,100,100,100,100]);
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(()=>{
    const api_url=`${API_URL}/chartdataweekly/`;

    fetch(api_url)
    .then(response=>{
      if (!response.ok){
        console.error('error calling chartdata api');
      }
      return response.json()
    })
    .then(data=>{
      const c = data.result;
      const week1_exposure = c[0].Week1[1]
      const week2_exposure = c[0].Week1[1]
      const week3_exposure = c[0].Week3[1]
      const week4_exposure = c[0].Week4[1]
      const week5_exposure = c[0].Week5[1]
      const array_exposure = [week1_exposure,week2_exposure,week3_exposure,week4_exposure,week5_exposure]
      set_bar_exposures(array_exposure)

      const week1_service = c[0].Week1[0]
      const week2_service = c[0].Week2[0]
      const week3_service = c[0].Week3[0]
      const week4_service = c[0].Week4[0]
      const week5_service = c[0].Week5[0]
      const array_service = [week1_service,week2_service,week3_service,week4_service,week5_service]
      set_bar_services(array_service)
      
    })

  },[])
  const bar_state = {
          
    series: [{
      name:"Number of Exposures",
      data: bar_exposures
    }, {
      name:"Number of Services",
      data: bar_services
    }],
    options: {
      chart: {
        type: 'bar',
        height: 430
      },
      plotOptions: {
        bar: {
          horizontal: true,
          // dataLabels: {
          //   position: 'top',
          // },
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
        categories: ["Week 1","Week 2","Week 3","Week 4","Week 5"],
      },
      
    },

    
  
  
  };
  return (
    <div style={{display:'flex',marginTop:'1vw'}}>
    <CountTable/>
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{marginLeft:"0.5rem",width:'70vw'}}>
    <div style={{display:'flex',justifyContent:'right',paddingTop:'2%'}}>
      <Button aria-describedby={id} onClick={handleClick} style={{backgroundColor:"#F5f5f5"}}>
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z" clip-rule="evenodd"/>
</svg>

      </Button>
      <Popover 
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }} class="p-3 space-y-2"><span class="font-semibold text-gray-900 dark:text-white">This chart shows us about total count of exposures and services found weekly.</span></Typography>
      </Popover>
    </div>

    <div id="chart" style={{marginTop:"4%"}}>
                <ReactApexChart options={bar_state.options} series={bar_state.series} type="bar" height={430} />
              </div>
              <div id="html-dist"></div>
    </div>
    </div>
  )
}
