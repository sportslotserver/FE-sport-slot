

function BookingSlotConfirmation(props){
    const {type} = props

    return(
        <>
        <div className="padding-10px">
            <p className="heading-2 text-bold">Super Slot Court</p>
            <p className="secondary-text-color">Lorem Ipsum Street 235b, New York, US</p>
            <div className="secondary-text-color">WED 06 SEP / 11AM to 13PM</div>
            <div className="secondary-text-color">10 players needed</div>
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
                <div className="secondary-text-color">Price per person: $5</div>
                <div className="secondary-text-color">Service fee: $0.5</div>
                <div className="secondary-text-color text-bold">Total amount: $5.5</div>
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
            <button className="green-button">Done</button>
        </div>
        </>
    );
}

export default BookingSlotConfirmation