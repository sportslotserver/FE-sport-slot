import React from "react";
import '../../Assets/Styles/PlayerCard/PlayerCard.scss'
import Image1 from '../../Assets/Images/PlayerCard/image1.png'
import {ThreeDotsVertical} from "react-bootstrap-icons"

function PlayerCard(props){
    const {direction,inviteButton,player,handleInvitePlayer,details} = props


    return(
        <div className={direction === "vertical" ? "player-card-container-vertical" : "player-card-container-horizontal"}>
            <img src={Image1} className="player-card-image"/>
            <div style={{width: "100%"}}>
            <div className={direction === "vertical" ? "player-card-child-vertical" : "player-card-child-horizontal"}>
                <div>
                    <div className={direction === "vertical" ? "heading-3 text-bold text-align-center" : "heading-2 black-text"}>{player}</div>
                    {
                        direction === "vertical" ?
                        <>
                        <div className="heading-4 secondary-text-color text-align-center">Belgrade, Serbia</div>
                        <div className="heading-4 secondary-text-color text-align-center">188cm / age 29</div>
                        </>
                        :
                        <>
                        <span className="heading-4 secondary-text-color">Belgrade, Serbia 188cm / age 29</span>
                        </>
                    }
                </div>
                {
                    details ?
                    <div style={{ position: "relative", top: -20, left:10, color: "grey"}}>
                        <ThreeDotsVertical/>
                    </div>
                    :
                    <button className={direction === "vertical" ? "player-card-button margin-top-20":"player-card-button"} onClick={handleInvitePlayer}>Invite to slot</button>
                }
            </div>
            </div>
        </div>
    );
}

export default PlayerCard