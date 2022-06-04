import React from "react";
import '../../Assets/Styles/Footer/Footer.scss'
import Logo from '../../Assets/Images/Header/sport-slot-logo.png'
import { SocialIcon} from 'react-social-icons';

function Footer(){
    return(
        <div className="footer-main-container">
            <div className="footer-top-container">
                <div className="footer-top-left-container">
                    <span className="footer-top-left-link">Community</span>
                    <span className="footer-top-left-link">Privacy</span>
                    <span className="footer-top-left-link">Terms</span>
                    <span className="footer-top-left-link">Careers</span>
                    <span className="footer-top-left-link">Partners</span>
                    <span className="footer-top-left-link">Events</span>
                    <span className="footer-top-left-link">Help</span>
                    <span className="footer-top-left-link">Become a member</span>
                    <span className="footer-top-left-link">Contact us</span>
                </div>
                <div className="footer-top-right-container">
                    <div className="footer-top-right"><span>Subscribe to our newsletter</span></div>
                    <div className="footer-top-right"><input type="email" placeholder="email address"/><button>Subscribe</button></div>
                </div>
            </div>
            <div className="footer-down-container">
                <div className="footer-down-left-container"><img src={Logo} className="footer-logo-img" /> <span>Copyright SportSlot 2020</span></div>
                <div className="footer-down-right-container">
                    <SocialIcon className="social-icons" url="https://instagram.com/" bgColor="black" fgColor="white"/>
                    <SocialIcon className="social-icons" url="https://twitter.com/" bgColor="black" fgColor="white"  />
                    <SocialIcon className="social-icons" url="https://facebook.com/" bgColor="black" fgColor="white"  />
                    <SocialIcon className="social-icons" url="https://linkedin.com/" bgColor="black" fgColor="white"  />
                    <SocialIcon className="social-icons" url="https://youtube.com/" bgColor="black" fgColor="white"  />
                </div>
            </div>

        </div>
    );
}

export default Footer