import { useState } from 'react';
import '../../Assets/Styles/SwitchButton/SwitchButton.scss'

function SwitchButton(){
    const [turnOn, setTurnOn] = useState(true)
    return(
        <div className="switch-button-container">
            <div className={turnOn ? "on-off-switch turn-on" : "on-off-switch turn-off"} onClick={()=>{setTurnOn(!turnOn)}}>
                {turnOn ? "On" : "Off"}
            </div>
        </div>
    )
}

export default SwitchButton;