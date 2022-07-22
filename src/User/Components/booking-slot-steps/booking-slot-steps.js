import { useState, useEffect } from 'react';
//import Pagination from 'react-js-pagination';
import '../../Assets/Styles/BookingSlotSteps/BookingSlotSteps.scss'
//import BookingSlotJoinTheGroup from '../booking-slot-join-the-group/booking-slot-join-the-group';
import BookingSlotBuyNow from '../booking-slot-pay-now/booking-slot-pay-now';
//import BookingSlotShareTheCost from '../booking-slot-share-the-cost/booking-slot-share-the-cost';
import BookingSlotInvitePlayers from '../booking-slot-invite-players/booking-slot-invite-players';
//import CustomPagination from '../../Components/pagination/pagination';
import BookingSlotPlayersNeeded from '../booking-slot-players-needed/booking-slot-players-needed';
import BookingSlotConfirmation from '../booking-slot-confirmation/booking-slot-confirmation';
import ConfirmationSlotCreated from '../confirmation-slot-created/confirmation-slot-created';
//import ConfirmationRequestSent from '../confirmation-requst-sent/confirmation-requst-sent';
import AreYouSure from '../booking-slot-are-you-sure/booking-slot-are-you-sure';
import SelectSport from '../select-sport/select-sport';
import { getSlotPlayers } from '../../../api/endpoints/user'
import { createGroup, directBook } from '../../../api/endpoints/slots'
import BookingSlotShareTheCost from '../booking-slot-share-the-cost/booking-slot-share-the-cost';
import BookingSlotError from '../booking-slot-error/booking-slot-error';
import CustomSelect from '../custom-select/custom-select'

const BookingSlotSteps = ({ data, id, player_id, type }) => {

    const [step, setStep] = useState(0)
    const [sport, setSport] = useState(null)
    const [playersNeeded, setPlayersNeeded] = useState(null)
    const [players, setPlayers] = useState([])
    const [invitedPlayers, setInvitedPlayers] = useState(["5819996638", "2087912033", "4654458217"])
    const [slotSuccessfulyCreated, setSlotSuccessfulyCreated] = useState(null)

    useEffect(() => {
        getSlotPlayers({
            city: data?.slot?.slot_city,
            state: data?.slot?.slot_state,
            sport: sport
        }).then(response => {
            setPlayers(response.data)
        }).catch(err => {
            throw new Error(err)
        })
    }, [sport])

    // //direktno bukiranje
    const handleDirectBook = () => {
        directBook({
            slot_id: id,
            player_id: player_id,
            sport: sport,
            reservation_type: type,
            has_reservation: data?.slot?.slot_has_reservation
        }).then(response => {
            setSlotSuccessfulyCreated(true)
            setStep(step + 1)
        }).catch(err => {
            setSlotSuccessfulyCreated(false)
            setStep(step + 1)
            throw new Error(err)
        })
    }

    const handleCreateGroup = () => {
        createGroup({
            slot_id: id,
            player_id: player_id,
            sport: sport,
            reservation_type: type,
            players_needed: playersNeeded,
            players: invitedPlayers
        }).then(response => {
            setSlotSuccessfulyCreated(true)
            setStep(step + 1)
        }).catch(err => {
            setSlotSuccessfulyCreated(false)
            setStep(step + 1)
            throw new Error(err)
        })
    }

    const addPlayersToInvitation = (player) => {
        invitedPlayers.push(player)
        setInvitedPlayers(current => [...current, invitedPlayers])
    }

    useEffect(() => {
        var searchParams = JSON.parse(sessionStorage.getItem("slotSearch"))
        if (searchParams?.sport)
            setSport(searchParams?.sport)
    }, [])

    return (
        <>
            {type == 'group' ?
                <>
                    {step === 0 ?
                        <>
                            <div className="booking-slot-steps-container-1">
                                <h1>Step 1/2: Reservation details</h1>
                                <input placeholder={"Total players needed"} value={playersNeeded ? playersNeeded : ""} onChange={(e) => { setPlayersNeeded(e.target.value) }} />
                                {
                                    sport === null &&
                                    <>
                                        <br /><br />
                                        <CustomSelect options={data?.slot?.slot_available_sports} value={sport} placeholder={"Chose sport"} onChange={(value) => { setSport(value) }} />
                                    </>}
                                <br />
                                <BookingSlotShareTheCost setStep={() => { setStep(step + 1) }} slotPrice={data.slot.slot_price} playersNeeded={playersNeeded} />
                            </div>
                        </>
                        : null}
                    {/*step === 1 ?
                        <>
                            <div className="booking-slot-steps-container-1">
                                <h1>Step 2/3: Select sport</h1>
                                <SelectSport sports={data?.slot?.slot_available_sports} sport={sport} setSport={setSport} />
                                <button disabled={sport ? false : true} onClick={() => setStep(step + 1)}>Next</button>
                            </div>

                        </>
                                : null*/}
                    {step === 1 ?
                        <>
                            <div className="booking-slot-steps-container-1">
                                <h1>Step 2/2: Invite players</h1>
                                <BookingSlotInvitePlayers players={players} addPlayersToInvitation={addPlayersToInvitation} />
                                <button className="green-button" disabled={invitedPlayers.length !== 0 ? false : true} onClick={() => setStep(step + 1)}>Next</button>
                            </div>
                        </>
                        : null}
                    {step === 3 ?
                        <>
                            <BookingSlotConfirmation
                                playersNeeded={playersNeeded}
                                data={data}
                                pricePerPerson={parseInt(data?.slot?.slot_price) / playersNeeded}
                                type={"share-the-cost"}
                                handleDone={() => { handleCreateGroup() }} />
                        </>
                        : null}
                    {step === 4 ?
                        <>
                            {
                                slotSuccessfulyCreated ?
                                    <ConfirmationSlotCreated />
                                    :
                                    <>
                                        <BookingSlotError tryAgain={() => { handleCreateGroup() }} />
                                    </>
                            }
                        </>
                        : null}
                </>
                : null}

            {type == 'direct' ?
                <>
                    {data?.is_admin_player && data?.is_player_in_slot ?
                        <h1>You are admin player...</h1>
                        : null}

                    {!data?.is_admin_player ?
                        <>
                            {step === 0 ?
                                <>
                                    <div className="booking-slot-steps-container-1">
                                        <h1>Step 1/3: Reservation details</h1>
                                        <input placeholder={"Total players needed"} value={playersNeeded ? playersNeeded : ""} onChange={(e) => { setPlayersNeeded(e.target.value) }} />
                                        <BookingSlotBuyNow slotData={data?.slot} reservationData={data?.reservation} setStep={() => setStep(step + 1)} />
                                    </div>
                                </>
                                : null}
                            {step === 1 ?
                                <>
                                    <SelectSport sports={data?.slot?.slot_available_sports} sport={sport} setSport={setSport} />
                                    <button disabled={sport ? false : true} onClick={() => setStep(step + 1)}>Next</button>
                                </>
                                : null}
                            {step === 2 ?
                                <>
                                    <BookingSlotConfirmation
                                        playersNeeded={playersNeeded}
                                        data={data}
                                        pricePerPerson={parseInt(data?.slot?.slot_price) / playersNeeded}
                                        type={"pay-now"}
                                        handleDone={() => { handleDirectBook() }} />
                                </>
                                : null}
                            {step === 3 ?
                                <>
                                    {
                                        slotSuccessfulyCreated ?
                                            <ConfirmationSlotCreated />
                                            :
                                            <>
                                                <BookingSlotError tryAgain={() => { handleCreateGroup() }} />
                                            </>
                                    }
                                </>
                                : null}
                            {/* step === 0 ?
                                <>
                                    <SelectSport sports={data?.slot?.slot_available_sports} sport={sport} setSport={setSport} />
                                    <button disabled={sport ? false : true} onClick={() => setStep(step + 1)}>Next</button>
                                </>
                            : null }
                            { step === 1 ?
                                <>
                                    <BookingSlotBuyNow slotData={data?.slot} reservationData={data?.reservation} />
                                    <button onClick={() => setStep(step + 1)}>Next</button>
                                </>
                            : null }
                            { step === 2 ?
                                <>
                                    <AreYouSure handleDirectBook={handleDirectBook} />
                                </>
                            : null }
                            { step === 3 ? <ConfirmationSlotCreated /> : null */}
                        </>
                        : null}
                </>
                : null}

            {type == 'join' ?
                <>
                    {data?.is_admin_player && data?.is_player_in_slot ?
                        <h1>You are admin player...</h1>
                        : null}

                    {!data?.is_admin_player && data?.is_invited ?
                        <h1>You are already invited in this slot...</h1>
                        : null}

                    {!data?.is_admin_player && data?.is_player_in_slot ?
                        <h1>You are already part of this slot...</h1>
                        : null}

                    {!data?.is_admin_player && data?.is_requested ?
                        <h1>You already request to join in this slot...</h1>
                        : null}

                    {!data?.is_admin_player && !data?.is_invited && !data?.is_player_in_slot && !data?.is_requested ?
                        <>
                            {step === 0 ?
                                <>
                                    <h1>Join slot: #1</h1>
                                    <button onClick={() => setStep(step + 1)}>Next</button>
                                </>
                                : null}
                            {step === 1 ?
                                <>
                                    <h1>Join slot: #2</h1>
                                    <button onClick={() => setStep(step + 1)}>Next</button>
                                </>
                                : null}
                        </>
                        : null}
                </>
                : null}
        </>
    )
}

export default BookingSlotSteps