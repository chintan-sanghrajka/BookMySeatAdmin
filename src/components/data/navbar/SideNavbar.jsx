import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SideNavbar = () => {
    const [heading, setHeading] = useState(1)
    return (
        <>
            <div className='admin_dashboard font_roboto'>
                <div className=''>
                    <h1 className='logo'>BookMySeat</h1>
                    <NavLink className={heading === 1 ? 'sidebar_heading sidebar_heading_active' : 'sidebar_heading'} to={`/home`} onClick={() => setHeading(1)}><i className="bi bi-house me-2"></i>Home</NavLink>

                    <NavLink className={heading === 2 ? 'sidebar_heading sidebar_heading_active' : 'sidebar_heading'} to={`/user-list`} onClick={() => setHeading(2)}><i className="bi bi-people me-2"></i>User List</NavLink>

                    <NavLink className={heading === 3 ? 'sidebar_heading sidebar_heading_active' : 'sidebar_heading'} to={`/category-list`} onClick={() => setHeading(3)}><i className="bi bi-collection-play me-2"></i>Category List</NavLink>

                    <NavLink className={heading === 4 ? 'sidebar_heading sidebar_heading_active' : 'sidebar_heading'} to={`/sub-category-list`} onClick={() => setHeading(4)}><i className="bi bi-film me-2"></i>SubCategory List</NavLink>

                    <NavLink className={heading === 5 ? 'sidebar_heading sidebar_heading_active' : 'sidebar_heading'} to={`/event-list`} onClick={() => setHeading(5)}><i className="bi bi-display me-2"></i>Event List</NavLink>

                    <div className="sidebar_heading" onClick={() => console.log('logout')}><i className="bi bi-box-arrow-left me-2"></i>Logout</div>
                </div>
            </div>
        </>
    );
}

export default SideNavbar;