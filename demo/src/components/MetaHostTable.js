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
    const [meta_host_data,set_meta_host_data]=useState('');

    useEffect(()=>{
        const api_url="/api/meta_host";

        fetch(api_url)
            .then(response=>{
                if (!response.ok){
                   console.log("Error!")
                }
                return response.json()
            })
            .then(data=>{
                set_meta_host_data(data);
            })
    },[])

    const meta_host_columns = [
        {
          field: 'Host_id',
          headerName: 'Host_id',
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
          field: 'address',
          headerName: 'address',
          width: 200,
          cellClassName:'right-align',
          editable: true,
        },
        {
            field: 'mac',
            headerName: 'mac',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'comm',
            headerName: 'comm',
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
        },
        {
            field: 'state',
            headerName: 'state',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'os_name',
            headerName: 'os_name',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'os_flavor',
            headerName: 'os_flavor',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'os_sp',
            headerName: 'os_sp',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'os_lang',
            headerName: 'os_lang',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'arch',
            headerName: 'arch',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'workspace_id',
            headerName: 'workspace_id',
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
            field: 'purpose',
            headerName: 'purpose',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'info',
            headerName: 'info',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'comments',
            headerName: 'comments',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'scope',
            headerName: 'scope',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'virtual_host',
            headerName: 'virtual_host',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'note_count',
            headerName: 'note_count',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'vul_count',
            headerName: 'vul_count',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'service_count',
            headerName: 'service_count',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'host_detail_count',
            headerName: 'host_detail_count',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'exploit_attempt_count',
            headerName: 'exploit_attempt_count',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'cred_count',
            headerName: 'cred_count',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'history_count',
            headerName: 'history_count',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'detected_arch',
            headerName: 'detected_arch',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'os_family',
            headerName: 'os_family',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'total_services_scanned',
            headerName: 'total_services_scanned',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'services_scanned',
            headerName: 'services_scanned',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'total_vuln_scanned',
            headerName: 'total_vuln_scanned',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'vuln_scanned',
            headerName: 'vuln_scanned',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
        {
            field: 'scan_id',
            headerName: 'scan_id',
            width: 200,
            cellClassName:'right-align',
            editable: true,
        },
       
    ]

  return (
    <div>
        <div style={{ height: 440, width: '100%' }}>
        <DataGrid
                rows={meta_host_data}
                columns={meta_host_columns}
                getRowId={(meta_host_data) => meta_host_data.Host_id}
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
