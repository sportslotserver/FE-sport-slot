import '../../Assets/Styles/PersonalInfo/PersonalInfo.scss'
import PersonalInfoInput from '../personal-info-input/personal-info-input'
import { setCapitalLetter } from '../../../utils/capital-letter'

function PersonalInfo({ player }){
    return(
        <div style={{width: "100%"}}>
            <PersonalInfoInput label={"Legal name"} placeholders={[`${player?.full_name}`]}/>
            <PersonalInfoInput label={"Date of birth"} placeholders={[`${player?.birthday}`]}/>
            <PersonalInfoInput label={"State"} placeholders={[`${player?.state}`]}/>
            <PersonalInfoInput label={"City"} placeholders={[`${player?.city}`]}/>
            <PersonalInfoInput label={"Height"} placeholders={[`${player?.height} cm`]}/>
            <PersonalInfoInput label={"Gender"} placeholders={[`${player?.gender}`]}/>
            <PersonalInfoInput label={"Prefered sport"} placeholders={[`${player?.prefered_sport}`]}/>
            <PersonalInfoInput label={"Email address"} placeholders={[`${player?.email}`]} verified={player?.email_verified} verifiedText={"if email is changed, another verification is required"}/>
            <PersonalInfoInput label={"Phone number"} placeholders={[`${player?.phone}`]} verified={player?.phone_verified} verifiedText={"if number is changed, another verification is required"}/>
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