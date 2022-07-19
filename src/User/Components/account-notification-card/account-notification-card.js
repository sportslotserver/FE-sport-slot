import { useEffect, useState } from 'react';
import '../../Assets/Styles/AccountNotifications/AccountNotifications.scss'
import SwitchButton from '../switch-button/switch-button';

function AccountNotificationCard({ player, update, title, text }){

    const [notificationName, setNotificationName] = useState(null)
    const [notificationActivity, setNotificationActivity] = useState(false)

    useEffect(() => {
        if (title) {
            switch(title) {
                case "Invites":
                    setNotificationName("notification_invites")
                    break
                case "Messages":
                    setNotificationName("notification_messages")
                    break
                case "Reminders":
                    setNotificationName("notification_reminders")
                    break
                case "Promotions":
                    setNotificationName("notification_promotions")
                    break
            }
        }
    }, [title])

    useEffect(() => {
        if (player) {
            switch(title) {
                case "Invites":
                    setNotificationActivity(player?.notification_invites)
                    break
                case "Messages":
                    setNotificationActivity(player?.notification_messages)
                    break
                case "Reminders":
                    setNotificationActivity(player?.notification_reminders)
                    break
                case "Promotions":
                    setNotificationActivity(player?.notification_promotions)
                    break
            }
        }
    }, [player])

    return(
        <div className="account-notification-card-container">
            <div className="account-notification-card-left-container">
                <h3>{title}</h3>
                <h5>{text}</h5>
            </div>
            <div className="account-notification-card-right-container">
                <SwitchButton update={update} notificationActivity={notificationActivity} notificationName={notificationName} />
            </div>
        </div>
    )
}

export default AccountNotificationCard;