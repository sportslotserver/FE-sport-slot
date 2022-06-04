import React, { useState } from "react";
import '../../Assets/Styles/Navbar/Navbar.scss'
import {Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";
import HeaderLogo from '../../Assets/Images/Header/sport-slot-logo.png'
import NavbarUserButton from '../navbar-user-button/navbar-user-button'

function Navbar(){
    const [isLogin, setIsLogin] = useState(true)

    const OpenCloseMenu = () => {
        var menu = document.getElementById('menu')
        if(menu.style.display === "block")
            menu.style.display = "none";
        else
            menu.style.display = "block";
    }
    return(
        <>
        <div className="navbar-container-lg d-none d-sm-none d-md-none d-lg-block">
            <div className="navbar-lg">
                <div className="nav-logo-lg">
                    <img className="nav-logo-img" src={HeaderLogo}/>
                </div>
                {isLogin ?
                <div className="nav-options-lg">
                    <Link className="nav-option-lg" to="/">My games</Link>
                    <Link className="nav-option-lg" to="/">Courts</Link>
                    <Link className="nav-option-lg" to="/">Players</Link>
                    <div className="nav-option-lg"><NavbarUserButton/></div>
                </div>
                :
                <div className="nav-options-lg">
                    <Link className="nav-option-lg" to="/">Log in</Link>
                    <Link className="nav-option-lg" to="/register">Register</Link>
                </div>
                }
            </div>
        </div>
        <div className="navbar-container-xs-sm-md d-block d-sm-block d-md-block d-lg-none">
            <div className="navbar-xs-sm-md">
                
                <div className="nav-logo-xs-sm-md">
                    <img className="nav-logo-img" src={HeaderLogo}/>
                </div>
                <button className="nav-button-xs-sm-md" onClick={OpenCloseMenu}>
                    <List/>
                </button>
            </div>
            <div className="menu-xs-sm-md" id="menu">
                {isLogin ?
                <>
                    <div className="nav-option-xs-sm-md">
                        <Link className="nav-option-lg" to="/" onClick={OpenCloseMenu}>My games</Link>
                    </div>
                    <div className="nav-option-xs-sm-md">
                        <Link className="nav-option-lg" to="/" onClick={OpenCloseMenu}>Courts</Link>
                    </div>
                    <div className="nav-option-xs-sm-md">
                        <Link className="nav-option-lg" to="/" onClick={OpenCloseMenu}>Messages</Link>
                    </div>
                    <div className="nav-option-xs-sm-md">
                        <Link className="nav-option-lg" to="/" onClick={OpenCloseMenu}>Help</Link>
                    </div>
                    <div className="nav-user-option-xs-sm-md">
                        <Link className="nav-option-lg" to="/" onClick={OpenCloseMenu}><NavbarUserButton/></Link>
                    </div>
                </>
                :
                <>
                    <div className="nav-option-xs-sm-md">
                        <Link className="nav-option-lg" to="/" onClick={OpenCloseMenu}>Log in</Link>
                    </div>
                    <div className="nav-option-xs-sm-md">
                        <Link className="nav-option-lg" to="/register" onClick={OpenCloseMenu}>Register</Link>
                    </div>
                </>
                }
            </div>
        </div>
        
        </>
    );
}

export default Navbar