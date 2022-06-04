import '../../Assets/Styles/Reservations/Reservations.scss'
import ReservationRow from '../reservation-row/reservation-row';

function Reservations(){

    const _onFocusDate = (e) => {
        e.currentTarget.type = "date";
    }
    const _onBlurDate = (e) =>{
        e.currentTarget.type = "text";
    }

    return(
        <div className="reservations-container">
        <div>
            <input type="text" placeholder="Date" onFocus={(e)=>{_onFocusDate(e)}} onBlur={(e)=>{_onBlurDate(e)}}/>
        </div>
        <div className="reservation-table">
            <div className="reservation-table-head">
                <div className="reservation-table-head-child-1">
                    Status
                </div>
                <div className="reservation-table-head-child-2">
                    Details
                </div>
                <div className="reservation-table-head-child-1">
                    Contact
                </div>
                <div className="reservation-table-head-child-1">
                    Payment
                </div>
            </div>
            <div className="reservation-table-body">
                <ReservationRow type={"confirmed"}/>
                <ReservationRow type={"canceled"}/>
                <ReservationRow type={"completed"}/>
            </div>
        </div>
        </div>
    )
}

export default Reservations