import React, { useState, useEffect } from "react";
import '../../Assets/Styles/CourtCard/CourtCard.scss'
import SlotImage from '../../Assets/Images/SlotCard/Court_image_2.png'
import { Link } from 'react-router-dom'

const CourtCard = ({ court }) => {
    return (
        <div className="court-card-container">
            <img src={SlotImage} className="court-card-image" />
            <div className="court-card-title">{ court?.court_name }</div>
            <div className="court-card-text">{ court?.court_street }, { court?.court_state }, { court?.court_city }</div>
            <div className="court-card-footer">
                <div className="court-card-footer-left">
                    <div className="court-card-footer-price">${ court.court_base_price }</div>
                    <div className="court-card-footer-per">per hour</div>
                </div>
                <div className="court-card-footer-button">
                    <Link className="court-card-button" to={`/court-details/${court?.id}`}>More info</Link>
                </div>
            </div>
        </div>
    );
}

export default CourtCard