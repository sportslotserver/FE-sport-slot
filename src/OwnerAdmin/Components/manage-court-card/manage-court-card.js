import '../../Assets/Styles/ManageCourtCard/ManageCourtCard.scss'
import image from '../../Assets/Images/OwnerAdminCourtCard/image1.png'
import {ChevronDown, ChevronUp} from 'react-bootstrap-icons'

function ManageCourtCard(){
    return(
        <>
        <div className="manage-court-card-container">
            <img src={image} alt={"image"}/>
            <div>
                <h4><b className="orange-text">Super Sport Court 4</b></h4>
                <h5>Loern ipsum Street 235b, New York, US</h5>
            </div>
            <ChevronDown color='grey'/>
        </div>
        </>
    )
}

export default ManageCourtCard;