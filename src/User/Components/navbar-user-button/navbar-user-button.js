import React, {useState} from "react";
import {Link } from "react-router-dom";
import Layer1 from '../../Assets/Images/Header/Layer1.png'

function NavbarUserButton(){

    const [menuIsOpen, setMenuIsOpen] = useState(true)

    const handleMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    
    return(
        <>
        <div onClick={handleMenu} style={{display: "flex", maxWidth: 200, justifyContent: "space-between", alignItems: "center",minWidth: 120, backgroundColor: "rgb(36,36,36)", color: "white", fontSize: 14,height: 40, marginLeft: 30, borderRadius: 15}}>
            <span style={{marginLeft: 10, fontWeight: "bold"}}>Username</span>
            <img style={{width: 28, height: 30, marginRight: 5}} src={Layer1}/>
        </div>
        {menuIsOpen &&
        <div className="navbar-user-menu">
            <h4>Balance <span className="green-text"> 2,457 RSD</span></h4>
            <h4>Notifications</h4>
            <Link style={{textDecoration: "none"}} to="/account"><h4>Account</h4></Link>
            <h4>Log out</h4>
        </div>
        }
        </>
    );
}

export default NavbarUserButton