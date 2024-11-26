import React, { useEffect, useState } from 'react';
import { DataGrid,GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useNavigate } from 'react-router';

function CustomToolbar() {
  const navigate = useNavigate();
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
      <div style={{display:"flex"}}>
      <button type="button" onClick={()=>navigate('/addScan')} class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add </button>
      <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
      </div>
    </GridToolbarContainer>
  );
}

export default function HostTable() {
    const[host_data,set_host_data]=useState('')
    const [selected_row,set_selected_row]=useState([]);
    const [host_error,host_setError]=useState(null);

    const navigate=useNavigate();

    const handleRowClick=(params)=>{
      navigate('/scans');
    }
    useEffect(()=>{
        const api_url= "/api/host/" 
        fetch(api_url)
              .then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then(data => {
                console.log(data) // Log the data to the console
                set_host_data(data);
              })
              .catch(error => {
                host_setError(error);
                console.error('Error fetching data:', host_error);
              });
          },[]);
    const host_columns = [
            {
              field: 'ip_address',
              headerName: 'ip_address',
              width: 200,
              cellClassName:'right-align',
              editable: true,
            },
            {
              field: 'ip_type',
              headerName: 'ip_type',
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
              field: 'ip_version',
              headerName: 'ip_version',
              width: 200,
              cellClassName:'right-align',
              editable: true,
            },
            {
                field: 'add_time',
                headerName: 'add_time',
                width: 200,
                cellClassName:'right-align',
                editable: true,
              },
            ]

            const handleSelectionChange = (newSelection) =>{
              set_selected_row(newSelection);
            }

  return (
    <div>
    <div style={{ height: 440, width: '100%' }}>
        <DataGrid
                rows={host_data}
                columns={host_columns}
                getRowId={(host_data) => host_data.ip_address}
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
                onRowClick={handleRowClick}
                onRowSelectionModelChange={handleSelectionChange}
            />
            The selected roes are : {selected_row.join(', ')}
    </div>
    </div>
  )
}
