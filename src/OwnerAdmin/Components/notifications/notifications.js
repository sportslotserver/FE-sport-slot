import NotificationCard from "../notification-card/notification-card";



function Notifications(){
    return(
        <div style={{width: 880, paddingLeft: 10}}>
            <NotificationCard type={"1"}/>
            <NotificationCard type={"2"}/>
            <NotificationCard type={"3"}/>
            <NotificationCard type={"4"}/>
            <NotificationCard type={"5"}/>
        </div>
    )
}

export default Notifications;