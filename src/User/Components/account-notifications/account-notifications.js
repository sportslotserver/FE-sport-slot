import '../../Assets/Styles/AccountNotifications/AccountNotifications.scss'
import AccountNotificationCard from '../account-notification-card/account-notification-card';

function AccountNotifications(){
    return(
        <div className="account-notifications-container">
            <AccountNotificationCard title={"Invites"} text={"Allow other player to invite you to their slots."}/>
            <AccountNotificationCard title={"Messages"} text={"Get messages from players, admins and owners via email."}/>
            <AccountNotificationCard title={"Reminders"} text={"Get reminder messages for games and reservations via email."}/>
            <AccountNotificationCard title={"Promotions"} text={"Get promotional messages and tips via email."}/>
            <button className="notification-save-button">Save</button>
        </div>
    )
}

export default AccountNotifications;