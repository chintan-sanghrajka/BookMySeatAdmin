import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import SideNavbar from '../components/data/navbar/SideNavbar.jsx';

const PrivateRoute = () => {
    const auth = Cookies.get('bookMySeatAdminToken') || '';

    return (
        <>
            {
                auth ?
                    <>
                        <Outlet />
                        <SideNavbar />
                    </>
                    : <Navigate to='/login' />
            }
        </>
    )
}

export default PrivateRoute
