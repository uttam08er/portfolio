import React, { useState } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../layout/Footer';
import ScrollToTop from '../ui/ScrollTop';


const AppLayout = () => {
    const navigation = useNavigation();
    console.log(navigation.state);
    if (navigation.state === 'loading') {
        return (
            <div>Loading...</div>
        );
    }
    
    if (navigation.state === 'submitting') {
        return (
            <div>Submitting...</div>
        );
    }
    return (
        <div className="App">
            <Outlet />
            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default AppLayout;
