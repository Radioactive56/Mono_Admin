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

export default function PendingMeta() {
    const [pending_meta_data,set_pending_meta_data]=useState("");
    const [selected_row,set_selected_row]= useState([]);

    const [pending_meta_error,set_pending_meta_error]=useState(null);

    useEffect(()=>{
        const meta_url="/api/meta/";
        fetch(meta_url)
        .then(response=>{
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
            return response.json();
        })
        .then(data=>{
            console.log(data);
            set_pending_meta_data(data);
        })
        .catch(error=>{
            set_pending_meta_error(error);
            console.error('Error fetching data:', pending_meta_error);
        })
    },[]);

    const pending_meta_columns=[
        { field: 'Pending_id', headerName: 'Pending ID', width:200 },
        { field: 'scan_id', headerName: 'Scan ID', width:200 },
        { field: 'Ip', headerName: 'IP Address', width:200 },
        { field: 'Send_status', headerName: ' Send Status', width:200 },
        { field: 'Meta_id', headerName: 'Meta ID', width:200 },
        { field: 'Meta_start_time', headerName: 'Meta Start Time', width:200 },
        { field: 'Meta_stop_time', headerName: 'Meta Stop Time', width:200 },
        { field: 'Meta_scan_status', headerName: 'Scan Status', width:200,renderCell:(params)=>{
          return(
              <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{params.value}</span>
          )
  }, },

    ]

    const handleSelectionChange = (newSelection) =>{
      set_selected_row(newSelection);
    }
  return (
    <div>
      <div style={{ height: 440, width: '100%' }}>
      <DataGrid
                rows={pending_meta_data}
                columns={pending_meta_columns}
                getRowId={(pending_meta_data) => pending_meta_data.Pending_id}
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
            </div>
  )
}
