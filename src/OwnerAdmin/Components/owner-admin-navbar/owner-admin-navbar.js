import React, { useState } from "react";
import '../../Assets/Styles/OwnerAdminNavbar/OwnerAdminNavbar.scss'
import {Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";
import HeaderLogo from '../../Assets/Images/OwnerAdminNavbar/sport-slot-logo.png'
import Layer1 from '../../Assets/Images/OwnerAdminNavbar/Layer1.png'
//import NavbarUserButton from '../navbar-user-button/navbar-user-button'

function OwnerAdminNavbar(){

    const [menuIsOpen, setMenuIsOpen] = useState(true)

    const handleMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return(
        <>
        <div className="owner-admin-navbar-container-lg d-none d-sm-none d-md-none d-lg-block">
            <div className="owner-admin-navbar-lg">
                <div className="owner-admin-navbar-logo-lg">
                    <img className="owner-admin-navbar-logo-img" src={HeaderLogo}/>
                </div>
                <div>
                    <div onClick={handleMenu} style={{display: "flex", maxWidth: 200, justifyContent: "space-between", alignItems: "center",minWidth: 120, backgroundColor: "rgb(36,36,36)", color: "white", fontSize: 14,height: 40, marginLeft: 30, borderRadius: 15}}>
                        <span style={{marginLeft: 10, fontWeight: "bold"}}>Username</span>
                        <img style={{width: 28, height: 30, marginRight: 5}} src={Layer1}/>
                    </div>
                    {menuIsOpen &&
                    <div className="owner-admin-navbar-menu">
                        <h4>Earnings <span className="green-text"> 2,457 RSD</span></h4>
                        <h4>Notifications</h4>
                        <Link to="/owner-admin-courts" className="owner-admin-navbar-link"><h4>Courts</h4></Link>
                        <h4>Settings</h4>
                        <h4>Help</h4>
                        <h4>Log out</h4>
                    </div>}
                </div>
            </div>
        </div>
        <div className="owner-admin-navbar-container-xs-sm-md d-block d-sm-block d-md-block d-lg-none">
            <div className="owner-admin-navbar-xs-sm-md">
                <div className="owner-admin-navbar-logo-xs-sm-md">
                    <img className="owner-admin-navbar-logo-img" src={HeaderLogo}/>
                </div>
                <div>
                    <div onClick={handleMenu} style={{display: "flex", maxWidth: 200, justifyContent: "space-between", alignItems: "center", backgroundColor: "rgb(36,36,36)", color: "white", fontSize: 14, marginLeft: 30, borderRadius: "50%"}}>
                        
                        <img style={{width: 40, height: 40, margin: 5, borderRadius: "50%"}} src={Layer1}/>
                    </div>
                    {menuIsOpen &&
                    <div className="owner-admin-navbar-menu">
                        <h4>Earnings <span className="green-text"> 2,457 RSD</span></h4>
                        <h4>Notifications</h4>
                        <h4>Courts</h4>
                        <h4>Settings</h4>
                        <h4>Help</h4>
                        <h4>Log out</h4>
                    </div>}
                </div>
            </div>
        </div>
        </>
    );
}

export default OwnerAdminNavbar