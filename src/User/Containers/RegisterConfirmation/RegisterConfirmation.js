import React from "react";
import '../../Assets/Styles/RegisterConfirmation/RegisterConfirmation.scss'

function RegisterConfirmation(){
    return(
        <div className="register-confirmation-main-container">
            <div className="register-confirmation-container">
                <div className="register-confirmation-title">Congratulations</div>
                <div className="register-confirmation-text">
                    Thank you for registering.<br/>
                    We have sent en email. Please verify your address.<br/><br/>
                    Enjoy!
                </div>
            </div>
        </div>
    );
}

export default RegisterConfirmation