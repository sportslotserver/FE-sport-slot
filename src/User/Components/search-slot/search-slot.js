import '../../Assets/Styles/SearchSlot/SearchSlot.scss'
import { Search } from "react-bootstrap-icons";

function SearchSlot(){
    const _onFocusDate = (e) => {
        e.currentTarget.type = "date";
    }
    const _onBlurDate = (e) =>{
        e.currentTarget.type = "text";
    }
    const _onFocusTime = (e) => {
        e.currentTarget.type = "time";
    }
    const _onBlurTime = (e) =>{
        e.currentTarget.type = "text";
    }
    return(
        <div className="search-slot-container">
            <h1>Find a slot</h1>
            <input type="text" placeholder="Dates" onFocus={(e)=>{_onFocusDate(e)}} onBlur={(e)=>{_onBlurDate(e)}} className="home-search-item"/>
            <input type="text" placeholder="Time" onFocus={(e)=>{_onFocusTime(e)}} onBlur={(e)=>{_onBlurTime(e)}} className="home-search-item"/>
            <button className="home-search-button">
                Search <Search className="home-search-button-icon"/>
            </button>
            <div className="search-slot-card">
                <div>
                    <h4>WED 06 SEP / 10AM to 11AM</h4>
                    <h4 className="green-text">AVAILABLE<span>$32</span><h5> per person</h5></h4>
                </div>
                <button className="green-button">Book slot</button>
            </div>
            <div className="search-slot-card">
                <div>
                    <h4>WED 06 SEP / 10AM to 11AM</h4>
                    <h4><h5><b>10 players needed</b></h5><span>$32</span><h5> per person</h5></h4>
                </div>
                <button className="green-button">Book slot</button>
            </div>
            <div><h5>Load more...</h5></div>
        </div>
    )
}

export default SearchSlot