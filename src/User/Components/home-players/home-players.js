import React from "react";
import '../../Assets/Styles/HomePlayers/HomePlayers.scss'
import PlayerCard from "../player-card/player-card";
import { Search } from "react-bootstrap-icons";

function HomePlayers(props){
    const {handleInvitePlayer} = props

    var players = []
    for(var i=0;i<46;i++)
        players.push("Player "+i)
    return(
        <div className="home-players-main-container">
            <h1>Find players</h1>
            <div className="home-players-search-container">
                <input type="text" className="home-players-input-search" placeholder="Search"/><div className="home-players-icon-search"><Search/></div>
            </div>
            <div className="home-players-container">
                {players.map((player)=>(
                    <PlayerCard player={player} handleInvitePlayer={handleInvitePlayer} direction={"vertical"}/>
                ))}
            </div>
        </div>
    );
}

export default HomePlayers