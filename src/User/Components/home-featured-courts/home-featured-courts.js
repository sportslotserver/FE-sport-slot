import React, {useEffect, useState} from "react";
import '../../Assets/Styles/FeaturedCourts/FeaturedCourts.scss';
import CustomPagination from '../../Components/pagination/pagination';
import CourtCard from "../court-card/court-card";
import NoResult from "../no-results/no-results";

function HomeFeaturedCourts({ featuredCourts }){
    const [activePage, setActivePage]= useState(1)
    const pageRangeDisplayed = 3
    const itemsCountPerPage = 6
    const courts = featuredCourts
    
    return(
        <div className="home-featured-courts-main-container">
            <h1>Featured courts</h1>
            { featuredCourts.length > 0 ?
                <>
                    <div className="home-featured-courts-container" id="featured-courts-container">
                        {featuredCourts.map((court, index)=>(
                            <CourtCard key={index} court={court}/>
                        ))}
                    </div>
                    <div className="home-featured-courts-pages-container">
                        <CustomPagination totalItemsCount={courts.length} pageRangeDisplayed={pageRangeDisplayed} itemsCountPerPage={itemsCountPerPage} activePage={activePage} setActivePage={setActivePage}/>
                    </div>
                </>
            : 
                <NoResult />
            }
            
        </div>
    );
}

export default HomeFeaturedCourts