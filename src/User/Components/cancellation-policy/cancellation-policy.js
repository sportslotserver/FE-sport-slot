import '../../Assets/Styles/CancellationPolicy/CancellationPolicy.scss'

function CancellationPolicy(){
    return(
        <div className="cancellation-policy-container">
            <div className="cancellation-policy-title">
                Cancellation policy
            </div>
            <div className="cancellation-policy-text">
                This court is submitted to a moderate cancellation policy.<br/>
                Cancellation the session is free up to 3 days before the session date<br/>
                Cancelling less than 3 days before the session is charged 50% from the total price.
            </div>
            <div className="cancellation-policy-green-text">
                View cancellation policies
            </div>
        </div>
    );
}

export default CancellationPolicy;