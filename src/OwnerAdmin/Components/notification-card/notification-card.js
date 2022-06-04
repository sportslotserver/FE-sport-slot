import '../../Assets/Styles/NotificationCard/NotificationCard.scss'
import icon1 from '../../Assets/Images/OwnerAdminNotifications/icon1.png'
import icon2 from '../../Assets/Images/OwnerAdminNotifications/icon2.png'
import icon3 from '../../Assets/Images/OwnerAdminNotifications/icon3.png'
import icon4 from '../../Assets/Images/OwnerAdminNotifications/icon4.png'
import icon5 from '../../Assets/Images/OwnerAdminNotifications/icon5.png'
import icon6 from '../../Assets/Images/OwnerAdminNotifications/icon6.png'
import {ThreeDotsVertical} from "react-bootstrap-icons"

function NotificationCard(props){
    const {type} = props
    return(
        <div className="notification-card-main-container">
            {type === "1" && <img src={icon1} alt={""} width={40} height={40}/>}
            {type === "2" && <img src={icon2} alt={""} width={40} height={40}/>}
            {type === "3" && <img src={icon3} alt={""} width={40} height={40}/>}
            {type === "4" && <img src={icon4} alt={""} width={40} height={40}/>}
            {type === "5" && <img src={icon5} alt={""} width={40} height={40}/>}
            <div className="notification-card-container">
                {
                type === "1" &&
                <>
                    <div className="notification-card-container-left">
                        <h5><b className="green-text">SLOT RESERVATION CONFIRMED!</b></h5>
                        <h4><b>Super Sport Court Basketball 1</b></h4>
                        <h5>Court address lorem ipsum dolor 3432b, Brooklyn, NYS<br/>Wed, Oct 3 / 08AM - 10AM</h5>
                    </div>
                    <div className="notification-card-container-right">
                            <ThreeDotsVertical/>
                            <div>
                                <h5><b>View reservations</b></h5>
                            </div>
                            <div>
                                <h4 className="green-text">
                                    $55 total pride
                                </h4>
                            </div>
                    </div>
                </>
                }
                {
                type === "2" &&
                <>
                    <div className="notification-card-container-left">
                        <h5><b className="green-text">SLOT RECHEDULE REQUEST!</b></h5>
                        <h4><b>Super Sport Court Basketball 1</b></h4>
                        <h5>Wed, Oct 3 / 08AM - 10AM to <b>Wed, Oct 10 / 08AM - 10AM</b><br/>Initial slot price: $50</h5>
                    </div>
                    <div className="notification-card-container-right">
                            <ThreeDotsVertical/>
                            <div>
                                <button className="accept-button">Accept</button>
                                <button className="decline-button">Decline</button>
                            </div>
                            <div>
                                <h4 className="green-text">
                                    $55 new price
                                </h4>
                            </div>
                    </div>
                </>
                }
                {
                type === "3" &&
                <>
                    <div className="notification-card-container-left">
                        <h5>Maximilian Rodriguez <span className="orange-text"><b>CANCELLED SLOT!</b></span></h5>
                        <h4><b>Super Sport Court Basketball 1</b></h4>
                        <h5>Court address lorem Ipsum dolor 3432b, Brooklyn, NYC<br/>Wed, Oct 3 / 08AM - 10AM / 6 players confirmed</h5>
                    </div>
                    <div className="notification-card-container-right">
                            <ThreeDotsVertical/>
                            <div>
                                <h5><b>View payments</b></h5>
                            </div>
                            <div>
                                <h4>
                                    <img src={icon6} alt={""} style={{marginRight: 5}}/>you get $23 refund
                                </h4>
                            </div>
                    </div>
                </>
                }
                {
                type === "4" &&
                <>
                    <div className="notification-card-container-left">
                        <h5><b className="green-text">PAYMENT RECEIVED!</b></h5>
                        <h4><b>$53</b></h4>
                        <h5>Super Sport Court Basketball 1<br/>Wed, Oct 3 / 08AM - 10AM / 7 confirmed players</h5>
                    </div>
                    <div className="notification-card-container-right">
                            <ThreeDotsVertical/>
                            <div>
                                <h5><b>View payments</b></h5>
                            </div>
                    </div>
                </>
                }
                {
                type === "5" &&
                <>
                    <div className="notification-card-container-left">
                        <h5><b className="green-text">PAYMENT WITHDRAWAL!</b></h5>
                        <h5>You requested a payment of $280<br/>from Sportslots via Bank Wire Transfer</h5>
                    </div>
                    <div className="notification-card-container-right">
                            <ThreeDotsVertical/>
                            <div>
                                <h5><b>View payments</b></h5>
                            </div>
                    </div>
                </>
                }
            </div>
        </div>
    )
}

export default NotificationCard