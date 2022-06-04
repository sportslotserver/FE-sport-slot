import '../../Assets/Styles/Location/Location.scss'
import BG from '../../Assets/Images/Location/BG.png'

function Location(){
    const countries = [
        {
          label: "Serbia",
          value: "serbia",
        },
    ];

    return(
        <>
        <div className="location-main-container">
            <div className="location-header-image">
                <b className="b-1"><i>WELCOME TO SPORTSLOTS</i></b><br/>
                <b className="b-2"><i>PLEASE SELECT YOUR LOCATION</i></b><br/>
            </div>
            <div className="location-container">
                <h1>Country</h1>
                <select className="home-search-item">
                    {countries.map((option,index) => (
                      <>
                      {index === 0 ?
                        <option value={option.value} disabled selected hidden>{option.label}</option>
                        :
                        <option value={option.value}>{option.label}</option>
                      }
                      </>
                    ))}
                </select>
                <h1>City</h1>
                <div className="location-cities-container">
                    <div className="city-card">
                        <img src={BG}/>
                        <br/>
                        <h4>Beograd</h4>
                    </div>
                    <div className="city-card">
                        <img src={BG}/>
                        <br/>
                        <h4>Beograd</h4>
                    </div>
                    <div className="city-card">
                        <img src={BG}/>
                        <br/>
                        <h4>Beograd</h4>
                    </div>
                    <div className="city-card">
                        <img src={BG}/>
                        <br/>
                        <h4>Beograd</h4>
                    </div>
                    <div className="city-card">
                        <img src={BG}/>
                        <br/>
                        <h4>Beograd</h4>
                    </div>
                    <div className="city-card">
                        <img src={BG}/>
                        <br/>
                        <h4>Beograd</h4>
                    </div>
                    <div className="city-card">
                        <img src={BG}/>
                        <br/>
                        <h4>Beograd</h4>
                    </div>
                    <div className="city-card">
                        <img src={BG}/>
                        <br/>
                        <h4>Beograd</h4>
                    </div>
                    <div className="city-card">
                        <img src={BG}/>
                        <br/>
                        <h4>Beograd</h4>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Location