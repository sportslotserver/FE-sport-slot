import React, { useState } from "react";
import '../../Assets/Styles/Login/Login.scss'
import Api from '../../../api/'
import { PlayerActions } from '../../../api/actions'

const Login = ({ setPlayerData, setLoggingStatus }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        Api.user(PlayerActions.PLAYER_LOGIN, {
            email: username,
	        password: password
        }).then(resp => {
            setPlayerData(resp.data)
            setLoggingStatus(true)
        }).catch(err => {
            console.log('Error while trying to login' + err)
        })
    }

    return(
        <div className="login-main-container">
            <div className="login-container padding-10px">
                <h1>Log in</h1>
                <div>
                    <input className="login-input" value={username} onChange={(event)=>{setUsername(event.target.value)}} type="email" placeholder="Email address"/>
                </div>
                <div>
                    <input className="login-input" value={password} onChange={(event)=>{setPassword(event.target.value)}} type="password" placeholder="Password"/>
                </div>
                <button className="green-button" onClick={() => handleLogin()}>
                    Log in
                </button>
            </div>
        </div>
    );
}

export default Login