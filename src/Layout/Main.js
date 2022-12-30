import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='md:w-9/12 mx-auto'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;