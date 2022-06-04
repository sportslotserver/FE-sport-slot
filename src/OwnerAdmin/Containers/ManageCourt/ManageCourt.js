import { useState } from 'react';
import '../../Assets/Styles/ManageCourt/ManageCourt.scss'
import AddNewCourt from '../../Components/add-new-court/add-new-court';
import BalanceBlock from '../../Components/balance-block/balance-block';
import Earnings from '../../Components/earnings/earnings';
import EditCourt from '../../Components/edit-court/edit-court';
import EditSlotsBlock from '../../Components/edit-slots-block/edit-slots-block';
import ManageCourtCard from '../../Components/manage-court-card/manage-court-card';
import ManageSlots from '../../Components/manage-slots/manage-slots';
import Notifications from '../../Components/notifications/notifications';
import Reservations from '../../Components/reservations/reservations';
import Settings from '../../Components/settings/settings';

function ManageCourt(){

    const [selectedOptionIndex, setSelectedOptionIndex] = useState(1)
    
    return(
        <div className="manage-court-container">
            <h1>Owner admin panel</h1>
            <h4>Select a court</h4>
            <ManageCourtCard/>
            <div className="manage-court-content">
                <div className="manage-court-content-menu">
                    <div className="manage-court-content-menu-option" onClick={()=>{setSelectedOptionIndex(1)}}>
                        {selectedOptionIndex === 1 ? <h5><b className="orange-text">Menage slots</b></h5> : <h5>Menage slots</h5>}
                    </div>
                    <div className="manage-court-content-menu-option" onClick={()=>{setSelectedOptionIndex(2)}}>
                        {selectedOptionIndex === 2 ? <h5><b className="orange-text">Reservations</b></h5> : <h5>Reservations</h5>}
                    </div>
                    <div className="manage-court-content-menu-option" onClick={()=>{setSelectedOptionIndex(3)}}>
                        {selectedOptionIndex === 3 ? <h5><b className="orange-text">Notifications</b></h5> : <h5>Notifications</h5>}
                    </div>
                    <div className="manage-court-content-menu-option" onClick={()=>{setSelectedOptionIndex(4)}}>
                        {selectedOptionIndex === 4 ? <h5><b className="orange-text">Earnings</b></h5> : <h5>Earnings</h5>}
                    </div>
                    <div className="manage-court-content-menu-option" onClick={()=>{setSelectedOptionIndex(5)}}>
                        {selectedOptionIndex === 5 ? <h5><b className="orange-text">Edit court</b></h5> : <h5>Edit court</h5>}
                    </div>
                    <div className="manage-court-content-menu-option" onClick={()=>{setSelectedOptionIndex(6)}}>
                        {selectedOptionIndex === 6 ? <h5><b className="orange-text">Add new court</b></h5> : <h5>Add new court</h5>}
                    </div>
                    <div className="manage-court-content-menu-option" onClick={()=>{setSelectedOptionIndex(7)}}>
                        {selectedOptionIndex === 7 ? <h5><b className="orange-text">Settings</b></h5> : <h5>Settings</h5>}
                    </div>
                </div>
                <div className="manage-court-content-container">
                    {selectedOptionIndex === 1 && <ManageSlots/>}
                    {selectedOptionIndex === 2 && <Reservations/>}
                    {selectedOptionIndex === 3 && <Notifications/>}
                    {selectedOptionIndex === 4 && <Earnings/>}
                    {selectedOptionIndex === 5 && <EditCourt/>}
                    {selectedOptionIndex === 6 && <AddNewCourt/>}
                    {selectedOptionIndex === 7 && <Settings/>}
                </div>
                {selectedOptionIndex !== 3 && 
                <div className="manage-slots-content-settings">
                    {/*<EditSlotsBlock selectedSlotType={"empty"}/>*/}
                    {/*<EditSlotsBlock selectedSlotType={"available"}/>*/}
                    {/*<EditSlotsBlock selectedSlotType={"booked"}/>*/}
                    {/*<EditSlotsBlock selectedSlotType={"player-needed"}/>*/}
                    {/*<EditSlotsBlock selectedSlotType={"available-multy-hour"}/>*/}
                    {/*<EditSlotsBlock warning/>*/}
                    {selectedOptionIndex === 4 && <BalanceBlock/>}
                </div>}
            </div>
        </div>
    )
}

export default ManageCourt;