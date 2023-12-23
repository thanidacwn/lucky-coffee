// import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import './Sidebar.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import control from '../assets/images/control.png';
import logo from '../assets/images/logo.png';
import user from '../assets/images/user-2.png';
import menu from '../assets/images/menu-white.png';
import order from '../assets/images/order-food.png';
import promotions from '../assets/images/promotions.png';
import data from '../assets/images/data.png';
import logout from '../assets/images/logout.png';


function Sidebar() {
    // let sidebarObj: SidebarComponent;
    // function onCreate(): void {
    //     sidebarObj.element.style.visibility='';
    // }
    // function open(): void {
    //     console.log("Sidebar is opened");
    // }
    // function close(): void {
    //     console.log("Sidebar is closed");
    // }

    // // Open the Sidebar
    // function openClick(): void {
    //     sidebarObj.show();
    // }

    // // Close the Sidebar
    // function closeClick(): void {
    //     sidebarObj.hide();
    // }
    const navigate = useNavigate();

    const handleItemClick = (path: string) => {
      navigate(path);
    };
    
    return (
        <div className="sidebar">
        <ul>
            {/* Add logo */}
            <img src={control} alt="sidebar-control" className="sidebar-control"/>
            <img src={logo} alt="sidebar-logo" className="sidebar-logo"/>
            <li>
                <img src={user} alt="sidebar-user" className="sidebar-icon"/>Username
            </li>
            <li onClick={() => handleItemClick('/menu')}>
                <img src={menu} alt="sidebar-menu" className="sidebar-icon"/>Menu
            </li>
            <li onClick={() => handleItemClick('/order')}>
                <img src={order} alt="sidebar-order" className="sidebar-icon"/>Ordering
            </li>
            <li onClick={() => handleItemClick('/promotions')}>
                <img src={promotions} alt="sidebar-promotions" className="sidebar-icon"/>Promotions
            </li>
            <li onClick={() => handleItemClick('/data')}>
                <img src={data} alt="sidebar-data" className="sidebar-icon"/>Data Analysis
            </li>
            <li onClick={() => handleItemClick('/logout')}>
                <img src={logout} alt="sidebar-logout" className="sidebar-icon"/>Logout
            </li>
        </ul>
        </div>
    );
};

export default Sidebar;