import '../../Assets/Styles/Reservations/Reservations.scss'

function ReservationRow(props){

    const {type}=props
    return(
        <div className="reservation-row-container">
            <div className="reservation-row-container-child-1">
                {type === "confirmed" && <b className="green-text">Confirmed</b>}
                {type === "canceled" && <b className="orange-text">Canceled</b>}
                {type === "completed" && <b>Confirmed</b>}
            </div>
            <div className="reservation-row-container-child-2">
                <b>Super sport court indoor 3</b><br/><br/>
                Wed, Oct 3 / 08AM - 10AM<br/>
                11 confirmed players
            </div>
            <div className="reservation-row-container-child-1">
                <b className="blue-text">Maximilian<br/>Rodrigez</b>
            </div>
            <div className="reservation-row-container-child-1">
                {type === "canceled" ?
                <>
                Conpensation: $22<br/>
                Fee: -$2.2
                </>
                :
                <>
                Total: $234<br/>
                Fee: -$45<br/>
                Erningst: $189
                </>}
                
            </div>
        </div>
    )
}

export default ReservationRow