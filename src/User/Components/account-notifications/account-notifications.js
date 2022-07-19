import '../../Assets/Styles/AccountNotifications/AccountNotifications.scss'
import AccountNotificationCard from '../account-notification-card/account-notification-card';

function AccountNotifications({ player, update }){
    return(
        <div className="account-notifications-container">
            <AccountNotificationCard player={player} update={update} title={"Invites"} text={"Allow other player to invite you to their slots."}/>
            <AccountNotificationCard player={player} update={update} title={"Messages"} text={"Get messages from players, admins and owners via email."}/>
            <AccountNotificationCard player={player} update={update} title={"Reminders"} text={"Get reminder messages for games and reservations via email."}/>
            <AccountNotificationCard player={player} update={update} title={"Promotions"} text={"Get promotional messages and tips via email."}/>
            <button className="notification-save-button">Save</button>
        </div>
    )
}

export default AccountNotifications;