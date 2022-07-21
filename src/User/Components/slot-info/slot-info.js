import React from "react";
import '../../Assets/Styles/SlotInfo/SlotInfo.scss'
import OwnerImage from '../../Assets/Images/PlayerCard/image4.png'

const SlotInfo = ({ slotData }) => {
    const { slot, reservation } = slotData

    return(
        <>
            <div className="booking-slot-info-container">
                <div className="booking-slot-info-child">
                    <h1>{ slotData?.court?.court_name }</h1>
                    <div className="heading-3 secondary-text-color">{ slotData?.court?.court_street }</div>
                    <div className="heading-3 secondary-text-color">{ slot?.slot_date } / { slot?.slot_start_time } to { slot?.slot_end_time }</div>
                    { slot?.slot_has_reservation ?
                        <>
                            <p className="heading-2 green-text">${ Math.round(reservation?.price_per_person) } <span className="heading-4 secondary-text-color">per person</span></p>
                            <p className="heading-2 green-text">Players needed: <b>{ reservation?.players_accepted } / { reservation?.players_needed }</b></p>
                        </>
                    : 
                        <p className="heading-2 green-text">${ slot?.slot_price } <span className="heading-4 secondary-text-color">per hour</span></p>
                    }
                </div>
                <div className="booking-slot-info-child">
                    <div>
                        <img src={OwnerImage} alt=""/><span className="heading-3 secondary-text-color owner-name">Peter Johnson (owner)</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SlotInfo