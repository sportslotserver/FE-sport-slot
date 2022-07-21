import '../../Assets/Styles/BookingSlotPayNow/BookingSlotPayNow.scss'
import slotDuration from '../../../utils/calculate-slot-duration';

function BookingSlotPayNow({ slotData, reservationData, setStep }) {

    return (
        <div className={"booking-slot-pay-now-container white-background grey-border"}>
            <div className={"booking-slot-pay-now-heading-1 green-text"}>Pay now</div>
            {
                slotData.slot_has_reservation ?
                    <>
                        <div className="booking-slot-pay-now-text white-text">Cover the whole amount for booking the slot.</div>
                        <div className="booking-slot-pay-now-text bold white-text">Paymeent wiil be made now, after you invite players.</div>
                        <div className="booking-slot-pay-now-text white-text">Players who accept your invite will not be charged.</div>
                    </>
                    :
                    <>
                        <div className="booking-slot-pay-now-text grey-text">Cover the whole amount for booking the slot.</div>
                        <div className="booking-slot-pay-now-text bold">Paymeent wiil be made now.</div>
                    </>
            }
            <hr className={"booking-slot-pay-now-divider grey-background"} />
            <div className={"booking-slot-pay-now-text bold grey-text"}>Details</div>
            <div className={"booking-slot-pay-now-text grey-text"}>Slot duration: {slotDuration(slotData?.slot_end_time, slotData?.slot_start_time)}h</div>
            <div className={"booking-slot-pay-now-text grey-text"}>Price per hour: ${slotData?.slot_price}</div>
            <div className={"booking-slot-pay-now-text grey-text"}>Total slot cost: $50</div>
            <div className={"booking-slot-pay-now-text grey-text"}>Service fee: $5</div>
            <div className={"booking-slot-pay-now-heading-2 green-text"}>Total amount: ${slotData?.slot_price}</div>
            <button className={"booking-slot-pay-now-button green-background white-text green-border"} onClick={setStep}>Pay now</button>
            <hr className={"booking-slot-pay-now-divider"} />
            {
                slotData.slot_has_reservation ?
                    <>
                        <div className="booking-slot-pay-now-text bold white-text">You will be redirected to invite players.</div>
                    </>
                    :
                    <>
                        <div className="booking-slot-pay-now-text bold">You are booking the slot for yourself.</div>
                        <div className="booking-slot-pay-now-text bold">Additional players can be invited later via 'Slot details' page.</div>
                    </>
            }
        </div>
    );
}

export default BookingSlotPayNow