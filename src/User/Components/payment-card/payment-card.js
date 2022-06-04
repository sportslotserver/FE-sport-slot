import '../../Assets/Styles/Payments/Payments.scss'
import Icon from '../../Assets/Images/Payments/icon.png'
import {ThreeDotsVertical} from "react-bootstrap-icons"

function PaymentCard(){
    return(
        <div className="payment-card-container">
            <img src={Icon} alt="icon"/>
            <div className="payment-card-content-container">
                <div className="payment-card-content-left-container">
                    <h5>Your account has been changed with</h5>
                    <h4><b>764 RSD</b></h4>
                    <h5>Super Sports Court Basketball 1</h5>
                    <h5>Wed, Oct 3 / 08AM - 10AM / 7 confirmed players</h5>
                </div>
                <div className="payment-card-content-right-container">
                    <ThreeDotsVertical/>
                    <h5><b>22.11.2022.</b></h5>
                </div>
            </div>
        </div>
    )
}

export default PaymentCard;