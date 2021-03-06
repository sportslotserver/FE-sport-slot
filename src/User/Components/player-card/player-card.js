import React from "react";
import '../../Assets/Styles/PlayerCard/PlayerCard.scss'
import Image1 from '../../Assets/Images/PlayerCard/image1.png'
import {ThreeDotsVertical} from "react-bootstrap-icons"
import { setCapitalLetter } from '../../../utils/capital-letter'
import { Link } from "react-router-dom";

function PlayerCard({ direction, inviteButton, player, handleInvitePlayer, details, addPlayersToInvitation, directInvite, invited }){
    
    return(
        <div className={direction === "vertical" ? "player-card-container-vertical" : "player-card-container-horizontal"}>
            <img src={Image1} className="player-card-image"/>
            <div style={{width: "100%"}}>
            <div className={direction === "vertical" ? "player-card-child-vertical" : "player-card-child-horizontal"}>
                <div>
                    <div className={direction === "vertical" ? "heading-3 text-bold text-align-center" : "heading-2 black-text"}>{player?.full_name}</div>
                    {
                        direction === "vertical" ?
                        <>
                        <div className="heading-4 secondary-text-color text-align-center">{ setCapitalLetter(player?.city) }, { setCapitalLetter(player?.state) }</div>
                        <div className="heading-4 secondary-text-color text-align-center">{ player?.height }cm / age { player?.age } </div>
                        </>
                        :
                        <>
                        <span className="heading-4 secondary-text-color">{ setCapitalLetter(player?.city) }, { setCapitalLetter(player?.state) } { player?.height }cm / age { player?.age }</span>
                        </>
                    }
                </div>
                {
                    details ?
                    <div style={{ position: "relative", top: -20, left:10, color: "grey"}}>
                        <ThreeDotsVertical/>
                    </div>
                    :
                    <>
                    {
                        directInvite ?
                        <>
                        {
                            invited ?
                            <button className={direction === "vertical" ? "player-card-button margin-top-20":"player-card-button-invited"} 
                            //onClick={() => addPlayersToInvitation(player.id)}
                            >Invited</button>
                            :
                            <button className={direction === "vertical" ? "player-card-button margin-top-20":"player-card-button"} 
                            onClick={() => addPlayersToInvitation(player.id)}
                            >Invite to slot</button>
                        }
                        </>
                        :
                        <Link className="player-card-link margin-top-20" to={`/invite-player/${player.id}/${player?.full_name}`}>Invite to slot</Link>
                    }
                    </>
                }
            </div>
            </div>
        </div>
    );
}

export default PlayerCard