import { useState } from 'react';
import '../../Assets/Styles/EditCourt/EditCourt.scss'
import Checkbox from '../checkbox/checkbox';
import image from '../../Assets/Images/OwnerAdminManageCourt/image1.png'
import icon from '../../Assets/Images/OwnerAdminManageCourt/icon.png'
import {CheckCircleFill} from 'react-bootstrap-icons'

function EditCourt(){

    const [step, setStep] = useState(1)
    return(
        <div className="edit-court-container">
            <h4>Edit court</h4><br/>
            {step === 1 && 
            <>
            <h5>Step 1/4 - Basic info</h5>
            <div  style={{display: "flex", alignItems: "center"}}>
                <div className="edit-court-checkbox-container">
                    <Checkbox/><h5> Outdoor</h5>
                </div>
                <div className="edit-court-checkbox-container">
                    <Checkbox/><h5> Indoor</h5>
                </div>
            </div>
            <input type="text" placeholder="Court / busines name"/>
            <input type="text" placeholder="City"/>
            <input type="text" placeholder="Address"/>
            <input type="text" placeholder="Sport"/>
            <input type="text" placeholder="Working hours"/><br/>
            <button className="green-button">Save</button>
            <button className="green-button next-button" onClick={()=>{setStep(2)}}>Next</button>
            </>}
            {step === 2 && 
            <>
            <h5>Step 2/4 - Images</h5>
            <button className="green-button">Add image</button><br/><br/>
            <h5>*Each court can have up to 10 images.</h5>
            <div className="edit-court-images-container">
                <div className="edit-court-image-container">
                    <img className="edit-court-image" src={image}/>
                    <div>
                        <h5>Image 1</h5>
                        <img src={icon} height={20} width={18}/>
                    </div>
                </div>
                <div className="edit-court-image-container">
                    <img className="edit-court-image" src={image}/>
                    <div>
                        <h5>Image 1</h5>
                        <img src={icon} height={20} width={18}/>
                    </div>
                </div>
                <div className="edit-court-image-container">
                    <img className="edit-court-image" src={image}/>
                    <div>
                        <h5>Image 1</h5>
                        <img src={icon} height={20} width={18}/>
                    </div>
                </div>
                <div className="edit-court-image-container">
                    <img className="edit-court-image" src={image}/>
                    <div>
                        <h5>Image 1</h5>
                        <img src={icon} height={20} width={18}/>
                    </div>
                </div>
                <div className="edit-court-image-container">
                    <img className="edit-court-image" src={image}/>
                    <div>
                        <h5>Image 1</h5>
                        <img src={icon} height={20} width={18}/>
                    </div>
                </div>
                <div className="edit-court-image-container">
                    <img className="edit-court-image" src={image}/>
                    <div>
                        <h5>Image 1</h5>
                        <img src={icon} height={20} width={18}/>
                    </div>
                </div>
            </div>
            <button className="green-button">Save</button>
            <button className="green-button next-button" onClick={()=>{setStep(3)}}>Next</button>
            </>}
            {step === 3 && 
            <>
            <h5>Step 3/4 - Amenities</h5>
            <button className="green-button">Add image</button><br/><br/>
            <h5>*Each court can have up to 10 images.</h5>
            <div className="edit-court-amenities-container">
                <div className="edit-court-amenity">
                    <Checkbox/><h5>Parking on premisses</h5>
                </div>
                <div className="edit-court-amenity">
                    <Checkbox/><h5>Dressing rooms</h5>
                </div>
                <div className="edit-court-amenity">
                    <Checkbox/><h5>Lockers</h5>
                </div>
                <div className="edit-court-amenity">
                    <Checkbox/><h5>Balls</h5>
                </div>
                <div className="edit-court-amenity">
                    <Checkbox/><h5>Additional equipment</h5>
                </div>
                <div className="edit-court-amenity">
                    <Checkbox/><h5>Medical assistance</h5>
                </div>
                <div className="edit-court-amenity">
                    <Checkbox/><h5>Ahowers</h5>
                </div>
                <div className="edit-court-amenity">
                    <Checkbox/><h5>Towels</h5>
                </div>
                <div className="edit-court-amenity">
                    <Checkbox/><h5>Bar / caffee</h5>
                </div>
                <div className="edit-court-amenity">
                    <Checkbox/><h5>Toilettes</h5>
                </div>

            </div>
            <button className="green-button">Save</button>
            <button className="green-button next-button" onClick={()=>{setStep(4)}}>Next</button>
            </>}
            {step === 4 && 
            <>
            <h5>Step 4/4 - Pricing</h5><br/>
            <h5><b>Set base price per hour</b></h5>
            <input type="text" placeholder="$25"/><br/><br/>
            <h5>*Individual slot prices can be modified in <b>Manage slots</b> sections</h5>
            <button className="green-button">Save</button>
            <button className="green-button next-button" onClick={()=>{setStep(5)}}>Next</button>
            </>}
            {step === 5 && 
            <>
            <div className="edit-court-finish">
                <span className="green-text"><CheckCircleFill/></span>
                <div className="green-text">
                    <b>Court successfuly updated,<br/>changes will be displayed soon.</b>
                </div>
            </div>
            </>}
        </div>
    )
}

export default EditCourt;