import React from "react";
import '../../Assets/Styles/SlotInfo/SlotInfo.scss'
import OwnerImage from '../../Assets/Images/PlayerCard/image4.png'

function SlotInfo(){
    return(
        <div className="booking-slot-info-container">
            <div className="booking-slot-info-child">
                <h1>Super Sport Court</h1>
                <div className="heading-3 secondary-text-color">Lorem ipsum street 235b, New York, US</div>
                <div className="heading-3 secondary-text-color">WED 06 SEP / 11AM to 13PM</div>
                <p className="heading-2 green-text">$32 <span className="heading-4 secondary-text-color">per hour</span></p>
            </div>
            <div className="booking-slot-info-child">
                <div>
                    <img src={OwnerImage} alt=""/><span className="heading-3 secondary-text-color owner-name">Peter Johnson (owner)</span>
                </div>
            </div>
        </div>
    );
}

export default SlotInfo