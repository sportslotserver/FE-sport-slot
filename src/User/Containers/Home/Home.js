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
import { getFeatureCourts } from '../../../api/endpoints/court'
import { filteringSlots } from '../../../api/endpoints/slots'
import { getSlotPlayers } from '../../../api/endpoints/user'


const Home = () => {
    const [showInvitePlayerModal, setShowInvitePlayerModal] = useState(false)
    const [params, setParams] = useState({})
    const [slots, setSlots] = useState([])
    const [featuredCourts, setFeaturedCourts] = useState([])
    const [players, setPlayers] = useState([])


    useEffect(() => {
        const param = sessionStorage.getItem('slotSearch')
        console.log(param)
        if (param == null) {
            search({
                date: undefined,
                time: undefined,
                city: undefined,
                state: undefined,
                sport: undefined,
                bookingType: undefined
            })
            setParams({
                date: undefined,
                time: undefined,
                city: undefined,
                state: undefined,
                sport: undefined,
                bookingType: undefined
            })
            getPlayers({
                city: undefined,
                state: undefined,
                sport: undefined
            })
        } else {
            let params = JSON.parse(param)
            setParams(params)
            search(params)
        }
    }, [])

    const search = (param) => {
        filteringSlots(param)
            .then(response => {
                setSlots(response.data.body)
            }).catch(err => {
                console.log(err)
            })
        getFeaturedCourts({
            state: param.state,
            city: param.city,
            sport: param.sport
        })
        getPlayers({
            city: param.city,
            state: param.state,
            sport: param.sport
        })
        sessionStorage.setItem("slotSearch", JSON.stringify(param))
    }

    const getFeaturedCourts = (params) => {
        getFeatureCourts(params)
            .then(response => {
                setFeaturedCourts(response.data)
            }).catch(err => {
                setFeaturedCourts([])
            })
    }
    
    const getPlayers = (params) => {
        getSlotPlayers(params)
            .then(response => {
                setPlayers(response.data)
            }).catch(err => {
                throw new Error(err)
            })
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
                <HomeFeaturedCourts featuredCourts={featuredCourts} />
                <HomePlayers players={players} />
            </div>
        </div>
        </>
    );
}

export default Home;