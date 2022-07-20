import React, { useState, useEffect } from "react";
import '../../Assets/Styles/SlotCard/SlotCard.scss'
import SlotImage from '../../Assets/Images/SlotCard/Court_image_2.png'
import { Link } from 'react-router-dom'

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
    
    const [ playerID, setPlayerID ] = useState(null)
    useEffect(() => {
        const player = JSON.parse(sessionStorage.getItem('player'))
        setPlayerID(player.id)
    }, [])
    
    return(
        <div className="slot-card-container">
            <img src={ SlotImage } className="slot-card-image"/>
            <div className="slot-card-title">{ court_name }</div>
            <div className="slot-card-text">{ court_street }</div>
            <div className="slot-card-text">{ slot_date } / { slot_start_time } - { slot_end_time }</div>
            { slot_has_reservation ?  
                <>
                    <div className="slot-card-title">{ reservation.players_accepted } / { reservation.players_needed } players</div>
                    <div className="slot-card-footer">
                        <div className="slot-card-footer-left"><div className="slot-card-footer-price">${ reservation.price_per_person }</div><div className="slot-card-footer-per">per person</div></div>
                        <div className="slot-card-footer-buttons">
                            <Link className="green-button" to={`/booking/${court_id}/${id}/${playerID}/${slot_reservation_id}/join`}>Join group</Link>
                            <Link className="green-button" to={`/booking/${court_id}/${id}/${playerID}/${slot_reservation_id}/direct`}>Book slot</Link>
                        </div>
                    </div>
                </>
            : 
                <>
                    <div className="slot-card-footer">
                        <div className="slot-card-footer-left"><div className="slot-card-footer-price">${ slot_price }</div><div className="slot-card-footer-per">per hour</div></div>
                        <div className="slot-card-footer-buttons">
                            <Link className="slot-card-button" to={`/booking/${court_id}/${id}/${playerID}/${slot_reservation_id}/group`}>Create group</Link>
                            <Link className="slot-card-button" to={`/booking/${court_id}/${id}/${playerID}/${slot_reservation_id}/direct`}>Book slot</Link>
                        </div>
                    </div>
                </> 
            }
        </div>
    );
}

export default SlotCard