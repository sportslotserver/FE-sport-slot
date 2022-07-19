import { useRef, useState } from 'react'
import '../../Assets/Styles/LoginAndSecurity/LoginAndSecurity.scss'
import SwitchButton from '../switch-button/switch-button'

function LoginAndSecurity({ player, update }){

    const [ showEdit, setShowEdit ] = useState(true)
    const [ password, setPassword ] = useState("")
    const inputRef = useRef(null)

    const updatePassword = () => {
        if (password != '') {
            update({ [inputRef.current.name]: password})
            showEdit(true)
        }
    }

    return(
        <>
        <div className="login-and-security-password-container">
            <div className="login-and-security-input-header">
                <h4><b>Password</b></h4>
                <div>
                    {
                        showEdit ?
                        <h5 style={{cursor: "pointer"}}><b className="green-text" onClick={()=>{setShowEdit(false)}}>Change</b></h5>
                        :
                        <h5 style={{cursor: "pointer"}}><b className="orange-text" onClick={()=>{setShowEdit(true)}}>Cancel </b></h5>
                    }
                </div>
            </div>
            <input ref={inputRef} type="text" name="password" placeholder={"Type new password"} onChange={(e) => setPassword(e.target.value)} disabled={showEdit ? true : false}/>
            <button className="save-password-button" disabled={showEdit} onClick={updatePassword}>Save</button>
        </div>
        <div style={{marginTop: 30}}>
            <h4><b>Security - phone autentification</b></h4>
            <div className="phone-autentification-container">
                <div>
                    <h5>Phone autentification is turned ON</h5>
                    <h5>You will recieve a code when a login is attempted from a new device.</h5>
                </div>
                <SwitchButton/>
            </div>
        </div>
        <h5 style={{marginTop: 20}}><b>Deactivate account</b></h5>
        </>
    )
}

export default LoginAndSecurity;