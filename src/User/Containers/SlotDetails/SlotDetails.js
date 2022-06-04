import '../../Assets/Styles/SlotDetails/SlotDetails.scss'
import SlotDetailsHeader from '../../Components/slot-detail/slot-details-header'
import {ChevronDown, ChevronUp} from 'react-bootstrap-icons'
import ConfirmedPlayers from '../../Components/slot-detail/confirmed-players';
import { useState } from 'react';
import Notice from '../../Components/notice/notice'

function SlotDetails(){

    const [detailsOpened, setDetailsOpened] = useState(false)
    const [noticesOpened, setNoticesOpened] = useState(false)
    const [playersOpened, setPlayersOpened] = useState(false)

    var players = []
    for(var i=0;i<3;i++)
        players.push("Player "+i)

    return(
        <div className="slot-details-main-container padding-10px">
            <h1>Slot details</h1>
            <SlotDetailsHeader type={"outdoor"}/>
            <SlotDetailsHeader type={"confirmed"}/>
            <SlotDetailsHeader type={""}/>
            <div className="slot-details-accordion">
                {
                    detailsOpened ?
                    <>
                    <br/>
                    <p className="heading-5 text-bold">Details <ChevronUp onClick={()=>{setDetailsOpened(false)}}/></p>
                    <div className="heading-3 secondary-text-color">Slot duration: 2h</div>
                    <div className="heading-3 secondary-text-color">Price per hour: $25</div>
                    <div className="heading-3 secondary-text-color">Total slot cost: $50</div>
                    <div className="heading-3 secondary-text-color">Service fee: $5</div>
                    <div className="heading-5 text-bold">Total amount: $55</div>
                    <br/>
                    <div className="heading-3 secondary-text-color">Confirmed players: 8</div>
                    <div className="heading-3 secondary-text-color">Price per person: $5.5</div>
                    <div className="heading-3 secondary-text-color">Accumulated amount: $44</div>
                    <div className="heading-5 text-bold">Remaining: $11</div>
                    <br/>
                    <div className="heading-3 green-text text-bold">You can book the slot now and cover the remaining cost.</div>
                    <br/>
                    <button className="green-button">Pay now</button>
                    </>
                    :
                    <>
                    <br/>
                    <p className="heading-5 text-bold">Details <ChevronDown onClick={()=>{setDetailsOpened(true)}}/></p>
                    </>
                }
                
            </div>
            <div className="slot-details-accordion">
                {
                    noticesOpened ?
                    <>
                    <br/>
                    <p className="heading-5 text-bold">Notices <ChevronUp onClick={()=>{setNoticesOpened(false)}}/></p>
                    <div>
                        <Notice type={"slot-is-booked"}/>
                        <Notice type={"slot-has-ended"}/>
                        <Notice type={"no-longer-available"}/>
                        <Notice type={"player-has-exited"}/>
                        <Notice type={"rechedule-approved"}/>
                        <Notice type={"rechedule-rejected"}/>
                    </div>
                    </>
                    :
                    <>
                    <br/>
                    <p className="heading-5 text-bold">Notices<ChevronDown onClick={()=>{setNoticesOpened(true)}}/></p>
                    </>
                }
                
            </div>
            <div className="slot-details-accordion">
                {
                    playersOpened ?
                    <>
                    <br/>
                    <p className="heading-5 text-bold">Confirmed players <ChevronUp onClick={()=>{setPlayersOpened(false)}}/></p>
                    <ConfirmedPlayers players={players}/>
                    </>
                    :
                    <>
                    <br/>
                    <p className="heading-5 text-bold">Confirmed players <ChevronDown onClick={()=>{setPlayersOpened(true)}}/></p>
                    </>
                }
                
            </div>
        </div>

    );
}

export default SlotDetails