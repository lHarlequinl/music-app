import React from 'react';
import SidebarUser from './sidebar-user';
import SidebarList from './sidebar-list';

const Sidebar = () => {
    return (
        <div className="main__sidebar sidebar">
            <SidebarUser name="Maksim.Aleshin" />
            <div className="sidebar__block">
                <SidebarList />
            </div>
        </div>
    );
};

export default Sidebar;
