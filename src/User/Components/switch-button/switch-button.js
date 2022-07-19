import { useEffect, useState } from 'react';
import '../../Assets/Styles/SwitchButton/SwitchButton.scss'

function SwitchButton({ notificationName, notificationActivity, update }){
    const [turnOn, setTurnOn] = useState(false)

    useEffect(() => {
        setTurnOn(notificationActivity)
    }, [notificationActivity])

    const toggleActivity = (status) => {
        update({[notificationName]: status})
    }

    return(
        <div className="switch-button-container">
            <div className={turnOn ? "on-off-switch turn-on" : "on-off-switch turn-off"} onClick={() => {
                setTurnOn(!turnOn)
                toggleActivity(!turnOn)
            }}>
                {turnOn ? "On" : "Off"}
            </div>
        </div>
    )
}

export default SwitchButton;