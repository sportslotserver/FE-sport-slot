import React, { useState, useEffect } from "react";
import '../../Assets/Styles/HomePlayers/HomePlayers.scss'
import PlayerCard from "../player-card/player-card";
import { Search } from "react-bootstrap-icons";

function HomePlayers({ handleInvitePlayer, players }) {

    const [filteredPlayers, setFilteredPlayers] = useState([])
    const filterList = (query) => {
        setFilteredPlayers(players.filter(player => player.full_name.toLowerCase().search(query.toLowerCase()) !== -1))
    }

    return (
        <div className="home-players-main-container">
            <h1>Find players</h1>
            <div className="home-players-search-container">
                <input onChange={(e) => { filterList(e.target.value) }} type="text" className="home-players-input-search" placeholder="Search" /><div className="home-players-icon-search"><Search /></div>
            </div>

            { players.length > 0 ?
                <>
                    { filteredPlayers.length > 0 ? 
                         <div className="home-players-container">
                            { filteredPlayers.map((player, index) => (
                                <PlayerCard player={player} handleInvitePlayer={handleInvitePlayer} direction={"vertical"} directInvite={false} key={index} />
                            ))}
                        </div> 
                    : 
                        <div className="home-players-container">
                            { players.map((player, index) => (
                                <PlayerCard player={player} handleInvitePlayer={handleInvitePlayer} direction={"vertical"} directInvite={false} key={index} />
                            ))}
                        </div>
                    }
                </>
            :
                <div className="green-text" style={{ marginLeft: "10px", width: "100%", textAlign: "center", marginTop: "50px", marginBottom: "50px" }}><b>Players not found</b></div>
            }
        </div>
    );
}

export default HomePlayers