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

export default function MetaHostTabel() {
    const [meta_service_data,set_meta_service_data]=useState('');
    const [meta_errors,meta_servicesetErrors]=useState('');

    useEffect(()=>{
        const api_url="/api/meta_service";

        fetch(api_url)
            .then(response=>{
                if (!response.ok){
                    throw new Error('Network response was not ok');
                }
                return response.json()
            })
            .then(data=>{
                set_meta_service_data(data);
            })
            .catch(error => {
                meta_servicesetErrors(error);
                console.error('Error fetching data:', meta_errors);
            });
    },[])

    const meta_service_columns = [
        {
          field: 'Service_id',
          headerName: 'Service_id',
          width: 200,
          cellClassName:'right-align',
          editable: true,
        },
        {
          field: 'port',
          headerName: 'port',
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
          field: 'proto',
          headerName: 'proto',
          width: 200,
          cellClassName:'right-align',
          editable: true,
        },
        {
            field: 'state',
            headerName: 'state',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'name',
            headerName: 'name',
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
            field: 'info',
            headerName: 'info',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'created_at',
            headerName: 'created_at',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'updated_at',
            headerName: 'updated_at',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'host_id',
            headerName: 'host_id',
            width: 200,
            cellClassName:'right-align',
            editable: true,
            renderCell:(params)=>{
              return(
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{params.value}</span>
              )
      },
        },
    ]

  return (
    <div>
      <div style={{ height: 440, width: '100%' }}>
        <DataGrid
                rows={meta_service_data}
                columns={meta_service_columns}
                getRowId={(meta_service_data) => meta_service_data.Service_id}
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
            />
            </div>
    </div>
  )
}
