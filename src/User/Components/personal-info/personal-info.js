import '../../Assets/Styles/PersonalInfo/PersonalInfo.scss'
import PersonalInfoInput from '../personal-info-input/personal-info-input'

function PersonalInfo({ player, update }){
    return(
        <div style={{width: "100%"}}>
            <PersonalInfoInput type={`text`} label={"Legal name"} update={update} name="full_name" value={player?.full_name}/>
            <PersonalInfoInput type={`text`} label={"Date of birth"} update={update} name="birthday" value={player?.birthday}/>
            <PersonalInfoInput type={`text`} label={"State"} name="state" update={update} value={player?.state}/>
            <PersonalInfoInput type={`text`} label={"City"} name="city" update={update} value={player?.city}/>
            <PersonalInfoInput type={`text`} label={"Height"} name="height" update={update} value={`player?.height} cm`}/>
            <PersonalInfoInput type={`text`} label={"Gender"} name="gender" update={update} value={player?.gender}/>
            <PersonalInfoInput type={`select`} label={"Prefered sport"} name="prefered_sport" update={update} value={player?.prefered_sport}/>
            <PersonalInfoInput type={`text`} label={"Email address"} name="email" update={update} value={player?.email} verified={player?.email_verified} verifiedText={"if email is changed, another verification is required"}/>
            <PersonalInfoInput type={`text`} label={"Phone number"} name="phone" update={update} value={player?.phone} verified={player?.phone_verified} verifiedText={"if number is changed, another verification is required"}/>
            <div className="personal-info-id-container">
                <div className="personal-info-id-header">
                    <h4><b>Verify ID</b></h4>
                    <div>
                        <h5 style={{cursor: "pointer"}}><b className="orange-text">Not verified</b></h5>
                    </div>
                </div>
                
                <div className="personal-info-id-footer">
                    <button className="upload-id-button">Upload ID</button>
                    <div><h5>Upload ID or passport images to verify your account</h5></div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo