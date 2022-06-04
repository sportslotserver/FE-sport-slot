import React from "react";
import '../../Assets/Styles/BookingSlot/BookingSlot.scss'
import ImageSwiper from "../../Components/image-swiper/image-swiper";
import img1 from '../../Assets/Images/ImageSwiper/1.png'
import img2 from '../../Assets/Images/ImageSwiper/2.png'
import img3 from '../../Assets/Images/ImageSwiper/3.png'
import img4 from '../../Assets/Images/ImageSwiper/4.png'
import SlotInfo from "../../Components/slot-info/slot-info";
import BookingSlotSteps from "../../Components/booking-slot-steps/booking-slot-steps";
import CancellationPolicy from "../../Components/cancellation-policy/cancellation-policy";


function BookingSlot(){
    var images = [img1,img2,img3,img4]

    return(
        <>
        <ImageSwiper images={images}/>
        <div className="booking-main-container">
            <div className="booking-container">
                <SlotInfo/>
                <BookingSlotSteps/>
                <CancellationPolicy/>
            </div>
        </div>
        </>
    );
}

export default BookingSlot