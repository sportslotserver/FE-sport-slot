import React, { useEffect, useState } from "react";
import '../../Assets/Styles/Home/Home.scss'
import HomeSlider from "../../Components/home-slider/home-slider";
import HomeSearch from "../../Components/home-search/home-search";
import HomeFilters from "../../Components/home-filters/home-filters";
import HomeSlots from "../../Components/home-slots/home-slots";
import HomeFeaturedCourts from "../../Components/home-featured-courts/home-featured-courts";
import HomePlayers from "../../Components/home-players/home-players";
import Footer from "../../Components/footer/footer";
import { Modal } from "react-bootstrap";
import Image1 from '../../Assets/Images/PlayerCard/image1.png'
import Api from '../../../api/'
import { SlotActions } from '../../../api/actions'


const Home = () => {
    const [showInvitePlayerModal, setShowInvitePlayerModal] = useState(false)
    const [params, setParams] = useState({})
    const [slots, setSlots] = useState([])


    useEffect(() => {
        const param = localStorage.getItem('slotSearch')
        if (param == "{}") {
            // search({})
        } else {
            let params = JSON.parse(param)
            setParams(params)
            // search(params)
        }
    }, [])

    const search = (param) => {
        Api.slot(SlotActions.FILTERING_SLOTS, param)
            .then(response => {
                setSlots(response.data.body)
            }).catch(err => {
                console.log(err)
            })
        localStorage.setItem("slotSearch", JSON.stringify(param))
    }
    
    return(
        <>
        <HomeSlider/>
        <div className="home-main-container">
            <div className="home-container">
                <HomeSearch setParams={setParams} params={params} search={search} />
                { slots.length > 0 ?
                    <HomeSlots slots={slots} />
                : null }
                <HomeFeaturedCourts />
                <HomePlayers/>
            </div>
        </div>
        </>
    );
}

export default Home;