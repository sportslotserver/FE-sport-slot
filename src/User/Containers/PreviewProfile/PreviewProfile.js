import '../../Assets/Styles/PreviewProfile/PreviewProfile.scss'
import EditProfile from '../../Components/edit-profile/edit-profile';

function PreviewProfile(){
    return(
        <div className="preview-profile-container">
            <EditProfile preview={true}/>
        </div>
    )
}

export default PreviewProfile;