import '../../Assets/Styles/EditSlotsBlock/EditSlotsBlock.scss'
import {CheckCircleFill} from 'react-bootstrap-icons'

function EditSlotsBlock(props){

    const {selectedSlotType, warning} = props



    return(
        <div className="edit-slots-block-container">
        <div className="edit-slots-block-header">
            <h4>Edit slots</h4>
            {warning &&
            <h5><b className="green-text">2 slots selected <span style={{marginLeft: 20,fontSize: 18}}><CheckCircleFill/></span> Done</b></h5>
            }
        </div>
        <div className="edit-slots-block-divider"></div>
        <div className="edit-slots-block-content">
            {selectedSlotType === "empty" && !warning && 
            <>
            <h5><b className="green-text">Add slots</b></h5>
            <h5 className="secondary-text-color">Added slots will become available.</h5>
            <h5 className="secondary-text-color">Price per hour</h5>
            <input></input>
            <button className="green-button">Add slots</button>
            </>
            }
            {selectedSlotType === "available" && !warning && 
            <>
            <h5><b className="green-text">Change price</b></h5>
            <h5 className="secondary-text-color">Price per hour</h5>
            <input></input>
            <button className="green-button">Save</button>
            <h5 className="secondary-text-color">Unable to change slot price.</h5>
            <h5 className="secondary-text-color">Players are trying to book a slot.</h5>

            <div className="edit-slots-block-divider"></div>

            <h5><b className="green-text">Merge slots</b></h5>
            <h5 className="secondary-text-color">Slots must be fully available and</h5>
            <h5 className="secondary-text-color">one after another to be megred.</h5>
            <button className="green-button">Merge slots</button>

            <div className="edit-slots-block-divider"></div>

            <h5 className="secondary-text-color">If you want to make slots unavailable</h5>
            <h5 className="secondary-text-color">click on the button below.</h5><br/>
            <h5 className="secondary-text-color">Booking a slot which is in process</h5>
            <h5 className="secondary-text-color">of booking (Players needed) will</h5>
            <h5 className="secondary-text-color">make it unavailable for the week.</h5>
            <button className="orange-button">Block slots</button>
            </>
            }
            {selectedSlotType === "booked" && !warning && 
            <>
            <h5><b className="orange-text">Cancel slot</b></h5><br/>
            <h5 className="secondary-text-color">Cancelling a slot that is booked</h5>
            <h5 className="secondary-text-color">and paid for will be subjescted</h5>
            <h5 className="secondary-text-color">to a penalty according to our</h5>
            <h5><b className="blue-text">Player Protection Policy.</b></h5>
            <button className="grey-button">Cancel</button>
            </>
            }
            {selectedSlotType === "player-needed" && !warning && 
            <>
            <h5 className="secondary-text-color">If you want to make slots unavailable</h5>
            <h5 className="secondary-text-color">click on the button below.</h5><br/>
            <h5 className="secondary-text-color">Booking a slot which is in process</h5>
            <h5 className="secondary-text-color">of booking (Players needed) will</h5>
            <h5 className="secondary-text-color">make it unavailable for the week.</h5>
            <button className="orange-button">Block slots</button>
            </>
            }
            {selectedSlotType === "blocked" && !warning && 
            <>
            <h5 className="secondary-text-color">If you want to make slots Available</h5>
            <h5 className="secondary-text-color">click on the button below.</h5><br/>
            <h5 className="secondary-text-color">Slots will have the base price per hour</h5>
            <h5 className="secondary-text-color">when they are set as Available.</h5>
            <button className="green-button">Unblock</button>
            </>
            }
            {selectedSlotType === "available-multy-hour" && !warning && 
            <>
            <h5><b className="green-text">Change price</b></h5>
            <h5 className="secondary-text-color">Price per hour</h5>
            <input></input>
            <button className="green-button">Save</button>

            <div className="edit-slots-block-divider"></div>

            <h5><b className="green-text">Divide slots</b></h5>
            <h5 className="secondary-text-color">Selected slots will be</h5>
            <h5 className="secondary-text-color">one-hour duration.</h5>
            <button className="green-button">Divide slots</button>

            <div className="edit-slots-block-divider"></div>

            <h5 className="secondary-text-color">If you want to make slots unavailable</h5>
            <h5 className="secondary-text-color">click on the button below.</h5><br/>
            <h5 className="secondary-text-color">Booking a slot which is in process</h5>
            <h5 className="secondary-text-color">of booking (Players needed) will</h5>
            <h5 className="secondary-text-color">make it unavailable for the week.</h5>
            <button className="orange-button">Block slots</button>
            </>
            }
            {warning &&
            <>
            <h4><b>Warning</b></h4>
            <h5 className="secondary-text-color">Your are about to be redirected</h5>
            <h5 className="secondary-text-color">to another location.</h5><br/>
            <h5 className="secondary-text-color">All unsaved changes will be lost.</h5>
            <button className="green-button">Cancel</button><br/>
            <button className="grey-button">Proceed</button>
            </>
            }
        </div>
        </div>
    )
}

export default EditSlotsBlock