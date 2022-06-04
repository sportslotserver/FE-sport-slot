import { useState,useEffect } from 'react';
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

function BookingSlotSteps(){

    

    return(
        <>
        <AreYouSure/>
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
        </div>
        </>
    );
}

export default BookingSlotSteps