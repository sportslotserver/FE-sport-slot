import '../../Assets/Styles/BookingSlotPayNow/BookingSlotPayNow.scss'

function BookingSlotPayNow(props){
    const {slotType} = props

    return(
        <div className={slotType === "available" ? "booking-slot-pay-now-container green-background green-border" : "booking-slot-pay-now-container white-background grey-border"}>
            <div className={slotType === "available" ? "booking-slot-pay-now-heading-1 white-text":"booking-slot-pay-now-heading-1 green-text"}>Pay now</div>
            {
                slotType === "available" ?
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
            <hr className={slotType === "available" ? "booking-slot-pay-now-divider white-background":"booking-slot-pay-now-divider grey-background"}/>
            <div className={slotType === "available" ? "booking-slot-pay-now-text bold white-text":"booking-slot-pay-now-text bold grey-text"}>Details</div>
            <div className={slotType === "available" ? "booking-slot-pay-now-text white-text":"booking-slot-pay-now-text grey-text"}>Slot duration: 2h</div>
            <div className={slotType === "available" ? "booking-slot-pay-now-text white-text":"booking-slot-pay-now-text grey-text"}>Price per hour: $25</div>
            <div className={slotType === "available" ? "booking-slot-pay-now-text white-text":"booking-slot-pay-now-text grey-text"}>Total slot cost: $50</div>
            <div className={slotType === "available" ? "booking-slot-pay-now-text white-text":"booking-slot-pay-now-text grey-text"}>Service fee: $5</div>
            <div className={slotType === "available" ? "booking-slot-pay-now-heading-2 white-text":"booking-slot-pay-now-heading-2 green-text"}>Total amount: $55</div>
            <button className={slotType === "available" ? "booking-slot-pay-now-button white-background green-text white-border":"booking-slot-pay-now-button green-background white-text green-border"}>Pay now</button>
            <hr className={slotType === "available" ? "booking-slot-pay-now-divider white-background":""}/>
            {
                slotType === "available" ?
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