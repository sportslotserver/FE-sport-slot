import React, { useState } from "react";
import '../../Assets/Styles/Register/Register.scss'
import Api from '../../../api/'
import { PlayerActions } from '../../../api/actions'

function Register(){
    const [fullname, setFullname] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [height, setHeight] = useState('')
    const [preferedSports, setPreferedSports] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const _onFocusDate = (e) => {
        e.currentTarget.type = "date";
    }
    const _onBlurDate = (e) =>{
          e.currentTarget.type = "text";
    }

    /**
     * First of all we need to have input fields validation "required and non required fields"
     * Required fields: full_name, birthday, state, city, gender, email, password, prefered_sport, terms
     * Non requeired fields: height, age, phone
     * We'll see if there is need to get state's and city's from database for the first time
     * Also, after registration, player will be redirected to info page and BE will send email to player's to confirm their account's, and after that they can loging to account
     * If some error occurs while user try to registrate to platform, we'll send him to info page (platform is under maintaining)
     * To choose city from drop down, first need's country to be selected 
     */
    const signIn = () => {
        Api.user(PlayerActions.PLAYER_REGISTRATION, {
            full_name: fullname,
            birthday: dateOfBirth,
            height: height,
            email: email,
            state: state,
            city: city,
            street: address,
            "gender": "male", // add this field in form
            "age": "27", // this can be calculated without user fill this field
            "phone": "023454354233", // add this field in form
            password: password,
            sport: preferedSports,
            terms: true // add this field in form
        }).then(response => {// This bellow is object response from server for registration
            // {
            //     actionStatus: true
            //     playerID: 8979503758
            //     playerName: "marko taskovic"
            //     status: 200
            // } 
        }).catch(err => {
            throw new Error(err)
        })
    }

    return(
        <div className="register-main-container">
            <div className="register-container padding-10px">
                <div className="register-title heading-1">Register</div>
                <div>
                    <input className="register-input" value={fullname} onChange={(event)=>{setFullname(event.target.value)}} type="text" placeholder="Full name"/>
                </div>
                <div>
                    <input className="register-input" value={dateOfBirth} onChange={(event)=>{setDateOfBirth(event.target.value)}} onFocus={(e)=>{_onFocusDate(e)}} onBlur={(e)=>{_onBlurDate(e)}} type="text" placeholder="Date of birth"/>
                </div>
                <div>
                    <input className="register-input" value={height} onChange={(event)=>{setHeight(event.target.value)}} min="1" type="number" placeholder="Height"/>
                </div>
                <div>
                    <input className="register-input" value={preferedSports} onChange={(event)=>{setPreferedSports(event.target.value)}} type="text" placeholder="Prefered sports"/>
                </div>
                <div>
                    <input className="register-input" value={address} onChange={(event)=>{setAddress(event.target.value)}} type="text" placeholder="Address"/>
                </div>
                <div>
                    <input className="register-input" value={city} onChange={(event)=>{setCity(event.target.value)}} type="text" placeholder="City"/>
                </div>
                <div>
                    <input className="register-input" value={state} onChange={(event)=>{setState(event.target.value)}} type="text" placeholder="State"/>
                </div>
                <div>
                    <input className="register-input" value={email} onChange={(event)=>{setEmail(event.target.value)}} type="email" placeholder="Email address"/>
                </div>
                <div>
                    <input className="register-input" value={password} onChange={(event)=>{setPassword(event.target.value)}} type="password" placeholder="Password"/>
                </div>
                <div>
                    <input className="register-radio-input" type="radio"/>
                    <span className="register-radio-label-1">I have read and agreed to </span>
                    <span className="register-radio-label-2">Terms and conditions!</span>
                </div>
                <button className="green-button" onClick={() => signIn()}>
                    Register
                </button>
            </div>
        </div>
    );
}

export default Register