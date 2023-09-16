import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const PublicRoute = () => {
    const auth = Cookies.get('bookMySeatAdminToken') || '';

    return (
        <>
            {
                !auth ?
                    <>
                        <Outlet />

                    </>
                    : <Navigate to='/home' />
            }
        </>
    )
}

export default PublicRoute
