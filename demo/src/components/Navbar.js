import React from 'react'
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import SidebarNew from './SidebarNew';
import Dropdown from './Dropdown';
import Cookies from 'js-cookie'


export default function Navbar({title}) {
  const navigate = useNavigate();  
  const logout =()=>{
      Cookies.remove('Token')
      localStorage.clear()
      navigate('/')
    }
    const name = localStorage.getItem("name")

    const navbar = {
        background : "linear-gradient(90deg,#007991 0% ,#78ffd6 100%)",
        color: "antiquewhite"
        };
      return(
        
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div className="px-3 py-3 lg:px-5 lg:pl-3" style={navbar}>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start rtl:justify-end">
            <SidebarNew/>
        </div>
          <Link to="/dashboard" className="flex ms-2 md:me-24">
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">{title}</span>
          </Link>
          
        <div className="flex items-center">
            <div className="flex items-center ms-3">
            <Dropdown onSignOut={logout}>
            </Dropdown>
          </div>
      </div>
    </div>
    </div>
    </nav>
      );
}


Navbar.propTypes={
    title:PropTypes.string.isRequired,
}
Navbar.defaultProps={
    title:"Set Title Here",
}