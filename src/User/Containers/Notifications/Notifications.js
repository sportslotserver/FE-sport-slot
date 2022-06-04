import '../../Assets/Styles/Notifications/Notifications.scss'
import NotificationCard from '../../Components/notification-card/notification-card'

function Notifications(){
    return(
        <div className="notifications-main-container">
            <h1>Notifications</h1>
            <NotificationCard type={"1"}/>
            <NotificationCard type={"2"}/>
            <NotificationCard type={"3"}/>
            <NotificationCard type={"4"}/>
            <NotificationCard type={"5"}/>
            <NotificationCard type={"6"}/>
        </div>
    )
}

export default Notifications