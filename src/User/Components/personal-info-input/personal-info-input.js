import { useState, useRef, useEffect } from 'react'
import '../../Assets/Styles/PersonalInfo/PersonalInfo.scss'
import { Check } from "react-bootstrap-icons";


function PersonalInfoInput(props){

    const {label, name, update, value, type, verified, verifiedText} = props
    const [showEdit,setShowEdit] = useState(true)
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null);
    
    useEffect(() => {
        setInputValue(value)
    }, [value])

    const saveChanges = () => {
        if (inputValue !== '') {
            if (inputRef.current.name !== 'email') {
                update({ [inputRef.current.name]: inputValue })
                setShowEdit(true)
            } else {
                setInputValue(value)
                setShowEdit(true)
            }
        } else {
            setInputValue(value)
            setShowEdit(true)
        }
    }

    return(
        <div className="personal-info-input-container">
            <div className="personal-info-input-header">
                <h4><b>{label}</b></h4>
                <div>
                    {  
                        name !== 'email' ?
                            showEdit ?
                            <h5 style={{cursor: "pointer"}}><b className="green-text" onClick={()=>{setShowEdit(false)}}>Edit</b></h5>
                            :
                            <h5 style={{cursor: "pointer"}}>
                                <b className="orange-text" style={{marginRight: 10}} onClick={()=>{setShowEdit(true)}}>Cancel </b>
                                <b className="green-text" onClick={saveChanges}> Save</b>
                            </h5>
                        : null
                    }
                </div>
            </div>
            
            { type === 'text' ?
                <input 
                    ref={inputRef} 
                    type="text" 
                    name={name} 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    disabled={ name !== 'email' ? showEdit ? true : false : true }/>
            : null }    
            
            { type === 'select' ?
                <select 
                    name={name} 
                    ref={inputRef} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    disabled={ name !== 'email' ? showEdit ? true : false : true }>
                        <option selected={value == "basketball" ? true : false} value="basketball">Basketball</option>
                        <option selected={value == "football" ? true : false} value="football">Football</option>
                </select>
            : null }
            
            {/* <div className="personal-info-input-footer">
            {
                verified && verifiedText &&
                <h5><Check className="green-text" style={{fontSize: 22}}/><b>Verified</b>{verifiedText}</h5>
            }
            </div> */}
        </div>
    )
}

export default PersonalInfoInput;