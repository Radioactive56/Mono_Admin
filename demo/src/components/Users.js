import React from 'react'
import { useForm,Controller } from 'react-hook-form';
import Select from 'react-select';
import Navbar from './Navbar';
import { useNavigate } from 'react-router';

export default function Users() {
  const items=[
    {text:"Manav Dhruve"},
    {text:"md@tcs.com"}
  ];
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const navigate=useNavigate();
  const onSubmit = data => {
    console.log(data);

    fetch("api/addUser/",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body : JSON.stringify(data),
    })
    .then(response=>{
    if (response.ok){
      const val = response.json();
      console.log(val)
      window.alert("Data submitted successfully");
      navigate('/user')
    }
    else{
      window.alert("data not sent")
      console.log("data not sent")
    }});
    // const existing_user=JSON.parse(localStorage.getItem('users')) || [];
    // existing_user.push(data)
    // localStorage.setItem("users",JSON.stringify(existing_user))
  };
  const model_options=[
    { value:"1", label:"All of the below Models"},
    {  value:"2", label:"Scan"},
    {  value:"3", label:"Host"},
    {  value:"4", label:"Meta_Dashboard"},
    {  value:"5", label:"Meta_scan_table"},
    {  value:"6", label:"Meta_service_table"},
    {  value:"7", label:"Meta_vulnerability_table"},
    {  value:"8", label:"Nmap_core_dashboard"},
  ]
  const options=[
    {  value:"1", label:"All of the below"},
    {  value:"2", label:"Can view"},
    {  value:"3", label:"Can delete"},
    {  value:"4", label:"Can change"},
    {  value:"5", label:"Can add"},
  ]
  //   const options=[
  //   { value:"1" ,label:"Administration | log entry | Can add log entry"},
  //   { value:"2" ,label:"Administration | log entry | Can change log entry"},
  //   { value:"3" ,label:"Administration | log entry | Can delete log entry"},
  //   { value:"4" ,label:"Administration | log entry | Can view log entry"},
  //   { value:"9" ,label:"Authentication and Authorization | group | Can add group"},
  //   { value:"10",label:"Authentication and Authorization | group | Can change group"},
  //   { value:"11",label:"Authentication and Authorization | group | Can delete group"},
  //   { value:"12",label:"Authentication and Authorization | group | Can view group"},
  //   { value:"5" ,label:"Authentication and Authorization | permission | Can add permission"},
  //   { value:"6" ,label:"Authentication and Authorization | permission | Can change permission"},
  //   { value:"7" ,label:"Authentication and Authorization | permission | Can delete permission"},
  //   { value:"8" ,label:"Authentication and Authorization | permission | Can view permission"},
  //   { value:"13",label:"Authentication and Authorization | user | Can add user"},
  //   { value:"14",label:"Authentication and Authorization | user | Can change user"},
  //   { value:"15",label:"Authentication and Authorization | user | Can delete user"},
  //   { value:"16",label:"Authentication and Authorization | user | Can view user"},
  //   { value:"25",label:"Base | meta_ dashboard | Can add meta_ dashboard"},
  //   { value:"26",label:"Base | meta_ dashboard | Can change meta_ dashboard"},
  //   { value:"27",label:"Base | meta_ dashboard | Can delete meta_ dashboard"},
  //   { value:"28",label:"Base | meta_ dashboard | Can view meta_ dashboard"},
  //   { value:"49",label:"Base | meta_ host_ table | Can add meta_ host_ table"},
  //   { value:"50",label:"Base | meta_ host_ table | Can change meta_ host_ table"},
  //   { value:"51",label:"Base | meta_ host_ table | Can delete meta_ host_ table"},
  //   { value:"52",label:"Base | meta_ host_ table | Can view meta_ host_ table"},
  //   { value:"41",label:"Base | meta_ scan_ table | Can add meta_ scan_ table"},
  //   { value:"42",label:"Base | meta_ scan_ table | Can change meta_ scan_ table"},
  //   { value:"43",label:"Base | meta_ scan_ table | Can delete meta_ scan_ table"},
  //   { value:"44",label:"Base | meta_ scan_ table | Can view meta_ scan_ table"},
  //   { value:"45",label:"Base | meta_ service_ table | Can add meta_ service_ table"},
  //   { value:"46",label:"Base | meta_ service_ table | Can change meta_ service_ table"},
  //   { value:"47",label:"Base | meta_ service_ table | Can delete meta_ service_ table"},
  //   { value:"48",label:"Base | meta_ service_ table | Can view meta_ service_ table"},
  //   { value:"37",label:"Base | meta_ vulnerability_ table | Can add meta_ vulnerability_ table"},
  //   { value:"38",label:"Base | meta_ vulnerability_ table | Can change meta_ vulnerability_ table"},
  //   { value:"39",label:"Base | meta_ vulnerability_ table | Can delete meta_ vulnerability_ table"},
  //   { value:"40",label:"Base | meta_ vulnerability_ table | Can view meta_ vulnerability_ table"},
  //   { value:"33",label:"Base | metasploit_details | Can add metasploit_details"},
  //   { value:"34",label:"Base | metasploit_details | Can change metasploit_details"},
  //   { value:"35",label:"Base | metasploit_details | Can delete metasploit_details"},
  //   { value:"36",label:"Base | metasploit_details | Can view metasploit_details"},
  //   { value:"29",label:"Base | nmap_ core_ dashboard | Can add nmap_ core_ dashboard"},
  //   { value:"30",label:"Base | nmap_ core_ dashboard | Can change nmap_ core_ dashboard"},
  //   { value:"31",label:"Base | nmap_ core_ dashboard | Can delete nmap_ core_ dashboard"},
  //   { value:"32",label:"Base | nmap_ core_ dashboard | Can view nmap_ core_ dashboard"},
  //   { value:"17",label:"Content Types | content type | Can add content type"},
  //   { value:"18",label:"Content Types | content type | Can change content type"},
  //   { value:"19",label:"Content Types | content type | Can delete content type"},
  //   { value:"20",label:"Content Types | content type | Can view content type"},
  //   { value:"21",label:"Sessions | session | Can add session"},

  //   { value:"22",label:"Sessions | session | Can change session"},

  //   { value:"23",label:"Sessions | session | Can delete session"},

  //   { value:"24",label:"Sessions | session | Can view session"}
  //  ]

  return (
    <>
    <Navbar title="ISAE ADMIN"/>
    <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{marginTop:"5%",marginLeft:"25%",marginRight:"25%"}}>
        <h4 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add User</h4>
