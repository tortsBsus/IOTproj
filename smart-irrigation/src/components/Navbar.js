import React from 'react';
import { Link } from 'react-router-dom';
import "./components-css/Navbar.css";
import InvertColorsIcon  from '@mui/icons-material/InvertColors';
import { Icon } from '@mui/material';

function Navbar() {
  

  return (
    <div className='navbar'>
      <div>
      <InvertColorsIcon color="primary"/>
      </div>
        
         <div className='linkGroup'>
           <Link className='link' to = "/">Home</Link>
           <Link className='link' to = "/Dashboard">Dashboard</Link>
           <Link className='link' to = "/Register">Login</Link>
           </div>
    </div>
  )
}

export default Navbar;