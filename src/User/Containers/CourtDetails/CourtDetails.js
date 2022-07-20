import '../../Assets/Styles/CourtDetails/CourtDetails.scss'
import ImageSwiper from "../../Components/image-swiper/image-swiper";
import img1 from '../../Assets/Images/ImageSwiper/1.png'
import img2 from '../../Assets/Images/ImageSwiper/2.png'
import img3 from '../../Assets/Images/ImageSwiper/3.png'
import img4 from '../../Assets/Images/ImageSwiper/4.png'
import SlotInfo from "../../Components/slot-info/slot-info";
import SearchSlot from '../../Components/search-slot/search-slot';
import MapLocation from '../../Components/map-location/map-location';

function CourtDetails(){
    var images = [img1,img2,img3,img4]
    return(
        <>
        <ImageSwiper images={images}/>
        <div className="find-slot-main-container">
            <div className="find-slot-container">
                {/*<SlotInfo/> nema podatke pa pravi probleme*/}
                <SearchSlot/>
                <MapLocation/>
            </div>
        </div>
        </>
    )
}

export default CourtDetails