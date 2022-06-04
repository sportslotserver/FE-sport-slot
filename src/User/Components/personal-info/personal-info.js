import '../../Assets/Styles/PersonalInfo/PersonalInfo.scss'
import PersonalInfoInput from '../personal-info-input/personal-info-input'

function PersonalInfo(){
    return(
        <div style={{width: "100%"}}>
            <PersonalInfoInput label={"Legal name"} placeholders={["First name: Maximilian","Last name: Rodriguez"]}/>
            <PersonalInfoInput label={"Date of birth"} placeholders={["20. Jan 1992"]}/>
            <PersonalInfoInput label={"Location"} placeholders={["Brooklyn, NY"]}/>
            <PersonalInfoInput label={"Height"} placeholders={["187cm"]}/>
            <PersonalInfoInput label={"Gender"} placeholders={["Gender"]}/>
            <PersonalInfoInput label={"Prefered sport"} placeholders={["Choose sport"]}/>
            <PersonalInfoInput label={"Email address"} placeholders={["max@gmail.com"]} verified={true} verifiedText={"if email is changed, another verification is required"}/>
            <PersonalInfoInput label={"Phone number"} placeholders={["+123 456 789"]} verified={true} verifiedText={"if number is changed, another verification is required"}/>
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