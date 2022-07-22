import Image1 from '../../Assets/Images/PlayerCard/image1.png'
import '../../Assets/Styles/InvitePlayer/InvitePlayer.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAdminPlayerSlots } from '../../../api/endpoints/slots'

function InvitePlayer() {

    const { player_id, full_name } = useParams()
    const [ slots, setSlots ] = useState([])

    useEffect(() => {
        getAdminPlayerSlots({ player_id })
            .then(response => {
                setSlots(response.data)
            })
            .catch((err) => {
                console.log('Error while finding admin player slots...')
            })
    }, [])

    return (
        <div className="invite-player-container">
            <div className="invite-player-heading text-bold green-text">Invite to slot</div><br />
            <img src={Image1} alt="" width={70} />
            <div className="heading-2 black-text">{ full_name }</div>
            <div className="invite-player-slots">

                { slots.length > 0 ?
                    <>
                        { slots.map((data, index) => {
                            return (
                                <div className="invite-player-slot">
                                    <h4><b>{data?.court?.court_name }</b></h4>
                                    <h4>{ data?.court?.court_street }, { data?.court?.court_city }, { data?.court?.court_state }</h4>
                                    <h4>{ data?.slot?.slot_date } / { data?.slot?.slot_start_time } - { data?.slot?.slot_end_time }</h4>
                                    <h4 className="green-text">${ data?.reservation?.price_per_person } <h5>per person</h5></h4>
                                </div>
                            )
                        }) }
                    </>
                : 
                    <h4>No results</h4>
                }
                
            </div>
            <button className="green-button">Send</button>
        </div>
    )
}

export default InvitePlayer;