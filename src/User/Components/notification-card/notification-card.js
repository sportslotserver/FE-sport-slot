import '../../Assets/Styles/NotificationCard/NotificationCard.scss'
import userIcon from '../../Assets/Images/PlayerCard/image4.png'
import {ThreeDotsVertical} from "react-bootstrap-icons"

function NotificationCard(props){
    const {type} = props
    return(
        <div className="notification-card-main-container">
            <img src={userIcon} alt={""} width={40} height={40}/>
            <div className="notification-card-container">
                {
                type === "1" &&
                <>
                    <div className="notification-card-container-left">
                        <h5>Francois Delacroix invited you to</h5>
                        <h4><b>Cout address outdoor 635, Paris</b></h4>
                        <h5>Wed, Oct 3 / 08AM - 10AM<br/>5 to 10 confirmed players</h5>
                    </div>
                    <div className="notification-card-container-right">
                            <ThreeDotsVertical/>
                            <div>
                                <button className="accept-button">Accept</button>
                                <button className="decline-button">Decline</button>
                            </div>
                    </div>
                </>
                }
                {
                type === "2" &&
                <>
                    <div className="notification-card-container-left">
                        <h5>Maximilian Rodriguez invited you to</h5>
                        <h4><b>Super Sport Court Basketball 1</b></h4>
                        <h5>Court address lorem Ipsum dolor 3432b, Brooklyn, NYC<br/>Wed, Oct 3 / 08AM - 10AM / 5 to 10 confirmed players</h5>
                    </div>
                    <div className="notification-card-container-right">
                            <ThreeDotsVertical/>
                            <div>
                                <button className="accept-button">Accept</button>
                                <button className="decline-button">Decline</button>
                            </div>
                            <div>
                                <h4>
                                    $18.5 per person
                                </h4>
                            </div>
                    </div>
                </>
                }
                {
                type === "3" &&
                <>
                    <div className="notification-card-container-left">
                        <h5>Francois Delacroix invited you to</h5>
                        <h4><b>Super Sport Court Basketball 1</b></h4>
                        <h5>Court address lorem Ipsum dolor 3432b, Brooklyn, NYC<br/>Wed, Oct 3 / 08AM - 10AM / 5 to 10 confirmed players</h5>
                    </div>
                    <div className="notification-card-container-right">
                            <ThreeDotsVertical/>
                            <div>
                                <button className="accept-button">Accept</button>
                                <button className="decline-button">Decline</button>
                            </div>
                            <div>
                                <h4 className="green-text">
                                    SLOT IS PAID
                                </h4>
                            </div>
                    </div>
                </>
                }
                {
                type === "4" &&
                <>
                    <div className="notification-card-container-left">
                        <h5>Your account has been changed with</h5>
                        <h4><b>$6.5s</b></h4>
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
                        <h5>Maximilian Rodriguez <span className="green-text"><b>RESHCEDULED SLOT DETAILS</b></span></h5>
                        <h4><b>Super Sport Court Basketball 1</b></h4>
                        <h5>Court address lorem Ipsum dolor 3432b, Brooklyn, NYC<br/>Wed, Oct 3 / 08AM - 10AM / 6 confirmed players</h5>
                    </div>
                    <div className="notification-card-container-right">
                            <ThreeDotsVertical/>
                            <div>
                                <button className="accept-button">Accept</button>
                                <button className="decline-button">Decline</button>
                            </div>
                            <div>
                                <h5>New price</h5>
                            </div>
                            <div>
                                <h4>
                                    $18.5 per person
                                </h4>
                            </div>
                    </div>
                </>
                }
                {
                type === "6" &&
                <>
                    <div className="notification-card-container-left">
                        <h5>Maximilian Rodriguez <span className="orange-text"><b>CANCELED SLOT!</b></span></h5>
                        <h4><b>Super Sport Court Basketball 1</b></h4>
                        <h5>Court address lorem Ipsum dolor 3432b, Brooklyn, NYC<br/>Wed, Oct 3 / 08AM - 10AM / 6 confirmed players</h5>
                    </div>
                    <div className="notification-card-container-right">
                            <ThreeDotsVertical/>
                            <div>
                                <h5>This cancellation submits to<br/>30% refund to court owner.</h5>
                            </div>
                            <div>
                                <h4 className="orange-text">
                                    $21 refund
                                </h4>
                            </div>
                    </div>
                </>
                }
            </div>
        </div>
    )
}

export default NotificationCard