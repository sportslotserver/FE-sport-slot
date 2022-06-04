import '../../Assets/Styles/Payments/Payments.scss'
import PaymentCard from '../payment-card/payment-card';


function Payments(){
    return(
        <>
        <div className="payments-top-container">
            <h4><b>Balance</b></h4>
            <h4 className="green-text">533 (RSD)</h4>
            <button className="payment-button">Mako a payment</button>
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