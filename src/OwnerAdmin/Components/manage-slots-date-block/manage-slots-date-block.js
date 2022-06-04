import '../../Assets/Styles/ManageSlotsDateBlock/ManageSlotsDateBlock.scss'
import {ChevronDown, ChevronUp} from 'react-bootstrap-icons'
import { useState } from 'react'
import Checkbox from '../checkbox/checkbox'

function ManageSlotsDateBlock(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
        <div className="manage-slots-date-block">
            <div className="manage-slots-date-block-header">
                <h5><b>October 5</b></h5>
                {isOpen ? <ChevronUp color='grey' onClick={()=>{setIsOpen(false)}}/>:<ChevronDown color='grey' onClick={()=>{setIsOpen(true)}}/>}
            </div>
            {isOpen &&
            <div className="manage-slots-date-block-content">
                <div className="manage-slots-slot">
                    <div className="manage-slots-slot-time">
                    <h5>8 - 9h</h5>
                    </div>
                    <div className="manage-slots-slot-content">
                        <div>
                        <b className="green-text">Empty / no slot</b>
                        </div>
                        <Checkbox/>
                    </div>
                </div>
                <div className="manage-slots-slot">
                    <div className="manage-slots-slot-time">
                    <h5>9 - 10h</h5>
                    </div>
                    <div className="manage-slots-slot-content">
                        <div>
                        <b className="blue-text">Players needed</b>
                        <b className="blue-text">55$</b>
                        </div>
                        <Checkbox/>
                    </div>
                </div>
                <div className="manage-slots-slot">
                    <div className="manage-slots-slot-time">
                    <h5>10 - 11h</h5>
                    </div>
                    <div className="manage-slots-slot-content">
                        <div>
                        <b className="green-text">Available</b>
                        <b className="green-text">45$</b>
                        </div>
                        <Checkbox/>
                    </div>
                </div>
                <div className="manage-slots-slot">
                    <div className="manage-slots-slot-time">
                    <h5>11 - 12h</h5>
                    </div>
                    <div className="manage-slots-slot-content">
                        <div>
                        <b>Booked</b>
                        <b>55$</b>
                        </div>
                        <Checkbox/>
                    </div>
                </div>
                <div className="manage-slots-slot">
                    <div className="manage-slots-slot-time">
                    <h5>12 - 13h</h5>
                    </div>
                    <div className="manage-slots-slot-content">
                        <div>
                        <b className="orange-text">Blocked</b>
                        </div>
                        <Checkbox/>
                    </div>
                </div>
            </div>}
        </div>
        
        </>
    )
}

export default ManageSlotsDateBlock;