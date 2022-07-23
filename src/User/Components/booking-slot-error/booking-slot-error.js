import icon from '../../Assets/Images/BookingSlotError/ErrorIcon.svg'
import { useNavigate } from 'react-router-dom'

function BookingSlotError(){
    const navigate = useNavigate()

    const redirect = () => {
        navigate("/home", { replace: true })
    }

    return(
        <div className="padding-10px" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <img src={icon} alt={"Error icon"} width={80}/>
            <div className="heading-1 text-bold orange-text">TIME OUT!</div><br/>
            <div className="heading-2 secondary-text-color">Looks like there in as error.</div><br/>
            <div className="heading-2 secondary-text-color">We are working on fixing the problem.</div><br/>
            <button className="green-button" onClick={redirect}>Back</button>
        </div>
    );
}

export default BookingSlotError