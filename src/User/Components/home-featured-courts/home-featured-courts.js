import React, {useEffect, useState} from "react";
import '../../Assets/Styles/FeaturedCourts/FeaturedCourts.scss';
import CustomPagination from '../../Components/pagination/pagination';
import SlotCard from "../slot-card/slot-card";

function HomeFeaturedCourts(){
    const [activePage, setActivePage]= useState(1)
    const pageRangeDisplayed = 3
    const [itemsCountPerPage,setItemsCountPerPage] = useState(6)

    const [displayedItems, setDisplayeditems] = useState([])
    
    var slots = []
    for(var i=0;i<46;i++)
        slots.push("Item "+i)

    useEffect(()=>{
        var items = []
        for(var i=(activePage*itemsCountPerPage)-itemsCountPerPage;i<(activePage*itemsCountPerPage);i++)
            if(slots[i])
                items.push(slots[i])
        setDisplayeditems(items)
    },[activePage,itemsCountPerPage])

    /*const handleResize =()=>{
        var slotsContainer = document.getElementById('slots-container')
        if(parseInt(slotsContainer.clientWidth/300)===3)
            setItemsCountPerPage(6)
        else
            setItemsCountPerPage(4)
    }
    
    useEffect(()=>{
        window.addEventListener('resize', handleResize)
        handleResize();
    })*/
    
    return(
        <div className="home-featured-courts-main-container">
            <h1>Featured courts</h1>
            <div className="home-featured-courts-container" id="featured-courts-container">
                {displayedItems.map((item)=>(
                    <SlotCard key={item} slot={item}/>
                ))}
            </div>
            <div className="home-featured-courts-pages-container">
                <CustomPagination totalItemsCount={slots.length} pageRangeDisplayed={pageRangeDisplayed} itemsCountPerPage={8} activePage={activePage} setActivePage={setActivePage}/>
            </div>
        </div>
    );
}

export default HomeFeaturedCourts