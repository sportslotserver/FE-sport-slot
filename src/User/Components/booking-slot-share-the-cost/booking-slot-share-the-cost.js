import '../../Assets/Styles/BookingSlotShareTheCost/BookingSlotShareTheCost.scss'
import Icon from '../../Assets/Images/SlotTypes/icon_1.png'

function BookingSlotShareTheCost(){
    return(
        <div className="booking-slot-share-the-cost-container">
            <div className="booking-slot-share-the-cost-heading-1">Share the cost</div>
            <div className="booking-slot-share-the-cost-text">Hourly payment will be divided accoding to the number of players needed.</div>
            <div className="booking-slot-share-the-cost-text bold-2">Paymeent wiil be made once all players accept the invitation.</div>
            <hr className="booking-slot-share-the-cost-divider"/>
            <div className="booking-slot-share-the-cost-heading-2"><img src={Icon} alt=""/>$5.5 per player</div>
            <button className="booking-slot-share-the-cost-button">Pay later</button>
            <hr className="booking-slot-share-the-cost-divider"/>
            <div className="booking-slot-share-the-cost-text">You will not be charged yet. The payment will be processed when all players accept the invitation.</div>
            <div className="booking-slot-share-the-cost-text">If you invited more players than needed, additional players who accept the invite after a requested is reached will be charged.</div>
        </div>
    );
}

export default BookingSlotShareTheCost