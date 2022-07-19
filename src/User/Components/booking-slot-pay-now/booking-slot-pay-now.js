import '../../Assets/Styles/BookingSlotPayNow/BookingSlotPayNow.scss'
import slotDuration from '../../../utils/calculate-slot-duration';

function BookingSlotPayNow({ slotData, reservationData }){

    console.log('data....', slotData, reservationData)

    return(
        <div className="booking-slot-pay-now-container green-background green-border">
            {/* <div className="booking-slot-pay-now-heading-1 white-text">Pay now</div> */}
            
            <div className="booking-slot-pay-now-text grey-text">Cover the whole amount for booking the slot.</div>
            <div className="booking-slot-pay-now-text bold">Paymeent wiil be made now.</div>
        
            <hr className="booking-slot-pay-now-divider white-background"/>
            <div className="booking-slot-pay-now-text bold white-text">Details</div>
            <div className="booking-slot-pay-now-text white-text">Slot duration: { slotDuration(slotData?.slot_end_time, slotData?.slot_start_time) }h</div>
            <div className="booking-slot-pay-now-text white-text">Slot price: ${ slotData?.slot_price }</div>
            {/* <div className="booking-slot-pay-now-text white-text">Total slot cost: $50</div> */}
            <div className="booking-slot-pay-now-text white-text">Service fee: $0</div>
            <div className="booking-slot-pay-now-heading-2 white-text">Total amount: ${ slotData?.slot_price }</div>
            {/* <button className="booking-slot-pay-now-button white-background green-text white-border">Pay now</button> */}
            
            <div className="booking-slot-pay-now-text bold">You are booking the slot for yourself.</div>
            {/* <div className="booking-slot-pay-now-text bold">Additional players can be invited later via 'Slot details' page.</div> */}
        
        </div>
    );
}

export default BookingSlotPayNow