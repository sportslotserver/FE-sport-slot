import '../../Assets/Styles/OwnerAdminCourts/OwnerAdminCourts.scss'
import OwnerAdminCourtCard from '../../Components/owner-admin-court-card/owner-admin-court-card';

function OwnerAdminCourts(){
    return(
        <div className="owner-admin-courts-container">
            <h1>Owner admin panel</h1>
            <h3>Welcome to sportslots!</h3>
            <h3>Here you can manage your courts.</h3>
            <OwnerAdminCourtCard/>
            <OwnerAdminCourtCard/>
            <OwnerAdminCourtCard/>
        </div>
    )
}

export default OwnerAdminCourts;