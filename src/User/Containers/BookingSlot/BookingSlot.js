import React, { useEffect, useState } from "react";
import '../../Assets/Styles/BookingSlot/BookingSlot.scss'
import ImageSwiper from "../../Components/image-swiper/image-swiper";
import img1 from '../../Assets/Images/ImageSwiper/1.png'
import img2 from '../../Assets/Images/ImageSwiper/2.png'
import img3 from '../../Assets/Images/ImageSwiper/3.png'
import img4 from '../../Assets/Images/ImageSwiper/4.png'
import SlotInfo from "../../Components/slot-info/slot-info";
import BookingSlotSteps from "../../Components/booking-slot-steps/booking-slot-steps";
import CancellationPolicy from "../../Components/cancellation-policy/cancellation-policy";
import { useParams } from 'react-router-dom'
import Api from "../../../api"
import { SlotActions } from '../../../api/actions'


function BookingSlot(){
    var images = [img1,img2,img3,img4]

    const { court_id, id, player_id, type } = useParams()
    const [ slotData, setSlotData ] = useState(null)

    useEffect(() => {
        console.log(type)
        Api.slot(SlotActions.GET_COURT_SLOT_INFO, { court_id, id }).then(response => {
            setSlotData(response.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return(
        <>
        <ImageSwiper images={images}/>
        <div className="booking-main-container">
            <div className="booking-container">
                { slotData ? <SlotInfo slotData={slotData} /> : null }
                { slotData ? <BookingSlotSteps data={slotData} player_id={player_id} type={type}/> : null }
                {/* <CancellationPolicy/> */}
            </div>
        </div>
        </>
    );
}

export default BookingSlot