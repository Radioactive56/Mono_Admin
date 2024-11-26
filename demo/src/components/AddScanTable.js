import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router'
import Navbar from './Navbar';
import { API_URL } from '../App';

export default function AddScanTable() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit=(data)=>{
        const api_url=`${API_URL}/addScan/`;

        fetch(api_url,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)

        })
        .then(response=>{
            if (response.ok){
                console.log("Data Submitted successfully")
                navigate('/database');
            }
            else{
                alert("Error in Submitting Data!")
            }
        })
    }
    return (
        <>
        <Navbar title="ISAE ADMIN"/>
   <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{marginTop:"5%",marginLeft:"25%",marginRight:"25%"}}>
       <form onSubmit={handleSubmit(onSubmit)}>
           
    <div style={{paddingBottom:"4%"}}>
       <label>Scan Id:</label>
       <input
         {...register('scan_id', { required: 'Name is required' })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>
     <div style={{paddingBottom:"4%"}}>
       <label>Host Id:</label>
       <input
         {...register('host', { required: 'Name is required' })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>       
     <div style={{paddingBottom:"4%"}}>
       <label>Current Status :</label>
       <input
         {...register('current_status', { required: 'Name is required' })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>
     <div style={{paddingBottom:"4%"}}>
       <label>Scan Add Time :</label>
       <input type='datetime-local'
         {...register('scan_add_time')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>
     <div style={{paddingBottom:"4%"}}>
       <label>Priority : </label>
       <input
         {...register('priority')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>
     <div style={{paddingBottom:"4%"}}>
       <label>PT Start Time</label>
       <input type='datetime-local'
         {...register('pt_start_time')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>
     <div style={{paddingBottom:"4%"}}>
       <label>PT Stop Time :</label>
       <input type='datetime-local'
         {...register('pt_stop_time')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>
     <div style={{paddingBottom:"4%"}}>
       <label>Nmap Start Time :</label>
       <input type='datetime-local'
         {...register('nmap_start_time')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>     <div style={{paddingBottom:"4%"}}>
       <label>Nmap Stop Time :</label>
       <input type='datetime-local'
         {...register('nmap_stop_time')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>
     <div style={{paddingBottom:"4%"}}>
       <label>Nmap Scan Pid :</label>
       <input 
         {...register('nmap_scan_pid')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>     <div style={{paddingBottom:"4%"}}>
       <label>Nmap Abort Count :</label>
       <input
         {...register('nmap_abort_count')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>
     <div style={{paddingBottom:"4%"}}>
     <label>Core Start Time :</label>
       <input type='datetime-local'
         {...register('core_impact_start_time')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>   
     <div style={{paddingBottom:"4%"}}>    
     <label>Core Stop Time :</label>
       <input type='datetime-local'
         {...register('core_impact_stop_time')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>
     <div style={{paddingBottom:"4%"}}>
       <label>Scan Restart Count :</label>
       <input
         {...register('scan_restart_count')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>
     <div style={{paddingBottom:"4%"}}>
       <label>PTID :</label>
       <input
         {...register('nmap_report')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>
     <div style={{paddingBottom:"4%"}}>
       <label>Nmap Push Time:</label>
       <input type='datetime-local'
         {...register('nmap_push_time')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>
     <div style={{paddingBottom:"4%"}}>
       <label>Core Push Time:</label>
       <input type='datetime-local'
         {...register('nmap_push_time')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>
     <div style={{paddingBottom:"4%"}}>
       <label>Meta Push Time:</label>
       <input type='datetime-local'
         {...register('nmap_push_time')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>
     <div style={{paddingBottom:"4%"}}>
       <label>Meta Add Time :</label>
       <input
         {...register('meta_add_time')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>
     <div style={{paddingBottom:"4%"}}>
       <label>Debug Info :</label>
       <input
         {...register('debug_info')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>
     <div style={{paddingBottom:"4%"}}>
       <label>Scan Completed :</label>
       <input
         {...register('scan_complete')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       />
       {/* {errors.name &&<p>{errors.name.message}</p>} */}
     </div>
     <div style={{display:'flex',justifyContent:"center"}}>
     <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
       </div>
       </form>
   </div>
     </>
  )
}
