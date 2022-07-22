//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from './User/Components/navbar/navbar'
import Login from './User/Containers/Login/Login'
import Register from './User/Containers/Register/Register'
import RegisterConfirmation from './User/Containers/RegisterConfirmation/RegisterConfirmation';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './User/Containers/Home/Home';
import Footer from './User/Components/footer/footer';
import BookingSlot from './User/Containers/BookingSlot/BookingSlot';
import MyGames from './User/Containers/MyGames/MyGames';
import SlotDetails from './User/Containers/SlotDetails/SlotDetails';
import Notifications from './User/Containers/Notifications/Notifications';
import Location from './User/Containers/Location/Location';
import CourtDetails from './User/Containers/CourtDetails/CourtDetails';
import Account from './User/Containers/Account/Account';
import PreviewProfile from './User/Containers/PreviewProfile/PreviewProfile';
import OwnerAdminNavbar from './OwnerAdmin/Components/owner-admin-navbar/owner-admin-navbar';
import OwnerAdminCourts from './OwnerAdmin/Containers/OwnerAdminCourts/OwnerAdminCourts';
import ManageCourt from './OwnerAdmin/Containers/ManageCourt/ManageCourt';
import { useState, useEffect } from 'react'
import InvitePlayer from './User/Containers/InvitePlayer/InvitePlayer';

function App() {

  const [ isLoggedIn, setLoggingStatus ] = useState(false)
  const [ playerData, setPlayerData ] = useState({})

  useEffect(() => {
    if (isLoggedIn) {
      sessionStorage.setItem('player', JSON.stringify(playerData))
    }
  }, [isLoggedIn])

  return (
      <BrowserRouter path="/user">
        <Navbar isLoggedIn={isLoggedIn} playerData={playerData} />
        {/* <OwnerAdminNavbar/> */}
        <Routes>
          <Route path="/" element={<Login setLoggingStatus={setLoggingStatus} setPlayerData={setPlayerData} />}/>
          <Route path="/registration" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/confirmation" element={<RegisterConfirmation/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/booking/:court_id/:id/:player_id/:reservation_id/:type" element={<BookingSlot/>}/>
          <Route path="/my_games" element={<MyGames/>}/>
          <Route path="/details" element={<SlotDetails/>}/>
          <Route path="/notifications" element={<Notifications/>}/>
          <Route path="/court-details/:id" element={<CourtDetails/>}/>
          <Route path="/location" element={<Location/>}/>
          <Route path="/account/:id" element={<Account/>}/>
          <Route path="/selected-profile" element={<PreviewProfile/>}/>
          <Route path="/owner-admin-courts" element={<OwnerAdminCourts/>}/>
          <Route path="/manage-slots" element={<ManageCourt/>}/>
          <Route path="/invite-player/:player_id/:full_name" element={<InvitePlayer/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
