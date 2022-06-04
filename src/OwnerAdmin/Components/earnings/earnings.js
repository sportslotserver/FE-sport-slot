import { useState } from 'react';
import '../../Assets/Styles/Earnings/Earnings.scss'
import EarningRow from '../reaning-row/earning-row';

function Earnings(){
    const [selectedFilterIndex, setselectedFilterIndex] = useState(1)

    const _onFocusDate = (e) => {
        e.currentTarget.type = "date";
    }
    const _onBlurDate = (e) =>{
        e.currentTarget.type = "text";
    }
    return(
        <div className="earnings-container">
        <h4>Calendar</h4>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <input className="earnings-date-input" type="text" placeholder="From" onFocus={(e)=>{_onFocusDate(e)}} onBlur={(e)=>{_onBlurDate(e)}}/>
            <button style={{marginTop: 0, fontSize: "12px"}} className="green-button">Download invoices</button>
        </div>
        <div className="manage-slots-content-container-filters">
            <div onClick={()=>{setselectedFilterIndex(1)}} className={selectedFilterIndex === 1 ? "earnings-content-container-filter-selected" : "earnings-content-container-filter"}>
                Pending
            </div>
            <div onClick={()=>{setselectedFilterIndex(2)}} className={selectedFilterIndex === 2 ? "earnings-content-container-filter-selected" : "earnings-content-container-filter"}>
                Booking
            </div>
            <div onClick={()=>{setselectedFilterIndex(3)}} className={selectedFilterIndex === 3 ? "earnings-content-container-filter-selected" : "earnings-content-container-filter"}>
                Withdrawal
            </div>
            <div onClick={()=>{setselectedFilterIndex(4)}} className={selectedFilterIndex === 4 ? "earnings-content-container-filter-selected" : "earnings-content-container-filter"}>
                Compensation
            </div>
            <div onClick={()=>{setselectedFilterIndex(5)}} className={selectedFilterIndex === 5 ? "earnings-content-container-filter-selected" : "earnings-content-container-filter"}>
                Canceled
            </div>
            <div onClick={()=>{setselectedFilterIndex(6)}} className={selectedFilterIndex === 6 ? "earnings-content-container-filter-selected" : "earnings-content-container-filter"}>
                View all
            </div>
        </div>
        <div className="earnings-table">
            <div className="earnings-table-head">
                <div className="earnings-table-head-child-1">
                    Date
                </div>
                <div className="earnings-table-head-child-1">
                    Type
                </div>
                <div className="earnings-table-head-child-2">
                    Description
                </div>
                <div className="earnings-table-head-child-1">
                    Amount
                </div>
                <div className="earnings-table-head-child-1">
                    Ref.ID
                </div>
            </div>
            <div className="earnings-table-body">
                <EarningRow type={"pending"}/>
                <EarningRow type={"booking"}/>
                <EarningRow type={"withdrawal"}/>
                <EarningRow type={"canceling"}/>
                <EarningRow type={"owner-canceled"}/>
            </div>
        </div>
        </div>
    )
}

export default Earnings;