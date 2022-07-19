import { useNavigate } from 'react-router-dom'

function ConfirmationSlotCreated(){

    const navigate = useNavigate()

    const redirect = () => {
        navigate("/home", { replace: true })
    }

    return(
        <div className="padding-10px">
            <div className="heading-1 text-bold green-text">Congratulations!</div><br/>
            <div className="heading-2 secondary-text-color">Slot is created</div><br/>
            <button className="green-button" onClick={redirect}>Done</button>
        </div>
    );
}

export default ConfirmationSlotCreated