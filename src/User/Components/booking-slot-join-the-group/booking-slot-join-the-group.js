import '../../Assets/Styles/BookingSlotJoinTheGruop/BookingSlotJoinTheGroup.scss'
import Icon from '../../Assets/Images/SlotTypes/icon_2.png'

function BookingSlotJoinTheGroup(){
    return(
        <div className="booking-slot-join-the-group-container">
            <div className="booking-slot-join-the-group-heading-1">Join the group</div>
            <div className="booking-slot-join-the-group-text">Hourly payment will be divided accoding to the number of players needed.</div>
            <div className="booking-slot-join-the-group-text bold-2">Paymeent wiil be made once all players accept the invitation.</div>
            <hr className="booking-slot-join-the-group-divider"/>
            <div className="booking-slot-join-the-group-heading-2"><img src={Icon} alt=""/>$5.5 per player</div>
            <button className="booking-slot-join-the-group-button">Pay later</button>
            <hr className="booking-slot-join-the-group-divider"/>
            <div className="booking-slot-join-the-group-text">You will not be charged yet. The payment will be processed when all players accept the invitation.</div>
            <div className="booking-slot-join-the-group-text">If you invited more players than needed, additional players who accept the invite after a requested is reached will be charged.</div>
        </div>
    );
}

export default BookingSlotJoinTheGroup