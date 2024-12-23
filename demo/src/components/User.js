import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { API_URL } from '../App';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useNavigate, useRouteLoaderData } from 'react-router';
import Cookies from 'js-cookie';


const CustomToolbar=({selected_scan_id,})=>{
  const navigate = useNavigate();
  const token = Cookies.get('Token'); 
  const handleDelete = async()=>{
      fetch(`${API_URL}/deleteuser/`,{
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
      <button type="button" onClick={()=>navigate('/users')} class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add </button>
      <button type="button" onClick={handleOpen} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Do you really want to Delete the selected Users? 
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


export default function User() {
  const items=[
    {text:"Manav Dhruve"},
    {text:"md@tcs.com"}
  ];
  const [filtered_data,set_filtered_data]=useState("")
  const [meta_user_Errors,meta_usersetErrors]=useState(null)
  const [selected_scan_id,set_selected_scan_id] = useState([])

  useEffect(()=>{
    const api_url=`${API_URL}/getuser`
    
    fetch(api_url)
    .then(response=>{
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json()
    })
    .then(data=>{
        // set_filtered_data(data);
        const new_filtered_data=data.map(
        x=>({
            username:x.username,
            permission_Staff_status:x.is_staff,
            permission_active_status:x.is_active,
            permission_Superuser_status:x.is_superuser,
            // privilege: x.privilege&&x.privilege.length>0?x.privilege.map(privilege=>privilege[Object.keys(privilege)[1]]).join(', '):""
        })
    );
    set_filtered_data(new_filtered_data);
    })
    .catch(error => {
        meta_usersetErrors(error);
        console.error('Error fetching data:', meta_user_Errors);
    });
},[])

    const columns = [
        {
          field: 'username',
          headerName: 'Username',
          width: 200,
          cellClassName:'right-align',
          editable: true,
        },
        {
          field: 'permission_Staff_status',
          headerName: 'Staff Status',
          width: 200,
          cellClassName:'right-align',
          editable: true,
        },
        {
          field: 'permission_active_status',
          headerName: 'Active status',
          width: 200,
          cellClassName:'right-align',
          editable: true,
        },
        {
            field: 'permission_Superuser_status',
            headerName: 'Superuser status',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },
      ];

      const handleSelectionChange = (newSelection) => {
        set_selected_scan_id(newSelection);
      };

  return (
    <>
    <Navbar title="ISAE ADMIN" />
    <div style={{marginTop:"5%"}}>
    <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row",alignItems:"center",paddingLeft:'10%',paddingTop:'2%'}}>
      <div style={{display:'flex',marginLeft:'30%'}}>
    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Existing Users of ISAE </h2>
    </div>
</div>
    <div style={{marginTop:"1%"}}>
      <Box sx={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={filtered_data}
        columns={columns}
        slots={{
          toolbar: ()=> <CustomToolbar selected_scan_id={selected_scan_id} />,
        }}
        getRowId={(row) => row.username}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5,10]}
        checkboxSelection
        onRowSelectionModelChange={handleSelectionChange} 
        disableRowSelectionOnClick
      />
    </Box>
    </div>
    </div>
    </>
  )
};
