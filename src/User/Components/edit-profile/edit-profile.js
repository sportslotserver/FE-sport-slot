import { useEffect, useRef, useState } from 'react';
import '../../Assets/Styles/EditProfile/EditProfile.scss'
import Image1 from '../../Assets/Images/PlayerCard/image1.png'
import { Check } from "react-bootstrap-icons";
import { setCapitalLetter } from '../../../utils/capital-letter'
import PreviewProfile from '../../Containers/PreviewProfile/PreviewProfile';

function EditProfile({ preview, player, update }){

    const [showEdit,setShowEdit] = useState(true)
    const [showPreviewProfile, setShowPreviewProfile] = useState(true)
    const [bio, setBio] = useState("")

    useEffect(() => {
        if (player) {
            setBio(player?.bio !== null ? player?.bio : "")
        }
    }, [player])

    const textareaRef = useRef(null)
    
    const saveBio = () => {
        update({ [textareaRef.current.name]: bio })
        setShowEdit(true)
    }

    return(
        <div className="edit-profile-main-container">
            <div className="edit-profile-left-container">
                <img src={Image1} alt="profile image"/>
                <h5><b className="green-text">Change image</b></h5>
                <div className="edit-profile-divider"></div>
                <h5><b>Verified</b></h5>
                {/* <div className="edit-profile-verified-item"><span className="green-text"><Check/></span>Identity</div> */}
                <div className="edit-profile-verified-item">{ player?.email_verified ? <span className="green-text"><Check/></span> : 'X' } Email address</div>
                <div className="edit-profile-verified-item">{ player?.phone_verified ? <span className="green-text"> <Check/> </span> : 'X' } Phone number</div>
            </div>
            <div className="edit-profile-right-container">
                <div className="edit-profile-right-container-header">
                    <h3>{ player?.full_name }</h3>
                    {!preview && <h5><b className="green-text" onClick={() => setShowPreviewProfile(!showPreviewProfile)}>Preview profile</b></h5>}
                </div>
                <div className="edit-profile-right-container-info">
                    <h5>Member since: { player?.createdAt.substring(0, 4) }</h5>
                    <h5>{ player?.city ? setCapitalLetter(player?.city) : '' }, { player?.state ? setCapitalLetter(player?.state) : '' }</h5>
                    <h5>{ player?.age } years, height { player?.height }cm</h5>
                    <h5>{ player?.gender ? setCapitalLetter(player?.gender) : '' }</h5>
                </div>
                <div className="edit-profile-right-container-input-header">
                    <h4><b>About</b></h4>
                    {!preview && <div>
                        {
                            showEdit ?
                            <h5 style={{cursor: "pointer"}}><b className="green-text" onClick={()=>{setShowEdit(false)}}>Change</b></h5>
                            :
                            <h5 style={{cursor: "pointer"}}><b className="orange-text" onClick={()=>{setShowEdit(true)}}>Cancel </b></h5>
                        }
                    </div>}
                    
                </div>
                {
                preview ? 
                <>
                    <h5 className="preview-about-text">{ player?.bio }</h5>
                    <br/>
                    <button className="save-about-button">Invite to slot</button>
                </>
                :
                <>
                    <textarea ref={textareaRef} name="bio" value={bio} onChange={(e) => setBio(e.target.value)} disabled={showEdit ? true : false}></textarea>
                    <br/>
                    <button className="save-about-button" onClick={saveBio} disabled={showEdit ? true : false}>Save</button>
                </>
                }
            </div>
            
        </div>
    )
}

export default EditProfile;