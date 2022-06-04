import React from "react";
import '../../Assets/Styles/HomeFilters/HomeFilters.scss'
import { Sliders } from "react-bootstrap-icons";

function HomeFilters(){
    return(
        <div className="home-filters-container">
            <div className="home-filters-title">Filters <Sliders/></div>
            <div className="home-filters-items">
                <div className="home-filters-item">
                    <input type="radio" name="filter" className="home-filters-radio"/> Indoor
                </div>
                <div className="home-filters-item">
                    <input type="radio" name="filter" className="home-filters-radio"/> Outdoor
                </div>
                <div className="home-filters-item">
                    <input type="radio" name="filter" className="home-filters-radio"/> Free
                </div>
                <div className="home-filters-item">
                    <input type="radio" name="filter" className="home-filters-radio"/> Paid
                </div>
                <div className="home-filters-item">
                    <input type="radio" name="filter" className="home-filters-radio"/> Join group
                </div>
                <div className="home-filters-item">
                    <input type="radio" name="filter" className="home-filters-radio"/> Available slots
                </div>
            </div>
        </div>
    );
}

export default HomeFilters