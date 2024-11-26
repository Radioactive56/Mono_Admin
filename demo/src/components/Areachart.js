import React from 'react'
import ReactApexChart from "react-apexcharts";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Areachart() {

    
    const radial_series= [44, 55, 67, 54]
    const radial_options= {
        chart: {
        type: 'radialBar',
        // background:"black",
        // foreColor: 'white',
        },
        labels: ['NMAP WIP', 'CORE WIP', 'META WIP', 'REPORTS PENDING'],
        legend: {
            show:true,
            position: 'right',
            fontSize: '12px',
            fontWeight: 60,
        },
        colors: ["#ff3300","#ffff00", "#3333cc", "#33cc33"],
        plotOptions: {
        radialBar: {
            dataLabels: {
            name: {
                fontSize: '22px',
            },
            value: {
                fontSize: '14px',
            },
            total: {
                show: true,
                label: 'Scan in Progress',
                formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 45
                }
            }
            }
        }
        },
    }
      
    
    var radar_options = {
        series: [{
            name: 'Series 1',
            data: [60, 70, 80, 90, 100, 110, 120]
        }],
        chart: {
            height: 300,
            type: 'radar',
            // background:"black",
            // foreColor: 'white',
            toolbar:{
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                    download: false

            }
            
        }
    },
        title: {
            text: 'Count of Open Ports Of Ips Scanned'
        },
        xaxis: {
            categories: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'
            ]
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#000']  // Change color of the labels if needed
            }
        },
        
    };

    var donut_options = {
        series: [44, 55, 41, 17],
        chart: {
        width: 380,
        // background:"black",
        // foreColor: 'white',
        type: 'donut',
      },
      labels: ['Linux', 'Windows', 'MAC','Others'],
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        offsetY: 55,
        formatter: function(val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex]
        }
      },
      title: {
        text: 'Types Of Operating System',
      },
      grid:{
        padding: {
            top: 35,
        },  
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
      };



    const series= [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }]
    const options= {
        chart: {
            type: 'area' ,
            toolbar:{
              tools:{
                zoom:false,
                zoomin:false,
                zoomout:false,
                reset:false,
                pan:false,
              }
            }
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: ["Jan", "Feb","Mar","Apr",'May',"Jun","Jul"]
        },
        yaxis:{
          min:0,
          max:150,
          tickAmount:6,
          forceNiceScale:true
        },
        title:{
            text:"Total Number Of Scans",
            align:"center",
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      }
    
    const style1={
        display: 'flex',
        marginTop: '5.5%'
    }

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
  };

  return (
    <>
<div style={style1}>
    <a href="#" class="block max-w-xl max-h-73 p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" style={{width:"60%"}}>
            <div id="chart" style={{marginTop:'4%'}}>
                <ReactApexChart options={options} series={series} type="area" width='100%' />
            </div>
        <div id="html-dist"></div>
</a>


<div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{marginLeft:'0.5rem',width:'58%'}}>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Scans" value="1" />
            <Tab label="Information" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <div>
              <div id="chart" style={{marginTop: '-4%'}} >
                <ReactApexChart options={radial_options} series={radial_series} type="radialBar" height={320} />
              </div>
        </div>
        </TabPanel>
        <TabPanel value="2">
        <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="services" role="tabpanel" aria-labelledby="services-tab" >
        <div style={{display:'flex',justifyContent:'space-around'}}>
              <div id="chart" style={{marginTop: '-4%',display:'flex'}}>
                <ReactApexChart options={radar_options} series={radar_options.series} type="radar" height={250}/>
              </div>
              <div id="html-dist"></div>
            
              <div id="chart" style={{marginTop: '-4%',display:'flex'}}>
                <ReactApexChart options={donut_options} series={donut_options.series} type="donut" height={250}/>
              </div>
              <div id="html-dist"></div>
            </div>
        </div>
        </TabPanel>
      </TabContext>
    </Box>
</div>
</div> 
    </>
  )
}



{/* <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <li class="me-2">
            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" class="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500">Scans</button>
        </li>
        <li class="me-2">
            <button id="services-tab" data-tabs-target="#services" type="button" role="tab" aria-controls="services" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Information</button>
        </li>
    </ul>
    <div id="defaultTabContent">
     <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
       <div>
              <div id="chart" style={{marginTop: '-4%'}} >
                <ReactApexChart options={radial_options} series={radial_series} type="radialBar" height={250} />
              </div>
            </div>

        </div>
        <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="services" role="tabpanel" aria-labelledby="services-tab" >
        <div style={{display:'flex',justifyContent:'space-around'}}>
              <div id="chart" style={{marginTop: '-4%',display:'flex'}}>
                <ReactApexChart options={radar_options} series={radar_options.series} type="radar" height={250}/>
              </div>
              <div id="html-dist"></div>
            
              <div id="chart" style={{marginTop: '-4%',display:'flex'}}>
                <ReactApexChart options={donut_options} series={donut_options.series} type="donut" height={250}/>
              </div>
              <div id="html-dist"></div>
            </div>
        </div>
    </div>
*/}