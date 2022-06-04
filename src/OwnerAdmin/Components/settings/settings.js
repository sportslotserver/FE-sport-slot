import { useState } from 'react'
import SwitchButton from '../../../User/Components/switch-button/switch-button'
import '../../Assets/Styles/Settings/Settings.scss'
import PersonalInfoInput from '../personal-info-input/personal-info-input'

function Settings(){

    const [selectedOptionIndex, setselectedOptionsIndex] = useState(1)
    const [showEdit,setShowEdit] = useState(true)
    return(
        <div className="settings-container">
            <h4>Settings</h4>
            <div className="settings-content-container-filters">
            <div onClick={()=>{setselectedOptionsIndex(1)}} className={selectedOptionIndex === 1 ? "settings-content-container-filter-selected" : "settings-content-container-filter"}>
                Personal info
            </div>
            <div onClick={()=>{setselectedOptionsIndex(2)}} className={selectedOptionIndex === 2 ? "settings-content-container-filter-selected" : "settings-content-container-filter"}>
                Login & Security
            </div>
            <div onClick={()=>{setselectedOptionsIndex(3)}} className={selectedOptionIndex === 3 ? "settings-content-container-filter-selected" : "settings-content-container-filter"}>
                Payments
            </div>
            <div onClick={()=>{setselectedOptionsIndex(4)}} className={selectedOptionIndex === 4 ? "settings-content-container-filter-selected" : "settings-content-container-filter"}>
                Notifications
            </div>
        </div>
        {selectedOptionIndex === 1 &&
        <>
        <PersonalInfoInput label={"Legal name"} placeholders={["First name: Maximilian","Last name: Rodriguez"]}/>
        <PersonalInfoInput label={"Date of birth"} placeholders={["20. Jan 1992"]}/>
        <PersonalInfoInput label={"Location"} placeholders={["Brooklyn, NY"]}/>
        <PersonalInfoInput label={"Email address"} placeholders={["max@gmail.com"]} verified={true} verifiedText={"if email is changed, another verification is required"}/>
        <PersonalInfoInput label={"Phone number"} placeholders={["+123 456 789"]} verified={true} verifiedText={"if number is changed, another verification is required"}/>
        <div className="personal-info-id-container">
            <div className="personal-info-id-header">
                <h4><b>Verify identity</b></h4>
                <div>
                    <h5 style={{cursor: "pointer"}}><b className="orange-text">Not verified</b></h5>
                </div>
            </div>
                
            <div>
                <button className="green-button">Upload ID</button><br/><br/>
                <div><h5>Upload ID or passport images to verify your account</h5></div>
                <button className="green-button">Save</button>
            </div>
        </div>  
        </>
        }
        {selectedOptionIndex === 2 &&
        <>
        <div className="login-and-security-password-container">
            <h4><b>Reset password</b></h4>
            <input type="text" placeholder={"Type new password"}/>
            <input type="text" placeholder={"Retype new password"}/>
        </div>
        <button className="green-button">Reset password</button>
        <div className="settings-divider"></div>
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
        <div className="settings-divider"></div>
        <h5 style={{marginTop: 20}}><b>Account</b></h5>
        <h5 style={{marginTop: 20}}>Deactivate account</h5>
        </>
        }
        {selectedOptionIndex === 3 &&
        <>
        <h5><b>You currently don't have a payment method set up.</b></h5>
        <h5><b>Please fill in the details of your bank account and start earning.</b></h5>
        <div className="settings-payments-inputs">
            <input type="text" placeholder={"Type new password"}/>
            <input type="text" placeholder={"Type new password"}/>
            <div className="settings-payments-inputs-2">
                <input type="text" placeholder={"Type new password"}/>
                <input type="text" placeholder={"Type new password"}/>
            </div>
        </div>
        <button className="green-button">Add account</button>
        <div className="settings-divider"></div><br/>
        <h5><b>Primary payment account</b></h5><br/>
        <h5 className="secondary-text-color">Raifaisen Bank AD Beograd,</h5>
        <h5 className="secondary-text-color">Bulevar Nikole Tesle 21313</h5>
        <h5 className="secondary-text-color">Account: 840-234********-74</h5>
        <br/>
        <h5 className="green-text">Remove account</h5>
        <br/>
        <h5 className="green-text">Make primary</h5>
        <div className="settings-divider"></div><br/>
        <h5 className="secondary-text-color">Raifaisen Bank AD Beograd,</h5>
        <h5 className="secondary-text-color">Bulevar Nikole Tesle 21313</h5>
        <h5 className="secondary-text-color">Account: 840-234********-74</h5>
        <br/>
        <h5 className="green-text">Remove account</h5>
        <br/>
        <h5 className="green-text">Make primary</h5>
        <div className="settings-divider"></div>
        <br/>
        <h5 className="green-text"><b>Change payout account</b></h5>
        <br/>
        <h5 className="green-text"><b>Add payment method</b></h5>
        </>
        }
        </div>
    )
}

export default Settings;