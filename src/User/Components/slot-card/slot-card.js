import React from "react";
import '../../Assets/Styles/SlotCard/SlotCard.scss'
import SlotImage from '../../Assets/Images/SlotCard/Court_image_2.png'

const SlotCard = ({ 
    slot: { 
        court_id, 
        court_info: {
            court_name,
            court_street
        },
        id,
        slot_date,
        slot_start_time,
        slot_end_time,
        slot_price,
        slot_has_reservation,
        reservation,
        slot_reservation_id
    } 
    }) => {
    
    return(
        <div className="slot-card-container">
            <img src={ SlotImage } className="slot-card-image"/>
            <div className="slot-card-title">{ court_name }</div>
            <div className="slot-card-text">{ court_street }</div>
            <div className="slot-card-text">{ slot_date } / { slot_start_time } - { slot_end_time }</div>
            { slot_has_reservation ?  
                <>
                    <div className="slot-card-title">10 players needed</div>
                    <div className="slot-card-footer">
                        <div className="slot-card-footer-left"><div className="slot-card-footer-price">$5.5</div><div className="slot-card-footer-per">per person</div></div>
                        <button className="slot-card-footer-button">Join group</button>
                    </div>
                </>
            : 
                <>
                    <div className="slot-card-title">${ slot_price }</div>
                    <div className="slot-card-footer">
                        <button>Direct Book</button>
                        <button>Create Group</button>
                    </div>
                </> 
            }
        </div>
    );
}

export default SlotCard