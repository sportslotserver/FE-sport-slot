import { useState } from "react";


function Checkbox(){
    const [checked, setChecked] = useState(false)

    const handleCheck = () => {
        if(checked) {
            setChecked(false)
            //handle select
        } else {
            setChecked(true)
            //handle unselect
        }
        
    }
    return(
        <div style={{width:18,height: 18, border: "1px solid rgb(191,190,190)", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"}} onClick={handleCheck}>
            {checked &&
            <div style={{width:10,height: 10, backgroundColor: "rgb(55,180,74)", borderRadius: "50%"}}>
            </div>
            }
        </div>
    )
}

export default Checkbox;