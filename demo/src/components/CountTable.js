import React from 'react'
import ReactApexChart from "react-apexcharts";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function CountTable() {
     const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
  };
  return (
    <>
    <div class="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700" style={{width:"50vw"}}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Top Exposures" value="1" />
                    <Tab label="Top Open Services" value="2" />
                </TabList>
            </Box>
            <TabPanel value="1">
                <div class="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            <li class="py-3 sm:py-3">
                                <div class="flex items-center">
                                    <div class="flex-1 min-w-0 ms-4">

                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            1. Http Active on Internet Device
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">18</button>
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-3">
                                <div class="flex items-center">
                                    <div class="flex-1 min-w-0 ms-4">

                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            2. SSH Active on Internet Device
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">10</button>
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-3">
                                <div class="flex items-center">
                                    <div class="flex-1 min-w-0 ms-4">

                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            3. Open Proxy
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">8</button>
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-3">
                                <div class="flex items-center">
                                    <div class="flex-1 min-w-0 ms-4">

                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            4. Version Disclosure on a service
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">5</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
              </TabPanel>
              <TabPanel value='2'>
              <div class="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            <li class="py-3 sm:py-3">
                                <div class="flex items-center">
                                    <div class="flex-1 min-w-0 ms-4">

                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            1. &emsp; Http 80
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">18</button>
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-3">
                                <div class="flex items-center">
                                    <div class="flex-1 min-w-0 ms-4">

                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            2. &emsp; SSH 22
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">10</button>
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-3">
                                <div class="flex items-center">
                                    <div class="flex-1 min-w-0 ms-4">

                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            3. &emsp; Telnet 23
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">8</button>
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-3">
                                <div class="flex items-center">
                                    <div class="flex-1 min-w-0 ms-4">

                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            4. &emsp; FTP 21
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">5</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
              </TabPanel>
              </TabContext>
              </div>
              </>
    )
}
