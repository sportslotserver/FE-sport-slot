

function BookingSlotConfirmation(props){
    const {type, handleDone, playersNeeded, slotData, pricePerPerson} = props
    
    return(
        <>
        <div className="padding-10px">
            <br/>
            {
                type === "pay-now" ?
                <>
                <div className="secondary-text-color">Slot duration: 2h</div>
                <div className="secondary-text-color">Price per hour: $25</div>
                <div className="secondary-text-color">Total slot cost: $50</div>
                <div className="secondary-text-color">Service fee: $5</div>
                <div className="secondary-text-color text-bold">Total amount: $55</div>
                <br/>
                <div className="secondary-text-color text-bold">Payment well be made now.</div>
                </>
                :
                <>
                <div className="secondary-text-color">Price per person: ${ pricePerPerson }</div>
                {/* <div className="secondary-text-color">Service fee: $0.5</div>
                <div className="secondary-text-color text-bold">Total amount: $5.5</div> */}
                <br/>
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
            <br/>
            <button className="green-button" onClick={handleDone}>Done</button>
        </div>
        </>
    );
}

export default BookingSlotConfirmation