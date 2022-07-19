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
import SelectSport from '../select-sport/select-sport';

import Api from '../../../api/'
import { SlotActions, PlayerActions } from '../../../api/actions';

const BookingSlotSteps = ({ data, id, player_id, type }) => {

    const [ step, setStep ] = useState(0)

    const [ sport, setSport ] = useState(null)
    const [ playersNeeded, setPlayersNeeded ] = useState(null)
    const [ players, setPlayers ] = useState([])
    const [ invitedPlayers, setInvitedPlayers ] = useState(["5819996638", "2087912033", "4654458217"])

    console.log('koji je type: ', type)

    useEffect(() => {
        Api.user(PlayerActions.GET_SLOT_PLAYERS, {
            city: data?.slot?.slot_city,
            state: data?.slot?.slot_state,
            sport: sport
        }).then(response => {
            setPlayers(response.data)
            console.log(response.data)
        }).catch(err => {
            throw new Error(err)
        })
    }, [sport])

    // //direktno bukiranje
    const handleDirectBook = () => {
        Api.slot(SlotActions.DIRECT_BOOK, {
            slot_id: id,
            player_id: player_id,
            sport: sport,
            reservation_type: type,
            has_reservation: data?.slot?.slot_has_reservation
        }).then(response => {
            console.log(response)
            setStep(step + 1)
        }).catch(err => {
            throw new Error(err)
        })
    }

    const handleCreateGroup = () => {
        Api.slot(SlotActions.CREATE_GROUP, {
            slot_id: id,
            player_id: player_id,
            sport: sport,
            reservation_type: type,
            players_needed: playersNeeded,
            players: invitedPlayers
        }).then(response => {
            console.log(response)
            setStep(step + 1)
        }).catch(err => {
            throw new Error(err)
        })
    }

    const addPlayersToInvitation = (player) => {
        invitedPlayers.push(player)
        setInvitedPlayers(current => [...current, invitedPlayers])
    }

    return (
        <>
            { data?.reservation?.admin_player_id != player_id ? 
                <>
                { type == 'group' ?
                    <>
                        { step === 0 ? 
                            <>
                                <SelectSport sports={data?.slot?.slot_available_sports} sport={sport} setSport={setSport} />
                                <button disabled={sport ? false : true} onClick={() => setStep(step + 1)}>Nextt</button>
                            </>
                        : null }
                        { step === 1 ? 
                            <>
                                <BookingSlotPlayersNeeded setPlayersNeeded={setPlayersNeeded} /> 
                                <button disabled={playersNeeded ? false : true} onClick={() => setStep(step + 1)}>Nextt</button>
                            </>
                        : null }
                        { step === 2 ? 
                            <>
                                <BookingSlotInvitePlayers players={players} addPlayersToInvitation={addPlayersToInvitation} /> 
                                <button disabled={invitedPlayers.length !== 0 ? false : true} onClick={() => setStep(step + 1)}>Nextt</button>
                            </>
                        : null }     
                        { step === 3 ?
                            <>
                                <BookingSlotConfirmation
                                    playersNeeded={playersNeeded}
                                    slotData={data?.slot}
                                    pricePerPerson={parseInt(data?.slot?.slot_price) / playersNeeded}
                                    type={"share-the-cost"} 
                                    handleDone={()=>{handleCreateGroup()}} />
                            </> 
                        : null }
                        { step === 4 ? <ConfirmationSlotCreated /> : null }
                    </>
                : null }

                { type == 'direct' ? 
                    <>
                        { step === 0 ?
                            <>
                                <SelectSport sports={data?.slot?.slot_available_sports} sport={sport} setSport={setSport} />
                                <button disabled={sport ? false : true} onClick={() => setStep(step + 1)}>Nextt</button>
                            </>
                        : null }
                        { step === 1 ?
                            <>
                                <BookingSlotBuyNow slotData={data?.slot} reservationData={data?.reservation} />
                                <button onClick={() => setStep(step + 1)}>Nextt</button>
                            </>
                        : null }
                        { step === 2 ?
                            <>
                                <AreYouSure handleDirectBook={handleDirectBook} />
                            </>
                        : null }
                        { step === 3 ? <ConfirmationSlotCreated /> : null }
                    </>
                : null }
                </>
            : 
                <div>
                    you are admin player here
                </div>
            }
            
        </>
    )
}

export default BookingSlotSteps