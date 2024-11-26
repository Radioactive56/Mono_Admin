import './App.css';
import React from 'react';
import Home from './components/Home';
import Scans from './components/Scans';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Users from './components/Users';
import User from './components/User';
import Database from './components/Database';
import Login from './components/Login';
// import useAuth from './components/useAuth';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import SidebarNew from './components/SidebarNew';
import PtAgeing from './components/PtAgeing';
import Update from './components/Update';
import Add from './components/Add';
import UpateMeta from './components/UpdateMeta';
import MetaAdd from './components/MetaAdd';
import Comb_pt_EAS from './components/Comb_pt_EAS';
import AddScanTable from './components/AddScanTable';
import Shake from './components/Shake';

function App(){
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}></Route>
          <Route exact path='/sidebar' element={<SidebarNew/>}></Route>
          <Route exact path="/dashboard" element={<PrivateRoute element={<Home></Home>}></PrivateRoute>}></Route>
          <Route exact path="/scans" element={<PrivateRoute element={<Scans></Scans>}></PrivateRoute>}></Route>
          <Route exact path="/user" element={<PrivateRoute element={<User></User>}></PrivateRoute>} ></Route>
          <Route exact path="/users" element={<PrivateRoute element={<Users></Users>}></PrivateRoute>}></Route>
          <Route exact path="/database" element={<PrivateRoute element={<Database></Database>}></PrivateRoute>}></Route>
          <Route exact path="/assetsummary" element={<PrivateRoute element={<Comb_pt_EAS></Comb_pt_EAS>}></PrivateRoute>}></Route>
          <Route exact path="/update_scan/:id" element={<PrivateRoute element={<Update></Update>}></PrivateRoute>}></Route>
          <Route exact path="/update_meta_scan/:id" element={<PrivateRoute element={<UpateMeta></UpateMeta>}></PrivateRoute>}></Route>
          <Route exact path="/addScan" element={<PrivateRoute element={<Add></Add>}></PrivateRoute>}></Route>
          <Route exact path='/addscanTable' element={<PrivateRoute element={<AddScanTable></AddScanTable>}></PrivateRoute>}></Route>
          <Route exact path="/addMeta" element={<PrivateRoute element={<MetaAdd></MetaAdd>}></PrivateRoute>}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}


// function App(){
//   const {authenticated}=useAuth();
//   return (
//     <Router>
//       <Switch>
//        <Route exact path="/" component={Login}></Route>
//         <Route path="/dashboard">
//         {authenticated ? <Home/>: <Redirect to='/'/>}
//         </Route>
//         <Route exact path="/scans" >
//         {authenticated ? <Scans/>: <Redirect to='/'/>}
//         </Route>
//         <Route exact path="/users">
//         {authenticated ? <Users/>: <Redirect to='/'/>}
//         </Route>
//         <Route exact path="/main">
//         {authenticated ? <Main/>: <Redirect to='/'/>}
//         </Route>
//         <Route exact path="/database">
//         {authenticated ? <Database/>: <Redirect to='/'/>}
//         </Route>
//        </Switch>
//     </Router>

//   );
// }

export default App;
