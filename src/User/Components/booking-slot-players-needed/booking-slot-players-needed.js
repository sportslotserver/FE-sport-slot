import '../../Assets/Styles/BookingSlotPlayersNeeded/BookingSlotPlayersNeeded.scss'
import { PeopleFill } from "react-bootstrap-icons";
import { useState } from 'react';


function BookingSlotPlayersNeeded(props){

    const {setStep, setPlayersNeeded} = props

    const [selectedIndex, setSelectedIndex] = useState(-1)

    const array = [2,4,6,8,10,12,14,16]

    const handleClickItem = (item,index) => {
        setPlayersNeeded(item)
        setSelectedIndex(index)
    }

    return(
        <>
        <div className="booking-slot-players-needed-container">
            {
                array.map((item,index) => 
                    <div className={selectedIndex === index ? "selected":"unselected"} onClick={()=>{handleClickItem(item,index)}}>
                        <PeopleFill/><br/>
                        {item}
                    </div>
                )
            }
        
        </div>
        <div className="booking-slot-players-needed-next-button-container">
            <button className="green-button" onClick={setStep}>Next</button>
        </div>
        </>
        );
}

export default BookingSlotPlayersNeeded