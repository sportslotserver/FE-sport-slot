import '../../Assets/Styles/MyGames/MyGames.scss'
import MyGamesCard from '../../Components/my-games-card/my-games-card';

function MyGames(){
    return(
        <div className="my-games-main-container padding-10px">
            <div className="heading-1 text-bold">My Games</div>
            
            <MyGamesCard type={"outdoor"}/>
            <MyGamesCard type={"confirmed"}/>
            <MyGamesCard type={""}/>
        </div>
    );
}

export default MyGames