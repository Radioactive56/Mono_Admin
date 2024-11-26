import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from './Navbar';

export default function User() {
  const items=[
    {text:"Manav Dhruve"},
    {text:"md@tcs.com"}
  ];
  const [filtered_data,set_filtered_data]=useState("")
  const [meta_user_Errors,meta_usersetErrors]=useState(null)

  useEffect(()=>{
    const api_url="/api/getuser"
    
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
    // const stored_data=localStorage.getItem('users');

    // const parsed_data=JSON.parse(stored_data);
    
    // const filtered_data=parsed_data.map(
    //     x=>({
    //         username:x.username,
    //         permission_Staff_status:x.permission_Staff_status,
    //         permission_active_status:x.permission_active_status,
    //         permission_Superuser_status:x.permission_Superuser_status,
    //         privilege: x.privilege&&x.privilege.length>0?x.privilege.map(privilege=>privilege[Object.keys(privilege)[1]]).join(', '):""
    //     })
    // );
    // const [rows,setRows]=useState(filtered_data);

    // let searchForm=document.getElementById("searchForm")

    // const handlesubmit=(event) => {
    //     event.preventDefault();
    //     let ll=JSON.parse(localStorage.getItem('users'));
    //     let x= document.getElementById('query').value;
    //     const search_data = ll.filter(obj=>obj.username===x);
    //     setRows(search_data);

    //     }
    
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
        {
            field: 'privilege',
            headerName: 'Privilege',
            width: 300,
            cellClassName:'right-align',
            editable: true,
        },
      ];
  return (
    <>
    <Navbar title="ISAE ADMIN" />
    <div style={{marginTop:"5%"}}>
    <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row",alignItems:"center",paddingLeft:'10%',paddingTop:'2%'}}>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"34%"}}>
<Link to="/users">
<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add User</button></Link>
</div>
</div>
    <div style={{marginTop:"1%"}}>
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={filtered_data}
        columns={columns}
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
        disableRowSelectionOnClick
      />
    </Box>
    </div>
    </div>
    </>
  )
};
