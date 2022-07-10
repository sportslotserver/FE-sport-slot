import { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import '../../Assets/Styles/BookingSlotSteps/BookingSlotSteps.scss'
import BookingSlotJoinTheGroup from '../booking-slot-join-the-group/booking-slot-join-the-group';
import BookingSlotBuyNow from '../booking-slot-pay-now/booking-slot-pay-now';
import BookingSlotShareTheCost from '../booking-slot-share-the-cost/booking-slot-share-the-cost';
import BookingSlotInvitePlayers from '../booking-slot-invite-players/booking-slot-invite-players';
import CustomPagination from '../../Components/pagination/pagination';
import BookingSlotPlayersNeeded from '../booking-slot-players-needed/booking-slot-players-needed';
import BookingSlotConfirmation from '../booking-slot-confirmation/booking-slot-confirmation';
import ConfirmationSlotCreated from '../confirmation-slot-created/confirmation-slot-created';
import ConfirmationRequestSent from '../confirmation-requst-sent/confirmation-requst-sent';
import AreYouSure from '../booking-slot-are-you-sure/booking-slot-are-you-sure';

import Api from '../../../api/'
import { SlotActions } from '../../../api/actions';

const BookingSlotSteps = ({ data, type, player_id }) => {

    //direktno bukiranje
    const handleDirectBook = () => {
        Api.slot(SlotActions.DIRECT_BOOK, {
            slot_id: slot.id,
            player_id: player_id,
            sport: slot.slot_available_sports[0],
            reservation_type: "direct",
            has_reservation: true
        }).then(response => {
            console.log(response)
            setStep(2)
        }).catch(err => {
            throw new Error(err)
        })
    }

    //kreiranje grupe koja ce bukirati slot
    const [playersNeeded, setPlayersNeeded] = useState(0)
    const [invitedPlayers, setInvitedPlayers] = useState([])

    const handleInvitePlayer = (newPlayer) => {
        setInvitedPlayers(invitedPlayers => [...invitedPlayers, newPlayer])
    }

    const handleCreateGroup = () => {
        Api.slot(SlotActions.CREATE_GROUP, {
            slot_id: slot.id,
            player_id: player_id,
            sport: slot.slot_available_sports[0],
            reservation_type: "group",
            players_needed: playersNeeded,
            players: invitedPlayers
        }).then(response => {
            console.log(response)
            setStep(4)
        }).catch(err => {
            throw new Error(err)
        })
    }
        

    const { slot } = data
    const [ booking, setBookingData ] = useState({})

    const [step, setStep] = useState(0)

    const [steps, setSteps] = useState([])

    const directBook = [<BookingSlotBuyNow setStep={()=>{setStep(1)}}/>,<BookingSlotConfirmation type={"pay-now"} handleDone={handleDirectBook}/>,<ConfirmationSlotCreated/>]
    const createGroup = [<BookingSlotShareTheCost setStep={()=>{setStep(1)}}/>,<BookingSlotPlayersNeeded setStep={()=>{setStep(2)}} setPlayersNeeded={setPlayersNeeded}/>,<BookingSlotInvitePlayers setStep={()=>{setStep(3)}} handleInvitePlayer={handleInvitePlayer}/>,<BookingSlotConfirmation type={"share-the-cost"} handleDone={()=>{handleCreateGroup()}}/>,<ConfirmationSlotCreated/>]
    const joinGroup = [<BookingSlotJoinTheGroup data={data} setStep={()=>{setStep()}}/>,<BookingSlotConfirmation type={"join-group"}/>,]

    useEffect(()=>{
        if(steps.length === 0)
            switch(type) {
                case "direct":
                    setSteps(directBook)
                    break;
                case "group":
                    setSteps(createGroup)
                    break;
                case "join":
                    setSteps(joinGroup)
                    break;
                default:
                    setSteps([])
            }
    },[steps,setStep])
    


    return(
        <>
        {
            steps && steps[step]
        }
        
            {/* slot?.slot_has_reservation ? 
                <div className="booking-slot-steps-container-1">
                    <BookingSlotJoinTheGroup data={data} />
                    <BookingSlotBuyNow slotType={""} />
                </div>
            :  
                <div className="booking-slot-steps-container-1">
                    <BookingSlotBuyNow slotType={"available"}/>
                    <BookingSlotShareTheCost/>
                </div>
    */}
        
            {/* <AreYouSure/>
            <ConfirmationSlotCreated/>
            <ConfirmationRequestSent/>
            <h1>Reservation details</h1>
            <div className="booking-slot-steps-container-1">
                <BookingSlotBuyNow slotType={"available"}/>
                <BookingSlotShareTheCost/>
            </div>
            <h1>Reservation details</h1>
            <div className="booking-slot-steps-container-1">
                <BookingSlotJoinTheGroup/>
                <BookingSlotBuyNow slotType={""}/>
            </div>
            
            <h1>Invite players</h1>
            <div className="booking-slot-steps-container-2">
                <BookingSlotInvitePlayers/>
            </div>
        
            <h1>Total players needed</h1>
            <div className="booking-slot-steps-container-3">
                <BookingSlotPlayersNeeded/>
            </div>
            <h1>Confirmation</h1>
            <div className="booking-slot-steps-container-4">
                <BookingSlotConfirmation type={"pay-now"}/>
            </div>
            <h1>Confirmation</h1>
            <div className="booking-slot-steps-container-4">
                <BookingSlotConfirmation type={"share-the-cost"}/>
            </div>
            <h1>Confirmation</h1>
            <div className="booking-slot-steps-container-4">
                <BookingSlotConfirmation type={"join-group"}/>
            </div> */}
        </>
    );
}

export default BookingSlotSteps