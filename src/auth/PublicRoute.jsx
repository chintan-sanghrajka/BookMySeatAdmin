import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import SideNavbar from '../components/data/navbar/SideNavbar.jsx'

const PublicRoute = () => {
    const auth = Cookies.get('bookMySeatAdminToken') || '';

    return (
        <>
            {
                !auth ?
                    <>
                        <SideNavbar />
                        <Outlet />

                    </>
                    : <Navigate to='/' />
            }
        </>
    )
}

export default PublicRoute
