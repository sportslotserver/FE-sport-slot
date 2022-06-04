import '../../Assets/Styles/MyGames/MyGamesCard.scss'
import image from '../../Assets/Images/MyGames/my-game-img.png'

function MyGamesCard(props){
    const {type} = props
    return(
        <div className="my-games-card-container grey-border">
            <img src={image} alt="" width={50} height={50}/>
            <div className="my-games-card-info">
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
                <div className="heading-5 text-bold green-text">View slot details</div>
            </div>
        </div>
    );
}

export default MyGamesCard