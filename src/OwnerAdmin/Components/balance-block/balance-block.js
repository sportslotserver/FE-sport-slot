import '../../Assets/Styles/BalanceBlock/BalanceBlock.scss'

function BalanceBlock(){
    return(
        <div className="balance-block-container">
            <h4>Balance</h4><br/>
            <h5><b>Court earnings:</b></h5>
            <h4 className="green-text">$436</h4>
            <div className="balance-block-divider"></div>
            <h5><b>Total earnings:</b></h5>
            <h4 className="green-text">$4,563.45</h4><br/>
            <h5 className="secondary-text-color">*Payments withdrawals to your<br/>bank account are generated<br/>automatically every Monday.</h5>
            <br/><div className="balance-block-divider"></div><br/>
            <h5><b>Payment to:</b></h5>
            <h5 className="secondary-text-color">Raifaisen Bank AD Beograd<br/>Bulevar Nikole Tesle 21313<br/>Account 840-234********-74.</h5><br/>
            <h5><b className="green-text">Change payout account</b></h5><br/>
            <h5><b className="green-text">Add payment method</b></h5>
        </div>
    )
}

export default BalanceBlock;