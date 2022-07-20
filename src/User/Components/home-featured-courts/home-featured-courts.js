import React, {useEffect, useState} from "react";
import '../../Assets/Styles/FeaturedCourts/FeaturedCourts.scss';
import CustomPagination from '../../Components/pagination/pagination';
import CourtCard from "../court-card/court-card";

function HomeFeaturedCourts(){
    const [activePage, setActivePage]= useState(1)
    const pageRangeDisplayed = 3
    const itemsCountPerPage = 6

    const [displayedItems, setDisplayeditems] = useState([])
    
    var courts = []
    for(var i=0;i<46;i++)
        courts.push(i + " ")

    useEffect(()=>{
       var items = []
         for(var i=(activePage*itemsCountPerPage)-itemsCountPerPage;i<(activePage*itemsCountPerPage);i++)
             if(courts[i])
                items.push(courts[i])
        setDisplayeditems(items)
    },[activePage,itemsCountPerPage])
    
    return(
        <div className="home-featured-courts-main-container">
            <h1>Featured courts</h1>
            <div className="home-featured-courts-container" id="featured-courts-container">
                {displayedItems.map((data,index)=>(
                    <CourtCard key={index} data={data}/>
                ))}
            </div>
            <div className="home-featured-courts-pages-container">
                <CustomPagination totalItemsCount={courts.length} pageRangeDisplayed={pageRangeDisplayed} itemsCountPerPage={8} activePage={activePage} setActivePage={setActivePage}/>
            </div>
        </div>
    );
}

export default HomeFeaturedCourts