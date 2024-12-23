import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
// import moduleName from 'module'
import { AgGridReact } from 'ag-grid-react';
import DropdownES from './DropdownES';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../index.css'; // Ensure your CSS is imported
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { API_URL } from '../App';

const Enterpriseassestsummary = () => {
//     const [assetData, setAssetData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);

//     const [rows, setRows] = useState([]);
//     const [page, setPage] = useState(0); // Page starts from 0 in DataGrid
//     const [loading, setLoading] = useState(false);
   
//     const fetchPaginatedData = async (page) => {
//       setLoading(true);
//       try {
//         // const url = `${API_URL}/assest_summary`.replace(/\/$/,'')+`?page=${page + 1}`
//         // console.log(url)
//         const response = await fetch(`${API_URL}/assestsummary`); // Backend page starts from 1
//         const result = await response.json();
   
//         // Update state with fetched data
//         setRows(result.results || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//       setLoading(false);
//     };
   
//     // Fetch data when the page changes
//     useEffect(() => {
//       fetchPaginatedData(page);
//     }, [page]);

//     const handlePageChange = (newPage) => {
//         console.log("Page changed to :",newPage)
//         setPage(newPage); // Update page state on page change
//       };
   

//     // const [groupedLocation, setGroupedLocation] = useState([]);

//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {
//     //             const response = await fetch(`${API_URL}/asset_summary/`);
//     //             if (!response.ok) {
//     //                 throw new Error(`HTTP error! status: ${response.status}`);
//     //             }
//     //             const data = await response.json();
//     //             console.log("Fetch data:", data);
//     //             setAssetData(data[0]);
//     //             setFilteredData(data[0]); // Initialize filtered data
//     //         } catch (error) {
//     //             console.error('Fetch error:', error);
//     //         }
//     //     };
//     //     fetchData();
//     // }, []);

//     // const handleFilterChange = (filters) => {
//     //     const { assetType, location } = filters;
//     //     console.log("Filtered receive:", filters);
//     //     const filtered = assetData.filter((row) => {
//     //         const assetTypeMatch = assetType === '' || row['Device'] === assetType;
//     //         const locationMatch = location === '' || row['Geography'] === location;
//     //         return assetTypeMatch || locationMatch;
//     //     });
//     //     console.log("Filtered data:", filtered);
//     //     setFilteredData(filtered); // Update filtered data

//     //     if (filtered.length === 0) {
//     //         console.warn('No data matches the current filters.');
//     //     }
//     // };

//     // Column definitions for the Ag-Grid
//     const columnDefs = [
//         { headerName: 'IP Address', field: 'IP Address' },
//         { headerName: 'IP Type', field: 'IP Type_x' },
//         { headerName: 'Asset Type', field: 'Device' },
//         { headerName: 'Branch', field: 'Branch' },
//         { headerName: 'Location', field: 'Location' },
//         { headerName: 'Geography', field: 'Geography' },
//         { headerName: 'Managed By_x', field: 'Managed By_x' },
//         { headerName: 'List of open ports', field: 'List of open ports'},
//         { headerName: 'Count of open ports', field: 'open_ports'},
//         { headerName: 'Count of expousure', field: 'exposure'}
//     ];


//     return (
//         <>
//         <div className="ag-theme-alpine" style={{ height: 500, width: '100%', marginTop: 20 }}>
//         <DataGrid
//         rows={rows.map((row, index) => ({ ...row, id: index }))}
//         columns={columnDefs}
//         rowCount={rowCount}
//         pageSize={100}
//         getRowId={(row) => row["IP Address"]}
//         loading={loading}
//         disableSelectionOnClick
//         pageSizeOptions={[100]}
//       />
//       </div>
//         </>
//     );
// };

      const [tasks, setTasks] = useState([]);
      const [page, setPage] = useState(0);  // Zero-indexed page
      const [rowsPerPage, setRowsPerPage] = useState(100);  // Fixed rows per page
      const [hasMore, setHasMore] = useState(true); // Flag to track if there are more pages


      const fetchTasks = () => {
        fetch(`http://127.0.0.1:8000/api/asset_summary?page=${page + 1}`)  // Pass page + 1 because Django page starts from 1
                    .then((response) => response.json())
                    .then((data) => {
                        setTasks(data.data);  // Update tasks
                        setHasMore(data.has_next);  // Check if there are more pages
                    })
                    .catch((error) => console.error("Error fetching tasks:", error));
            };
         
            useEffect(() => {
                fetchTasks();  // Fetch tasks when page changes
            }, [page]);
         
            const handleChangePage = (event, newPage) => {
                setPage(newPage);
            };
         
            const columns = [
              { label: 'IP Address', id: 'IP Address' },
              { label: 'IP Type', id: 'IP Type_x' },
              { label: 'Asset Type', id: 'Device' },
              { label: 'Branch', id: 'Branch' },
              { label: 'Location', id: 'Location' },
              { label: 'Geography', id: 'Geography' },
              { label: 'Managed By_x', id: 'Managed By_x' },
              { label: 'List of open ports', id: 'List of open ports'},
              { label: 'Count of open ports', id: 'open_ports'},
              { label: 'Count of expousure', id: 'exposure'}
            ];
         
      return (
        <>
              <TableContainer component={Paper}>
                  <Table aria-label="task table">
                      <TableHead>
                          <TableRow>
                              {columns.map((column) => (
                                <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                                      {column.label}
                                  </TableCell>
                              ))}
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {tasks.map((task) => (
                            <TableRow hover role='checkbox' tabIndex={-1} key={task.id}>
                                  <TableCell>{task["IP Address"]}</TableCell>
                                  <TableCell>{task['IP Type_x']}</TableCell>
                                  <TableCell>{task['Device']}</TableCell>
                                  <TableCell>{task['Branch']}</TableCell>
                                  <TableCell>{task['Location']}</TableCell>
                                  <TableCell>{task['Managed By_x']}</TableCell>
                                  <TableCell>{task['List of open ports']}</TableCell>
                                  <TableCell>{task['open_ports']}</TableCell>
                                  <TableCell>{task['exposure']}</TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
                  <TablePagination
                      rowsPerPageOptions={[100]}  // Fixed page size of 100
                      component="div"
                      count={1756}  // Set total number of tasks or fetch dynamically
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                  />
              </TableContainer>
              </>
          );


}

export default Enterpriseassestsummary;
