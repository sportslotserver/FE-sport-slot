import '../../Assets/Styles/AddNewCourt/AddNewCourt.scss'
import image from '../../Assets/Images/OwnerAdminManageCourt/image2.png'
import { useState } from 'react';
import {CheckCircleFill} from 'react-bootstrap-icons'

function AddNewCourt(){

    const [sent, setSent] = useState(false)
    return(
        <div className="add-new-court-container">
            <h4>Add new court</h4><br/>
            {!sent ?
            <>
            <img src={image} alt={""}/>
            <h5>In order to add a new court you need to send a request.</h5>
            <h5>Click on the button bellow and we will contact you with further instruction.</h5><br/>
            <button className="green-button" onClick={()=>{setSent(true)}}>Send request</button>
            </>
            :
            <>
            <div className="add-new-court-finish">
                <span className="green-text"><CheckCircleFill/></span>
                <div className="green-text">
                    <b>Request has been sent!<br/>Our team will contact you soon.</b>
                </div>
            </div>
            </>}
            
        </div>
    )
}

export default AddNewCourt;