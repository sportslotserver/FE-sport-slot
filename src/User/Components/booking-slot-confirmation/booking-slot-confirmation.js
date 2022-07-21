import slotDuration from '../../../utils/calculate-slot-duration';

function BookingSlotConfirmation(props) {
    const { type, handleDone, playersNeeded, data, pricePerPerson } = props
    console.log(data)

    return (
        <>
            <div className="padding-10px">
                <p className="heading-2 text-bold">{data.court.court_name}</p>
                <p className="secondary-text-color">{data.court.court_street}, {data?.slot.slot_city}, {data?.slot.slot_state}</p>
                <div className="secondary-text-color">{data?.slot.slot_date} / {data?.slot.slot_start_time} - {data?.slot.slot_end_time}</div>
                <div className="secondary-text-color">{playersNeeded} players needed</div>
                <br />
                {
                    type === "pay-now" ?
                        <>
                            <div className="secondary-text-color">Slot duration: {slotDuration(data?.slot.slot_end_time, data?.slot.slot_start_time)}h</div>
                            <div className="secondary-text-color">Price per hour: ${data?.slot.slot_price}</div>
                            <div className="secondary-text-color">Total slot cost: $50</div>
                            <div className="secondary-text-color">Service fee: $5</div>
                            <div className="secondary-text-color text-bold">Total amount: ${data?.slot.slot_price}</div>
                            <br />
                            <div className="secondary-text-color text-bold">Payment well be made now.</div>
                        </>
                        :
                        <>
                            <div className="secondary-text-color">Price per person: ${pricePerPerson}</div>
                            <div className="secondary-text-color">Service fee: $0.0</div>
                            <div className="secondary-text-color text-bold">Total amount: ${pricePerPerson}</div>
                            <br />
                            {
                                type === "share-the-cost" ?
                                    <>
                                        <div className="secondary-text-color text-bold">Payment well be made once all players accept the invitation.</div>
                                    </>
                                    :
                                    <>
                                        <div className="secondary-text-color text-bold">Payment well be made once the group has all the players needed confirmed.</div>
                                    </>
                            }
                        </>
                }
                <br />
                <button className="green-button" onClick={handleDone}>Done</button>
            </div>
        </>
    );
}

export default BookingSlotConfirmation