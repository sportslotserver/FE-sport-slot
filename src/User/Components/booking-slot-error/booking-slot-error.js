
function BookingSlotError({tryAgain}){

    return(
        <div className="padding-10px">
            <div className="heading-1 text-bold orange-text">Error!</div><br/>
            <div className="heading-2 secondary-text-color">Slot not created</div><br/>
            <button className="green-button" onClick={tryAgain}>Try again</button>
        </div>
    );
}

export default BookingSlotError