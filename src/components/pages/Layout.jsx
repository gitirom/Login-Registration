import { CssBaseline } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <>
        <CssBaseline />      {/* The margin in all browsers is removed              */}
        <Navbar />
        <Outlet />                                                                                 { /* The Outlet component alone allows nested routes to render their element content out and anything else the layout route is rendering, i.e. navbars, sidebars, specific layout components, */}                                                                         
        </>
    );
    
}

export default Layout;
