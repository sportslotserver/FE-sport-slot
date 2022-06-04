import '../../Assets/Styles/AccountNotifications/AccountNotifications.scss'
import SwitchButton from '../switch-button/switch-button';

function AccountNotificationCard(props){

    const {title,text} = props
    return(
        <div className="account-notification-card-container">
            <div className="account-notification-card-left-container">
                <h3>{title}</h3>
                <h5>{text}</h5>
            </div>
            <div className="account-notification-card-right-container">
                <SwitchButton/>
            </div>
        </div>
    )
}

export default AccountNotificationCard;