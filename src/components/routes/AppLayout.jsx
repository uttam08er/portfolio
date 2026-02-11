import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../layout/Footer';
import ScrollToTop from '../ui/ScrollTop';

const AppLayout = () => {
    return (
        <div className="App">
            <Outlet />
            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default AppLayout;
