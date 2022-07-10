import '../../Assets/Styles/BookingSlotInvitePlayers/BookingSlotInvitePlayers.scss'
import { useState,useEffect } from 'react';
import PlayerCard from '../player-card/player-card';
import CustomPagination from '../pagination/pagination';
import { Search } from "react-bootstrap-icons";

import Api from '../../../api/'
import { PlayerActions } from '../../../api/actions';

function BookingSlotInvitePlayers(props){

    const {setStep, handleInvitePlayer} = props

    const [activePage, setActivePage]= useState(1)
    const pageRangeDisplayed = 3
    const [itemsCountPerPage,setItemsCountPerPage] = useState(5)

    const [players, setPlayers] = useState([])

    const [displayedItems, setDisplayeditems] = useState([])

    const getPlayers = () => {
        Api.user(PlayerActions.GET_ALL_PLAYERS)
            .then(response => {
            console.log(response)
            setPlayers(response.data)
        }).catch(err => {
            throw new Error(err)
        })
    }

    useEffect(()=>{
        if(players.length === 0)
            getPlayers()
    },[players])
    

    useEffect(()=>{
        var items = []
        for(var i=(activePage*itemsCountPerPage)-itemsCountPerPage;i<(activePage*itemsCountPerPage);i++)
            if(players[i])
                items.push(players[i])
        setDisplayeditems(items)
    },[activePage,itemsCountPerPage,players])

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
                    <PlayerCard key={player.id} player={player} direction={"horizontal"} details={false} handleInvitePlayer={handleInvitePlayer}/>
                )
            }
        </div>
        <div className="pagination-container">
            <CustomPagination totalItemsCount={players.length} pageRangeDisplayed={pageRangeDisplayed} itemsCountPerPage={itemsCountPerPage} activePage={activePage} setActivePage={setActivePage}/>
        </div>
        <div className="next-button-container">
            <button className="green-button" onClick={setStep}>Next</button>
        </div>
        </>
    );
}

export default BookingSlotInvitePlayers