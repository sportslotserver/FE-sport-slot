import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import '../../Assets/Styles/Account/Account.scss'
import AccountNotifications from '../../Components/account-notifications/account-notifications';
import EditProfile from '../../Components/edit-profile/edit-profile';
import LoginAndSecurity from '../../Components/login-and-security/login-and-security';
import Payments from '../../Components/payments/payments';
import PersonalInfo from '../../Components/personal-info/personal-info';
import Api from '../../../api';
import { PlayerActions } from '../../../api/actions';

function Account(){

    const [selectedTabIndex, setSelectedTabIndex] = useState(1)
    const [ player, setPlayer ] = useState({})
    const { id } = useParams()

    useEffect(() => {
        Api.user(PlayerActions.GET_PLAYER_INFO, id).then(response => {
            setPlayer(response.data.body)
        }).catch(err => {
            console.log('nema podaci za igraca')
        })
    }, [])

    useEffect(() => {
        if (player) {
            console.log('da vidimo podaci za igraca: ', player)
        }
    }, [player])

    return(
        <div className="account-container">
            <h1>Account</h1>
            <div className="account-menu">
                <div className={selectedTabIndex === 1 ? "account-menu-selected-item":"account-menu-item"} onClick={()=>{setSelectedTabIndex(1)}}>
                    <h3>Personal info</h3>
                </div>
                <div className={selectedTabIndex === 2 ? "account-menu-selected-item":"account-menu-item"} onClick={()=>{setSelectedTabIndex(2)}}>
                    <h3>Login & security</h3>
                </div>
                <div className={selectedTabIndex === 3 ? "account-menu-selected-item":"account-menu-item"} onClick={()=>{setSelectedTabIndex(3)}}>
                    <h3>Payments</h3>
                </div>
                <div className={selectedTabIndex === 4 ? "account-menu-selected-item":"account-menu-item"} onClick={()=>{setSelectedTabIndex(4)}}>
                    <h3>Edit profile</h3>
                </div>
                <div className={selectedTabIndex === 5 ? "account-menu-selected-item":"account-menu-item"} onClick={()=>{setSelectedTabIndex(5)}}>
                    <h3>Notifications</h3>
                </div>
            </div>
            <div>
                {selectedTabIndex === 1 && <PersonalInfo player={player} /> }
                {selectedTabIndex === 2 && <LoginAndSecurity/> }
                {selectedTabIndex === 3 && <Payments player={player}/> }
                {selectedTabIndex === 4 && <EditProfile preview={false}/> }
                {selectedTabIndex === 5 && <AccountNotifications/> }
            </div>
        </div>
    )
}

export default Account;