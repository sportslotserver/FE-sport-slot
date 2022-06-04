import {ThreeDotsVertical} from "react-bootstrap-icons"
import PlayerCard from "../player-card/player-card";

function ConfirmedPlayers(props){

    const {players} = props
    return(
        <div>
            {
                players.map((player) => 
                    <PlayerCard player={player} direction={"horizontal"} details={true}/>
                )
            }
        </div>
    );
}

export default ConfirmedPlayers