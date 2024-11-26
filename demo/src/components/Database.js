import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import HostTable from './HostTable';
import MetaHostTable from './MetaHostTable';
import MetaServiceTable from './MetaServiceTable';
import TabContext from '@mui/lab/TabContext';
import PendingMeta from './PendingMeta';
import MetaScanTable from './MetaScanTable';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Navbar from './Navbar';
import MetaVulnerabilityTable from './MetaVulnerabilityTable'
import CircularProgress from '@mui/material/CircularProgress';
import { DataGrid,GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useNavigate } from 'react-router';
import { API_URL } from '../App';

function CustomToolbar() {
    const navigate = useNavigate();
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
        <div style={{display:"flex"}}>
        <button type="button" onClick={()=>navigate('/addscanTable')} class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add </button>
        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
        </div>
      </GridToolbarContainer>
    );
  }

export default function DataBase() {
    const [value,setValue] = useState('1');
    const [scan_data,set_scan_data]=useState("")
    const [loading,setloading]=useState(true);
    const [selected_row,set_selected_row]=useState([]);
    const [error,setError]=useState(null);
    const navigate = useNavigate();

    const items=[
        {text:"Manav Dhruve"},
        {text:"md@tcs.com"}
      ];

    const handleChange = (event,newValue) =>{
        setValue(newValue);
    }

    // const handleRowClick= (params)=>{
    //     navigate(`/update/${params.id}`);
    // }

    useEffect(()=>{

        const scan_url=`${API_URL}/scan/`;

        fetch(scan_url)
              .then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then(data => {
                console.log(data) // Log the data to the console
                set_scan_data(data);
              })
              .catch(error => {
                setError(error);
                console.error('Error fetching data:', error);
              })
              .finally(()=>{
                setloading(false)
              })
          },[]);

    const scan_columns = [
        {
          field: 'scan_id',
          headerName: 'Scan ID',
          width: 200,
          cellClassName:'right-align',
          editable: true,
        },
        {
          field: 'host',
          headerName: 'Host ID',
          width: 200,
          cellClassName:'right-align',
          editable: true,
        },
        {
          field: 'current_status',
          headerName: 'Current Status',
          width: 200,
          cellClassName:'right-align',
          editable: true,
          renderCell:(params)=>{
            return(
                <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{params.value}</span>
            )
    },
        },
        {
            field: 'priority',
            headerName: 'Priority',
            width: 200,
            cellClassName:'right-align',
            editable: true,
            renderCell:(params)=>{
                return(
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{params.value}</span>
                )
        },
          },
        {
            field: 'scan_add_time',
            headerName: 'Scan Add Time',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'pt_start_time',
            headerName: 'PT Start Time',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'pt_stop_time',
            headerName: 'PT Stop Time',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'nmap_start_time',
            headerName: 'Nmap Start Time',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'nmap_stop_time',
            headerName: 'Nmap Stop Time',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'nmap_scan_pid',
            headerName: 'Nmap Scan ID',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'nmap_abort_count',
            headerName: 'Nmap Abort Count',
            width: 300,
            cellClassName:'right-align',
            editable: true,
            renderCell:(params)=>{
                return(
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{params.value}</span>
                )
        },
        },
        {
            field: 'core_impact_start_time',
            headerName: 'Core Start Time',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'core_impact_stop_time',
            headerName: 'Core Stop Time',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'core_scan_id',
            headerName: 'Core Scan ID',
            width: 300,
            cellClassName:'right-align',
            editable: true,
            renderCell:(params)=>{
                return(
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{params.value}</span>
                )
        },
        },
        {
            field: 'core_abort_count',
            headerName: 'Core Abort Count',
            width: 300,
            cellClassName:'right-align',
            editable: true,
            renderCell:(params)=>{
                return(
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{params.value}</span>
                )
        },
        },
        {
            field: 'scan_restart_count',
            headerName: 'Scan Restart Count',
            width: 300,
            cellClassName:'right-align',
            editable: true,
            renderCell:(params)=>{
                return(
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{params.value}</span>
                )
        },
        },
        {
            field: 'nmap_report',
            headerName: 'Nmap Report',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },        {
            field: 'core_impact_report',
            headerName: 'Core Report',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },        {
            field: 'ptid',
            headerName: 'PTID',
            width: 300,
            cellClassName:'right-align',
            editable: true,
            renderCell:(params)=>{
                return(
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{params.value}</span>
                )
        },
        },
        {
            field: 'nmap_push_time',
            headerName: 'Nmap Push Time ',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'core_push_time',
            headerName: 'Core Push Time ',
            width: 300,
            cellClassName:'right-align',
            editable: true,
            
        },
        {
            field: 'meta_push_time',
            headerName: 'Meta Push Time ',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'meta_add_time',
            headerName: 'Meta Add Time ',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'meta_report',
            headerName: 'Meta Report ',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'debug_info',
            headerName: 'Debug Info',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'scan_complete',
            headerName: 'Scan Complete ',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },
      ];

      const handleSelectionChange = (newSelection)=>{
        set_selected_row(newSelection);
      }


  

  return (
    <>
    <Navbar title="ISAE ADMIN" />
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{marginTop:'5%'}}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Scan Table" value="1" />
                <Tab label="Host Table" value="2" />
                <Tab label="Pending Meta table" value="3" />
                {/* <Tab label="Config Table" value="4" /> */}
                <Tab label="Meta_Scan_Table" value="5" />
                <Tab label="Meta_Host_Table" value="6" />
                <Tab label="Meta_Service_Table" value="7" />
                <Tab label="Meta_Vulnerabiltity_Table" value="8" />
            </TabList>
            </Box>
            <TabPanel value="1">
            <div style={{ height: 440, width: '100%' }}>
            <DataGrid
                rows={scan_data}
                columns={scan_columns}
                getRowId={(scan_data) => scan_data.scan_id}
                slots={{
                    toolbar: CustomToolbar,
                }}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                onRowSelectionModelChange={handleSelectionChange}
            />
            The selected rows are : {selected_row.join(', ')}
            </div>            
            </TabPanel>
            <TabPanel value="2">
            
                <HostTable></HostTable> 
            </TabPanel>
            <TabPanel value="3">
            
                <PendingMeta></PendingMeta> 
            </TabPanel>
            <TabPanel value="5">
            
                <MetaScanTable></MetaScanTable> 
            </TabPanel>
            <TabPanel value="6">
            
            <MetaHostTable/> 
            </TabPanel>
            <TabPanel value="7">
            
            <MetaServiceTable></MetaServiceTable> 
            </TabPanel>
            <TabPanel value="8">
            
            <MetaVulnerabilityTable></MetaVulnerabilityTable> 
            </TabPanel>
        </TabContext>
        </Box>
        </div>
        </>
  )
}
