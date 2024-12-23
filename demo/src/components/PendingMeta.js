import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useNavigate } from 'react-router';
import { API_URL } from '../App';
import Cookies from 'js-cookie';

const CustomToolbar=({selected_scan_id})=>{
  const navigate = useNavigate();
  const token= Cookies.get('Token');
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

    const handleDelete = async()=>{
      fetch(`${API_URL}/metaDelete/`,{
          method:"POST",
          headers:{
              'Content-Type':'application/json',
              'Authorization': `Bearer ${token}`
          },
          body:JSON.stringify(selected_scan_id)
  })
  .then(response=>{
      if (response.status===403){
          alert("You dont have the permission to delete....")
          window.location.reload('/database')
      }
      else if (!response.ok){
        console.error('Error in calling the delete_multiple_scan api....')
      }
      else{
          alert('Data Deleted successfully.... please refresh the page if the changes are not shown...')
          window.location.reload('/database')
      }
  })
  }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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


export default function MetaScan() {
    const navigate=useNavigate();
    const [meta_data,setmeta_data]=useState([]);
    const [meta_error,setmeta_error]=useState(null);
    const [selected_row,set_selected_row]=useState([]);
    const [loading,setloading]=useState(true);

    useEffect(()=>{
        setloading(true);
        const meta_url=`${API_URL}/meta/`
        fetch(meta_url)
        .then(response=>{
            if (response.status === 404) {
                throw new Error('Network response was not ok');
              }
            else if (response.ok){
              return response.json();
            }
            else{
              console.error('Error in calling the /meta api.........')
            }
        })
        .then(data=>{
            console.log(data);
            setmeta_data(data);
        })
        .catch(error=>{
            setmeta_error(error);
            alert('You dont have the permission to view the table...........')
            setmeta_data([])
        })
        .finally(()=>{
            setloading(false);
        })
    },[]);

    const meta_columns=[
        { field: 'Pending_id', headerName: 'Pending ID', width:200 },
        { field: 'scan_id', headerName: 'Scan ID', width:200 },
        { field: 'Ip', headerName: 'IP Address', width:200},
        { field: 'Send_status', headerName: ' Send Status', width:200,},
        { field: 'Meta_id', headerName: 'Meta ID', width:200,
          renderCell:(params)=>{
            return(
                <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{params.value}</span>
            )
    },
         },
        { field: 'Meta_start_time', headerName: 'Meta Start Time', width:200 },
        { field: 'Meta_stop_time', headerName: 'Meta Stop Time', width:200 },
        { field: 'Meta_scan_status', headerName: 'Scan Status', width:200, 
            renderCell:(params)=>{
                return(
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{params.value}</span>
                )
        },
    }
    
  ]
    const handleRowClick = (params) =>{
      navigate(`/update_meta_scan/${params.id}`);
    }

    const handleSelectionChange=(newSelection)=>{
      console.log(newSelection);
      set_selected_row(newSelection);
    }

  return (
    <div>
        <div style={{ height: 440, width: '100%' }}>
            <DataGrid
                rows={meta_data}
                columns={meta_columns}
                getRowId={(row) => row.Pending_id}
                slots={{
                    toolbar: ()=> <CustomToolbar selected_scan_id={selected_row}/>,
                  }}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
                onRowClick={handleRowClick}
                checkboxSelection
                onRowSelectionModelChange={handleSelectionChange} // Handle row selection change
            />
            <div>
              The selected row are : {selected_row.join(', ')}
            </div>
            </div> 
      
    </div>
  )
}
