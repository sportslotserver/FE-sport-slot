import '../../Assets/Styles/OwnerAdminCourtCard/OwnerAdminCourtCard.scss'
import image from '../../Assets/Images/OwnerAdminCourtCard/image1.png'
import { Link } from 'react-router-dom';

function OwnerAdminCourtCard(){
    return(
        <Link className="owner-admin-court-card-container-link" to="/manage-slots">
        <div className="owner-admin-court-card-container">
            <img className="owner-admin-court-card-img" src={image} alt={"image"}/>
            <div className="owner-admin-court-card-content">
                <div className="owner-admin-court-card-content-title">Super Sport Court 4</div>
                <h3>Loern ipsum Street 235b, New York, US</h3>
                <h5><b className="green-text">Manage court</b></h5>
            </div>
        </div>
        </Link>
    )
}

export default OwnerAdminCourtCard;