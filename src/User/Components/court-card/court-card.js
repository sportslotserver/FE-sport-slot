import React, { useState, useEffect } from "react";
import '../../Assets/Styles/CourtCard/CourtCard.scss'
import SlotImage from '../../Assets/Images/SlotCard/Court_image_2.png'
import { Link } from 'react-router-dom'

const CourtCard = (props) => {

    const { data } = props
    return (
        <div className="court-card-container">
            <img src={SlotImage} className="court-card-image" />
            <div className="court-card-title">Indoor sports court {data}</div>
            <div className="court-card-text">Address street name 236b, New York</div>
            <div className="court-card-footer">
                <div className="court-card-footer-left">
                    <div className="court-card-footer-price">$32</div>
                    <div className="court-card-footer-per">per hour</div>
                </div>
                <div className="court-card-footer-button">
                    <Link className="court-card-button" to={`/court-details`}>More info</Link>
                </div>
            </div>
        </div>
    );
}

export default CourtCard