import '../../Assets/Styles/Notice/Notice.scss'
import icon1 from '../../Assets/Images/SlotDetails/icon1.png'
import icon2 from '../../Assets/Images/SlotDetails/icon2.png'
import icon3 from '../../Assets/Images/SlotDetails/icon3.png'

function Notice(props){
    const {type} = props
    return(
        <>
        {
            type === "slot-is-booked" &&
            <div className="notice-container">
                <img src={icon1} alt={""}/>
                <div>
                    <b>Slot is booked!</b><br/>Players accepted the invitation.
                </div>
            </div>
        }
        {
            type === "slot-has-ended" &&
            <div className="notice-container">
                <img src={icon2} alt={""}/>
                <div>
                    <b>The slot has ended.</b><br/>Tou can schedule another slot.<br/>
                    <button className="green-button">Play again</button>
                </div>
            </div>
        }
        {
            type === "no-longer-available" &&
            <div className="notice-container">
                <img src={icon3} alt={""}/>
                <div>
                    <b>This slot is no longer available.</b><br/>Try finding another one.
                </div>
            </div>
        }
        {
            type === "player-has-exited" &&
            <div className="notice-container">
                <img src={icon3} alt={""}/>
                <div className="notice-container-2">
                    <div>
                        A player has exited the slot.<br/>
                        These are the following options:
                    </div>
                    <div className="notice-items">
                        <div className="notice-item">
                            <b>Invite new player</b><br/>
                            The new player will cover the payment and join the group.
                            <br/>
                            <button className="green-button">Invite player</button>
                        </div>
                        <div className="notice-item">
                            <b>Cover extra cost</b><br/>
                            Extra cost of <b>$5.5</b> will be applied to your account.
                            <br/>
                            <button className="green-button">Pay extra cost</button>
                        </div>
                        <div className="notice-item">
                            <b>Cancellation</b><br/>
                            Accorfing to cancellation policy canceling penalty is <b>$22</b>
                            <br/>
                            <button className="green-button">Invite player</button>
                        </div>
                    </div>
                </div>
            </div>
        }
        {
            type === "rechedule-approved" &&
            <div className="notice-container">
                <img src={icon1} alt={""}/>
                <div>
                    <b>Rechedule approved!</b><br/>The court owner has agreed to new slot details.
                </div>
            </div>
        }
        {
            type === "rechedule-rejected" &&
            <div className="notice-container">
                <img src={icon3} alt={""}/>
                <div>
                    <b>Rechedule rejected!</b><br/>The court owner has rejected your rechedule request.<br/>
                    This means that you can cancel the slot according to the cancellation policy of the court or try to find another available slot
                </div>
            </div>
        }
        </>
    )
}

export default Notice