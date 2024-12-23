import React, { useEffect, useState } from 'react';
import { DataGrid,GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useNavigate } from 'react-router';
import { API_URL } from '../App';
import Cookies from 'js-cookie';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const CustomToolbar=({selected_row})=>{
  const navigate = useNavigate();
  const token = Cookies.get('Token'); 
  const handleDelete = async()=>{
      fetch(`${API_URL}/metaservicetableDelete/`,{
          method:"POST",
          headers:{
              'Content-Type':'application/json',
              'Authorization': `Bearer ${token}`
          },
          body:JSON.stringify(selected_row)
  })
  .then(response=>{
      if (response.status===403){
          alert("You dont have the permission to delete....")
          window.location.reload('/scans')
      }
      else if (!response.ok){
        console.error('Error in calling the delete_multiple_scan api....')
      }
      else{
          alert('Data Deleted successfully.... please refresh the page if the changes are not shown...')
          window.location.reload('/scans')
      }
  })
  }

  const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  //   const handleDelete=()=>{
  //     console.log(selected_scan_id)
  //   }
  
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
      <div style={{display:"flex"}}>
      <button type="button" onClick={handleOpen} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Do you really want to Delete the selected rows ? 
        </Typography>
        <div style={{display: 'flex',justifyContent: 'space-around',paddingTop: '5%'}}>
        <button type="button" onClick={handleDelete} class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Yes</button>
        <button type="button" onClick={handleClose} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">No</button>
        </div>
      </Box>
    </Modal>
      </div>
    </GridToolbarContainer>
  );
}

export default function MetaHostTabel() {
    const [meta_service_data,set_meta_service_data]=useState([]);
    const [meta_errors,meta_servicesetErrors]=useState('');
    const [selected_row,set_selected_row]=useState([]);

  
    const navigate=useNavigate();

    useEffect(()=>{
        const api_url=`${API_URL}/meta_service`;

        fetch(api_url)
            .then(response=>{
                if (response.status===404){
                  throw new Error('Network response was not ok');
                }
                else if (response.ok){
                  return response.json()
                }
                else{
                  console.error('Error in calling /meta_service api..........')
                }
            })
            .then(data=>{
                set_meta_service_data(data);
            })
            .catch(error => {
                console.error(error);
                alert('You dont have the permission to view the table..........')
                set_meta_service_data([])
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

    const handleSelectionChange = (newSelection) =>{
      set_selected_row(newSelection);
    }
    const handleRowClick = (params) =>{
      navigate(`/update_metaservicetable/${params.id}`);
    }

  return (
    <div>
      <div style={{ height: 440, width: '100%' }}>
        <DataGrid
                rows={meta_service_data}
                columns={meta_service_columns}
                getRowId={(meta_service_data) => meta_service_data.Service_id}
                slots={{
                  toolbar: ()=> <CustomToolbar selected_row={selected_row} />,
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
            The selected rows are : {selected_row.join(', ')}

            </div>
    </div>
  )
}
