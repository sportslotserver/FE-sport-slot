import Image1 from '../../Assets/Images/PlayerCard/image1.png'
import '../../Assets/Styles/InvitePlayer/InvitePlayer.scss'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function InvitePlayer() {

    const { player_id } = useParams()

    return (
        <div className="invite-player-container">
            <div className="invite-player-heading text-bold green-text">Invite to slot</div><br />
            <img src={Image1} alt="" width={70} />
            <div className="heading-2 black-text">Ema Petrov</div>
            <div className="invite-player-slots">
                <div className="invite-player-slot">
                    <h4><b>Super Sports Court 4</b></h4>
                    <h4>168A Princes Road, Buckhurst Hill",IG9 5DJ</h4>
                    <h4>Wed, Oct 3 / 08AM - 10AM</h4>
                    <h4 className="green-text">$32 <h5>per person</h5></h4>
                </div>
                <div className="invite-player-slot">
                    <h4><b>Super Sports Court 4</b></h4>
                    <h4>168A Princes Road, Buckhurst Hill",IG9 5DJ</h4>
                    <h4>Wed, Oct 3 / 08AM - 10AM</h4>
                    <h4 className="green-text">$32 <h5>per person</h5></h4>
                </div>
                <div className="invite-player-slot">
                    <h4><b>Super Sports Court 4</b></h4>
                    <h4>168A Princes Road, Buckhurst Hill",IG9 5DJ</h4>
                    <h4>Wed, Oct 3 / 08AM - 10AM</h4>
                    <h4 className="green-text">$32 <h5>per person</h5></h4>
                </div>
            </div>
            <button className="green-button">Send</button>
        </div>
    )
}

export default InvitePlayer;