<form onSubmit={handleSubmit(onSubmit)}>
    <div style={{marginTop:"2%"}}>
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input name="username"
        {...register("username", { required: "Username is required." })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required />
        {errors.username && <p>{errors.username.message}</p>}
        <div class="help" id="id_username_helptext">
            <div class="text-xs font-normal text-gray-500 dark:text-gray-300">Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.</div>
        </div>
        </div>
        <div >
        <label htmlFor="model_name" style={{paddingTop:'2%'}} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Model Name :</label>
        <Controller
          name="model_name"
          control={control}
          // rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              isMulti
              options={model_options}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          )}
        />
        <label htmlFor="privilege" style={{paddingTop:'2%'}} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select type of privileges, you want to add to above selected Models.</label>
        <Controller
          name="privilege"
          control={control}
          // rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              isMulti
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          )}
        />
        </div>
    </div>
    <label style={{paddingTop:'2%'}} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Permissions </label>
<div class="flex">
    <div class="flex items-center h-5">
        {/* <label htmlfor="permission_active" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Active</label> */}
        <input type='checkbox' className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        name="permission_active_status" id="permission_active_status"
        {...register("permission_active_status")}>
      </input>
    </div>
    <div class="ms-2 text-sm">
        <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">Active</label>
        <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Designates whether this user should be treated as active. Unselect this instead of deleting accounts.</p>
    </div>
    <div class="flex items-center h-5">
        {/* <label htmlfor="permission_active" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Active</label> */}
        <input type='checkbox' className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        name="permission_Staff_status" id="permission_Staff_status"
        {...register("permission_Staff_status")}>
      </input>
    </div>
    <div class="ms-2 text-sm">
        <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">Staff Status</label>
        <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Designates whether the user can log into this admin site.</p>
    </div>    
    <div class="flex items-center h-5">
        {/* <label htmlfor="permission_active" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Active</label> */}
        <input type='checkbox' className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        name="permission_Superuser_status" id="permission_Superuser_status"
        {...register("permission_Superuser_status")}>
      </input>
    </div>
    <div class="ms-2 text-sm">
        <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">Superuser Status</label>
        <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Designates that this user has all permissions without explicitly assigning them.</p>
    </div>
</div>
    <div className="mb-6" style={{marginTop:"1%"}}>
        <label style={{paddingTop:'2%'}} for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password"
        name="password"
        {...register("password", { required: "Password is required." })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    {errors.password && <p>{errors.password.message}</p>}
    <div class="help" id="id_password1_helptext">
        <div><ul><li class="text-xs font-normal text-gray-500 dark:text-gray-300">Your password can’t be too similar to your other personal information.</li><li class="text-xs font-normal text-gray-500 dark:text-gray-300">Your password must contain at least 8 characters.</li><li class="text-xs font-normal text-gray-500 dark:text-gray-300">Your password can’t be a commonly used password.</li><li class="text-xs font-normal text-gray-500 dark:text-gray-300">Your password can’t be entirely numeric.</li></ul></div>
    </div>
    </div> 
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>
  </>
);
};