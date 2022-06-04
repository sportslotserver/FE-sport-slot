import React, { useState } from "react";
import '../../Assets/Styles/Login/Login.scss'
import Api from '../../../api/'
import { PlayerActions } from '../../../api/actions'

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log('desava li se nesto ')
        Api.user(PlayerActions.PLAYER_LOGIN, {
            email: username,
	        password: password
        }).then(resp => { //TODO: Data after login needs to be store in redux store how we can have the player data through whole platform, and also store token in localStrorage or somewhere
            console.log('Player is logged in')
        }).catch(err => {
            console.log('Error while trying to login')
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