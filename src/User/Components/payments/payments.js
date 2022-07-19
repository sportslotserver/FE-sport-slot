import { useState, useEffect } from 'react'
import { PlayerActions } from '../../../api/actions';
import Api from '../../../api';
import '../../Assets/Styles/Payments/Payments.scss'
import PaymentCard from '../payment-card/payment-card';


function Payments({ player }){

    const [ paymentMethods, setPaymentMethods ] = useState([])
    
    useEffect(() => {
        if (player) {
            Api.user(PlayerActions.GET_PLAYER_PAYMENT_METHODS, player.id).then(response => {
                setPaymentMethods(response.data)
            }).catch(err => {
                console.log('nema podaci za igraca')
            })
        }
    }, [])

    return(
        <>
        <div className="payments-top-container">
            <h4><b>Balance</b></h4>
            <h4 className="green-text">{ player?.balance } Rsd</h4>
            <button className="payment-button">Make a payment</button>
        </div>
        <div className="payments-container">
            <h4><b>List of transaction</b></h4>
            <PaymentCard/>
            <PaymentCard/>
            <div className="payments-footer-container">
                <h5 className="green-text"><b>View more</b></h5>
            </div>
        </div>
        </>
    )
}

export default Payments;