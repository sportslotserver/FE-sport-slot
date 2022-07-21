import {ThreeDotsVertical} from "react-bootstrap-icons"
import PlayerCard from "../player-card/player-card";

function ConfirmedPlayers(props){

    const {players} = props
    return(
        <div>
            {
                players.map((player, index) => 
                    <PlayerCard player={player} direction={"horizontal"} details={true} key={index} />
                )
            }
        </div>
    );
}

export default ConfirmedPlayers