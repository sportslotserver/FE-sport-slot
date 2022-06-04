import '../../Assets/Styles/BookingSlotInvitePlayers/BookingSlotInvitePlayers.scss'
import { useState,useEffect } from 'react';
import PlayerCard from '../player-card/player-card';
import CustomPagination from '../pagination/pagination';
import { Search } from "react-bootstrap-icons";

function BookingSlotInvitePlayers(){

    const [activePage, setActivePage]= useState(1)
    const pageRangeDisplayed = 3
    const [itemsCountPerPage,setItemsCountPerPage] = useState(5)

    const [displayedItems, setDisplayeditems] = useState([])
    
    var players = []
    for(var i=0;i<46;i++)
        players.push("Player "+i)

    useEffect(()=>{
        var items = []
        for(var i=(activePage*itemsCountPerPage)-itemsCountPerPage;i<(activePage*itemsCountPerPage);i++)
            if(players[i])
                items.push(players[i])
        setDisplayeditems(items)
    },[activePage,itemsCountPerPage])

    return(
        <>
        <div className="invite-players-header">
            <div className="invite-players-header-search">
                <input type="text" className="invite-players-header-input-search" placeholder="Search"/><div className="invite-players-header-icon-search"><Search/></div>    
            </div>
        </div>
        <div className="invite-players-container">
            {
                displayedItems.map((player) => 
                    <PlayerCard player={player} direction={"horizontal"} details={false}/>
                )
            }
        </div>
        <div className="pagination-container">
            <CustomPagination totalItemsCount={players.length} pageRangeDisplayed={pageRangeDisplayed} itemsCountPerPage={itemsCountPerPage} activePage={activePage} setActivePage={setActivePage}/>
        </div>
        <div className="next-button-container">
            <button className="green-button">Next</button>
        </div>
        </>
    );
}

export default BookingSlotInvitePlayers