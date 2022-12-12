import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { CssBaseline} from "@mui/material";



import Home from "./components/Home";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom';


function App() {


  return (
    <div>
    
    
        <CssBaseline />
        <div className="app">
        <main className="content">
         
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route path="dashboard" element={<Dashboard />} />

              {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
              <Route path="*" element={<h1>Error!</h1>} />
            </Route>
          </Routes>      
          
        </main>
      </div>    
    </div>
    

  );
}

export default App;
