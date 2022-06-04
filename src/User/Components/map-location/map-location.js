import '../../Assets/Styles/MapLocation/MapLocation.scss'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="map-marker">{text}</div>;

function MapLocation(){
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
      }
      
    return(
        <>
        <h1>Location</h1>
        <div className="map-location-container">
        
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBTgU1Rpxkp7GbjcgAaYAvTHFDEagwN9hA" }}
          defaultCenter={location}
          defaultZoom={11}
        >
            
          <div lat={37.42216} lng={-122.08427} className="map-marker"><span>{location.address}</span></div>
        </GoogleMapReact>
        </div>
        </>
    )
}

export default MapLocation