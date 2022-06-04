import '../../Assets/Styles/SlotDetails/SlotDetails.scss'
import image from '../../Assets/Images/MyGames/my-game-img.png'
import {CaretDownFill, ThreeDotsVertical} from 'react-bootstrap-icons'

function SlotDetailsHeader(props){
    const {type} = props
    return(
        <div className="slot-details-header-container">
            <img src={image} alt="" width={40} height={40}/>
            <div className="slot-details-header-info">
                <div>
                    {
                        type === "outdoor" &&
                        <>
                        <div className="heading-5 text-bold">Court address outdoor 635, Paris</div>
                        <div className="heading-3 secondary-text-color">Wed, Oct 3 / 08AM - 10AM</div>
                        </>
                    }
                    {
                        type === "confirmed" &&
                        <>
                        <div className="heading-5 text-bold">Super Sport Court 4</div>
                        <div className="heading-3 secondary-text-color">Court address street 342, Brooklyn, NY</div>
                        <div className="heading-3 secondary-text-color">Wed, Oct 3 / 08AM - 10AM</div>
                        <div className="heading-3 text-bold green-text">CONFIRMED</div>
                        </>
                    }
                    {
                        type === "" &&
                        <>
                        <div className="heading-5 text-bold">Super Sport Court 4</div>
                        <div className="heading-3 secondary-text-color">Court address street 342, Brooklyn, NY</div>
                        <div className="heading-3 secondary-text-color">Wed, Oct 3 / 08AM - 10AM</div>
                        <div>
                            <span  className="heading-3 text-bold orange-text">Time remaining: 05:23:55 </span>
                            <span  className="heading-3 secondary-text-color"> 10 players needed</span>
                        </div>
                        </>
                    }
                </div>
                <div className="heading-5 text-bold secondary-text-color" style={{height: 20}}><ThreeDotsVertical/></div>
            </div>
            
        </div>
    );
}

export default SlotDetailsHeader