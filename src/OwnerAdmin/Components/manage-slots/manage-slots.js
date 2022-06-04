import { useState } from 'react';
import '../../Assets/Styles/ManageSlots/ManageSlots.scss'
import ManageSlotsDateBlock from '../manage-slots-date-block/manage-slots-date-block';


function ManageSlots(){

    const [selectedFilterIndex, setselectedFilterIndex] = useState(1)

    const _onFocusDate = (e) => {
        e.currentTarget.type = "date";
    }
    const _onBlurDate = (e) =>{
        e.currentTarget.type = "text";
    }
    return(
        <div className="manage-slots-container">
        <h4>Calendar</h4>
        <div>
            <input className="manage-slots-date-input" type="text" placeholder="From" onFocus={(e)=>{_onFocusDate(e)}} onBlur={(e)=>{_onBlurDate(e)}}/>
            <input className="manage-slots-date-input" type="text" placeholder="To" onFocus={(e)=>{_onFocusDate(e)}} onBlur={(e)=>{_onBlurDate(e)}}/>
        </div>
        <div className="manage-slots-content-container-filters">
            <div onClick={()=>{setselectedFilterIndex(1)}} className={selectedFilterIndex === 1 ? "manage-slots-content-container-filter-selected" : "manage-slots-content-container-filter"}>
                Empty
            </div>
            <div onClick={()=>{setselectedFilterIndex(2)}} className={selectedFilterIndex === 2 ? "manage-slots-content-container-filter-selected" : "manage-slots-content-container-filter"}>
                Available
            </div>
            <div onClick={()=>{setselectedFilterIndex(3)}} className={selectedFilterIndex === 3 ? "manage-slots-content-container-filter-selected" : "manage-slots-content-container-filter"}>
                Booked
            </div>
            <div onClick={()=>{setselectedFilterIndex(4)}} className={selectedFilterIndex === 4 ? "manage-slots-content-container-filter-selected" : "manage-slots-content-container-filter"}>
                Players needed
            </div>
            <div onClick={()=>{setselectedFilterIndex(5)}} className={selectedFilterIndex === 5 ? "manage-slots-content-container-filter-selected" : "manage-slots-content-container-filter"}>
                Blocked
            </div>
            <div onClick={()=>{setselectedFilterIndex(6)}} className={selectedFilterIndex === 6 ? "manage-slots-content-container-filter-selected" : "manage-slots-content-container-filter"}>
                View all
            </div>
        </div>
        <div>
            <ManageSlotsDateBlock/>
            <ManageSlotsDateBlock/>
            <ManageSlotsDateBlock/>
        </div>
        </div>
    )
}

export default ManageSlots;