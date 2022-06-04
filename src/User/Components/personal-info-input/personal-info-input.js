import { useState } from 'react'
import '../../Assets/Styles/PersonalInfo/PersonalInfo.scss'
import { Check } from "react-bootstrap-icons";

function PersonalInfoInput(props){

    const {label, handleSave, placeholders, verified, verifiedText} = props
    const [showEdit,setShowEdit] = useState(true)

    const handleEdit = () => {
        setShowEdit(!showEdit)
    }
    const handleCancel = () => {
        setShowEdit(!showEdit)
    }

    return(
        <div className="personal-info-input-container">
            <div className="personal-info-input-header">
                <h4><b>{label}</b></h4>
                <div>
                    {
                        showEdit ?
                        <h5 style={{cursor: "pointer"}}><b className="green-text" onClick={()=>{setShowEdit(false)}}>Edit</b></h5>
                        :
                        <h5 style={{cursor: "pointer"}}><b className="orange-text" style={{marginRight: 10}} onClick={()=>{setShowEdit(true)}}>Cancel </b><b className="green-text"> Save</b></h5>
                    }
                </div>
            </div>
            {
                placeholders.map((placeholder,index) =>(<input type="text" key={index} placeholder={placeholder} disabled={showEdit ? true : false}/>))
            }
            
            <div className="personal-info-input-footer">
            {
                verified && verifiedText &&
                <h5><Check className="green-text" style={{fontSize: 22}}/><b>Verified</b>{verifiedText}</h5>
            }
            </div>
        </div>
    )
}

export default PersonalInfoInput;