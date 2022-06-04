

import '../../Assets/Styles/Earnings/Earnings.scss'

function EarningRow(props){

    const {type}=props
    return(
        <div className="earnings-row-container">
            {type === "pending" &&
            <>
            <div className="earnings-row-container-child-1">
                Feb 06, 2022
            </div>
            <div className="earnings-row-container-child-1">
                <b className="green-text">Pending</b>
            </div>
            <div className="earnings-row-container-child-2">
                Super sports court<br/>Web 26 Feb 2022
            </div>
            <div className="earnings-row-container-child-1">
                Earnings: $100<br/>Fee: -$3
            </div>
            <div className="earnings-row-container-child-1">
                #875237856
            </div>
            </>
            }
            {type === "booking" &&
            <>
            <div className="earnings-row-container-child-1">
                Feb 06, 2022
            </div>
            <div className="earnings-row-container-child-1">
                Booking
            </div>
            <div className="earnings-row-container-child-2">
                Super sports court<br/>Web 26 Feb 2022
            </div>
            <div className="earnings-row-container-child-1">
                Earnings: $100<br/>Fee: -$3
            </div>
            <div className="earnings-row-container-child-1">
                #875237856
            </div>
            </>
            }
            {type === "withdrawal" &&
            <>
            <div className="earnings-row-container-child-1">
                Feb 06, 2022
            </div>
            <div className="earnings-row-container-child-1">
                Withdrawal<br/>to account
            </div>
            <div className="earnings-row-container-child-2">
                Super sports court<br/>Web 26 Feb 2022
            </div>
            <div className="earnings-row-container-child-1">
                -$234
            </div>
            <div className="earnings-row-container-child-1">
                #875237856
            </div>
            </>
            }
            {type === "canceling" &&
            <>
            <div className="earnings-row-container-child-1">
                Feb 06, 2022
            </div>
            <div className="earnings-row-container-child-1">
                Canceling<br/>compensation
            </div>
            <div className="earnings-row-container-child-2">
                Super sports court<br/>Web 26 Feb 2022
            </div>
            <div className="earnings-row-container-child-1">
            Earnings: $100<br/>Fee: -$1
            </div>
            <div className="earnings-row-container-child-1">
                #875237856
            </div>
            </>
            }
            {type === "owner-canceled" &&
            <>
            <div className="earnings-row-container-child-1">
                Feb 06, 2022
            </div>
            <div className="earnings-row-container-child-1">
                Owner canceled
            </div>
            <div className="earnings-row-container-child-2">
                Super sports court<br/>Web 26 Feb 2022
            </div>
            <div className="earnings-row-container-child-1">
                Penalty: -$22
            </div>
            <div className="earnings-row-container-child-1">
                #875237856
            </div>
            </>
            }
        </div>
    )
}

export default EarningRow