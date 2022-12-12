import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  

  return (
    <div>
           <Link to = "/">Home</Link>
           <Link to = "/Dashboard">Dashboard</Link>
           <Link to = "/Register">Login/Register</Link>
        
    </div>
  )
}

export default Navbar;