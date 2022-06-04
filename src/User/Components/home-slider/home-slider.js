import SimpleImageSlider from "react-simple-image-slider";
import Slide1 from '../../Assets/Images/HomeSlider/SLIDE_1.png'
import Slide2 from '../../Assets/Images/HomeSlider/SLIDE_2.png'
import Slide3 from '../../Assets/Images/HomeSlider/SLIDE_3.png'

const images = [
  { url: Slide1 },
  { url: Slide2 },
  { url: Slide3 },
];

function HomeSlider(){
    return(
        <div style={{display: "flex"}}>
        <SimpleImageSlider
            width={'100%'}
            height={300}
            images={images}
            showBullets={true}
            showNavs={true}
        />
        </div>
    );
}

export default HomeSlider