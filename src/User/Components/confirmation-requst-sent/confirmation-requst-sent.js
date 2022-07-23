import { useNavigate } from 'react-router-dom'

function ConfirmationRequestSent(){
    const navigate = useNavigate()

    const redirect = () => {
        navigate("/home", { replace: true })
    }

    return(
        <div className="padding-10px">
            <div className="heading-1 text-bold green-text">Request sent</div><br/>
            <div className="heading-2 secondary-text-color">You will be notified when your request to join is approved.</div><br/>
            <button className="green-button" onClick={redirect}>Done</button>
        </div>
    );
}

export default ConfirmationRequestSent