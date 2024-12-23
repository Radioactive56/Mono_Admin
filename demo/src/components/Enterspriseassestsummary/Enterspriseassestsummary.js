import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
// import moduleName from 'module'
import { AgGridReact } from 'ag-grid-react';
import DropdownES from './DropdownES';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../index.css'; // Ensure your CSS is imported

const Enterpriseassestsummary = () => {
    const [assetData, setAssetData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [groupedLocation, setGroupedLocation] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/asset_summary/');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Fetch data:", data);
                setAssetData(data[0]);
                setFilteredData(data[0]); // Initialize filtered data
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchData();
    }, []);

    const handleFilterChange = (filters) => {
        const { assetType, location } = filters;
        console.log("Filtered receive:", filters);
        const filtered = assetData.filter((row) => {
            const assetTypeMatch = assetType === '' || row['Device'] === assetType;
            const locationMatch = location === '' || row['Geography'] === location;
            return assetTypeMatch || locationMatch;
        });
        console.log("Filtered data:", filtered);
        setFilteredData(filtered); // Update filtered data

        if (filtered.length === 0) {
            console.warn('No data matches the current filters.');
        }
    };

    // Column definitions for the Ag-Grid
    const columnDefs = [
        { headerName: 'IP Address', field: 'IP Address' },
        { headerName: 'IP Type', field: 'IP Type_x' },
        { headerName: 'Asset Type', field: 'Device' },
        { headerName: 'Branch', field: 'Branch' },
        { headerName: 'Location', field: 'Location' },
        { headerName: 'Geography', field: 'Geography' },
        { headerName: 'Managed By_x', field: 'Managed By_x' },
        { headerName: 'List of open ports', field: 'List of open ports'},
        { headerName: 'Count of open ports', field: 'open_ports'},
        { headerName: 'Count of expousure', field: 'exposure'}
    ];

    return (
        <>
            <Navbar title='ISAE ADMIN' />
            <div className="my-28" style={{ width: '100%' }}>
                <div className="dropdown-container">
                    <DropdownES onFilterChange={handleFilterChange} />
                </div>
                <div className="ag-theme-alpine" style={{ height: 500, width: '100%', marginTop: 20 }}>
                    <AgGridReact
                        rowData={filteredData}
                        columnDefs={columnDefs}
                        pagination={true}
                        paginationPageSize={10}
                    />
                </div>
            </div>
        </>
    );
};

export default Enterpriseassestsummary;
