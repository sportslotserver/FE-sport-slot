import { useEffect, useState } from 'react';
import '../../Assets/Styles/EditProfile/EditProfile.scss'
import Image1 from '../../Assets/Images/PlayerCard/image1.png'
import { Check } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';

function EditProfile(props){

    const {preview} = props

    const [showEdit,setShowEdit] = useState(true)

    var text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati nemo sequi inventore nesciunt, dolore dolor doloremque reiciendis consequuntur voluptatum dolorum quas perferendis? At beatae modi vitae veritatis repellat, nobis voluptatem dolore molestiae necessitatibus accusantium numquam reprehenderit accusamus rem, ducimus blanditiis."

    return(
        <div className="edit-profile-main-container">
            <div className="edit-profile-left-container">
                <img src={Image1} alt="profile image"/>
                <h5><b className="green-text">Change image</b></h5>
                <div className="edit-profile-divider"></div>
                <h5><b>Verified</b></h5>
                <div className="edit-profile-verified-item"><span className="green-text"><Check/></span>Identity</div>
                <div className="edit-profile-verified-item"><span className="green-text"><Check/></span>Email address</div>
                <div className="edit-profile-verified-item"><span className="green-text"><Check/></span>Phone number</div>
            </div>
            <div className="edit-profile-right-container">
                <div className="edit-profile-right-container-header">
                    <h3>Maximilian Rodrigez</h3>
                    {!preview && <Link className="edit-profile-link" to="/selected-profile"><h5><b className="green-text">Preview profile</b></h5></Link>}
                </div>
                <div className="edit-profile-right-container-info">
                    <h5>Member since 2019</h5>
                    <h5>Brooklyn, NY</h5>
                    <h5>33 years, height 187cm</h5>
                    <h5>Male</h5>
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
                <h5 className="preview-about-text">{text}</h5>
                <br/>
                <button className="save-about-button">Invite to slot</button>
                </>
                :
                <>
                <textarea value={text} disabled={showEdit ? true : false}></textarea>
                <br/>
                <button className="save-about-button">Save</button>
                </>
                }
            </div>
        </div>
    )
}

export default EditProfile;