import '../../Assets/Styles/BookingSlotPlayersNeeded/BookingSlotPlayersNeeded.scss'
import { PeopleFill } from "react-bootstrap-icons";
import { useState } from 'react';


function BookingSlotPlayersNeeded(){

    const [selectedIndex, setSelectedInedx] = useState(-1)

    const array = [2,4,6,8,10,12,14,16]

    return(
        <>
        <div className="booking-slot-players-needed-container">
            {
                array.map((item,index) => 
                    <div className={selectedIndex === index ? "selected":"unselected"} onClick={()=>{setSelectedInedx(index)}}>
                        <PeopleFill/><br/>
                        {item}
                    </div>
                )
            }
        
        </div>
        <div className="booking-slot-players-needed-next-button-container">
            <button className="green-button">Next</button>
        </div>
        </>
        );
}

export default BookingSlotPlayersNeeded